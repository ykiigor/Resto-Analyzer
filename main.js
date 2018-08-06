///
///
///   Data Analyzer by Afiya
///	BFA
///
///

var LAST_UPDATE = "06.08.2018";

var itemsStats = {};

var SPECS = {};
var CLASS_AVAILABLE = {};

var STATS_BASE = {
	crit: 6,
	mastery: 8,
	haste: 0,
	vers: 0,
};

var STATS = {
	crit: 72,
	mastery: 72 / (STATS_BASE.mastery / 8),
	haste: 68,
	vers: 85,
};

var baseMana = 100000;		//lvl 120
var maxMana = 100000;		//lvl 120
var spellManaCost = {};
var spellCastTime = {};
var spellCastTimeNoCD = {};
var spellCastIDToHealID = {};
var spellScaleInt = {};
var spellScaleMastery = {};
var spellNotScaleHaste = {};
var spellAffectedByHaste = {};	//not tick events, but still haste scaling
var spellScaleVers = {};

function SpellParseInt(spellID,event){ 
	if(uV.SpellParseInt)
		return uV.SpellParseInt(spellID,event);
	else
		return spellScaleInt[spellID]; 
}

function SpellParseMastery(spellID,event){ 
	if(uV.SpellParseMastery)
		return uV.SpellParseMastery(spellID,event);
	else
		return spellScaleMastery[spellID]; 
}

function SpellParseCooldown(spellID,event,cooldown){ 
	if(uV.SpellParseCooldown)
		return uV.SpellParseCooldown(spellID,event,cooldown);
	else
		return true; 
}



var cooldownsTrackingIDs = {};
var cooldownsTrackingIDsbyCast = {};
var ignoredSpellsForCDTracking = {};
var healingFromMana = {};

var statsBuffs = {};
var statsBuffsOther = {};

var actors = [];		// Used for filter events only for char & his summons
var actorsData = [];		// All units data
var fightsData = [];		// All fights data
var healingData = [];		// Spells healing data
var currFightData = [];		// Selected fight info
var pV = {};			// "Garbage" variables, used for parsing
var uV = {};			// User variables, used for class specific parsing
var rV = {};			// Result Variables
var cV = {};			// Char Variables
var healPerStat = {};		// Healing per stat data
var cooldownsTracking = [];	// Cooldowns data
var buffStatus = [];		// Buffs
var buffOtherStatus = [];	// Buffs

var parsePlugins, pluginsList;
var OTHER = [], CLASS = [], ITEMS = [], TRAITS = [], TALENTS = [], POTIONS = []; //parse plugins data
var GEAR = [], GEAR_BASE = [];	//prediction tables

function CreateHealPerStatTable(){
	return {
		int: {amount:0,total:0,avg:0,avgCount:0,all:0},
		crit: {amount:0,total:0,avg:0,avgCount:0,all:0},
		haste: {amount:0,total:0,avg:0,avgCount:0,all:0},
		mastery: {amount:0,total:0,avg:0,avgCount:0,all:0,b100:0,b80:0,b70:0,b60:0,b50:0,b40:0,b30:0,t:{}},
		vers: {amount:0,total:0,avg:0,avgCount:0,all:0},	
	}
}

function PrepAllData(){
	actors = [];
	healingData = [];
	pV = {};
	rV = {
		talents: [],
		talents_prediction: [],
		traits: [],
		resurgence: [],
		potions: [],
		buffs: {
			vers: [],
			crit: [],
			haste: [],
			haste_mod: [],
			mastery: [],
			int: [],	
		},
		healFromMana: 0,
		manaUsage: 0,
		manaUsageBySpell: [],
		manaGain: 0,
		dr: [],
	};
	cV = {
		traitInfo: [],
		traitBySpell: [],
		gearInfo: [],
		talentInfo: [],
		spellInfo: [],
	};
	uV = {};
	healPerStat = CreateHealPerStatTable();
	healPerStat.graph = [];
	cooldownsTracking = [];
	buffStatus = [];
	buffOtherStatus = [];
	
	statsBuffs = {
		vers: {
			268854: 50,	//weapon ench
			268856: 600,	//weapon ench
		},
		crit: {
			268905: 50,	//weapon ench
			268904: 600,	//weapon ench
		},
		haste: {
			268887: 50,	//weapon ench
			268893: 600,	//weapon ench
		},
		haste_mod: {
			80353: 1.3,	//BL
			2825: 1.3,	//BL
			32182: 1.3,	//BL
			160452: 1.3,	//BL
			90355: 1.3,	//BL
			146555: 1.25,	//BL
			230935: 1.25,	//BL
			26297: 1.15,	//Troll racial
		},
		mastery: {
			268899: 50,	//weapon ench
			268898: 600,	//weapon ench
		},
		int: {
	
		},
	};
	
	statsBuffsOther = {
		vers: {},
		crit: {},
		haste: {},
		haste_mod: {},
		mastery: {},
		int: {},
	};
	
	parsePlugins = {
		heal: [],
		applybuff: [],		//target only player
		applybuffstack: [],	//target only player
		removebuff: [],		//target only player
		removebuffstack: [],	//target only player
		applybuffany: [],	//any target
		applybuffstackany: [],	//any target
		removebuffany: [],	//any target
		removebuffstackany: [],	//any target
		cast: [],
		begincast: [],
		damage: [],		//source only player
		damageany: [],
		energize: [],
		dispel: [],
		gear: [],
		combantantInfo: [],
		allCombantantInfo: [],
		any: [],
		special: [],
	};

	pluginsList = [];
}

function PrepPluginsData(){
	OTHER = pluginsList[0]; 
	CLASS = pluginsList[1]; 
	ITEMS = pluginsList[2]; 
	TRAITS = pluginsList[3];  
	TALENTS = pluginsList[4]; 
	POTIONS = pluginsList[5]; 

	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) {
			if(pluginData[i].parse){
				for (var j = 0, j_len = pluginData[i].parse.length; j < j_len; j=j+2) {
					if(!parsePlugins[ pluginData[i].parse[j] ]) parsePlugins[ pluginData[i].parse[j] ] = [];
					parsePlugins[ pluginData[i].parse[j] ].push(pluginData[i].parse[j+1]);
				}
			}
		}
	}

	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) if(pluginData[i].init) pluginData[i].init();
	}
}

var vantusRunes = {
	269409: 'Blood of G\'hunn',
	269408: 'Fetid Devourer',
	269413: 'G\'hunn',
	269405: 'MOTHER',
	269412: 'Mythrax',
	269276: 'Taloc',
	269407: 'Zek\'vohj',
	269411: 'Zul',
};


var foodBuffs = {	//downscale stats if food buff went down; only top food, lazy for anotherone
	185736: ["vers",11],
	225603: ["haste",19],
	225604: ["mastery",19],
	225602: ["crit",19],
	225605: ["vers",19],
	//201640: ["int",500],	//autoupdated stat
};

var diffIdToName = {
	3: 'Normal',
	4: 'Heroic',
	5: 'Mythic',
	10: '5ppl keystone',
};

var classes = {
	'Priest': true,
	'Warlock': true,
	'Druid': true,
	'Hunter': true,
	'DemonHunter': true,
	'Shaman': true,
	'Monk': true,
	'Mage': true,
	'DeathKnight': true,
	'Paladin': true,
	'Warrior': true,
	'Rogue': true,
	'NPC': true,
};

var qualityColors = {
	10: "ff2f2f",
	2: "1eff00",
	3: "0070dd",
	4: "a335ee",
	5: "ff8000",
	6: "e5cc80",
};

var itemsBonusToStats = {
	605: 'mastery',
	603: 'crit',
	607: 'vers',
	604: 'haste',
};

var jewelSlots = {
	10: true,
	11: true,
	1: true,
};

var gemToStat = {
	130222: ["mastery",9],
	130220: ["haste",9],
	130219: ["crit",9],
	130221: ["vers",9],
	130248: ["int",9],
	151584: ["mastery",11],
	151583: ["haste",11],
	151580: ["crit",11],
	151585: ["vers",11],
	153710: ["crit",30],
	153711: ["haste",30],
	153712: ["vers",30],
	153713: ["mastery",30],
	153709: ["int",40],
	154128: ["vers",40],
	154129: ["mastery",40],
	154126: ["crit",40],
	154127: ["haste",40],
};
var enchToStat = {
	5436: ["int",9],
	5469: ["int",9],
	5890: ["mastery",27],
	5429: ["mastery",9],
	5427: ["crit",9],
	5428: ["haste",9],
	5430: ["vers",9],
	
	5938: ["crit",27],
	5939: ["haste",27],
	5940: ["mastery",27],
	5941: ["vers",27],

	5942: ["crit",37],
	5943: ["haste",37],
	5944: ["mastery",37],
	5945: ["vers",37],	
};

var WCL_API_KEY = "c715943c916421282ae9451912918422";
var STATS_GRAPH_STEP = 15;

var specsNames = {
	65: "Holy Paladin",
	66: "Protection Paladin",
	70: "Retribution Paladin",
	102: "Balance Druid",
	103: "Feral Druid",
	104: "Guardian Druid",
	105: "Restoration Druid",
	256: "Discipline Priest",
	257: "Holy Priest",
	258: "Shadow Priest",
	262: "Elemental Shaman",
	263: "Enhancement Shaman",
	264: "Restoration Shaman",
	268: "BW Monk",
	269: "WW Monk",
	270: "MW Monk",
};

var reportFightCode;

function GetTraitRank(traitID)
{
	if(cV.traitInfo[traitID])
		return cV.traitInfo[traitID].rank;
	else
		return false;
}

function GetTraitBySpell(spellID)
{
	if(cV.traitBySpell[spellID])
		return cV.traitBySpell[spellID];
	else
		return false;
}

var ScaleStatData = {
161:[0.994435486,0.996754034],162:[0.992604783,0.99956382],163:[0.994487319,1.008480671],164:[0.99265652,1.011323514],165:[0.994539154,1.020345271],166:[0.99270826,1.02322156],167:[0.994590992,1.032349456],168:[0.992760002,1.035259583],169:[0.994642833,1.044494867],170:[0.992811747,1.047439232],171:[0.994694676,1.056783168],172:[0.992863495,1.059762172],173:[0.994746522,1.069216038],174:[0.992915246,1.07223009],175:[0.994798371,1.081795178],176:[0.992966999,1.08484469],177:[0.994850222,1.09452231],178:[0.993018755,1.097607699],179:[0.994902077,1.107399175],180:[0.993070514,1.110520863],181:[0.994953934,1.120427534],182:[0.993122276,1.123585948],183:[0.995005793,1.133609169],184:[0.99317404,1.136804741],185:[0.995057655,1.146945883],186:[0.993225807,1.150179051],187:[0.99510952,1.160439502],188:[0.993277576,1.163710707],189:[0.995161388,1.174091871],190:[0.993329348,1.177401561],191:[0.995213259,1.187904857],192:[0.993381123,1.191253486],193:[0.995265132,1.201880351],194:[0.993432901,1.205268376],195:[0.991604043,1.208665951],196:[0.986086249,1.204742662],197:[0.980599158,1.200832108],198:[0.9751426,1.196934247],199:[0.969716406,1.193049039],200:[0.964320406,1.189176441],201:[0.958954431,1.185316415],202:[0.953618316,1.181468917],203:[0.948311894,1.177633909],204:[0.943034999,1.173811349],205:[0.937787468,1.170001197],206:[0.932569136,1.166203412],207:[0.927379842,1.162417955],208:[0.922219425,1.158644785],209:[0.917087722,1.154883863],210:[0.911984574,1.151135149],211:[0.906909824,1.147398603],212:[0.901863311,1.143674186],213:[0.89684488,1.139961858],214:[0.891854375,1.13626158],215:[0.886891639,1.132573313],216:[0.881956518,1.128897018],217:[0.877048859,1.125232656],218:[0.872168508,1.121580189],219:[0.867315314,1.117939577],220:[0.862489126,1.114310783],221:[0.857689793,1.110693767],222:[0.852917167,1.107088493],223:[0.848171097,1.10349492],224:[0.843451437,1.099913013],225:[0.83875804,1.096342732],226:[0.83409076,1.092784041],227:[0.82944945,1.0892369],228:[0.824833967,1.085701274],229:[0.820244167,1.082177124],230:[0.815679907,1.078664413],231:[0.811141045,1.075163105],232:[0.806627439,1.071673162],233:[0.80213895,1.068194547],234:[0.797675436,1.064727223],235:[0.79323676,1.061271154],236:[0.788822783,1.057826304],237:[0.784433368,1.054392635],238:[0.780068378,1.050970112],239:[0.775727676,1.047558698],240:[0.771411129,1.044158358],241:[0.767118601,1.040769055],242:[0.762849959,1.037390753],243:[0.75860507,1.034023418],244:[0.754383801,1.030667013],245:[0.750186022,1.027321502],246:[0.746011602,1.023986851],247:[0.74186041,1.020663024],248:[0.737732317,1.017349986],249:[0.733627196,1.014047702],250:[0.729544917,1.010756137],251:[0.725485354,1.007475257],252:[0.721448381,1.004205026],253:[0.717433871,1.00094541],254:[0.7134417,0.997696375],255:[0.709471744,0.994457886],256:[0.705523879,0.991229909],257:[0.701597981,0.98801241],258:[0.69769393,0.984805355],259:[0.693811602,0.98160871],260:[0.689950878,0.978422441],261:[0.686111637,0.975246515],262:[0.682293759,0.972080897],263:[0.678497126,0.968925555],264:[0.674721619,0.965780456],265:[0.670967121,0.962645565],266:[0.674618275,0.964080124],267:[0.678289297,0.96551682],268:[0.681980296,0.966955658],269:[0.685691379,0.96839664],270:[0.689422657,0.969839769],271:[0.693174239,0.971285049],272:[0.696946235,0.972732483],273:[0.700738758,0.974182074],274:[0.704551918,0.975633825],275:[0.708385827,0.977087739],
276:[0.7122406,0.97854382],277:[0.716116349,0.980002071],278:[0.720013188,0.981462495],279:[0.723931232,0.982925096],280:[0.727870597,0.984389876],281:[0.731831398,0.985856838],282:[0.735813753,0.987325987],283:[0.739817778,0.988797326],284:[0.743843591,0.990270857],285:[0.747891312,0.991746584],286:[0.751961058,0.99322451],287:[0.756052951,0.994704638],288:[0.76016711,0.996186972],289:[0.764303657,0.997671515],290:[0.768462714,0.999158271],291:[0.772644402,1.000647242],292:[0.776848846,1.002138432],293:[0.781076169,1.003631844],294:[0.785326495,1.005127482],295:[0.78959995,1.006625349],296:[0.793896659,1.008125447],297:[0.79821675,1.009627782],298:[0.802560349,1.011132355],299:[0.806927584,1.01263917],300:[0.811318584,1.01414823],301:[0.808817976,1.01102247],302:[0.806293968,1.00786746],303:[0.803747209,1.004684011],304:[0.801178339,1.001472923],305:[0.798587986,0.998234982],306:[0.79597677,0.994970963],307:[0.793345301,0.991681626],308:[0.790694179,0.988367724],309:[0.788023995,0.985029994],310:[0.785335331,0.981669164],311:[0.782628758,0.978285948],312:[0.779904841,0.974881051],313:[0.777164134,0.971455167],314:[0.774407182,0.968008978],315:[0.771634523,0.964543154],316:[0.768846685,0.961058357],317:[0.766044188,0.957555236],318:[0.763227544,0.954034431],319:[0.760397257,0.950496571],320:[0.757553821,0.946942276],321:[0.754697723,0.943372154],322:[0.751829445,0.939786806],323:[0.748949456,0.936186819],324:[0.74605822,0.932572776],325:[0.743156195,0.928945244],326:[0.740243829,0.925304787],327:[0.737321564,0.921651955],328:[0.734389832,0.917987291],329:[0.731449063,0.914311328],330:[0.728499674,0.910624593],331:[0.725542079,0.906927599],332:[0.722576685,0.903220856],333:[0.719603889,0.899504861],334:[0.716624085,0.895780106],335:[0.713637657,0.892047071],336:[0.710644986,0.888306232],337:[0.707646443,0.884558054],338:[0.704642396,0.880802995],339:[0.701633203,0.877041504],340:[0.69861922,0.873274025],341:[0.695600793,0.869500992],342:[0.692578265,0.865722831],343:[0.68955197,0.861939963],344:[0.68652224,0.8581528],345:[0.683489397,0.854361746],346:[0.68045376,0.8505672],347:[0.677415642,0.846769552],348:[0.67437535,0.842969187],349:[0.671333185,0.839166482],350:[0.668289445,0.835361806],351:[0.665244419,0.831555523],352:[0.662198393,0.827747991],353:[0.659151648,0.82393956],354:[0.656104459,0.820130574],355:[0.653057097,0.816321371],356:[0.650009826,0.812512283],357:[0.646962908,0.808703635],358:[0.643916597,0.804895746],359:[0.640871144,0.80108893],360:[0.637826796,0.797283496],361:[0.634783795,0.793479743],362:[0.631742376,0.78967797],363:[0.628702772,0.785878465],364:[0.625665211,0.782081514],365:[0.622629917,0.778287397],366:[0.61959711,0.774496387],367:[0.616567003,0.770708753],368:[0.613539807,0.766924759],369:[0.61051573,0.763144663],370:[0.607494974,0.759368718],371:[0.604477737,0.755597171],372:[0.601464214,0.751830268],373:[0.598454595,0.748068244],374:[0.595449068,0.744311335],375:[0.592447815,0.740559769],376:[0.589451015,0.736813769],377:[0.586458845,0.733073556],378:[0.583471475,0.729339343],379:[0.580489074,0.725611343],380:[0.577511808,0.721889759],381:[0.574539836,0.718174795],382:[0.571573318,0.714466647],383:[0.568612407,0.710765509],384:[0.565657255,0.707071569],385:[0.56270801,0.703385012],386:[0.559764816,0.69970602],387:[0.556827814,0.696034768],388:[0.553897144,0.69237143],389:[0.550972939,0.688716174],390:[0.548055333,0.685069166],
391:[0.545144454,0.681430568],392:[0.542240429,0.677800536],393:[0.53934338,0.674179225],394:[0.536453429,0.670566786],395:[0.533570692,0.666963365],396:[0.530695284,0.663369105],397:[0.527827318,0.659784148],398:[0.524966903,0.656208629],399:[0.522114145,0.652642681],400:[0.519269148,0.649086436],401:[0.516432015,0.645540018],402:[0.513602842,0.642003553],403:[0.510781728,0.63847716],404:[0.507968765,0.634960957],405:[0.505164046,0.631455058],406:[0.502367659,0.627959574],407:[0.499579691,0.624474614],408:[0.496800226,0.621000283],409:[0.494029347,0.617536684],410:[0.491267133,0.614083916],411:[0.488513662,0.610642077],412:[0.485769009,0.607211261],413:[0.483033248,0.603791559],414:[0.480306449,0.600383061],415:[0.477588682,0.596985852],416:[0.474880013,0.593600017],417:[0.472180509,0.590225636],418:[0.469490231,0.586862789],419:[0.466809241,0.583511551],420:[0.464137598,0.580171997],421:[0.461475359,0.576844198],422:[0.458822579,0.573528224],423:[0.456179312,0.57022414],424:[0.45354561,0.566932013],425:[0.450921523,0.563651904],426:[0.448307099,0.560383873],427:[0.445702384,0.557127979],428:[0.443107422,0.553884278],429:[0.440522259,0.550652823],430:[0.437946933,0.547433667],431:[0.435381487,0.544226858],432:[0.432825957,0.541032446],433:[0.430280381,0.537850476],434:[0.427744793,0.534680991],435:[0.425219228,0.531524035],436:[0.422703717,0.528379646],437:[0.420198292,0.525247864],438:[0.417702981,0.522128726],439:[0.415217812,0.519022265],440:[0.412742813,0.515928516],441:[0.410278008,0.512847509],442:[0.40782342,0.509779275],443:[0.405379073,0.506723841],444:[0.402944988,0.503681234],445:[0.400521184,0.500651479],446:[0.39810768,0.497634599],447:[0.395704493,0.494630616],448:[0.39331164,0.49163955],449:[0.390929136,0.488661421],450:[0.388556995,0.485696244],451:[0.386195229,0.482744036],452:[0.38384385,0.479804812],453:[0.381502868,0.476878585],454:[0.379172293,0.473965367],455:[0.376852134,0.471065167],456:[0.374542396,0.468177995],457:[0.372243087,0.465303859],458:[0.369954212,0.462442765],459:[0.367675775,0.459594719],460:[0.36540778,0.456759725],461:[0.363150228,0.453937785],462:[0.360903121,0.451128901],463:[0.358666459,0.448333074],464:[0.356440243,0.445550303],465:[0.35422447,0.442780587],466:[0.352019138,0.440023922],467:[0.349824245,0.437280306],468:[0.347639786,0.434549732],469:[0.345465756,0.431832195],470:[0.343302151,0.429127688],471:[0.341148963,0.426436204],472:[0.339006186,0.423757732],473:[0.336873811,0.421092264],474:[0.33475183,0.418439788],475:[0.332640234,0.415800293],476:[0.330539013,0.413173766],477:[0.328448155,0.410560193],478:[0.326367649,0.407959561],479:[0.324297483,0.405371854],480:[0.322237645,0.402797056],481:[0.32018812,0.400235149],482:[0.318148894,0.397686118],483:[0.316119953,0.395149942],484:[0.314101282,0.392626603],485:[0.312092864,0.39011608],486:[0.310094683,0.387618354],487:[0.308106722,0.385133402],488:[0.306128963,0.382661203],489:[0.304161387,0.380201734],490:[0.302203977,0.377754971],491:[0.300256712,0.37532089],492:[0.298319573,0.372899466],493:[0.296392539,0.370490674],494:[0.294475591,0.368094488],495:[0.292568705,0.365710882],496:[0.290671862,0.363339827],497:[0.288785037,0.360981297],498:[0.28690821,0.358635262],499:[0.285041356,0.356301694],500:[0.283184451,0.353980564],501:[0.281608668,0.352831555],502:[0.280041652,0.351686276],503:[0.278483357,0.350544714],504:[0.276933732,0.349406858],
505:[0.275392731,0.348272695],506:[0.273860304,0.347142213],507:[0.272336404,0.346015401],508:[0.270820985,0.344892247],509:[0.269313998,0.343772738],510:[0.267815396,0.342656864],511:[0.266325134,0.341544611],512:[0.264843164,0.340435969],513:[0.26336944,0.339330925],514:[0.261903917,0.338229468],515:[0.260446549,0.337131587],516:[0.258997291,0.336037269],517:[0.257556097,0.334946503],518:[0.256122922,0.333859278],519:[0.254697723,0.332775582],520:[0.253280454,0.331695404],521:[0.251871071,0.330618731],522:[0.250469531,0.329545554],523:[0.24907579,0.32847586],524:[0.247689804,0.327409639],525:[0.246311531,0.326346878],526:[0.244940927,0.325287567],527:[0.24357795,0.324231694],528:[0.242222557,0.323179249],529:[0.240874706,0.32213022],
};

function ScaleStat(stat,fromIlvl,toIlvl,isLinear)
{
	//	linear == 1 for int, linear == nil for secondaries, linear == 2 for jewel slots
	var scalingFrom = (fromIlvl <= 160 || isLinear == 1) ? 1 : (isLinear == 2 ? ScaleStatData[fromIlvl][1] : ScaleStatData[fromIlvl][0]);
	var scalingTo = (toIlvl <= 160 || isLinear == 1) ? 1 : (isLinear == 2 ? ScaleStatData[toIlvl][1] : ScaleStatData[toIlvl][0]);
	
	stat = stat / scalingFrom;
	var newValue = stat * Math.pow(1.00936,toIlvl - fromIlvl);
	newValue *= scalingTo;
	
	return newValue;
}

function MsToFormattedTime(ms,calcFromPull)
{
	if(calcFromPull) ms -= currFightData.start_time;
	var min = Math.floor(ms / 60000);
	var sec = Math.floor( (ms - min * 60000) / 1000 );
	
	return (min < 10 ? "0" : "")+min+":"+(sec < 10 ? "0" : "")+sec;
	
}

function NumberToFormattedNumber(num,decimals,decimals_m,decimals_k)
{
	if(num > 1000000000){
		decimals = decimals || 2;
		return (num / 1000000000).toFixed(decimals)+"M";
	} else if (num > 1000000){
		decimals = decimals || 0;
		if(decimals_m) decimals = decimals_m;
		return (num / 1000000).toFixed(decimals)+"m";
	} else if (num > 1000){
		decimals = decimals || 0;
		if(decimals_k) decimals = decimals_k;
		return (num / 1000).toFixed(decimals)+"k";
	} else {
		return Math.floor(num);
	}	
}


function error_msg(msg) {
	$("#main").html("<div class=\"panel\"><div class=\"col-full\"><div class=\"box\">"+msg+"</div></div></div>");

}

function ScaleStatRanks(spellID,ranks,type)
{
	var result = 0;
	for (var k = 0, k_len = ranks.length; k < k_len; k++) result += ScaleTrait(spellID,ranks[k],type);
	return result;
}

function CreateDataByTraitBySpellID(event,spellID,auraSpellID,stat,type){
	var scaledAmount = 0;
	for (var k = 0, k_len = event.artifact.length; k < k_len; k++){
		if(event.artifact[k].spellID == spellID){
			scaledAmount += ScaleTrait(spellID,event.artifact[k].rank,type);
		}
	}
	if(scaledAmount > 0){
		if(!statsBuffsOther[stat][event.sourceID]) statsBuffsOther[stat][event.sourceID]={};  
		statsBuffsOther[stat][event.sourceID][auraSpellID] = scaledAmount;	
	}
}

var ITEM_SPELLS_NUMBERS = {
	//azerite powers; tier 1: Priest
	273307: [{stat:501,lvl:340,isLinear:true},{stat:1877,lvl:340,isLinear:true}],	//Weal and Woe
	272775: [{stat:10012,lvl:340,isLinear:true}],	//Moment of Repose
	278643: [{stat:720,lvl:340,isLinear:true}],	//Enduring
	275541: [{stat:56,lvl:340,isLinear:true}],	//Depth of the Shadows
	278629: [{stat:166,lvl:340,isLinear:true}],	//Contemptuous Homily
	277680: [{stat:375,lvl:340,isLinear:true}],	//Gift of Forgiveness
	267892: [{stat:207,lvl:340,isLinear:false}],	//Synergistic Growth
	274366: [{stat:10597,lvl:340,isLinear:true}],	//Sanctum
	280018: [{stat:5005,lvl:340,isLinear:true}],	//Twist Magic
	278659: [{stat:2353,lvl:340,isLinear:true}],	//Death Throes		id 404
	
	//azerite powers; tier 1: Shaman
	272989: [{stat:1001,lvl:340,isLinear:true}],	//Soothing Waters
	278715: [{stat:2503,lvl:340,isLinear:true}],	//Spouting Spirits
	273597: [{stat:289,lvl:340,isLinear:true}],	//Ebb and Flow
	278713: [{stat:5100,lvl:340,isLinear:true}],	//Surging Tides
	277658: [{stat:813,lvl:340,isLinear:true}],	//Overflowing Shores
	275488: [{stat:1326,lvl:340,isLinear:true}],	//Swelling Stream
	277666: [{stat:67,lvl:340,isLinear:false}],	//Ancestral Resonance
	280021: [{stat:1570,lvl:340,isLinear:true}],	//Pack Spirit
	274412: [{stat:5416,lvl:340,isLinear:true}],	//Serene Spirit
	
	//azerite powers; tier 1
	281841: [{stat:287,lvl:340,isLinear:false},{stat:144,lvl:340,isLinear:false}],	//Tradewinds
	273682: [{stat:296,lvl:340,isLinear:false}],	//Meticulous Scheming
	280410: [{stat:300,lvl:340,isLinear:false},{stat:70,lvl:340,isLinear:false}],	//Incite the Pack
	281514: [{stat:228,lvl:340,isLinear:true}],	//Unstable Catalyst
	267886: [{stat:44,lvl:340,isLinear:false}],	//Ephemeral Recovery
	280407: [{stat:324,lvl:340,isLinear:false}],	//Blood Rite
	273823: [{stat:345,lvl:340,isLinear:false}],	//Blightborne Infusion
	280555: [{stat:153/20,lvl:360,isLinear:false}],	//Archive of the Titans		???
	280559: [{stat:2160,lvl:370,isLinear:false}],	//Laser Matrix (unknown, 6targets)
	273829: [{stat:206,lvl:340,isLinear:true},{stat:411,lvl:340,isLinear:true}],	//Secrets of the Deep
	280429: [{stat:431,lvl:340,isLinear:false}],	//Swirling Sands
	280581: [{stat:543,lvl:370,isLinear:true}],	//Collective Will
	280577: [{stat:357,lvl:340,isLinear:false},{stat:224,lvl:340,isLinear:false}],	//Glory in Battle	
	280178: [{stat:411,lvl:340,isLinear:true},{stat:394,lvl:340,isLinear:false}],	//Relational Normalization Gizmo
	280579: [{stat:247,lvl:340,isLinear:false},{stat:3288,lvl:340,isLinear:true}],	//Retaliatory Fury	
	
	//azerite powers; tier 2
	279926: [{stat:13,lvl:340,isLinear:true}],	//Earthlink
	267889: [{stat:4521,lvl:340,isLinear:true}],	//Blessed Portents
	264108: [{stat:64,lvl:340,isLinear:false},{stat:32,lvl:340,isLinear:false}],	//Blood Siphon 
	267883: [{stat:3060,lvl:340,isLinear:true}],	//Savior
	266180: [{stat:20,lvl:340,isLinear:false}],	//Overwhelming Power
	267880: [{stat:544,lvl:340,isLinear:false}],	//Woundbinder
	279899: [{stat:56,lvl:340,isLinear:false}],	//Unstable Flames
	267884: [{stat:1530,lvl:340,isLinear:true}],	//Bracing Chill
	263984: [{stat:192,lvl:340,isLinear:false}],	//Elemental Whirl
	267879: [{stat:64,lvl:340,isLinear:false},{stat:32,lvl:340,isLinear:false}],	//On My Way
	267882: [{stat:62,lvl:340,isLinear:true}],	//Concentrated Mending
	
	//azerite powers; tier 3
	263962: [{stat:8410,lvl:340,isLinear:true}],	//Resounding Protection
	268437: [{stat:2944,lvl:340,isLinear:true}],	//Impassive Visage
	268596: [{stat:111,lvl:340,isLinear:false}],	//Gemhide
	268599: [{stat:4183,lvl:340,isLinear:true},{stat:76,lvl:340,isLinear:false}],	//Vampiric Speed	
	268600: [{stat:785,lvl:340,isLinear:true}],	//
	268435: [{stat:10008,lvl:340,isLinear:true}],	//
	268595: [{stat:11214,lvl:340,isLinear:true}],	//
	280181: [{stat:47791,lvl:340,isLinear:true}],	//Personal Absorb-o-Tron
	
	//trinkets
	271071: [{itemID:159620,stat:570,lvl:340,isLinear:false}],	//Conch of Dark Whispers
	281724: [{itemID:158371,stat:83.6,lvl:300,isLinear:false}],	//Seabreeze
	271115: [{itemID:159615,stat:228,lvl:340,isLinear:false}],	//Ignition Mage's Fuse
	268998: [{itemID:159630,stat:12,lvl:340,isLinear:true}],	//Balefire Branch
	266018: [{itemID:158320,stat:161,lvl:340,isLinear:true}],	//Revitalizing Voodoo Totem
	271054: [{itemID:158368,stat:953,lvl:340,isLinear:false}],	//Fangs of Intertwined Essence
	278359: [{itemID:161461,stat:427,lvl:370,isLinear:false}],	//Doom's Hatred
	278383: [{itemID:161377,stat:1227 / 5,lvl:355,isLinear:false}],	//Azurethos' Singed Plumage
	278862: [{itemID:161380,stat:1331,lvl:355,isLinear:true}],	//Drust-Runed Icicle
	278227: [{itemID:161411,stat:1104,lvl:355,isLinear:false}],	//T'zane's Barkspines
	278156: [{itemID:160656,stat:976,lvl:355,isLinear:true}],	//Twitching Tentacle of Xalzaix
	278081: [{itemID:160649,stat:3135,lvl:355,isLinear:true}],	//Inoculating Extract
	277185: [{itemID:161902,stat:1445,lvl:370,isLinear:true}],	//Dread Gladiator's Badge
};

function ScaleTrait(spellID,toIlvl,type) {
	var trait = ITEM_SPELLS_NUMBERS[spellID];
	if(trait){
		trait = trait[type ? type - 1 : 0];
		return ScaleStat(trait.stat,trait.lvl,toIlvl,trait.isLinear ? 1 : null)
	}else
		return 0;
}

function ScaleItemSpell(itemID,toIlvl,type) {
	var spell;
	Object.keys(ITEM_SPELLS_NUMBERS).forEach(function (spellID) {
		if(ITEM_SPELLS_NUMBERS[spellID][0].itemID == itemID){
			spell = ITEM_SPELLS_NUMBERS[spellID][type ? type - 1 : 0];
		}
	});
	if(spell){
		return ScaleStat(spell.stat,spell.lvl,toIlvl,spell.isLinear ? 1 : null);
	}else
		return 0;
}


function GetTargetMissingHealth(event){
	if( (event.resourceActor == 2 || event.targetID == currFightData.actor) && event.hitPoints && event.maxHitPoints ){
		return event.maxHitPoints - event.hitPoints;
	}
	return 999999999;	//999mil, cant be reached
}

function CreateSpellsTextFromList(list){
	var text = "";
	var spellsKeys = Object.keys(list);
	spellsKeys.sort(function(a,b){ return list[a] > list[b] ? -1 : 1 });
	for (var k = 0, k_len = spellsKeys.length; k < k_len; k++) {
		var spellID = spellsKeys[k];
		var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
		var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
		text += (k > 0 ? "<br>" : "")+"<img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\" width=\"20\" height=\"20\"> "+name+" - "+NumberToFormattedNumber(list[spellID],0,2);	
	}
	return text;
}


function GetVersFactor(){ return healPerStat.vers.avgStat / STATS.vers / 100 + 1 + STATS_BASE.vers / 100; }
function GetCritFactor(){ return cV.combantantInfo.critSpell / STATS.crit / 100 + 1 + STATS_BASE.crit / 100; }
function GetFightLenFactor(cd){ return (currFightData.end_time - currFightData.start_time) / cd / 1000; }
function GetHasteFactor(){ return healPerStat.haste.avgStat / STATS.haste / 100 + 1 + STATS_BASE.haste / 100; }
function GetModFactor(){ return 1.4; }
function GetDpsFactor(){ return 1.05; }
function GetMasteryFactor(){ return cV.combantantInfo.mastery / STATS.mastery / 100 + 1 + STATS_BASE.mastery / 100; }

function GetSocketFactor(){ 
	var haste_amount = healPerStat.haste.amount * 40;
	var crit_amount = healPerStat.crit.amount * 40;
	var vers_amount = healPerStat.vers.amount * 40;
	var mastery_amount = healPerStat.mastery.amount * 40;
	return Math.max(haste_amount,crit_amount,vers_amount,mastery_amount);
}

var gear_charts_colors = {
	1: ["Mage","World drop"],
	2: ["Rogue","Dungeons"],
	3: ["Hunter","Tomb of Sargeras",1],
	4: ["Shaman","Antorus",1],
	5: ["Druid","Legendary",1],
	6: ["DemonHunter","Uldir"],
	10: ["DeathKnight","Equipped items"],
	9: ["Priest","",1],
};

GEAR_BASE = [
	{slot:-3,spell:281841,type:2,tier:1,name:"Tradewinds",icon:"ability_skyreach_wind",special:function(ilvl){ return ScaleTrait(281841,ilvl) * healPerStat.mastery.amount * 15 / 60; }},
	{slot:-3,spell:273682,type:2,tier:1,name:"Meticulous Scheming",icon:"ability_rogue_masterofsubtlety",special:function(ilvl){ return ScaleTrait(273682,ilvl) * healPerStat.haste.amount * 20 / 60; }},
	{slot:-3,spell:280410,type:2,tier:1,name:"Incite the Pack",icon:"ability_hunter_pet_raptor",special:function(ilvl){ return ScaleTrait(280410,ilvl) * healPerStat.mastery.amount * 20 / 60; }},
	{slot:-3,spell:281514,type:2,tier:1,name:"Unstable Catalyst",icon:"inv__azerite-debuff",special:function(ilvl){ return ScaleTrait(281514,ilvl) * 1.05 * healPerStat.int.amount * 8 / 60 * 4; }},
	{slot:-3,spell:280407,type:2,tier:1,name:"Blood Rite",icon:"inv_misc_volatilelife",special:function(ilvl){ return ScaleTrait(280407,ilvl) * healPerStat.haste.amount * 15 / 60; }},
	{slot:-3,spell:273823,type:2,tier:1,name:"Blightborne Infusion",icon:"ability_argus_soulbombdebuffsmall",special:function(ilvl){ return ScaleTrait(273823,ilvl) * healPerStat.crit.amount * 14 / 60; }},
	{slot:-3,spell:280555,type:6,tier:1,name:"Archive of the Titans",icon:"inv_trinket_80_titan01b",special:function(ilvl){ return ScaleTrait(280555,ilvl) * 20 * 1.05 * healPerStat.int.amount * 0.85; }},
	{slot:-3,spell:280559,type:6,tier:1,name:"Laser Matrix (unknown, 6targets)",icon:"spell_nature_groundingtotem",special:function(ilvl){ return ScaleTrait(280559,ilvl) * GetFightLenFactor(60) * GetModFactor() * GetVersFactor() * GetCritFactor() * 6; }},
	{slot:-3,spell:273829,type:2,tier:1,name:"Secrets of the Deep",icon:"inv_misc_enchantedpearlf",special:function(ilvl){ return ScaleTrait(273829,ilvl,1) * 1.05 * healPerStat.int.amount * 18 / 60 * 2 * 0.75; }},
	{slot:-3,spell:280429,type:2,tier:1,name:"Swirling Sands",icon:"spell_sandstorm",special:function(ilvl){ return ScaleTrait(280429,ilvl) * healPerStat.crit.amount * 12 / 60; }},
	{slot:-3,spell:280581,type:1,tier:1,name:"Collective Will",icon:"spell_misc_hellifrepvpthrallmarfavor",special:function(ilvl){ return ScaleTrait(280581,ilvl) * 1.05 * healPerStat.int.amount * 6 / 60; }},
	{slot:-3,spell:280577,type:1,tier:1,name:"Glory in Battle",icon:"inv_60pvp_neck1a",special:function(ilvl){ return ScaleTrait(280577,ilvl,1) * healPerStat.crit.amount * 10 / 60 * 3 + ScaleTrait(280577,ilvl,2) * healPerStat.haste.amount * 10 / 60 * 3; }},
	{slot:-3,spell:280178,type:1,tier:1,name:"Relational Normalization Gizmo",icon:"inv_misc_enggizmos_15",special:function(ilvl){ return ScaleTrait(280178,ilvl,1) * 1.05 * healPerStat.int.amount * 10 / 60 * 0.75 + ScaleTrait(280178,ilvl,2) * healPerStat.haste.amount * 10 / 60 * 0.75; },min:340,max:340},
	{slot:-3,spell:280579,type:1,tier:1,name:"Retaliatory Fury",icon:"achievement_boss_twinorcbrutes",special:function(ilvl){ return ScaleTrait(280579,ilvl,1) * healPerStat.mastery.amount * 10 / 60 * 3 + ScaleTrait(280579,ilvl,2) * GetFightLenFactor(20) * GetVersFactor() * GetCritFactor() * 0.7; }},

	{slot:-3,spell:267886,type:3,tier:2,name:"Ephemeral Recovery",icon:"inv_gizmo_manasyphon",special:function(ilvl){ return ScaleTrait(267886,ilvl) * 2 * GetFightLenFactor(8) / rV.manaUsage * rV.healFromMana; }},
	{slot:-3,spell:279926,type:3,tier:2,name:"Earthlink",icon:"inv_smallazeritefragment",special:function(ilvl){ return ScaleTrait(279926,ilvl) * 3 * 1.05 * healPerStat.int.amount; }},
	{slot:-3,spell:267889,type:3,tier:2,name:"Blessed Portents",icon:"spell_holy_fanaticism",special:function(ilvl){ return ScaleTrait(267889,ilvl) * GetFightLenFactor(60 / 5) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:264108,type:3,tier:2,name:"Blood Siphon (only mastery)",icon:"ability_deathknight_deathsiphon2",special:function(ilvl){ return ScaleTrait(264108,ilvl) * healPerStat.mastery.amount; }},
	{slot:-3,spell:267883,type:3,tier:2,name:"Savior (20% chance)",icon:"achievement_guildperk_everyonesahero",special:function(ilvl){ return ScaleTrait(267883,ilvl) * 2 * (pV.azerite35hpPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor() * 0.2; }},
	{slot:-3,spell:266180,type:3,tier:2,name:"Overwhelming Power",icon:"ability_vehicle_electrocharge",special:function(ilvl){ return ScaleTrait(266180,ilvl) * 25 * 0.5 * healPerStat.haste.amount * 25 / 60 * 0.9; }},
	{slot:-3,spell:267880,type:3,tier:2,name:"Woundbinder",icon:"inv_misc_emberweavebandage",special:function(ilvl){ return ScaleTrait(267880,ilvl) * 0.5 * healPerStat.haste.amount * 6 / 60 * 2; }},
	{slot:-3,spell:279899,type:3,tier:2,name:"Unstable Flames (100% possible uptime)",icon:"inv_ember",special:function(ilvl){ return ScaleTrait(279899,ilvl) * 1.5 * healPerStat.crit.amount * 5 / 60 * 10; }},
	{slot:-3,spell:267884,type:3,tier:2,name:"Bracing Chill",icon:"achievement_zone_stormpeaks_01",special:function(ilvl){ return ScaleTrait(267884,ilvl) * 6 * GetModFactor() * GetVersFactor() * GetCritFactor() * GetFightLenFactor(60); }},
	{slot:-3,spell:263984,type:3,tier:2,name:"Elemental Whirl",icon:"ability_skyreach_four_wind",special:function(ilvl){ return ScaleTrait(263984,ilvl) * (healPerStat.haste.amount + healPerStat.mastery.amount + healPerStat.crit.amount + healPerStat.vers.amount) * 10 / 60 * 2 / 4; }},
	{slot:-3,spell:267879,type:3,tier:2,name:"On My Way",icon:"inv_boots_cloth_08",special:function(ilvl){ return ScaleTrait(267879,ilvl) * healPerStat.vers.amount; }},
	{slot:-3,spell:267882,type:3,tier:2,name:"Concentrated Mending",icon:"inv_offhand_1h_pvpdraenors1_d_02",special:function(ilvl){ return ScaleTrait(267882,ilvl) * 6 * 4 * 3 * GetModFactor() * GetVersFactor() * GetCritFactor() * GetFightLenFactor(60); }},

	{slot:-3,spell:263962,type:3,tier:3,name:"Resounding Protection",icon:"ability_vehicle_shellshieldgenerator_green",special:function(ilvl){ return ScaleTrait(263962,ilvl) * GetFightLenFactor(60 / 2) * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:268437,type:3,tier:3,name:"Impassive Visage",icon:"inv_pet_inquisitoreye",special:function(ilvl){ return ScaleTrait(268437,ilvl) * (pV.azeriteImpassiveVisagePrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:280181,type:1,tier:3,name:"Personal Absorb-o-Tron",icon:"inv_robotpet",special:function(ilvl){ return ScaleTrait(280181,ilvl) * GetFightLenFactor(40) * GetVersFactor() * GetCritFactor() * 0.9; },min:340,max:340},

	{slot:14,item:158320,ilvl:340,type:2,name:"Revitalizing Voodoo Totem",int:205,icon:"ability_shaman_repulsiontotem",special:function(ilvl){ return ScaleItemSpell(158320,ilvl) * 91 * GetFightLenFactor(90) * GetVersFactor() * GetCritFactor(); },wilvl:300},
	{slot:14,item:159620,ilvl:340,type:2,name:"Conch of Dark Whispers",int:205,icon:"inv_misc_food_legion_seashellc1",special:function(ilvl){ return ScaleItemSpell(159620,ilvl) * healPerStat.crit.amount * 15 / 60 * 1; },wilvl:300},
	{slot:14,item:159615,ilvl:340,type:2,name:"Ignition Mage's Fuse",int:205,icon:"inv_misc_rope_01",special:function(ilvl){ return ScaleItemSpell(159615,ilvl) * 4 * healPerStat.haste.amount * 20 / 120 * 1; },wilvl:300},
	{slot:14,item:159630,ilvl:340,type:2,name:"Balefire Branch",mastery:143,icon:"inv_staff_26",special:function(ilvl){ return ScaleItemSpell(159630,ilvl) * 100 * 0.5 * 1.05 * healPerStat.int.amount * 20 / 90; },wilvl:300},
	{slot:14,item:158368,ilvl:340,type:2,name:"Fangs of Intertwined Essence",int:205,icon:"inv_misc_toothb_06",special:function(ilvl){ return ScaleItemSpell(158368,ilvl) * 6 * GetFightLenFactor(120) / rV.manaUsage * rV.healFromMana; },wilvl:300},
	{slot:14,item:161461,ilvl:370,type:1,name:"Doom's Hatred",int:271,icon:"ability_hunter_harass",special:function(ilvl){ return ScaleItemSpell(161461,ilvl) * 4 * healPerStat.vers.amount * 10 / 60 * 2.5; },wilvl:350},
	{slot:14,item:161377,ilvl:355,type:1,name:"Azurethos' Singed Plumage",int:236,icon:"inv_icon_feather08a",special:function(ilvl){ return ScaleItemSpell(161377,ilvl) * 5 * 0.5 * healPerStat.haste.amount * 15 / 88; },wilvl:350},
	{slot:14,item:161380,ilvl:355,type:1,name:"Drust-Runed Icicle",mastery:154,icon:"spell_ice_rune",special:function(ilvl){ return ScaleItemSpell(161380,ilvl) * 1.05 * healPerStat.int.amount * 12 / 60 * 2; },wilvl:350},
	{slot:14,item:161411,ilvl:355,type:1,name:"T'zane's Barkspines",int:236,icon:"inv_misc_spineleaf-_01",special:function(ilvl){ return ScaleItemSpell(161411,ilvl) * healPerStat.crit.amount * 10 / 90; },wilvl:350},
	{slot:14,item:160656,ilvl:355,type:6,name:"Twitching Tentacle of Xalzaix",crit:154,icon:"achievement_boss_yoggsaron_01",special:function(ilvl){ return ScaleItemSpell(160656,ilvl) * 1.05 * 6 / 5 * healPerStat.int.amount * 12 / 60; },wilvl:350},
	{slot:14,item:160649,ilvl:355,type:6,name:"Inoculating Extract",int:236,icon:"inv_wand_29",special:function(ilvl){ return ScaleItemSpell(160649,ilvl) * 5 * GetFightLenFactor(90) * GetVersFactor() * GetCritFactor(); },wilvl:350},
	{slot:14,item:161902,ilvl:370,type:1,name:"Dread Gladiator's Badge",vers:164,icon:"spell_holy_championsbond",special:function(ilvl){ return ScaleItemSpell(161902,ilvl) * 1.05 * healPerStat.int.amount * 15 / 120; },wilvl:280},
	
];


function GetCurrentHaste(){
	var hasteNow = cV.haste;
	Object.keys(statsBuffs.haste).forEach(function (buffSpellID) {
		if(buffStatus[buffSpellID]) {
			if(typeof(buffStatus[buffSpellID]) == "number")
				hasteNow += statsBuffs.haste[buffSpellID] * buffStatus[buffSpellID];
			else
				hasteNow += statsBuffs.haste[buffSpellID];
		}
	});
	Object.keys(statsBuffsOther.haste).forEach(function (sourceID) {
		Object.keys(statsBuffsOther.haste[sourceID]).forEach(function (buffSpellID) {
			if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) hasteNow += statsBuffsOther.haste[sourceID][buffSpellID];
		});
	});
	
	var hasteMod = (hasteNow / STATS.haste / 100) + 1;
	Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
		if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
	});
	
	hasteNow = (hasteMod - 1) * 100 * STATS.haste;
	
	return [hasteNow, hasteMod];
}	

function AddStatAmount(stat,amount,amountWithOh,statNow,totalHeal,spellID,timestamp,event){
	Object.keys(statsBuffs[stat]).forEach(function (buffSpellID) {
		if(buffStatus[buffSpellID]){
			if(!rV.buffs[stat][buffSpellID]) rV.buffs[stat][buffSpellID] = 0;
			rV.buffs[stat][buffSpellID] += statsBuffs[stat][buffSpellID] * (stat == "int" ? 1.05 : 1) / statNow * amount * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1);
		}
	});
	Object.keys(statsBuffsOther[stat]).forEach(function (sourceID) {
		Object.keys(statsBuffsOther[stat][sourceID]).forEach(function (buffSpellID) {
			if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]){
				if(!rV.buffs[stat][buffSpellID]) rV.buffs[stat][buffSpellID] = 0;
				rV.buffs[stat][buffSpellID] += statsBuffsOther[stat][sourceID][buffSpellID] * (stat == "int" ? 1.05 : 1) / statNow * amount * (typeof(buffOtherStatus[sourceID][buffSpellID]) == "number" ? buffOtherStatus[sourceID][buffSpellID] : 1);
			}
		});
	});	
	
	healPerStat[stat].amount += amount / statNow;
	healPerStat[stat].total += amount;
	var healWOstat = stat == "int" ? amount : (totalHeal - amount);
	healPerStat[stat].avg += statNow * healWOstat;
	healPerStat[stat].avgCount += healWOstat;
	healPerStat[stat].all += totalHeal;
	if(!healPerStat[stat].spells) healPerStat[stat].spells = {};
	healPerStat[stat].spells[spellID] = (healPerStat[stat].spells[spellID] || 0) + amount / statNow;
	
	var timeGraph = Math.floor((timestamp - currFightData.start_time) / 1000 / STATS_GRAPH_STEP);
	if(!healPerStat.graph[timeGraph]) healPerStat.graph[timeGraph] = CreateHealPerStatTable();

	healPerStat.graph[timeGraph][stat].amount += amount / statNow;
	healPerStat.graph[timeGraph][stat].total += amount;
	healPerStat.graph[timeGraph][stat].avg += statNow * healWOstat;
	healPerStat.graph[timeGraph][stat].avgCount += healWOstat;
	healPerStat.graph[timeGraph][stat].all += totalHeal;
	
	if(uV.AddStatAmount) uV.AddStatAmount(stat,amount,amountWithOh,statNow,totalHeal,spellID,timestamp,event);
}


function ParseLog(fight_code,actor_id,start_time,end_time)
{
	$.getJSON( "https://www.warcraftlogs.com:443/v1/report/events/"+fight_code+"?start="+start_time+"&end="+end_time+"&actorid="+actor_id+"&api_key="+WCL_API_KEY ).done( function( data ) {
		if(data.status == 400){
			error_msg(data.error);
			throw new Error("Error: Parsing Error");
		}
		actors[actor_id] = true
		
		//try {

		for (var i = 0, len = data.events.length; i < len; i++) {
			var event = data.events[i];

			var resourceActorNow = event.resourceActor == 1 ? event.sourceID : event.targetID;
			
			if(resourceActorNow == actor_id && event.spellPower){
				cV.intellect = event.spellPower;
				cV.intellect_min = Math.min(cV.intellect_min, cV.intellect);
			}
			
			if((event.type == "heal" || event.type == "absorbed") && actors[event.sourceID]){
				var spellID = event.ability.guid;
				if(!healingData[spellID]){
					healingData[spellID] = [0,0];
				}
				var amount = event.amount;
				var overheal = event.overheal || 0;
 				if(event.absorbed) amount += event.absorbed;
 				if(event.absorb) amount += event.absorb;
				healingData[spellID][0] += amount;
				if(event.overheal) healingData[spellID][1] += event.overheal;
				
				if(healingFromMana[spellID]){
					rV.healFromMana += amount * healingFromMana[spellID];
				}
				
				if(SpellParseInt(spellID,event)){
					AddStatAmount('int',amount,amount+overheal,cV.intellect,amount,spellID,event.timestamp,event);
				}
				
				if(event.hitType == 2){
					pV.critNow = cV.critSpell;
					pV.critAmount = amount / 2;
					pV.critAmountOh = (amount + overheal) / 2;
					
					Object.keys(statsBuffs.crit).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) pV.critNow += statsBuffs.crit[buffSpellID];
					});
					
					Object.keys(statsBuffsOther.crit).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.crit[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) pV.critNow += statsBuffsOther.crit[sourceID][buffSpellID];
						});
					});
					
					if(uV.CritParse) uV.CritParse(event,spellID,amount,overheal);					
					
					AddStatAmount('crit',pV.critAmount,pV.critAmountOh,pV.critNow,amount,spellID,event.timestamp,event);
				}
				
				if(SpellParseMastery(spellID,event)){
					pV.masteryNow = cV.mastery;

					Object.keys(statsBuffs.mastery).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								pV.masteryNow += statsBuffs.mastery[buffSpellID] * buffStatus[buffSpellID];
							else
								pV.masteryNow += statsBuffs.mastery[buffSpellID];
						}
					});
					Object.keys(statsBuffsOther.mastery).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.mastery[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) pV.masteryNow += statsBuffsOther.mastery[sourceID][buffSpellID];
						});
					});
					
					pV.currHealFromMastery = amount * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) )) );
					pV.currHealFromMasteryOh = (amount + overheal) * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) )) );

					if(uV.MasteryParse) uV.MasteryParse(event,spellID,amount,overheal);
				
					AddStatAmount('mastery',pV.currHealFromMastery,pV.currHealFromMasteryOh,pV.masteryNow,amount,spellID,event.timestamp,event);
				}			

				if(spellScaleVers[spellID]){
					pV.versNow = cV.versatility;
					Object.keys(statsBuffs.vers).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) pV.versNow += statsBuffs.vers[buffSpellID];
					});
					Object.keys(statsBuffsOther.vers).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.vers[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) pV.versNow += statsBuffsOther.vers[sourceID][buffSpellID];
						});
					});
					
					pV.currHealFromVers = amount * ( 1 - (1 / ((pV.versNow / STATS.vers) / 100 + 1)) );
					pV.currHealFromVersOh = (amount + overheal) * ( 1 - (1 / ((pV.versNow / STATS.vers) / 100 + 1)) );
					
					AddStatAmount('vers',pV.currHealFromVers,pV.currHealFromVersOh,pV.versNow,amount,spellID,event.timestamp,event);
				}
				
				if(!spellNotScaleHaste[spellID] && (event.tick || spellAffectedByHaste[spellID])){
					var hasteCalc = GetCurrentHaste();
					pV.hasteNow = hasteCalc[0];
					var hasteMod = hasteCalc[1];
										
					pV.currHealFromHaste = (1 - (1 / hasteMod)) * amount;
					var currHealFromHasteOh = (1 - (1 / hasteMod)) * (amount + overheal);
										
					AddStatAmount('haste',pV.currHealFromHaste,currHealFromHasteOh,pV.hasteNow,amount,spellID,event.timestamp,event);

					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]){
							if(!rV.buffs.haste_mod[buffSpellID]) rV.buffs.haste_mod[buffSpellID] = 0;
							rV.buffs.haste_mod[buffSpellID] += ((statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste) / pV.hasteNow * pV.currHealFromHaste;
						}
					});
				}
				
				for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
					if(cooldownsTracking[j].opened && SpellParseCooldown(spellID,event,cooldownsTracking[j])){
						cooldownsTracking[j].healing += amount;

						var currTime = event["timestamp"] - cooldownsTracking[j].start;
						var pos = -1;
						for (var k = 0, k_len = cooldownsTracking[j].heal.length; k < k_len; k++) {
							if(currTime == cooldownsTracking[j].heal[k].time && spellID == cooldownsTracking[j].heal[k].id){
								pos = k;
								break;
							}else if(currTime > cooldownsTracking[j].heal[k].time && spellID == cooldownsTracking[j].heal[k].id && ((currTime - cooldownsTracking[j].heal[k].time) <= 200)){
								pos = k;
								break;
							}
						}
						
						if(pos == -1){
							cooldownsTracking[j].heal.push({
								time: currTime,
								id: spellID,
								amount: 0,
								over: 0,
								count: 0,
							});
							pos = cooldownsTracking[j].heal.length - 1;
						}
						
						cooldownsTracking[j].heal[pos].amount += event["amount"];
						if(event["overheal"]) cooldownsTracking[j].heal[pos].over += event["overheal"];
						cooldownsTracking[j].heal[pos].count ++;
						
						if(uV.SpellParseCooldownAdd) uV.SpellParseCooldownAdd(spellID,event,cooldownsTracking[j]);
					}
				}
				
				for (var j = 0, j_len = parsePlugins.heal.length; j < j_len; j++) {
					parsePlugins.heal[j](event,spellID,amount,overheal);
				}			
			} else if(event.type == "summon" && actors[event.sourceID]){
				actors[event.targetID] = true;
			} else if((event.type == "applybuff" || event.type == "applydebuff") && actors[event.targetID]){
				var spellID = event.ability.guid;
				
				if(currFightData.actor == event.targetID && (statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID])) {		//stats buffs
					buffStatus[spellID] = true;
				}
				if(	!actors[event.sourceID] && currFightData.actor == event.targetID && (
					(statsBuffsOther['vers'][event.sourceID] && statsBuffsOther['vers'][event.sourceID][spellID]) || 
					(statsBuffsOther['crit'][event.sourceID] && statsBuffsOther['crit'][event.sourceID][spellID]) || 
					(statsBuffsOther['haste'][event.sourceID] && statsBuffsOther['haste'][event.sourceID][spellID]) || 
					(statsBuffsOther['haste_mod'][event.sourceID] && statsBuffsOther['haste_mod'][event.sourceID][spellID]) || 
					(statsBuffsOther['mastery'][event.sourceID] && statsBuffsOther['mastery'][event.sourceID][spellID]) || 
					(statsBuffsOther['int'][event.sourceID] && statsBuffsOther['int'][event.sourceID][spellID])
				)){
					if(!buffOtherStatus[event.sourceID]) buffOtherStatus[event.sourceID] = {};
					buffOtherStatus[event.sourceID][spellID] = true;
				}
				if(spellID == 29166){
					pV.innervate = true;
				}

				if(cooldownsTrackingIDs[spellID]) {
					cooldownsTracking.push({
						opened: true,
						spellID: spellID,
						start: event["timestamp"],
						spells: [],
						mana: 0,
						heal: [],
						healing: 0,
					});
				}

				for (var j = 0, j_len = parsePlugins.applybuff.length; j < j_len; j++) {
					parsePlugins.applybuff[j](event,spellID);
				}				
				for (var j = 0, j_len = parsePlugins.applybuffany.length; j < j_len; j++) {
					parsePlugins.applybuffany[j](event,spellID);
				}				
			} else if((event.type == "applybuffstack" || event.type == "applydebuffstack") && actors[event.targetID]){
				var spellID = event.ability.guid;
				
				if(currFightData.actor == event.targetID && (statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID])) {		//stats buffs
					buffStatus[spellID] = event.stack;
				}				

				for (var j = 0, j_len = parsePlugins.applybuffstack.length; j < j_len; j++) {
					parsePlugins.applybuffstack[j](event,spellID);
				}
				for (var j = 0, j_len = parsePlugins.applybuffstackany.length; j < j_len; j++) {
					parsePlugins.applybuffstackany[j](event,spellID);
				}				
			} else if((event.type == "removebuff" || event.type == "removedebuff") && actors[event.targetID]){
				var spellID = event.ability.guid;
				
				if(currFightData.actor == event.targetID && (statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID])) {		//stats buffs
					buffStatus[spellID] = false;
				}
				if(	!actors[event.sourceID] && currFightData.actor == event.targetID &&  (
					(statsBuffsOther['vers'][event.sourceID] && statsBuffsOther['vers'][event.sourceID][spellID]) || 
					(statsBuffsOther['crit'][event.sourceID] && statsBuffsOther['crit'][event.sourceID][spellID]) || 
					(statsBuffsOther['haste'][event.sourceID] && statsBuffsOther['haste'][event.sourceID][spellID]) || 
					(statsBuffsOther['haste_mod'][event.sourceID] && statsBuffsOther['haste_mod'][event.sourceID][spellID]) || 
					(statsBuffsOther['mastery'][event.sourceID] && statsBuffsOther['mastery'][event.sourceID][spellID]) || 
					(statsBuffsOther['int'][event.sourceID] && statsBuffsOther['int'][event.sourceID][spellID])
				)){
					if(!buffOtherStatus[event.sourceID]) buffOtherStatus[event.sourceID] = {};
					buffOtherStatus[event.sourceID][spellID] = false;
				}
				if(spellID == 29166){
					pV.innervate = false;
				}

				if(cooldownsTrackingIDs[spellID]) {
					for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
						if(cooldownsTracking[j].opened && cooldownsTracking[j].spellID == spellID){
							cooldownsTracking[j].ended = event["timestamp"];
							cooldownsTracking[j].opened = false;
						}
					}
				}
				
				if(foodBuffs[spellID]){
					statsBuffs[ foodBuffs[spellID][0] ][spellID] = foodBuffs[spellID][1] * (-1);
					buffStatus[spellID] = true;
				}

				for (var j = 0, j_len = parsePlugins.removebuff.length; j < j_len; j++) {
					parsePlugins.removebuff[j](event,spellID);
				}
				for (var j = 0, j_len = parsePlugins.removebuffany.length; j < j_len; j++) {
					parsePlugins.removebuffany[j](event,spellID);
				}
			} else if((event.type == "removebuffstack" || event.type == "removedebuffstack") && actors[event.targetID]){
				var spellID = event.ability.guid;
				
				if(currFightData.actor == event.targetID && (statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID])) {		//stats buffs
					buffStatus[spellID] = event.stack;
				}				
				
				for (var j = 0, j_len = parsePlugins.removebuffstack.length; j < j_len; j++) {
					parsePlugins.removebuffstack[j](event,spellID);
				}
				for (var j = 0, j_len = parsePlugins.removebuffstackany.length; j < j_len; j++) {
					parsePlugins.removebuffstackany[j](event,spellID);
				}
			} else if(event.type == "applybuff" || event.type == "applydebuff"){	//any target, but not player
				var spellID = event.ability.guid;
				
				if(actors[event.sourceID] && cooldownsTrackingIDs[spellID]) {
					cooldownsTracking.push({
						opened: true,
						spellID: spellID,
						start: event["timestamp"],
						spells: [],
						mana: 0,
						heal: [],
						healing: 0,
					});
				}

				for (var j = 0, j_len = parsePlugins.applybuffany.length; j < j_len; j++) {
					parsePlugins.applybuffany[j](event,spellID);
				}
			} else if(event.type == "applybuffstack" || event.type == "applydebuffstack"){	//any target, but not player
				var spellID = event.ability.guid;
				
				for (var j = 0, j_len = parsePlugins.applybuffstackany.length; j < j_len; j++) {
					parsePlugins.applybuffstackany[j](event,spellID);
				}								
			} else if(event.type == "removebuff" || event.type == "removedebuff"){	//any target, but not player
				var spellID = event.ability.guid;
				
				if(actors[event.sourceID] && cooldownsTrackingIDs[spellID]) {
					for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
						if(cooldownsTracking[j].opened && cooldownsTracking[j].spellID == spellID){
							cooldownsTracking[j].ended = event["timestamp"];
							cooldownsTracking[j].opened = false;
						}
					}
				}

				for (var j = 0, j_len = parsePlugins.removebuffany.length; j < j_len; j++) {
					parsePlugins.removebuffany[j](event,spellID);
				}								
			} else if(event.type == "removebuffstack" || event.type == "removedebuffstack"){	//any target, but not player	
				var spellID = event.ability.guid;
						
				for (var j = 0, j_len = parsePlugins.removebuffstackany.length; j < j_len; j++) {
					parsePlugins.removebuffstackany[j](event,spellID);
				}								
			} else if(event.type == "begincast" && actors[event.sourceID]){
				var spellID = event.ability.guid;
				
				for (var j = 0, j_len = parsePlugins.begincast.length; j < j_len; j++) {
					parsePlugins.begincast[j](event,spellID);
				}									
			} else if(event.type == "cast" && actors[event.sourceID]){
				var spellID = event.ability.guid;

				if(cooldownsTrackingIDsbyCast[spellID]) {
					cooldownsTracking.push({
						opened: true,
						spellID: spellID,
						start: event["timestamp"],
						end_limit: event["timestamp"] + cooldownsTrackingIDsbyCast[spellID],
						spells: [],
						mana: 0,
						heal: [],
						healing: 0,
					});
				}
				
				if(spellManaCost[spellID] && !pV.innervate){
					rV.manaUsage += spellManaCost[spellID];
					
					rV.manaUsageBySpell[spellID] = (rV.manaUsageBySpell[spellID] || 0) + spellManaCost[spellID];
					pV.manaUsageLastSpell = spellID;
	
					for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
						if(cooldownsTracking[j].opened){
							cooldownsTracking[j].mana += spellManaCost[spellID];
						}
					}
				}
				
				pV.castNum[spellID] = (pV.castNum[spellID] || 0) + 1;
				
				if(spellCastTime[spellID]){
					var hasteNow = cV.haste;
					Object.keys(statsBuffs.haste).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								hasteNow += statsBuffs.haste[buffSpellID] * buffStatus[buffSpellID];
							else
								hasteNow += statsBuffs.haste[buffSpellID];
						}
					});
					Object.keys(statsBuffsOther.haste).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.haste[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) hasteNow += statsBuffsOther.haste[sourceID][buffSpellID];
						});
					});
					var hasteMod = (hasteNow / STATS.haste / 100) + 1;
					var hasteFromNumeric = hasteNow;
					var hasteFromNumericMod = hasteMod;
					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
					});
					
					if(uV.SpellParseCastHasteMod) hasteMod = uV.SpellParseCastHasteMod(hasteMod,spellID);
					
					hasteNow = (hasteMod - 1) * 100 * STATS.haste;
					
					var castTime = Math.min(spellCastTime[spellID]*1000,event.timestamp - pV.prevCastTime);
					
					pV.totalCastTime += castTime;
					
					var savedTime = Math.max(0,spellCastTime[spellID]*1000 - (event.timestamp - pV.prevCastTime));
					
					if(savedTime > 0) {
						pV.savedTime += savedTime / hasteNow;
						pV.savedTimeTotal += savedTime;	
						
						pV.savedTimeAvg += hasteNow;
						pV.savedTimeAvgCount ++;	
									
						pV.savedTimeSpells[spellID] = (pV.savedTimeSpells[spellID] || 0) + savedTime / hasteNow;
						
						Object.keys(statsBuffs.haste).forEach(function (buffSpellID) {
							if(buffStatus[buffSpellID]){
								if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
								pV.hasteCast[buffSpellID] += hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * STATS.haste / hasteNow * savedTime * (statsBuffs.haste[buffSpellID] * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1) / hasteFromNumeric);
							}
						});
						Object.keys(statsBuffsOther.haste).forEach(function (sourceID) {
							Object.keys(statsBuffsOther.haste[sourceID]).forEach(function (buffSpellID) {
								if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]){
									if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
									pV.hasteCast[buffSpellID] += hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * STATS.haste / hasteNow * savedTime * (statsBuffsOther.haste[sourceID][buffSpellID] * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1) / hasteFromNumeric);
								}
							});
						});
						pV.hasteCast[-1] = (pV.hasteCast[-1] || 0) + hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * STATS.haste / hasteNow * savedTime * (cV.haste / hasteFromNumeric);
						Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
							if(buffStatus[buffSpellID]){
								if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
								pV.hasteCast[buffSpellID] += hasteMod / statsBuffs.haste_mod[buffSpellID] * (statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste / hasteNow * savedTime;
							}
						});
						
						if(uV.SpellParseCastHasteAdd) uV.SpellParseCastHasteAdd(spellID,hasteMod,hasteNow,savedTime);
					}
					
					if(spellCastTimeNoCD[spellID]) {
						pV.savedTimeNoCD[spellID] = (pV.savedTimeNoCD[spellID] || 0) + castTime;
						pV.savedTimeNoCDTotal += castTime;
					}
					
					pV.prevCastTime = event.timestamp;
				}
					

				for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
					if(cooldownsTracking[j].opened && !ignoredSpellsForCDTracking[spellID]){
						cooldownsTracking[j].spells.push({
							spell: spellID,
							time: event["timestamp"] - cooldownsTracking[j].start,
						});
					}
				}
				
				for (var j = 0, j_len = parsePlugins.cast.length; j < j_len; j++) {
					parsePlugins.cast[j](event,spellID);
				}			
			} else if(event.type == "damage" && actors[event.sourceID]){
				var spellID = event.ability.guid;
				
				for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
					if(cooldownsTracking[j].opened){
						var currTime = event["timestamp"] - cooldownsTracking[j].start;
						var pos = -1;
						for (var k = 0, k_len = cooldownsTracking[j].heal.length; k < k_len; k++) {
							if(currTime == cooldownsTracking[j].heal[k].time && spellID == cooldownsTracking[j].heal[k].id){
								pos = k;
								break;
							}else if(currTime > cooldownsTracking[j].heal[k].time && spellID == cooldownsTracking[j].heal[k].id && ((currTime - cooldownsTracking[j].heal[k].time) <= 200)){
								pos = k;
								break;
							}
						}
						
						if(pos == -1){
							cooldownsTracking[j].heal.push({
								time: currTime,
								id: spellID,
								amount: 0,
								over: 0,
								count: 0,
								type: 2,
							});
							pos = cooldownsTracking[j].heal.length - 1;
						}

						cooldownsTracking[j].heal[pos].amount += event["amount"];
						cooldownsTracking[j].heal[pos].count ++;
					}
				}

				for (var j = 0, j_len = parsePlugins.damage.length; j < j_len; j++) {
					parsePlugins.damage[j](event,spellID);
				}
				for (var j = 0, j_len = parsePlugins.damageany.length; j < j_len; j++) {
					parsePlugins.damageany[j](event,spellID);
				}
			} else if(event.type == "damage"){
				var spellID = event.ability.guid;
				
				for (var j = 0, j_len = parsePlugins.damageany.length; j < j_len; j++) {
					parsePlugins.damageany[j](event,spellID);
				}				
			} else if(event.type == "energize" && event.targetID == actor_id){
				if(event.resourceChangeType==0){
					var spellID = event.ability.guid;
					
					rV.manaGain += event.resourceChange;
					
					for (var j = 0, j_len = parsePlugins.energize.length; j < j_len; j++) {
						parsePlugins.energize[j](event,spellID);
					}				
				}			
			} else if(event.type == "dispel" && actors[event.sourceID]){
				var spellID = event.ability.guid;
				
				for (var j = 0, j_len = parsePlugins.dispel.length; j < j_len; j++) {
					parsePlugins.dispel[j](event,spellID);
				}				
			} else if(event.type == "combatantinfo" && event.sourceID == actor_id && !cV.combantantInfo){

				if(event["specID"] != uV.SPEC_ID){
					error_msg("Wrong specialization");
					throw new Error("Wrong specialization");
				}
				
				//console.log(event);
				
				for (var k = 0, k_len = event.gear.length; k < k_len; k++) {
					var gearData = event.gear[k];
					gearData.slot = k;
					cV.gearInfo[gearData.id] = gearData;
					
					for (var j = 0, j_len = parsePlugins.gear.length; j < j_len; j++) {
						parsePlugins.gear[j](gearData,gearData.id);
					}
				}
				for (var k = 0, k_len = event.artifact.length; k < k_len; k++) {
					var traitData = event.artifact[k];
				
					if(cV.traitInfo[traitData.traitID]){
						cV.traitInfo[traitData.traitID].rank.push(traitData.rank);
					} else {
						traitData.rank = [traitData.rank];
						cV.traitInfo[traitData.traitID] = traitData;
						cV.traitBySpell[traitData.spellID] = traitData;
					}
				}
				for (var k = 0, k_len = event.talents.length; k < k_len; k++) {
					var talentInfo = event.talents[k];
					
					talentInfo.row = k + 1;
					cV.talentInfo[talentInfo.id] = talentInfo;
				}
				
				var vantusRune = 0;
				for (var k = 0, k_len = event.auras.length; k < k_len; k++) {
					var auraData = event.auras[k];
					
					if(vantusRunes[ auraData.ability ]){
						vantusRune = 463;
					}

					for (var j = 0, j_len = parsePlugins.applybuff.length; j < j_len; j++) {
						parsePlugins.applybuff[j](event,auraData.ability);
					}

				}
				
				cV.critSpell = event["critSpell"] + STATS_BASE.crit * STATS.crit;
				cV.intellect = event["intellect"];
				cV.intellect_min = cV.intellect;
				cV.versatility = event["versatilityHealingDone"] + vantusRune + STATS_BASE.vers * STATS.vers;
				cV.mastery = event["mastery"] + STATS_BASE.mastery * STATS.mastery;
				cV.haste = event["hasteSpell"] + STATS_BASE.haste * STATS.haste;
				cV.leech = event["leech"];
				
				cV.gcd = 1500 / (cV.haste / STATS.haste / 100 + 1);
				
				cV.combantantInfo = event;
				
				for (var j = 0, j_len = parsePlugins.combantantInfo.length; j < j_len; j++) {
					parsePlugins.combantantInfo[j](event);
				}
			}
			
			for (var j = 0, j_len = parsePlugins.any.length; j < j_len; j++) {
				parsePlugins.any[j](event);
			}
			
			for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
				if(cooldownsTracking[j].opened && cooldownsTracking[j].end_limit && event["timestamp"] >= cooldownsTracking[j].end_limit){
					cooldownsTracking[j]['ended'] = event["timestamp"];
					cooldownsTracking[j]['opened'] = false;
					if(uV.SpellParseCooldownEnd) uV.SpellParseCooldownEnd(cooldownsTracking[j],event);
				}
			}
			
			if(event.ability && !cV.spellInfo[event.ability.guid]){
				cV.spellInfo[event.ability.guid] = {
					icon: event["ability"]["abilityIcon"],
					name: event["ability"]["name"],
				};
			}			
		}
		
		//} catch(err) { error_msg("Error: "+err); throw new Error(err); }
		
		if(!data.nextPageTimestamp) {
			$("#navbar-progress").width("100%").css('opacity', '0');
			if(pV.ReUpdatePage) clearTimeout(pV.ReUpdatePage);
			BuildReport();
		} else {
			currFightData.end_time_parsed = data.nextPageTimestamp;
			if(!pV.ReUpdatePage) pV.ReUpdatePage = setTimeout(function() {  BuildReportMinor(); pV.ReUpdatePage = false; },300);
			var prog = (data.nextPageTimestamp - currFightData.start_time) / (currFightData.end_time - currFightData.start_time) * 100;
			$("#navbar-progress").width(prog+"%").css('opacity', '1');
			ParseLog(fight_code,actor_id,data.nextPageTimestamp,end_time);
		}
		
		// (IN RANGE FROM type = "applybuff" AND ability.id = 194384 TO type = "removebuff" AND ability.id = 194384 GROUP BY target ON target END) and inCategory("damage") = true and target.type = "player"
		
		// https://www.warcraftlogs.com:443/v1/report/tables/damage-taken/F3RZBQntrXvKq6zD?start=2088389&end=2628316&filter=%28IN%20RANGE%20FROM%20type%20%3D%20%22applybuff%22%20AND%20ability.id%20%3D%20194384%20TO%20type%20%3D%20%22removebuff%22%20AND%20ability.id%20%3D%20194384%20GROUP%20BY%20target%20ON%20target%20END%29%20and%20inCategory%28%22damage%22%29%20%3D%20true%20and%20target.type%20%3D%20%22player%22&api_key=c715943c916421282ae9451912918422

		
	}).fail( function( data ) {
		if(data.status == 404 || data.status == 503){
			error_msg("Warcraftlogs currently unavailable.");
			throw new Error("Warcraftlogs currently unavailable.");
		}	
		error_msg("Parsing Error. Log may be private or removed.");
		throw new Error("Error: Parsing Error");
	});
}

function StartParceLog(fight_code,actor_id,start_time,end_time)
{
	$.getJSON( "https://www.warcraftlogs.com:443/v1/report/events/"+fight_code+"?start="+start_time+"&end="+(start_time+1)+"&api_key="+WCL_API_KEY ).done( function( data ) {
		if(data.status == 400){
			//error_msg("Unknown Warcraftlogs data error");
			throw new Error("Unknown Warcraftlogs data error");
		}
		
		cV.units = {};

		var moduleToLoad;
		var combantantInfoPresent;

		for (var i = 0, len = data.events.length; i < len; i++) {
			var event = data.events[i];
			if(event.type == "combatantinfo" && event.sourceID == currFightData.actor){
				combantantInfoPresent = true;
				
				if(event.specID && SPECS[event.specID]) moduleToLoad = true;
			
				console.log('spec detected',event.specID,event);
			
				break;			
			}
		}
		
		if(!combantantInfoPresent){
			error_msg("Error: Combantant info is missing. Logs must be written with enabled 'Advanced combat logging' option");
			throw new Error("Error: Combantant info is missing.");
			return 0;		
		} else if(!moduleToLoad) {
			error_msg("No analyze modules found for this spec. ("+specsNames[event.specID]+")");
			throw new Error("No analyze modules found for this spec. ("+specsNames[event.specID]+")");
			return 0;
		}
		
		pluginsList = SPECS[event.specID]();
		PrepPluginsData();
		
		for (var i = 0, len = data.events.length; i < len; i++) {
			var event = data.events[i];
			
			if(event.type == "combatantinfo"){
				cV.units[event.sourceID] = event;
			
				for (var j = 0, j_len = parsePlugins.allCombantantInfo.length; j < j_len; j++) {
					parsePlugins.allCombantantInfo[j](event);
				}			
			}
		}
		
		ParseLog(fight_code,actor_id,start_time,end_time);

	}).fail( function( data ) {
		if(data.status == 404 || data.status == 503){
			//error_msg("Warcraftlogs currently unavailable.");
			throw new Error("Warcraftlogs currently unavailable.");
		}
		//error_msg("Parsing Error. Log may be private or removed.");
		throw new Error("Error: Parsing Error");
	});
}

function ParseDR(fight_code,start_time,end_time,filter,variable,afterFunc)
{
	$.getJSON( "https://www.warcraftlogs.com:443/v1/report/tables/damage-taken/"+fight_code+"?start="+start_time+"&end="+end_time+"&filter="+filter+"&api_key="+WCL_API_KEY ).done( function( data ) {
		if(data.status == 400){
			//error_msg("Unknown Warcraftlogs data error");
			throw new Error("Unknown Warcraftlogs data error");
		}
		
		pV[variable] = 0;
		
		for (var i = 0, len = data.entries.length; i < len; i++) {
			var entry = data.entries[i];
			
			if(entry.type && classes[entry.type] && entry.type != "NPC"){
				pV[variable] += entry.total;			
			}
		}
		
		if(afterFunc) afterFunc();
	}).fail( function( data ) {
		if(data.status == 404 || data.status == 503){
			//error_msg("Warcraftlogs currently unavailable.");
			throw new Error("Warcraftlogs currently unavailable.");
		}
		//error_msg("Parsing Error. Log may be private or removed.");
		throw new Error("Error: Parsing Error");
	});
}

function ParseHeader(fight_code,showPage,afterFunc)
{
	$.getJSON( "https://www.warcraftlogs.com:443/v1/report/fights/"+fight_code+"?api_key="+WCL_API_KEY ).done( function( data ) {
		if(data.status == 400){
			error_msg("Unknown Warcraftlogs data error");
			throw new Error("Unknown Warcraftlogs data error");
		}
		
		fightsData = [];
		actorsData = [];
		
		for (var i = 0, len = data.fights.length; i < len; i++) {
			var obj = data.fights[i];
			obj.actors = [];
			fightsData[obj.id] = obj;
		}

		var grabUnitsList = [data.friendlies,data.enemies,data.friendlyPets,data.enemyPets];
		for (var i = 0, len = grabUnitsList.length; i < len; i++) {
			var obj = grabUnitsList[i]
			for (var j = 0, j_len = obj.length; j < j_len; j++) {
				var unit = obj[j]
				actorsData[unit.id] = {
					name: unit.name,
					class: unit.type,
				}
				for (var k = 0, k_len = unit.fights.length; k < k_len; k++) {
					if(fightsData[ unit.fights[k].id ]){
						fightsData[ unit.fights[k].id ].actors.push(unit.id);
					}
				}
			}
		}
		
		currFightData.report_name = data.title;
		
		if(showPage) BuildFightsList();
		if(afterFunc) afterFunc();
	}).fail( function( data ) {
		if(data.status == 404 || data.status == 503){
			error_msg("Warcraftlogs currently unavailable.");
			throw new Error("Warcraftlogs currently unavailable.");
		}
		error_msg("Parsing Error. Log may be private or removed.");
		throw new Error("Error: Parsing Error");
	});
}


function GetIconUrl(icon){
	return "//render-us.worldofwarcraft.com/icons/56/"+icon.replace(/\-/,"");
}

function GetIlvBonusID(baseIlvl,needIlvl){
	if(baseIlvl > needIlvl){
 		return 1472 + (needIlvl - baseIlvl);
	} else if (baseIlvl < needIlvl) {
		var diff = needIlvl - baseIlvl;
		if(diff > 200)
			return 2929 + diff;
		else
			return 1472 + diff;
	}
	return 0;
}

var GEAR_CHARTS_SLOT = -3;
var GEAR_CHARTS_ILVL = 360;

function CreateAzChartData(fightLen){
	var gearList = GEAR_BASE.concat(GEAR);
	var tier_data = [];
	for (var i = 0, len = gearList.length; i < len; i++) {
		var gearData = gearList[i];
		if(gearData.slot == GEAR_CHARTS_SLOT) {
			var name = (gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/spell="+gearData.spell+"\" target=\"_blank\">"+gearData.name+"</a>";
		
			var textAmount = gearData.textAmount ? gearData.textAmount() : "";
			
			var scaleIlvl = Math.max(Math.min(GEAR_CHARTS_ILVL,gearData.min || GEAR_CHARTS_ILVL),gearData.max || GEAR_CHARTS_ILVL);

			if(!tier_data[gearData.tier - 1]) tier_data[gearData.tier - 1] = [];
			tier_data[gearData.tier - 1].push( [ 
				gearData.special(scaleIlvl) / (GEAR_CHARTS_SLOT == -2 ? 1 : (fightLen / 1000)),
				name+" "+scaleIlvl,
				gear_charts_colors[gearData.type][0],
				gearData.special(scaleIlvl),
				textAmount ,
			] );
		}
	}
	
	var HTML = "";
	for (var j = 0, len_j = tier_data.length; j < len_j; j++) {
		tier_data[j].sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	
		HTML += "<div class=\"row full\"><div class=\"col w20\">Tier "+(j+1)+"</div><div class=\"list-top-line\"></div></div>";
		for (var i = 0, len = tier_data[j].length; i < len; i++) {
			HTML += "<div class=\"row full\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_data[j][i][1]+"</div><div class=\"col w10 t-right\"><em class=\"tooltip\">"+Math.floor(tier_data[j][i][0]+0.5)+(GEAR_CHARTS_SLOT != -2 ? "hps" : "")+"<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Total amount - "+NumberToFormattedNumber(tier_data[j][i][3],2)+(tier_data[j][i][4] != "" ? "<br>"+tier_data[j][i][4] : "" )+"</span></em></div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_data[j][i][2])+"-bg\" style=\"width: "+(Math.min(tier_data[j][i][0]/tier_data[j][0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
		}
	}
	
	$("#gear_chart").html(HTML);
	
	$("#gear_chart_adv").show();
	$("#gear_chart_colorsnames").hide();
}

function CreateGearChartData(fightLen){
	if(GEAR_CHARTS_SLOT == -2 || GEAR_CHARTS_SLOT == -3){
		CreateAzChartData(fightLen)
		return;
	}

	var gearList = GEAR_BASE.concat(GEAR);
	var gear_chart_list = [];
	var HTML = "";
	for (var i = 0, len = gearList.length; i < len; i++) {
		var gearData = gearList[i];
		if(gearData.slot == GEAR_CHARTS_SLOT) {
			var profit = 0;
			var equippedProfit = 0;
			var statsProfit = 0;
			var isEquipped = false;
			var scaleIlvl = gearData.scale ? gearData.scale : Math.min(GEAR_CHARTS_ILVL,gearData.max || 985);
			
			Object.keys(gearData).forEach(function (statName) {
				if(healPerStat[statName]){
					var value = ScaleStat(gearData[statName],gearData.ilvl,scaleIlvl,statName == "int" ? 1 : (jewelSlots[ gearData.slot - 1 ] ? 2 : 0));
					value = value * healPerStat[statName].amount * (statName == "int" ? 1.05 : 1);
					profit += value;
					statsProfit += value;
				} else if (statName == "special") {
					profit += gearData[statName](scaleIlvl);
				}
			});
			
			for (var j = 0, j_len = ITEMS.length; j < j_len; j++) {
				if(ITEMS[j].obj && ITEMS[j].obj.id == gearData.item && ITEMS[j].obj.type == "item" && ITEMS[j].obj.gear && rV[ITEMS[j].obj.gear] && cV.gearInfo[gearData.item]){
					equippedProfit = rV[ITEMS[j].obj.gear] || rV[ITEMS[j].obj.gear];
					isEquipped = cV.gearInfo[gearData.item].itemLevel;
					
					Object.keys(gearData).forEach(function (statName) {
						if(healPerStat[statName]){
							var value = ScaleStat(gearData[statName],gearData.ilvl,isEquipped,statName == "int" ? 1 : (jewelSlots[ gearData.slot - 1 ] ? 2 : 0));
							equippedProfit += value * healPerStat[statName].amount * (statName == "int" ? 1.05 : 1);
						}
					});
					
					break;
				}
			}
			if(GEAR_CHARTS_SLOT != 14 && !isEquipped && cV.gearInfo[gearData.item]){
				equippedProfit = profit;
				isEquipped = cV.gearInfo[gearData.item].itemLevel;
				
				if(GEAR_CHARTS_SLOT != -1){
					equippedProfit = 0;
					Object.keys(gearData).forEach(function (statName) {
						if(healPerStat[statName]){
							var value = ScaleStat(gearData[statName],gearData.ilvl,isEquipped,statName == "int" ? 1 : (jewelSlots[ gearData.slot - 1 ] ? 2 : 0));
							equippedProfit += value * healPerStat[statName].amount * (statName == "int" ? 1.05 : 1);
						} else if (statName == "special") {
							equippedProfit += gearData[statName](isEquipped);
						}
					});
				}
			}
			
			var profitAmount = profit - statsProfit;
			var equippedAmount = equippedProfit - statsProfit;
			
			profit /= fightLen / 1000;
			equippedProfit /= fightLen / 1000;
			
			var bonusID = GetIlvBonusID(gearData.wilvl || gearData.ilvl,scaleIlvl);
	
			if(isEquipped && !gearData.hideonrealitem){
				var bonusIDEq = GetIlvBonusID(gearData.wilvl || gearData.ilvl,isEquipped);
				gear_chart_list.push([equippedProfit,isEquipped,(gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/item="+gearData.item+(bonusIDEq != 0 ? "&bonus="+bonusIDEq : "")+"\" target=\"_blank\">"+gearData.name+"</a>","DeathKnight",true,equippedProfit,statsProfit]);
			}
			
			if(!isEquipped || isEquipped < scaleIlvl){
				gear_chart_list.push([profit,scaleIlvl,(gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/item="+gearData.item+(bonusID != 0 ? "&bonus="+bonusID : "")+"\" target=\"_blank\">"+gearData.name+"</a>"+(gearData.tip ? " <sup class=\"tooltip\" style=\"font-size: 0.4em\">[?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;font-size: 2em\">"+gearData.tip+"</span></sup>" : ""),gear_charts_colors[gearData.type][0],false,profitAmount,statsProfit]);
			}
		}
	}
	if(GEAR_CHARTS_SLOT == -1){
		var new_list = [];
		for (var i = 0, len = gear_chart_list.length; i < len; i++) {
			new_list.push(gear_chart_list[i]);
			for (var j = i, j_len = gear_chart_list.length; j < j_len; j++) if(i!=j) {
				new_list.push([
					gear_chart_list[i][0] + gear_chart_list[j][0],
					gear_chart_list[i][1],
					gear_chart_list[i][0] > gear_chart_list[j][0] ? (gear_chart_list[i][2] + "<br>" + gear_chart_list[j][2]) : (gear_chart_list[j][2] + "<br>" + gear_chart_list[i][2]),
					gear_chart_list[i][3] == gear_chart_list[j][3] ? gear_chart_list[i][3] : "Druid",
					gear_chart_list[i][4] == gear_chart_list[j][4] ? gear_chart_list[i][4] : false,
					gear_chart_list[i][5],
					gear_chart_list[i][6],
				]);
			}
		}
		gear_chart_list = new_list;	
	}
	
	gear_chart_list.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	for (var i = 0, len = gear_chart_list.length; i < len; i++) {
		HTML += "<div class=\"row full "+(gear_chart_list[i][4] ? "eq" : "")+"\"><div class=\"col w5\">"+gear_chart_list[i][1]+"</div><div class=\"col w20\">"+gear_chart_list[i][2]+"</div><div class=\"col w10 t-right\"><em class=\"tooltip\">"+Math.floor(gear_chart_list[i][0]+0.5)+"hps<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Effect amount - "+NumberToFormattedNumber(gear_chart_list[i][5],2)+"<br>From stats - "+NumberToFormattedNumber(gear_chart_list[i][6],2)+"</span></em></div><div class=\"col half clearfix\"><div class=\"performance-bar "+(gear_chart_list[i][3])+"-bg\" style=\"width: "+(Math.min(gear_chart_list[i][0]/gear_chart_list[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	
	$("#gear_chart").html(HTML);	
	
	if(GEAR_CHARTS_SLOT != -1){
		$("#gear_chart_adv").show();
	} else {
		$("#gear_chart_adv").hide();
	}
	$("#gear_chart_colorsnames").show();

	//$("#gear_chart_slider").attr("max",GEAR_CHARTS_SLOT == 14 ? 1000 : 985);
}

function CalcHealingFromItem(itemID,diffStats)
{
	var passiveStats = 0;
	var statsText = "Calculated stats:";
	var obj = cV.gearInfo[itemID];
	var defStats = false;
	if(obj){
		var statsDB = diffStats || itemsStats[itemID];
		if(statsDB){
			var realIlvl = obj.itemLevel;
			var baseIlvl = statsDB['ilvl'];
			
			Object.keys(statsDB).forEach(function (statName) {
				var value = statsDB[statName]
				if(statName == 'passive' && obj.bonusIDs){
					for (var i = 0, i_len = obj.bonusIDs.length; i < i_len; i++) {
						if(itemsBonusToStats[ obj.bonusIDs[i] ]){
							statName = itemsBonusToStats[ obj.bonusIDs[i] ];
							break;
						}
					}
				}
			
				if(healPerStat[statName]){
					var newValue = ScaleStat(value,baseIlvl,realIlvl,statName == "int" ? 1 : (jewelSlots[ obj.slot ] ? 2 : 0));
					statsText += "<br>"+statName+": "+Math.round(newValue);
					if(statName == "int") newValue *= 1.05;	//5% bonus
					passiveStats += healPerStat[statName].amount * newValue;
				}
			});
			defStats = true;
		}
		
		if(obj.gems) {
			for (var i = 0, i_len = obj.gems.length; i < i_len; i++) {
				var gemItemID = obj.gems[i].id
				if(gemToStat[gemItemID]){
					var gemStatData = gemToStat[gemItemID];
					if(healPerStat[ gemStatData[0] ]){
						statsText += "<br>Gem "+gemStatData[0]+": "+Math.round(gemStatData[1]);
					
						passiveStats += healPerStat[ gemStatData[0] ].amount * gemStatData[1] * (gemStatData[0] == "int" ? 1.05 : 1);
					}
				}
			}
		}
		if(obj.permanentEnchant && enchToStat[ obj.permanentEnchant ])  {
			var gemStatData = enchToStat[ obj.permanentEnchant ];
			if(healPerStat[ gemStatData[0] ]){
				statsText += "<br>Enchant "+gemStatData[0]+": "+Math.round(gemStatData[1]);
			
				passiveStats += healPerStat[ gemStatData[0] ].amount * gemStatData[1] * (gemStatData[0] == "int" ? 1.05 : 1);
			}
		}
	}
	
	return {
		heal: passiveStats,
		tip: statsText,
		base: defStats,
	};
}

var IsWowheadResponceRewritten = false;
var IsWowheadRequestRewritten = false;

function GetItemDataFromWowhead(itemID)
{
	if(!IsWowheadResponceRewritten){
		if(!$WowheadPower || !$WowheadPower.register) return false;
		var oldRegister = $WowheadPower.register;
		$WowheadPower.register = function(arr,id,locale,json){
			if(arr == 3 && json && json.tooltip_enus){
				//console.log(arr,id,locale,json);
			
				var itemID = id.match(/^(\d+)/)[1];
				
				var itemStatus = $("#gear-"+itemID+"-text").attr("data-status");

				var itemStats = {};
				
				var matches = json.tooltip_enus.match(/ilvl-->(\d+)/);
				if(matches) itemStats.ilvl = matches[1].replace(",", "");

				var matches = json.tooltip_enus.match(/nstart--><b class=\"[^\"]*\">([^<]*)/);
				if(matches) itemStats.name = matches[1];

				var matches = json.tooltip_enus.match(/-->\+([\d,]+) (\[Agility or Intellect\]|Intellect|\[Agility or Strength or Intellect\])/);
				if(matches) itemStats.int = matches[1].replace(",", "");

				var matches = json.tooltip_enus.match(/([\d,]+) Critical Strike/);
				if(matches) itemStats.crit = matches[1].replace(",", "");

				var matches = json.tooltip_enus.match(/([\d,]+) Mastery/);
				if(matches) itemStats.mastery = matches[1].replace(",", "");

				var matches = json.tooltip_enus.match(/([\d,]+) Versatility/);
				if(matches) itemStats.vers = matches[1].replace(",", "");

				var matches = json.tooltip_enus.match(/([\d,]+) Haste/);
				if(matches) itemStats.haste = matches[1].replace(",", "");
				
				var passiveStats = CalcHealingFromItem(itemID,itemStats);
				//console.log(itemStats.name,itemStats,passiveStats);
				
				var ilvlName = $("#gear-"+itemID+"-name").attr("data-ilvl");
				$("#gear-"+itemID+"-name").html(itemStats.name+" "+ilvlName);
				if(itemStatus!="locked"){
					$("#gear-"+itemID+"-text").attr("data-status","locked");
					
					var HTML = "";
					if(passiveStats.heal > 0){
						HTML += "From <em class=\"tooltip\">passive stats<span class=\"tip-text\" style=\"width: 120px;margin-left:-60px;\">"+passiveStats.tip+"</span></em>: "+NumberToFormattedNumber(passiveStats.heal,2)+" ("+(passiveStats.heal/rV.total*100).toFixed(2)+"%)<br>";
					}
					if(passiveStats.heal > 0) HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(passiveStats.heal / currFightData.len * 1000,1)+"</em>";
					
					$("#gear-"+itemID+"-text").html(HTML);
				}
				
			}
		  	var ret = oldRegister.apply(this, arguments);
		  	return ret;
		}
		IsWowheadResponceRewritten = true;
	}
	
	$.ajaxSetup({cache: true});
	$.getJSON( "https://www.wowhead.com/item="+itemID[0]+(itemID[1] ? "&bonus="+itemID[1].join(":") : "")+"&json&power", function( data ) { 
		var s = "" + itemID[0] + (itemID[1] ? "b"+itemID[1].join(",") : "");
		$WowheadPower.register(3,s,0,data); 
		//console.log(data); 
	});	
}

var wowhead_tooltips = { "colorlinks": false, "iconizelinks": false, "renamelinks": true }

Number.prototype.format = function() {
	return this.toLocaleString(undefined, {maximumFractionDigits:0,useGrouping:true}).replace(/\D/g,",");
};

function BuildReportMinor(){
	var HTML = "";
	
	console.log('BuildReportMinor',new Date().getTime());

	var fightLen = (currFightData.end_time_parsed || currFightData.end_time) - currFightData.start_time;

	var currTotal = 0;
	Object.keys(healingData).forEach(function (spellID) {
		currTotal += healingData[spellID][0];
	});

	HTML += "<div class=\"panel\" style=\"margin-top:-10px;\"><div class=\"row full\" style=\"margin-bottom:5px;\">";
	var hps = Math.round(currTotal / fightLen * 1000);
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingwavegreater.jpg\"></div><div class=\"col w75\">Healing Done: "+NumberToFormattedNumber(currTotal)+"<br>HPS: "+NumberToFormattedNumber(hps,0,3)+"</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingtouch.jpg\"></div><div class=\"col w75\">Mastery healing Done:<br>"+NumberToFormattedNumber(Math.round(healPerStat.mastery.total),1)+" ("+Math.round(healPerStat.mastery.total / healPerStat.mastery.all * 100)+"%)</div></div></div></div>";
	HTML += "</div></div>";	
	
	HTML += "<div class=\"panel\">";
	/// Spells List
	var spellslistKeys = Object.keys(healingData);
	spellslistKeys.sort(function(a,b){ return healingData[a][0] > healingData[b][0] ? - 1 : 1 });
	HTML += "<div class=\"col-half\"><div class=\"box clearfix spellslist\">";
	for (var j = 0, j_len = spellslistKeys.length; j < j_len; j++) {
		var spellID = spellslistKeys[j];
		var spellInfo = cV.spellInfo[spellID];
		HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\"http://media.blizzard.com/wow/icons/56/"+spellInfo['icon']+"\" alt=\""+spellInfo['name']+"\">"+spellInfo['name']+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(healingData[spellID][0],1)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(healingData[spellID][1],1)+"</div></div>";
	}
	HTML += "</div></div>";	

	
	$("#main").html(HTML);
}

function BuildReport(){
	if(!cV.combantantInfo){
		error_msg("Error: Combantant info is missing. Logs must be written with enabled 'Advanced combat logging' option");
		throw new Error("Error: Combantant info is missing.");
	}
	
	rV.total = 0;
	rV.totalOver = 0;
	Object.keys(healingData).forEach(function (spellID) {
		rV.total += healingData[spellID][0];
		rV.totalOver += healingData[spellID][1];
	});
	
	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) {
			if(pluginData[i].afterParse) pluginData[i].afterParse();
		}
	}
	
	//console.log(healingData);
	console.log(rV);
	//console.log(healPerStat);
	
	if(cV.spellInfo[6262]) cV.spellInfo[6262].icon = "warlock_healthstone.jpg";
	
	var HTML = "";
	
	var fightStart = currFightData.start_time;
	var fightEnd = currFightData.end_time;
	var fightLen = fightEnd - fightStart;
	
	HTML += "<div class=\"panel\" style=\"margin-top:-10px;\"><div class=\"row full\" style=\"margin-bottom:5px;\">";
	if(uV.BuildReportHeaderIcons) HTML += uV.BuildReportHeaderIcons(fightLen);
	HTML += "</div></div>";	
	
	
	HTML += "<div class=\"panel\">";
	
	/// Spells List
	var spellslistKeys = Object.keys(healingData);
	spellslistKeys.sort(function(a,b){ return healingData[a][0] > healingData[b][0] ? - 1 : 1 });
	HTML += "<div class=\"col-half\"><div class=\"box clearfix spellslist\">";
	for (var j = 0, j_len = spellslistKeys.length; j < j_len; j++) {
		var spellID = spellslistKeys[j];
		var spellInfo = cV.spellInfo[spellID];
		HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(spellInfo['icon'].replace(/\-/,""))+"\" alt=\""+spellInfo['name']+"\">"+spellInfo['name']+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(healingData[spellID][0],1,2,2)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(healingData[spellID][1],1)+"</div></div>";
	}

	HTML += "<div class=\"row full t-grey\"> Damage reductions</div>";
	var drlistKeys = Object.keys(rV.dr);
	drlistKeys.sort(function(a,b){ return rV.dr[a] > rV.dr[b] ? - 1 : 1 });
	for (var j = 0, j_len = drlistKeys.length; j < j_len; j++) {
		var spellID = drlistKeys[j];
		if(rV.dr[spellID] > 0){
			if(!cV.spellInfo[spellID]){
				HTML += "<div class=\"row full\"><div class=\"line half\"><div style=\"margin-left:27px;\">"+spellID+"</div></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(rV.dr[spellID],1)+"</div></div>";		
			} else {
				var spellInfo = cV.spellInfo[spellID];
				HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(spellInfo['icon'].replace(/\-/,""))+"\" alt=\""+spellInfo['name']+"\">"+spellInfo['name']+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(rV.dr[spellID],1)+"</div></div>";
			}
		}
	}

	HTML += "</div>";	
	if(uV.BuildReportTopLeft) HTML += uV.BuildReportTopLeft(fightLen);
	HTML += "</div>";	
	
		

	/// Stats List
	HTML += "<div class=\"col-half\"><div class=\"box clearfix statlist\"><header class=\"box-header\" style=\"padding-bottom:0;padding-top:0\">Stats</header>";
	var allStatsList = [
		["int","Int","From gear: "+cV.intellect_min],
		["crit","Crit","From gear: "+(cV.critSpell-STATS_BASE.crit*STATS.crit)+"<br>Base value: "+(STATS.crit*STATS_BASE.crit).toFixed(0)],
		["mastery","Mastery","From gear: "+(cV.mastery-STATS_BASE.mastery*STATS.mastery)+"<br>Base value: "+(STATS.mastery*STATS_BASE.mastery).toFixed(0)],
		["vers","Vers","From gear: "+cV.versatility],
		//["haste","<em class=\"tooltip\">Haste<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Cast time not counted here, only profit from ticks</span></em>","From gear: "+cV.haste],
		["haste","Haste","From gear: "+cV.haste],
	];
	HTML += "<div class=\"row full\"><div class=\"col size\"> </div><div class=\"col size\">Heal per stat</div><div class=\"col size\">Stat weight</div><div class=\"col size\">Total from stat</div><div class=\"col size\">Avg on fight</div></div>";
	for (var j = 0, j_len = allStatsList.length; j < j_len; j++) {
		var statData = allStatsList[j];
		var amount = healPerStat[ statData[0] ].amount;
		var total = healPerStat[ statData[0] ].total;
		var amountText = amount.toFixed(3);
		var totalText = NumberToFormattedNumber(total,0,2);
		var weightText = (amount / fightLen * 1000).toFixed(2);
		if(uV.BuildReportStats && uV.BuildReportStats(0,statData[0])){
			totalText = uV.BuildReportStats(1,statData[0],totalText,total);
			amountText = uV.BuildReportStats(2,statData[0],amountText,amount);
			weightText = uV.BuildReportStats(3,statData[0],weightText,amount,fightLen);
			uV.BuildReportStats(4,statData[0]);
 		} else if(statData[0] == "int") {
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000 * 1.05).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">5% armor bonus included</span></em>";
		} else if(statData[0] == "haste") {
			var hasteCastAmount = rV.hasteCastProfit;
			var hasteCastProfit = pV.healFromHaste;
			var preAmount = amount;
			amount += hasteCastAmount;
			amountText = "<em class=\"tooltip\">"+amount.toFixed(3)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+preAmount.toFixed(3)+"<br>From cast speed: "+hasteCastAmount.toFixed(3)+"</span></em>";
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+(preAmount / fightLen * 1000).toFixed(2)+"<br>From cast speed: "+(hasteCastAmount / fightLen * 1000).toFixed(2)+"</span></em>";
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total+hasteCastProfit,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+NumberToFormattedNumber(total,0,2)+"<br>From cast speed: "+NumberToFormattedNumber(hasteCastProfit,0,2)+"</span></em>";			
 			
 			healPerStat[ statData[0] ].amount = amount;
		}
		
		var subSpellsList = "";
		if(healPerStat[ statData[0] ].spells){
			subSpellsList = " <em class=\"tooltip\">[?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">";
			if(statData[0] == "haste") subSpellsList += "From ticks: <br>";
			
			var spellsKeys = Object.keys(healPerStat[ statData[0] ].spells);
			spellsKeys.sort(function(a,b){ return healPerStat[ statData[0] ].spells[ a ] > healPerStat[ statData[0] ].spells[ b ] ? -1 : 1 });
			for (var k = 0, k_len = spellsKeys.length; k < k_len; k++) {
				var spellID = spellsKeys[k];
				var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
				var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
				subSpellsList += "<img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+" - "+healPerStat[ statData[0] ].spells[spellID].toFixed(1)+"<br>";

			}
			
			if(statData[0] == "haste") {
				subSpellsList += "<br>From cast speed: <br>";
				var spellsKeys = Object.keys(rV.hasteCastProfitBySpell);
				spellsKeys.sort(function(a,b){ return rV.hasteCastProfitBySpell[ a ] > rV.hasteCastProfitBySpell[ b ] ? -1 : 1 });
				for (var k = 0, k_len = spellsKeys.length; k < k_len; k++) {
					var spellID = spellsKeys[k];
					var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
					var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
					
					subSpellsList += "<img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+" - "+(rV.hasteCastProfitBySpell[spellID]).toFixed(1)+"<br>";
	
				}			
			}
			subSpellsList += "</span></em>"
		};
		
		healPerStat[ statData[0] ].avgStat = healPerStat[ statData[0] ].avg / healPerStat[ statData[0] ].avgCount;
		if(statData[0] == "haste") {
			if(healPerStat[ statData[0] ].avgCount == 0) 
				healPerStat[ statData[0] ].avgStat = pV.savedTimeAvg / pV.savedTimeAvgCount;
			else
				healPerStat[ statData[0] ].avgStat = (healPerStat[ statData[0] ].avgStat + pV.savedTimeAvg / pV.savedTimeAvgCount) / 2;
		}

		HTML += "<div class=\"row full\"><div class=\"col size\">"+statData[1]+"</div><div class=\"col size\">"+amountText+subSpellsList+"</div><div class=\"col size\">"+weightText+"</div><div class=\"col size\">"+totalText+"</div><div class=\"col size\"><em class=\"tooltip\">"+(healPerStat[ statData[0] ].avgStat).format()+"<span class=\"tip-text\" style=\"width: "+(statData[0] == "crit" ? 300 : 120)+"px;margin-left:-"+(statData[0] == "crit" ? 150 : 60)+"px;\">"+statData[2]+"</span></em>"+(STATS[ statData[0] ] ? " - "+(healPerStat[ statData[0] ].avgStat / STATS[ statData[0] ]).toFixed(1)+"%" : "")+"</div></div>";
	}
	
	
	var manaSpellsText = "<br>Mana used by spells:<br>"+CreateSpellsTextFromList(rV.manaUsageBySpell);
	HTML += "<div class=\"row full\"><div class=\"col size\">Mana</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.healFromMana / rV.manaUsage * maxMana / 100).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Healing per 1% mana ("+(maxMana / 100).format()+")</span></em></div><div class=\"col size\"> </div><div class=\"col size\">"+NumberToFormattedNumber(rV.healFromMana,0,2)+"</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.manaUsage).format()+"<span class=\"tip-text\" style=\"width: 350px;margin-left:-175px;\">Mana used on fight: "+(rV.manaUsage).format()+"<br>Mana gained via passives & buffs: "+(rV.manaGain).format()+"<br>Mana regened: "+(fightLen / 1000 * 0.04 * maxMana / 5).format()+"<br>Base manapull: "+(maxMana).format()+manaSpellsText+"</span></em></div></div>";

	HTML += "<div class=\"row full\"><div class=\"col full\" id=\"stats_graph_more\"><a href=\"javascript:void(0)\" class=\"more_graph\">Show graph</a></div><div class=\"ct-chart\" style=\"display:none\"  id=\"stats_graph\"></div></div>";	

	HTML += "</div></div>";	
	
	
	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) {
			if(pluginData[i].afterStats) pluginData[i].afterStats();
		}
	}

	if(uV.BuildReportTopRight) HTML += uV.BuildReportTopRight(fightLen);

	/// Items predictions
	var itemsPredictionsHTML = "";
	for (var i = 0, len = ITEMS.length; i < len; i++) {
		if(ITEMS[i].obj && ITEMS[i].obj.prediction && (!ITEMS[i].obj.predictionCondition || ITEMS[i].obj.predictionCondition()) && (ITEMS[i].obj.type!="item" || (!ITEMS[i].obj.predictionCondition && !cV.gearInfo[ITEMS[i].obj.id]))){
			var itemData = ITEMS[i].obj;
			itemsPredictionsHTML += "<div class=\"row full\"><div class=\"col s-1\"><a href=\"//www.wowhead.com/"+itemData.type+"="+itemData.id+"\" target=\"_blank\" style=\"color: #"+qualityColors[ itemData.quality ]+";\">"+itemData.name+"</a></div><div class=\"col s-2\">"+NumberToFormattedNumber(rV[ itemData.prediction ],2)+(itemData.text ? (" "+itemData.text()) : "")+"</div><div class=\"col s-2\">"+(rV[ itemData.prediction ]/rV.total*100).toFixed(2)+"%</div></div>";
		}
	}
	if(itemsPredictionsHTML != ""){
		HTML += "<div class=\"col-half\"><div class=\"box clearfix predictionlist\"><header class=\"box-header\" style=\"padding-bottom:0;padding-top:0\">Items predictions ";
		HTML += "<sup class=\"tooltip\" style=\"font-size: 0.4em\"> [?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Only benefit from \"spell\" part of item is counted here.<br>Without feeding (CBT/AG/ASC) bonus</span></sup></header>";
		HTML += itemsPredictionsHTML;	
		HTML += "</div></div>";	
	}
	
	HTML += "</div>";
	
	
	/// Items
	var itemsData = [];
	var itemsDataTotal = 0;
	for (var i = 0, len = ITEMS.length; i < len; i++) {
		var obj = ITEMS[i].obj;
		if(obj && obj.gear && ((!obj.gearFunc && cV.gearInfo[obj.id]) || (obj.gearFunc && obj.gearFunc()))) { 
			itemsData.push([ obj.gear,ITEMS[i] ]);
			if(rV[obj.gear] > 0) itemsDataTotal ++;
		}
	}
	itemsData.sort(function(a,b){ return rV[ a[0] ] > rV[ b[0] ] ? - 1 : 1 });
	if(itemsDataTotal > 0){
		HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">ITEMS ";
		HTML += "<sup class=\"tooltip\" style=\"font-size: 0.4em\"> [supported items]<span class=\"tip-text\" style=\"width: 400px;margin-left:-200px;\">";
		var counter = false;
		for (var i = 0, len = ITEMS.length; i < len; i++) {
			if(ITEMS[i].obj && ITEMS[i].obj.gear){
				if(counter) HTML += ", ";
				HTML += ITEMS[i].obj.name;
				counter = true;
			}
		}
		HTML += "</span></sup></header><div class=\"list-top-line\"> </div><ul class=\"list special_items\">";
		counter = 0;
		for (var i = 0, len = itemsData.length; i < len; i++) {
			var obj = itemsData[i][1].obj;
			if(obj){
				var itemID = obj.id;
		
				if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
				
				HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
				HTML += "<a href=\"//www.wowhead.com/"+obj.type+"="+itemID+((cV.gearInfo[itemID] && cV.gearInfo[itemID].bonusIDs) ? "&bonus="+cV.gearInfo[itemID].bonusIDs.join(":") : "")+"\" target=\"_blank\"><img src=\""+GetIconUrl(obj.icon || cV.gearInfo[itemID].icon)+"\" alt=\""+obj.name+"\"></a></div>";
		
				HTML += "<div class=\"col div_more_1 w80\"><header style=\"color: #"+qualityColors[obj.quality]+";\">"+obj.name+"</header>";
			
				var amount = rV[obj.gear]
				if(amount > 0) HTML += "<em class=\"result\">"+NumberToFormattedNumber(amount,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
				
				var passiveStats = CalcHealingFromItem(itemID)
				passiveStats.heal = 0;	//block passives
				if(passiveStats.heal > 0){
					HTML += "From passive stats: "+NumberToFormattedNumber(passiveStats.heal,2)+" ("+(passiveStats.heal/rV.total*100).toFixed(2)+"%)<br>";
				}
							
				HTML += "HPS: <em class=\"result-hps\">";
				if(amount > 0) HTML += NumberToFormattedNumber(amount / fightLen * 1000,2);
				if(passiveStats.heal > 0) HTML += (amount > 0 ? " / " : "")+NumberToFormattedNumber(passiveStats.heal / fightLen * 1000,2);
				HTML += "</em>";
			
				if(obj.gearAdditionalText) HTML += "<br>"+obj.gearAdditionalText();
			
				HTML += "</div></div>";
				counter++;
			}
		}	
		HTML += "</ul></div></div></div>";
	}
	
	
	/// Gear
	var UpdateFromWowhead = [];
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">GEAR</header><div class=\"list-top-line\"> </div><ul class=\"list gear\">";
	counter = 0;
	for (var i = 0, len = cV.combantantInfo.gear.length; i < len; i++) {
		var gearData = cV.combantantInfo.gear[i]
		if(gearData.id != 0){
			var itemID = gearData.id

			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			HTML += "<div class=\"row w33\" id=\"gear-"+itemID+"\"><div class=\"col w70p\">";
			HTML += "<a href=\"//www.wowhead.com/item="+itemID+(gearData ? (gearData.bonusIDs ? "&bonus="+gearData.bonusIDs.join(":") : "") : "")+"\" target=\"_blank\"><img src=\""+GetIconUrl(gearData.icon.replace(/\-/,""))+"\" alt=\""+gearData.icon+"\"></a></div>";

			HTML += "<div class=\"col div_more_1 w80\"><header style=\"color: #"+qualityColors[gearData.quality]+";\" id=\"gear-"+itemID+"-name\" data-ilvl=\""+gearData.itemLevel+"\">"+gearData.itemLevel+"</header>";
		
			var passiveStats = CalcHealingFromItem(itemID)
			
			HTML += "<div class=\"row-gear full\" id=\"gear-"+itemID+"-text\" data-status=\""+(passiveStats.base ? "locked" : "unlocked")+"\">";
			if(passiveStats.heal > 0){
				HTML += "From <em class=\"tooltip\">passive stats<span class=\"tip-text\" style=\"width: 120px;margin-left:-60px;\">"+passiveStats.tip+"</span></em>: "+NumberToFormattedNumber(passiveStats.heal,2)+" ("+(passiveStats.heal/rV.total*100).toFixed(2)+"%)<br>";
			}
						
			if(passiveStats.heal > 0) HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(passiveStats.heal / fightLen * 1000,2)+"</em>";
		
			HTML += "</div></div></div>";
			counter++;
			
			UpdateFromWowhead.push([itemID,gearData.bonusIDs]);
		}
	}	
	HTML += "</ul></div></div></div>";

	
	/// Gear Charts
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix gear_charts\"><header class=\"box-header\">GEAR CHARTS <sup class=\"tooltip\" style=\"font-size: 0.4em\"> [?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Various numbers can be different based on buffs/fight length/overheal %/rng procs</span></sup></header>";
	HTML += "<div class=\"full clearfix slot_select\" style=\"padding-bottom:10px;\">";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-1\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_hammer_unique_sulfuras.jpg\" style=\"width:48px;height:48px;\"><br>Legendaries</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"2\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_misc_necklace_firelands_2.jpg\" style=\"width:48px;height:48px;\"><br>Necks</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"11\"><img src=\"http://media.blizzard.com/wow/icons/56/item_icecrownringc.jpg\" style=\"width:48px;height:48px;\"><br>Rings</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-2\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_paladin_empoweredsealstruth.jpg\" style=\"width:48px;height:48px;\"><br>Clear azerite power</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-3\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_paladin_empoweredsealstruth.jpg\" style=\"width:48px;height:48px;\"><br>Azerite prediction</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"14\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_datacrystal04.jpg\" style=\"width:48px;height:48px;\"><br>Trinkets</div>";
	HTML += "</div>";
	
	HTML += "<div class=\"full clearfix\" style=\"padding-bottom:5px;display:none\" id=\"gear_chart_adv\">";
	HTML += "<input type=\"range\" min=\"310\" max=\"410\" value=\""+GEAR_CHARTS_ILVL+"\" step=\"5\" class=\"slider\" id=\"gear_chart_slider\">";
	HTML += "<div class=\"full\" id=\"gear_chart_colorsnames\" style=\"display:none\">";
	var gear_chart_colors_keys = Object.keys(gear_charts_colors);
	for (var i = 0, len = gear_chart_colors_keys.length; i < len; i++) if(gear_charts_colors[ gear_chart_colors_keys[i] ][2] != 1) {
		HTML += "<div class=\"col\" style=\"width:"+(99 / len).toFixed(2)+"%\">";
		HTML += "<div class=\"col performance-bar "+(gear_charts_colors[ gear_chart_colors_keys[i] ][0])+"-bg\" style=\"width: 14px;height:14px;margin-top:4px\"></div>";
		HTML += "<div class=\"col\" style=\"width:auto;\">"+gear_charts_colors[ gear_chart_colors_keys[i] ][1]+"</div>";
		HTML += "</div>";
	}
	HTML += "</div>";
	HTML += "</div>";

	HTML += "<div id=\"gear_chart\"></div></div></div></div>";

	/// Traits
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">TRAITS</header><div class=\"list-top-line\"> </div><ul class=\"list traits\">";
	counter = 0;
	var traitsData = [];
	for (var i = 0, len = TRAITS.length; i < len; i++) if(TRAITS[i].obj && GetTraitRank(TRAITS[i].obj.id)) traitsData.push([ TRAITS[i].obj.id,TRAITS[i] ]);
	traitsData.sort(function(a,b){ return rV.traits[ a[0] ] > rV.traits[ b[0] ] ? - 1 : 1 });
	Object.keys(cV.traitInfo).forEach(function (traitID) {
		var isFound = false;
		for (var i = 0, len = traitsData.length; i < len; i++) {
			if(traitsData[i][0] == cV.traitInfo[traitID].traitID) {
				isFound = true;
				break;
			}
		}
		if(!isFound) traitsData.push([ cV.traitInfo[traitID].traitID,false,cV.traitInfo[traitID] ]);
	});
	for (var i = 0, len = traitsData.length; i < len; i++) {
		var preDefTrait = traitsData[i][1];
		if(preDefTrait){
			var traitData = traitsData[i][1].obj;
			var traitRanks = GetTraitRank(traitData.id);
			if(traitRanks){
				if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
				
				HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(traitData.icon)+"\" alt=\""+traitData.name+"\"></a></div>";
	
				HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\">"+traitData.name+"</a> [Level "+traitRanks.join(", ")+"]</header>";
			
				var amount = rV.traits[traitData.id];
				if(amount > 0){
					HTML += "<em class=\"result "+(traitData.tip ? "tooltip" : "")+"\">"+NumberToFormattedNumber(amount,2)+(traitData.tip ? "<span class=\"tip-text\" style=\"width: 180px;margin-left:-90px;\">"+traitData.tip()+"</span>" : "")+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
					HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,1)+"</em>";
		
					if(traitData.additionalText) HTML += "<br>"+traitData.additionalText();
					if(!traitData.disablePerItem && traitRanks.length > 1) HTML += "<br>Avg per item: "+NumberToFormattedNumber(amount / traitRanks.length,0,2)+" ("+(amount / traitRanks.length/rV.total*100).toFixed(2)+"%)";	
				}
			
				HTML += "</div></div>";
				counter++;
			}
		} else {
			var traitData = traitsData[i][2];
			
			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
			HTML += "<a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(traitData.icon)+"\"></a></div>";
			HTML += "<div class=\"col div_more_1 w80\"><header>[Level "+traitData.rank.join(", ")+"]</header>";
			//HTML += "Trait ID: "+traitData.traitID+"<br>Spell ID: "+traitData.spellID+"<br>Icon: "+traitData.icon;	//debug
			HTML += "</div></div>";
			
			counter++;
		}
	}	
	HTML += "</ul></div></div></div>";

	
	
	/// Talents
	var predictionButtons = [];
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">TALENTS</header><div class=\"list-top-line\"> </div><ul class=\"list talents\">";
	counter = 0;
	var talentsData = [[],[],[],[],[],[],[],[]];
	for (var i = 0, len = TALENTS.length; i < len; i++) talentsData[ TALENTS[i].obj.tier ][ TALENTS[i].obj.col ] = [ TALENTS[i].obj.id,TALENTS[i] ];
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j <= 3; j++) if(talentsData[i].length > 0) {
			var talentData = talentsData[i][j];
	
			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			if(talentData){
				talentData = talentData[1].obj;
				
				var talentSelected = cV.talentInfo[ talentData.id ];
			
				HTML += "<div class=\"row w33"+(talentSelected ? " yellow-back" : "")+"\"><div class=\"clearfix\"><div class=\"col w70p\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+talentData.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(talentData.icon)+"\" alt=\""+talentData.name+"\"></a></div>";
		
				HTML += "<div class=\"col div_more_1 w80\"><header id=\"talent-"+talentData.id+"-header\"><a href=\"//www.wowhead.com/spell="+talentData.id+"\" target=\"_blank\">"+talentData.name+"</a>";
			
				var amount = rV.talents[talentData.id];
				var prediction = rV.talents_prediction[talentData.id];
				if(amount && amount != 0 && talentSelected){
					if(talentData.amountTooltip) HTML += " <em class=\"tooltip\">[?]<span class=\"tip-text\" style=\"width: 200px;margin-left:-200px;\">"+talentData.amountTooltip()+"</span></em>";
				
					HTML += "</header><em class=\"result\">"+NumberToFormattedNumber(amount,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
					HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,2)+"</em>";
			
					if(talentData.additionalText) HTML += "<br>"+talentData.additionalText();
				} else if(talentData.extra_parse && talentSelected){
					HTML += "</header><div id=\"talent-"+talentData.id+"-result\" style=\"padding:0;\"><a style=\"font-size: 2em;\">Get Data</a></div>";
					predictionButtons.push([talentData.id,talentData.extra_parse,true]);					
				} else if(prediction && prediction != 0 && !talentSelected){
					if(talentData.predictionTooltip){
						HTML += " <em class=\"tooltip\">prediction<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">"+talentData.predictionTooltip()+"</span></em></header>";
					} else {
						HTML += " prediction</header>";
					}
					HTML += "<em class=\"result\">"+NumberToFormattedNumber(prediction,2)+"</em> ("+(prediction/rV.total*100).toFixed(2)+"%)<br>";
					HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(prediction / fightLen * 1000,2)+"</em>";
					
				} else if(talentData.prediction_extra_parse && !talentSelected){	
					HTML += "</header><div id=\"talent-"+talentData.id+"-prediction\" style=\"padding:0;\"><a style=\"font-size: 2em;\">Get Data</a></div>";
					predictionButtons.push([talentData.id,talentData.prediction_extra_parse]);
				} else {
					HTML += "</header>"
				}
			
				HTML += "</div></div></div>";
			} else {
				HTML += "<div class=\"row w33 clearfix\"></div>";
			}
			
			counter++;
		}
	}	
	HTML += "</ul></div></div></div>";


	if(uV.BuildReportAfterTalents) HTML += uV.BuildReportAfterTalents(fightLen);			
	
	/// Potions
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">POTIONS</header><div class=\"list-top-line\"> </div><ul class=\"list potions\">";
	counter = 0;
	for (var i = 0, len = POTIONS.length; i < len; i++) {
		var potionData = POTIONS[i].obj
		if(rV.potions[potionData.id] > 0){
			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
			HTML += "<a href=\"//www.wowhead.com/spell="+potionData.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(potionData.icon)+"\" alt=\""+potionData.name+"\"></a></div>";
	
			HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+potionData.id+"\" target=\"_blank\">"+potionData.name+"</a></header>";
		
			if(!potionData.text){
				var amount = rV.potions[potionData.id]
				HTML += "<em class=\"result\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
				HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,1)+"</em>";
			} else {
				HTML += potionData.text();
			}
		
			HTML += "</div></div>";
			counter++;
		}
	}	
	HTML += "</ul></div></div></div>";
	
	
	/// Procs
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix procs\"><header class=\"box-header\">PROCS</header><div class=\"list-top-line\" style=\"margin-bottom:10px;\"> </div>";
	counter = 0;
	var procsData = [];
	Object.keys(rV.buffs).forEach(function (statName) {
		Object.keys(rV.buffs[statName]).forEach(function (spellID) {
			if(spellID > 0 && rV.buffs[statName][spellID] >= 0){
				var key = -1;
				for (var i = 0, len = procsData.length; i < len; i++){
					if(procsData[i][0] == spellID){
						key = i;
						break
					}
				}
				if(key == -1) {
					procsData.push([spellID,0,[]]);
					key = procsData.length - 1;
				}
				procsData[key][1] += rV.buffs[statName][spellID];
				procsData[key][2].push((statName=="haste_mod" ? "haste" : statName)+": "+NumberToFormattedNumber(rV.buffs[statName][spellID],0,2));
			}
		});
	});
	procsData.sort(function(a,b){ return a[1] > b[1] ? - 1 : 1 });
	for (var i = 0, len = procsData.length; i < len; i++) {
		var spellID = procsData[i][0];
		var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
		var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
		HTML += "<div class=\"row half\"><div class=\"col w40\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+"</a></div><div class=\"col w30\"><em class=\"tooltip\">"+NumberToFormattedNumber(procsData[i][1],0,2)+"<span class=\"tip-text\" style=\"width: 120px;margin-left:-60px;\">"+procsData[i][2].join("<br>")+"</span></em></div><div class=\"col w30\">"+(procsData[i][1]/rV.total*100).toFixed(2)+"%</div></div>";
	}
	HTML += "</div></div></div>";
		
	if(uV.BuildReportBeforeCooldowns) HTML += uV.BuildReportBeforeCooldowns(fightLen);
	
	/// COOLDOWNS
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">COOLDOWN USAGES</header><div class=\"list-top-line\"> </div><ul class=\"list cooldowns\">";
	for (var i = 0, len = cooldownsTracking.length; i < len; i++) {
		var obj = cooldownsTracking[i]
		var spellID = obj.spellID;
				
		HTML += "<li class=\"item clearfix\"><div class=\"row full\"><div class=\"col w70p\">";
		HTML += "<a href=\"//www.wowhead.com/spell="+spellID+"\"><img src=\""+GetIconUrl(cV.spellInfo[spellID].icon)+"\" alt=\""+cV.spellInfo[spellID].name+"\"></a></div>";
	
		HTML += "<div class=\"col half\">";
		HTML += "<header class=\"cd_header\"><a href=\"//www.wowhead.com/spell="+spellID+"\">"+cV.spellInfo[spellID].name+"</a> ("+MsToFormattedTime(obj.start - fightStart)+" -> "+MsToFormattedTime((obj.ended || fightEnd) - fightStart)+"):</header>";

		HTML += "<div class=\"col full div_more_1\">";
		for (var j = 0, j_len = obj.spells.length; j < j_len; j++) {
			var j_spellID = obj.spells[j].spell;
			HTML += "<a href=\"//www.wowhead.com/spell="+j_spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[j_spellID].icon)+"\" alt=\""+cV.spellInfo[j_spellID].name+"\"></a>";
			
		}
		HTML += "<br><a href=\"javascript:void(0)\" class=\"more_1\">more</a></div>";

		HTML += "<div class=\"col full div_more_2\" style=\"display:none;\">";
		for (var j = 0, j_len = obj.spells.length; j < j_len; j++) {
			var j_spellID = obj.spells[j].spell;
			HTML += "<div class=\"row full\"><div class=\"cd_more_2_time\">"+(obj.spells[j].time / 1000).toFixed(3)+"</div><div class=\"cd_more_2_info\">";
			HTML += "<a href=\"//www.wowhead.com/spell="+j_spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[j_spellID].icon)+"\" alt=\""+cV.spellInfo[j_spellID].name+"\"> "+cV.spellInfo[j_spellID].name+"</a></div></div>";
		}
		HTML += "<br><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=healing&source="+currFightData.actor+"&start="+obj.start+"&end="+(obj.ended || fightEnd)+"\" target=\"_blank\">WCL link</a>";
		HTML += "<br><a href=\"javascript:void(0)\" class=\"more_2\">even more</a></div>";
		
		HTML += "<div class=\"col full div_more_3\" style=\"display:none;\">";
		
		var cooldownData_healingMore_pos = 0;
		var overHeal = 0;
		//var devSpellsCount = {};
		for (var j = -1, j_len = obj.spells.length; j < j_len; j++) {
			if(j > -1){
				var j_spellID = obj.spells[j].spell;
				HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(obj.spells[j].time / 1000).toFixed(3)+"</div><div class=\"cd_more_3_info\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+j_spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[j_spellID].icon)+"\" alt=\""+cV.spellInfo[j_spellID].name+"\"> "+cV.spellInfo[j_spellID].name+"</a></div></div>";
			}
			var timeLimit = obj.spells[j+1] ? obj.spells[j+1].time : fightEnd;
			for (var k = cooldownData_healingMore_pos, k_len = obj.heal.length; k < k_len; k++) {
				if(obj.heal[k].time >= timeLimit) break;
				var healObj = obj.heal[k];
				
				HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(healObj.time / 1000).toFixed(3)+"</div><div class=\"cd_more_3_info cd_more_3_info_heal\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+healObj.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[healObj.id].icon)+"\" alt=\""+cV.spellInfo[healObj.id].name+"\"> "+cV.spellInfo[healObj.id].name+"</a> x"+healObj.count;
				HTML += "</div><div class=\"cd_more_3_info "+(healObj.type == 2 ? "cd_more_3_info_damage" : "cd_more_3_info_amount")+"\">"+healObj.amount.format()+"</div><div class=\"cd_more_3_info cd_more_3_info_over\">"+(healObj.over > 0 ? healObj.over.format() : "")+"</div></div>";				
				
				if(healObj.type != 2) overHeal += healObj.over;
				
				//if(!devSpellsCount[healObj.id]) devSpellsCount[healObj.id] = 0;devSpellsCount[healObj.id] += healObj.amount;
				
				cooldownData_healingMore_pos = k + 1;
			}
		}
		//console.log(cV.spellInfo[spellID].name,MsToFormattedTime(obj.start - fightStart),devSpellsCount);
		HTML += "<br><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=healing&source="+currFightData.actor+"&start="+obj.start+"&end="+(obj.ended || fightEnd)+"\" target=\"_blank\">WCL link</a>";
		HTML += "<br><a href=\"javascript:void(0)\" class=\"more_3\">hide</a></div></div>";

		
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(obj.healing,2)+"</div>HPS: "+NumberToFormattedNumber(obj.healing / ((obj.ended ? obj.ended : fightEnd) - obj.start) * 1000,2)+"</div>";
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+(overHeal / (obj.healing + overHeal) * 100).toFixed(2)+"%</div>overhealing</div>";
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(obj.mana,1)+"</div>Mana</div></div></li>";
	}
	HTML += "</ul></div></div></div>";
	
	if(uV.BuildReportBottom) HTML += uV.BuildReportBottom(fightLen,fightStart,fightEnd);
	
	$("#main").html(HTML);
	
	$("#nav-btn-main").html((uV.SPEC_NAME || "Data")+" Analyzer")

	$("a.more_1").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_2").show();return false;});
	$("a.more_2").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_3").show();return false;});
	$("a.more_3").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_1").show();return false;});
	$("a.more_3-2").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_2").show();return false;});

	for (var i = 0, len = predictionButtons.length; i < len; i++) {
		$("#talent-"+predictionButtons[i][0]+"-"+(predictionButtons[i][2] == true ? "result" : "prediction")).click(predictionButtons[i][1]);
	}

	$(".gear_charts_slot_select").click(function(){GEAR_CHARTS_SLOT=Number($(this).attr("data-id")); CreateGearChartData(fightLen); return false;});
	
	for (var i = 0, len = UpdateFromWowhead.length; i < len; i++) {
		GetItemDataFromWowhead(UpdateFromWowhead[i]);
	}

	$("a.more_graph").click(function(){
		var statsList = ["int","haste","mastery","vers","crit"];
		var statsListNames = ["Int","Haste","Mastery","Vers","Crit (w/o resurgence)"];
		var graphLabels = [];
		var graphSeries = [];
		for (var k = 0, k_len = statsList.length; k < k_len; k++) graphSeries.push([]);
		for (var j = 0, j_len = (fightLen / 1000 / STATS_GRAPH_STEP); j < j_len; j++) {
			if(healPerStat.graph[j]){
				graphLabels.push(MsToFormattedTime(j * 1000 * STATS_GRAPH_STEP));
				
				for (var k = 0, k_len = statsList.length; k < k_len; k++) {
					graphSeries[k].push(healPerStat.graph[j][ statsList[k] ].amount);
				}
			}
		}
		
		var x_d = Math.floor(fightLen / 1000 / 20 / STATS_GRAPH_STEP) + 1;
		
		new Chartist.Line('.ct-chart', { labels: graphLabels, series: graphSeries}, {
			fullWidth: true,
			height: 200,
			//showArea: true,
			showPoint: false,
			lineSmooth: Chartist.Interpolation.cardinal({tension: 0.65}),
			axisX: {
				labelInterpolationFnc: function(value, index) {
					return (index % x_d) == 0 ? value : null;
				}
			},
			plugins: [
				Chartist.plugins.legend({legendNames: statsListNames})
			]
		});	
	
		$("#stats_graph_more").hide();
		$("#stats_graph").show();
		return false;
	});
	
	document.getElementById("gear_chart_slider").oninput = function() {
		GEAR_CHARTS_ILVL = this.value;
		CreateGearChartData(fightLen);
	}
	
	CreateGearChartData(fightLen);
}

function BuildFightsList(){
	var HTML = "";
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><ul class=\"list fightslist\">";
	
	var WCLFightCounter = {};
	Object.keys(fightsData).forEach(function (fightID) {
		var obj = fightsData[fightID];
		if(obj.actors && obj.boss && diffIdToName[obj.difficulty]){
			WCLFightCounter[obj.boss] = WCLFightCounter[obj.boss] || {}
			WCLFightCounter[obj.boss][obj.difficulty] = (WCLFightCounter[obj.boss][obj.difficulty] || 0) + 1
			for (var j = 0, j_len = obj.actors.length; j < j_len; j++) {
				if(actorsData[ obj.actors[j] ].class && CLASS_AVAILABLE[ actorsData[ obj.actors[j] ].class ]){
					HTML += "<a href=\"?report="+reportFightCode+"&fight="+fightID+"&actor="+obj.actors[j]+"\" data-fight=\""+fightID+"\" data-actor=\""+obj.actors[j]+"\" class=\"fightlist-btn\">";
					HTML += "<li class=\"item clearfix\" style=\"padding: 5px 15px;\"><div class=\"row full\"><div class=\"col\" style=\"width:30%\">";
					HTML += diffIdToName[obj.difficulty]+" "+obj.name+" "+(!obj.kill ? "#"+WCLFightCounter[obj.boss][obj.difficulty] : "")+" <em class=\""+(obj.kill ? "kill" : "wipe")+"\">"+(obj.kill ? "kill" : "wipe")+"</em></div>";
					HTML += "<div class=\"col\" style=\"width:5%\">"+MsToFormattedTime(obj.end_time - obj.start_time)+"</div><div class=\"col\" style=\"width:20%\">"+actorsData[ obj.actors[j] ].name+"</div><div class=\"col\" style=\"width:20%\">"+actorsData[ obj.actors[j] ].class+"</div></div>";
					HTML += "</li></a>";
				}
			}
		}		
	});
	
	HTML += "</ul></div></div></div>";
	
	$("#main").html(HTML);
	
	$(".fightlist-btn").click(function(e){
		e.preventDefault();
		var fightID = $(this).attr("data-fight");
		var obj = fightsData[fightID];
		if(obj){
			var actorID = $(this).attr("data-actor");
			
			PrepParse(fightID, actorID);
		}
	});
	
	var HTML = "";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">"+(uV.SPEC_NAME || "Data")+" Analyzer</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"\" target=\"_blank\">Report</a></li>";
	$("#navbar-header").html(HTML);
	
	$("#nav-btn-main").click(function(e){ e.preventDefault(); BuildMainPage(); });
	
	$("#navbar-progress").width("0%").css('opacity', '0');
	
	window.history.pushState('report', 'Report', '?report='+reportFightCode);
}

function PrepParse(fightID,actorID){
	$("#navbar-progress").width("1%").css('opacity', '1');
	
	var obj = fightsData[fightID];
	
	currFightData.start_time = obj.start_time;
	currFightData.end_time = obj.end_time;
	currFightData.actor = actorID;
	currFightData.id = fightID;
	currFightData.name = diffIdToName[obj.difficulty]+" "+obj.name+(obj.kill ? " - Kill" : "");
	currFightData.actorName = actorsData[actorID].name;
	currFightData.len = obj.end_time - obj.start_time;
	
	PrepAllData();
	
	var HTML = "";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">"+(uV.SPEC_NAME || "Data")+" Analyzer</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?report="+reportFightCode+"\" id=\"nav-btn-fights\">"+currFightData.report_name+"</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=summary\" target=\"_blank\">"+currFightData.name+" ("+MsToFormattedTime(currFightData.end_time - currFightData.start_time)+")</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=healing&source="+currFightData.actor+"\" target=\"_blank\">"+currFightData.actorName+"</a></li>";
	$("#navbar-header").html(HTML);

	$("#nav-btn-main").click(function(e){ e.preventDefault(); BuildMainPage(); });
	$("#nav-btn-fights").click(function(e){ e.preventDefault(); BuildFightsList(); });
	
	$("#main").html("");

	window.history.pushState('result', 'Result', '?report='+reportFightCode+'&fight='+fightID+'&actor='+actorID);

	StartParceLog(reportFightCode,actorID,currFightData.start_time,currFightData.end_time);
}

function BuildMainPage(){
	var HTML = "";
	
	HTML += "<div class=\"panel half\" style=\"margin-right:auto;margin-left: auto;float:inherit;\"><div class=\"col-full\"><div class=\"box pos-center\" style=\"font-size: 14px;padding-left:20px;padding-bottom:20px\">";
	HTML += "<header class=\"box-header\">ANALYZE REPORT</header>";

	HTML += "<form id=\"mainpage-form\"><b>Enter your Warcraft Logs report code.</b><br>https://www.warcraftlogs.com/reports/ <input type=\"text\" id=\"mainpage-input\" size=\"20\" class=\"form-control\"> /<br>";
	HTML += "<input type=\"submit\" value=\"Analyze\" class=\"form-btn\" id=\"mainpage-btn\"></form></div></div></div>";

	$("#main").html(HTML);
	
	$("#mainpage-form").submit(function(e) {
		e.preventDefault();
	});
	
	$("#mainpage-btn").click(function(){
		reportFightCode = $("#mainpage-input").val();
		reportFightCode = reportFightCode.split('#')[0];
		var allSubs = reportFightCode.split('/');
		reportFightCode = allSubs[allSubs.length-1];
		ParseHeader(reportFightCode,true);
	});
	
	$('#mainpage-form').on('input',function(e){
		var text = $("#mainpage-input").val();
		text = text.split('#')[0];
		var allSubs = text.split('/');
		text = allSubs[allSubs.length-1];
		if (text.length >= 16) {
			reportFightCode = text;
			ParseHeader(reportFightCode,true);
		}
	});
	
	var HTML = "";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">"+(uV.SPEC_NAME || "Data")+" Analyzer</a></li>";
	$("#navbar-header").html(HTML);
	
	$("#nav-btn-main").click(function(e){ e.preventDefault(); BuildMainPage(); });
	
	window.history.pushState('main', 'Main', '?');
}

function UpdateOnMainPage(){
	$("footer .container div").html("Last update: "+LAST_UPDATE);
}

function QueryString() {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
};

$(document).ready(function() {
	UpdateOnMainPage();
	
	$.ajaxSetup({cache: true});
	
	var get = QueryString();
	if(get.report && get.fight && get.actor){
		reportFightCode = get.report
		ParseHeader(reportFightCode,false,function(){ PrepParse(get.fight,get.actor); });
	} else if (get.report){
		reportFightCode = get.report
		ParseHeader(reportFightCode,true);
	} else {
		BuildMainPage();
	}
});

