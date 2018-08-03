///
///
///   Resto Shaman Analyzer by Afiya
///	BFA
///
///

var LAST_UPDATE = "03.08.2018";

var itemsStats = {};

var STATS110 = {
	crit: 17.62282985,
	mastery: 17.62282985 / 3,
	haste: 16.52140298,
	vers: 20.92711045,
};
var STATS = {
	crit: 72,
	mastery: 72 / 3,
	haste: 68,
	vers: 85,
};

var baseMana110 = 20000 / 5;	//lvl 110
var baseMana = 100000 / 5;	//lvl 120
var spellManaCost = {
	77472: 9 / 100 * baseMana,	//hw
	1064: 25 / 100 * baseMana,	//ch
	61295: 8 / 100 * baseMana,	//riptide
	73685: 5 / 100 * baseMana,	//ul
	5394: 11 / 100 * baseMana,	//hst
	157153: 8.6 / 100 * baseMana,	//cbt
	8004: 20 / 100 * baseMana,	//surge
	73920: 21.6 / 100 * baseMana,	//hr
	79206: 14.1 / 100 * baseMana,	//Spiritwalker's Grace
	198838: 11 / 100 * baseMana,	//est
	98008: 11 / 100 * baseMana,	//slt
	108280: 5.6 / 100 * baseMana,	//htt
	188838: 15 / 100 * baseMana,	//Flame Shock
	51505: 6 / 100 * baseMana,	//Lava Burst
	192058: 10 / 100 * baseMana,	//Lightning Surge Totem	
	207399: 11 / 100 * baseMana,	//apt
	197995: 20 / 100 * baseMana,	//wellspring
	2825: 21.5 / 100 * baseMana,	//bl
	32182: 21.5 / 100 * baseMana,	//heroism
	974: 10 / 100 * baseMana,	//es
	8143: 2.3 / 100 * baseMana,	//tremor
	207778: 15 / 100 * baseMana,	//downpour
};

var spellCastTime = {
	77472: 2.5,	//hw
	1064: 2.5,	//ch
	61295: 1.5,	//riptide
	73685: 1.5,	//ul
	5394: 1.5,	//hst
	157153: 1.5,	//cbt
	8004: 1.5,	//surge
	73920: 2,	//hr
	198838: 1.5,	//est
	188838: 1.5,	//Flame Shock
	51505: 2,	//Lava Burst
	192058: 1.5,	//Lightning Surge Totem	
	207399: 1.5,	//apt
	197995: 1.5,	//wellspring
	207778: 2,	//gotq
	2645: 1.5,	//wolf
	207778: 1.5,	//downpour
};

var spellCastTimeNoCD = {	//only spells without cd
	77472: true,	//hw
	1064: true,	//ch
	8004: true,	//surge
};

var spellCastIDToHealID = {
	5394: [52042,208899],
	207778: [207778, 255227],
	157153: [157503],
	198838: [201633],
};

var spellCastAffectedQA = {
	77472: true,	//hw
	1064: true,	//ch
	8004: true,	//surge
};

var OverallBlacklist = {
	98021: true,	//slt
	208981: true,	//roots
	198838: true,	//est
	235967: true,	//velens itself
	206985: true, 	//guldan absorb
	143924: true, 	//leech
	225723: true,	//cake
	206838: true,	//trilliax
	207472: true,	//prydaz
	242621: true,	//tos(fa) trink
	242623: true,	//tos(kj) trink
	30884: true,	//Nature's Guardian
};

var spellScaleInt = {
	1064: true,	//ch
	73921: true,	//hr
	77472: true,	//hw
	61295: true,	//riptide
	207778: true,	//GotQ
	255227: true,	//GotQ
	52042: true,	//hst
	73685: true,	//ul
	208899: true,	//qd
	8004: true,	//surge
	197997: true,	//wellspring
	228401: true,	//Mark of the Ancient Priestess
	209069: true,	//tidal
	114942: true,	//htt
	379: true,	//es
	207778: true,	//downpour
};
var spellScaleMastery = {
	1064: true,	//ch
	73921: true,	//hr
	77472: true,	//hw
	61295: true,	//riptide
	207778: true,	//GotQ
	255227: true,	//GotQ
	52042: true,	//hst
	208899: true,	//qd
	8004: true,	//surge
	197997: true,	//wellspring
	//228401: true,	//Mark of the Ancient Priestess
	209069: true,	//tidal
	114942: true,	//htt
	73685: true,	//ul [fixed in 7.2.5]
	379: true,	//es
	207778: true,	//downpour
};
var spellNotScaleHaste = {
	208899: true,	//qd
	209069: true,	//tidal
	98021: true,	//slt
	208981: true,	//roots
	//242622: true,	//kj trink
	242619: true,	//tos(fa) trink
	257442: true,	//abt eonar
}
var spellAffectedByHaste = {	//not tick events, but still haste scaling
	73921: true,	//hr
	114942: true,	//htt
};

var spellScaleVers = {
	1064: true,	//ch
	73921: true,	//hr
	77472: true,	//hw
	61295: true,	//riptide
	207778: true,	//GotQ
	255227: true,	//GotQ
	52042: true,	//hst
	208899: true,	//qd
	8004: true,	//surge
	197997: true,	//wellspring
	228401: true,	//Mark of the Ancient Priestess
	209069: true,	//tidal
	114942: true,	//htt
	73685: true,	//ul
	379: true,	//es
	207778: true,	//downpour
	242327: true,	//tos(di) trink
	242622: true,	//tos(kj) trink
	242623: true,	//tos(kj) trink
	242474: true,	//tos(sea) trink
	242619: true,	//tos(fa) trink
	242621: true,	//tos(fa) trink
	257442: true,	//abt eonar 154175
	253227: true,	//abt absorb shield trink 151957
	253228: true,	//abt machination 152289
	253282: true,	//abt key 151958
};


function CreateSpecialSpellCurrentData(){
	return {
		feedBySpell: {},
		feed: 0,
	}
}

var sSpellsKeys = ["CBT","ASC"];
var sSpells = {		// specialSpellSpellID, blacklist of spells that not feed special spell, SpellID for icon
	CBT: [157503,
		{
			157503: true,	//cbt
			52042: true,	//hst
			//209069: true,	//tidal
			114942: true,	//htt
			98021: true,	//slt
			206985: true, 	//guldan absorb
			143924: true, 	//leech
			235967: true,	//velens
			201633: true,	//est
		},	
	157503],
	ASC: [114083, 
		{
			114083: true,	//asc
			114911: true,	//ag
			157503: true,	//cbt
			52042: true,	//hst
			209069: true,	//tidal
			114942: true,	//htt
			98021: true,	//slt
			206985: true, 	//guldan absorb
			143924: true, 	//leech
			235967: true,	//velens
			201633: true,	//est
		},
	114052],
};

var cooldownsTrackingIDs = {
	108281: true,
	235966: true,
	114052: true,
	29166: true,
};
var cooldownsTrackingIDsbyCast = {
	157153: 15500,
};

var ignoredSpellsForCDTracking = {
	198839: true,
	201633: true,
	5672: true,
	257442: true,
};

var healingFromMana = {
	1064: 1,	//ch
	73921: 1,	//hr
	157503: 0.75,	//cbt
	77472: 1,	//hw
	61295: 1,	//riptide
	114911: 0.75,	//ag
	//52042: 1,	//hst
	//208899: 1,	//qd
	73685: 1,	//ul
	235967: 0.75,	//velens
	114083: 0.75,	//asc
	8004: 1,	//surge
	197997: 1,	//wellspring
	379: 1,		//es
	207778: 1,	//downpour
};

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

var statsBuffs = {
	vers: {

	},
	crit: {
		268905: 50,	//weapon ench
		268904: 400,	//weapon ench
	},
	haste: {
		268887: 50,	//weapon ench
		268893: 400,	//weapon ench
	},
	haste_mod: {
		80353: 1.3,	//BL
		2825: 1.3,	//BL
		32182: 1.3,	//BL
		160452: 1.3,	//BL
		90355: 1.3,	//BL
		146555: 1.25,	//BL
		230935: 1.25,	//BL
		208052: 1.25,	//Sephuz
		26297: 1.15,	//Troll racial
		202842: 1.1,	//Innervate moonkin
	},
	mastery: {

	},
	int: {

	},
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

var actors = [];		// Used for filter events only for char & his summons
var actorsData = [];		// All units data
var fightsData = [];		// All fights data
var healingData = [];		// Spells healing data
var currFightData = [];		// Selected fight info
var pV = {};			// "Garbage" variables, used for parsing
var rV = {			// Result Variables
	talents: [],
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
	manaGain: 0,
};
var cV = {			// Char Variables
	traitInfo: [],
	gearInfo: [],
	talentInfo: [],
	spellInfo: [],
};
var healPerStat = {		// Healing per stat data
	int: {amount:0,total:0,avg:0,avgCount:0},
	crit: {amount:0,total:0,avg:0,avgCount:0},
	haste: {amount:0,total:0,avg:0,avgCount:0},
	mastery: {amount:0,total:0,avg:0,avgCount:0,all:0},
	vers: {amount:0,total:0,avg:0,avgCount:0},
};
var cooldownsTracking = [];	// Cooldowns data
var sltTracking = [];		// Spirit Link data
var buffStatus = [];		// Buffs

var reportFightCode;


function GetTraitRank(traitID)
{
	if(cV.traitInfo[traitID])
		return cV.traitInfo[traitID].rank;
	else
		return 0;
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

function GetFeedTooltip(spellID,dataName){
	var feed_str = "";
	for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
		var amount = null;
		if(dataName){
			amount = rV[ dataName+"_feed"+sSpellsKeys[k] ];
		} else if (rV.feed[ sSpellsKeys[k] ].spells[spellID]) {
			amount = rV.feed[ sSpellsKeys[k] ].spells[spellID][0];
		}
		
		if(amount) {
			var icon_spellID = sSpells[ sSpellsKeys[k] ][2];
			var icon = cV.spellInfo[icon_spellID] ? cV.spellInfo[icon_spellID].icon : "";
			var name = cV.spellInfo[icon_spellID] ? cV.spellInfo[icon_spellID].name : "";
			feed_str += "<br><img src=\"http://media.blizzard.com/wow/icons/56/"+icon+"\" alt=\""+name+"\" style=\"width:20px;height:20px;\"> "+name+" - "+NumberToFormattedNumber(amount,0,2);
		}
	}
	return feed_str;
}

function CreateFeedInfoInData(dataName){
	pV[dataName+"_ssCBT"] = 0;
	pV[dataName+"_ssAG"] = 0;
	pV[dataName+"_ssASC"] = 0;
	pV[dataName+"_ssCBTprev"] = 0;
	pV[dataName+"_ssAGprev"] = 0;
	pV[dataName+"_ssASCprev"] = 0;
	rV[dataName+"_feedCBT"] = 0;
	rV[dataName+"_feedAG"] = 0;
	rV[dataName+"_feedASC"] = 0;
}
function AddFeedAmountToData(dataName,amount){
	if(pV.ssCBTstatus) pV[dataName+"_ssCBT"] += amount;
	if(pV.ssAGstatus) pV[dataName+"_ssAG"] += amount;
	if(pV.ssASCstatus) pV[dataName+"_ssASC"] += amount;
}
function CollectFeedAmountToData(dataName,ssType,addType,totalAmount,totalSpellFeed){
	if(addType == 1){
		rV[dataName+"_feed"+ssType] += pV[dataName+"_ss"+ssType] / totalSpellFeed * totalAmount;
		pV[dataName+"_ss"+ssType+"prev"] = pV[dataName+"_ss"+ssType];
		pV[dataName+"_ss"+ssType] = 0;
	} else if(addType == 2){
		rV[dataName+"_feed"+ssType] += pV[dataName+"_ss"+ssType+"prev"] / totalSpellFeed * totalAmount;						
	}
}

function error_msg(msg) {
	$("#main").html("<div class=\"panel\"><div class=\"col-full\"><div class=\"box\">"+msg+"</div></div></div>");

}

var NETHERLIGHT;

var ITEMS = [
	{	//Velens
		init: function() {
			rV.velensAmount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(pV.velensEnabled && !OverallBlacklist[spellID]){
					rV.velensAmount += amount * (1 - (1 / 1.15));
				} else if(spellID == 235967){
					rV.velensAmount += amount;
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 235966) pV.velensEnabled = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 235966) pV.velensEnabled = false;
			},
		],
		obj: {
			type: "item",
			name: "Velen's Future Sight",
			quality: 5,
			id: 144258,
			gear: "velensAmount",
		},
	},
	{	//Tidecallers
		init: function() {
			rV.tidecallersAmount = 0;
			rV.tidecallersPredictionAmount = 0;
			pV.tidecallersHST = [];
			pV.tidecallersQD = {};
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 114942){ //htt
					if(pV.tidecallersLast && event.timestamp >= pV.tidecallersLast) rV.tidecallersAmount += amount;
				} else if (spellID == 52042) { //hst
					for (var j = 0, j_len = pV.tidecallersHST.length; j < j_len; j++) {
						if(event.timestamp >= pV.tidecallersHST[j][0] && event.timestamp <= pV.tidecallersHST[j][1]){
							rV.tidecallersAmount += amount;
						}
					}
				} else if (spellID == 208899) { //qd
					if(pV.tidecallersQD[ event.targetID ] && event.timestamp <= pV.tidecallersQD[ event.targetID ]){
						rV.tidecallersAmount += amount;
					}
				}
			},
			"cast", function(event,spellID){
				if(spellID == 108280) { //htt
					pV.tidecallersLast = event.timestamp + 10000;
				} else if (spellID == 5394) { //hst
					pV.tidecallersHST.push([event.timestamp + 15000,event.timestamp + 18200]);
				} 
			},
			"applybuff", function(event,spellID){
				if(spellID == 208899) {
					for (var j = 0, j_len = pV.tidecallersHST.length; j < j_len; j++) {
						if(event.timestamp >= pV.tidecallersHST[j][0] && event.timestamp <= pV.tidecallersHST[j][1]){
							pV.tidecallersQD[ event.targetID ] = event.timestamp + 6200;
						}
					}
				}
			},
		],
		afterParse: function() {
			if(healingData[52042]) {
				//rV.tidecallersAmount += healingData[52042][0] * 0.16666;
				rV.tidecallersPredictionAmount += healingData[52042][0] * 0.2;
			}
			if(healingData[208899]) {
				//rV.tidecallersAmount += healingData[208899][0] * 0.16666;
				rV.tidecallersPredictionAmount += healingData[208899][0] * 0.2;
			}
			if(healingData[114942]) rV.tidecallersPredictionAmount += healingData[114942][0] * 0.2;
		},
		obj: {
			type: "item",
			name: "Praetorian's Tidecallers",
			quality: 5,
			id: 137058,
			prediction: "tidecallersPredictionAmount",
			gear: "tidecallersAmount",
		},
	},
	{	//jonat
		init: function() {
			rV.jonatAmount = 0;
			pV.jonatCount = 0;
			
			rV.jonatPredictionAmount = 0;
			pV.jonatLast = 0;
			pV.jonatPredictionLast = 0;
			pV.jonatPredictionCount = 0;
			pV.jonatPredictionCountNow = 0;
			
			pV.jonatAmountCBT = 0;
			pV.jonatAmountAG = 0;
			pV.jonatAmountASC = 0;
			
			pV.jonatAvgBuff = 0;
			pV.jonatAvgBuffCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 1064){ //ch
					if(event["timestamp"] < pV.jonatLast){
						rV.jonatAmount += amount * (1 - 1 / (1 + 0.10 * pV.jonatCount));
						
						var amWOh = (amount + (event.overheal || 0)) * (1 - 1 / (1 + 0.10 * pV.jonatCount));
						if(pV.ssAGstatus) pV.jonatAmountAG += amWOh;
						if(pV.ssCBTstatus) pV.jonatAmountCBT += amWOh;
						if(pV.ssASCstatus) pV.jonatAmountASC += amWOh;
					}
					
					if(event["timestamp"] < pV.jonatPredictionLast){
						rV.jonatPredictionAmount += amount * (0.10 * pV.jonatPredictionCountNow);
					}
				}
			},
			"cast", function(event,spellID){
				if(spellID == 1064) { //ch
					pV.jonatPredictionCountNow = pV.jonatPredictionCount;
					pV.jonatPredictionLast = event["timestamp"] + 1000;
					pV.jonatPredictionCount = 0;
					
					pV.jonatAvgBuffCount++;
					pV.jonatAvgBuff+=pV.jonatPredictionCountNow;
				} else if(spellID == 77472 || spellID == 8004) { //hw & surge
					pV.jonatPredictionCount = Math.min(pV.jonatPredictionCount+1,5);
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 210607) pV.jonatCount = 1;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 210607) pV.jonatCount = event.stack;
			},
			"removebuff", function(event,spellID){
				if(spellID == 210607) pV.jonatLast = event.timestamp + 500;
			},
			"removebuffstack", function(event,spellID){
				if(spellID == 210607) pV.jonatLast = event.timestamp + 500;
			},
		],
		afterParse: function() {

		},		
		obj: {
			type: "item",
			name: "Focuser of Jonat, the Elder",
			quality: 5,
			id: 137051,
			prediction: "jonatPredictionAmount",
			gear: "jonatAmount",
			gearAdditionalText: function() { 
				if(pV.jonatAvgBuffCount > 0)
					return "Avg buff: "+(pV.jonatAvgBuff / pV.jonatAvgBuffCount * 10).toFixed(0)+"%";
				else
					return "Avg buff: 0%";
			},
		},
	},
	{	//prydaz
		init: function() {
			rV.prydazAmount = 0;
			rV.prydazPredictionAmount = 0;
			pV.prydazNextReset = 0;
			pV.prydazCurrent = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && event.resourceActor == 2 && event.maxHitPoints){
					if(event.timestamp > pV.prydazNextReset) {
						pV.prydazCurrent = event.maxHitPoints * 0.25;
						while(pV.prydazNextReset < event.timestamp){
							pV.prydazNextReset += 30000;
						}
					}
					var prydaz = Math.min(pV.prydazCurrent,event.amount);
					rV.prydazPredictionAmount += prydaz;
					pV.prydazCurrent -= prydaz;
				}
				
			},
			"combantantInfo", function(event){
				pV.prydazNextReset = event.timestamp - 1;
			}
		],
		afterParse: function() {
			if(healingData[207472]) {
				rV.prydazAmount = healingData[207472][0];
			}
		},
		obj: {
			type: "item",
			name: "Prydaz, Xavaric's Magnum Opus",
			quality: 5,
			id: 132444,
			prediction: "prydazPredictionAmount",
			gear: "prydazAmount",
		},
	},
	{	//2t20
		init: function() {
			rV.t20_2p_PredictionAmount = 0;
			rV.t20_2p_Amount = 0;
			rV.t20_2p_Count = 0;
			pV.t20_2p_gearCount = 0;
			pV.t20_2p_last = 0;
			pV.t20_2p_curr = 0;
			pV.t20_2p_curr_targets = [];
			pV.t20_2p_pred_targets = [];
			pV.t20_2p_buffLast = 0;
			
			CreateFeedInfoInData("t20_2p");
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 61295){
					//prediction
					if(!event.tick){
						if(event.timestamp > pV.t20_2p_last){
							pV.t20_2p_last = event.timestamp + 60000;
							pV.t20_2p_curr = 3;	//~3 ppm on testing
						}
						if(pV.t20_2p_curr > 0){
							if(event.hitType == 1){
								rV.t20_2p_PredictionAmount += amount;
								
								pV.t20_4p_PredictionNext = event.timestamp + 15000;
							}
							pV.t20_2p_pred_targets[event.targetID] = event.timestamp + 18000;
							pV.t20_2p_curr--;
						}
					} else if(pV.t20_2p_pred_targets[event.targetID] && pV.t20_2p_pred_targets[event.targetID] <= event.timestamp && event.hitType == 1){
						rV.t20_2p_PredictionAmount += amount;
					}
					

					//real
					if(!event.tick){
						if(pV.t20_2p_buffActive || (event.timestamp <= pV.t20_2p_buffLast)){
							pV.t20_2p_curr_targets[event.targetID] = event.timestamp + 18000;
							rV.t20_2p_Count ++;
						} else {
							pV.t20_2p_curr_targets[event.targetID] = 0;
						}
					}
					if(pV.t20_2p_curr_targets[event.targetID] && pV.t20_2p_curr_targets[event.targetID] >= event.timestamp && event.hitType == 2){
						rV.t20_2p_Amount += pV.critAmount * Math.max(1 - (pV.critNow / 40000),0);
						
						AddFeedAmountToData("t20_2p",pV.critAmount * Math.max(1 - (pV.critNow / 40000),0));
					}
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 246729) {
					pV.t20_2p_buffLast = event.timestamp + 500;
					pV.t20_2p_buffActive = false;
				}
			},	
			"applybuff", function(event,spellID){
				if(spellID == 246729) {
					pV.t20_2p_buffActive = true;
				}
			},				
			"gear", function(itemData,itemID){
				if(itemID == 147175 || itemID == 147176 || itemID == 147177 || itemID == 147178 || itemID == 147179 || itemID == 147180) pV.t20_2p_gearCount++;
			},
			"special", function(sType,ssType,addType,spellID,totalAmount,totalSpellFeed){
				if(sType == "SS" && spellID == 61295){
					CollectFeedAmountToData("t20_2p",ssType,addType,totalAmount,totalSpellFeed);
				}
			},
		],
		afterParse: function() {
			rV.t20_2p_AmountNoFeed = rV.t20_2p_Amount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV[ "t20_2p_feed"+sSpellsKeys[k] ]) rV.t20_2p_Amount += rV[ "t20_2p_feed"+sSpellsKeys[k] ];
			}			
		},
		obj: {
			type: "spell",
			name: "T20 2 set Bonus",
			quality: 10,
			id: 242287,
			prediction: "t20_2p_PredictionAmount",
			predictionСondition: function() { return pV.t20_2p_gearCount < 2 },
			gear: "t20_2p_Amount",
			gearFunc: function() { return pV.t20_4p_gearCount >= 2 },
			//gearAdditionalText: function() { return rV.t20_2p_Count+" times" },
			gearAdditionalText: function() { return rV.t20_2p_Count+" times<br><em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.t20_2p_AmountNoFeed,0,2)+"<br>This bonus also feed your CBT, AG and ASC."+GetFeedTooltip(null,"t20_2p")+"</span></em>" },
			icon: "spell_nature_riptide.jpg",
		},
	},
	{	//4t20
		init: function() {
			rV.t20_4p_Amount = 0;
			rV.t20_4p_AmountNoFeed = 0;
			rV.t20_4p_Count = 0;
			rV.t20_4p_PredictionAmount = 0;
			pV.t20_4p_gearCount = 0;
			pV.t20_4p_PredictionNext = 0;
			pV.t20_4p_buffLast = 0;
			
			CreateFeedInfoInData("t20_4p");
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 61295 && !event.tick && event.hitType == 2){
					pV.t20_4p_PredictionNext = event.timestamp + 15000;
				} else if (spellID == 73921 && pV.t20_4p_PredictionEnabled){
					rV.t20_4p_PredictionAmount += amount * 0.5;
				}
				
				if(spellID == 73921 && pV.t20_4p_Active){
					rV.t20_4p_Amount += amount * (1 - (1 / 1.5));
					AddFeedAmountToData("t20_4p",(amount + overheal) * (1 - (1 / 1.5)));
				}
			},
			"cast", function(event,spellID){
				if(spellID == 73920){
					pV.t20_4p_PredictionEnabled = false;
					if(event.timestamp <= pV.t20_4p_PredictionNext){
						pV.t20_4p_PredictionEnabled = true;
					}
					pV.t20_4p_PredictionNext = 0;
					
					pV.t20_4p_Active = false;
					if(event.timestamp <= pV.t20_4p_buffLast){
						pV.t20_4p_Active = true;
						rV.t20_4p_Count ++;
					}
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 246771) pV.t20_4p_buffLast = event.timestamp + 500;
			},
			"gear", function(itemData,itemID){
				if(itemID == 147175 || itemID == 147176 || itemID == 147177 || itemID == 147178 || itemID == 147179 || itemID == 147180) pV.t20_4p_gearCount++;
			},
			"special", function(sType,ssType,addType,spellID,totalAmount,totalSpellFeed){
				if(sType == "SS" && spellID == 73921){
					CollectFeedAmountToData("t20_4p",ssType,addType,totalAmount,totalSpellFeed);
				}
			},
		],
		afterParse: function() {
			rV.t20_4p_AmountNoFeed = rV.t20_4p_Amount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV[ "t20_4p_feed"+sSpellsKeys[k] ]) rV.t20_4p_Amount += rV[ "t20_4p_feed"+sSpellsKeys[k] ];
			}			
		},
		obj: {
			type: "spell",
			name: "T20 4 set Bonus",
			quality: 10,
			id: 242288,
			prediction: "t20_4p_PredictionAmount",
			predictionСondition: function() { return pV.t20_2p_gearCount < 4 },
			gear: "t20_4p_Amount",
			gearFunc: function() { return pV.t20_4p_gearCount >= 4 },
			gearAdditionalText: function() { return rV.t20_4p_Count+" times<br><em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.t20_4p_AmountNoFeed,0,2)+"<br>This bonus also feed your CBT, AG and ASC."+GetFeedTooltip(null,"t20_4p")+"</span></em>" },
			icon: "spell_nature_giftofthewaterspirit.jpg",
		},
	},
	{	//paradox
		init: function() {
			rV.paradoxAmount = 0;
			rV.paradoxMana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 225772){
					rV.manaGain += 19800;
					rV.paradoxAmount += event.resourceChange + 19800;
					rV.manaUsage -= 19800;
					if(rV.manaUsageBySpell[77472]) rV.manaUsageBySpell[77472] -= 19800;
					
					for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
						if(cooldownsTracking[j].opened){
							cooldownsTracking[j].mana -= 19800;
						}
					}
				}
			},
		],
		afterParse: function() {
			rV.paradoxMana = rV.paradoxAmount;
			rV.paradoxAmount = rV.paradoxMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Ephemeral Paradox",
			quality: 4,
			id: 140805,
			gear: "paradoxAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.paradoxMana,0,2); },
		},
	},
	{	//2t19
		init: function() {
			rV.t19_2p_Amount = 0;
			rV.t19_2p_Count = 0;
			pV.t19_2p_gearCount = 0;
			pV.t19_2p_twloss = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if((spellID == 77472 || spellID == 8004) && event.timestamp <= pV.t19_2p_twloss){
					rV.t19_2p_Amount += amount * 0.13044;
					rV.t19_2p_Count ++;		
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 53390) pV.t19_2p_twloss = event.timestamp + 500;
			},
			"removebuffstack", function(event,spellID){
				if(spellID == 53390) pV.t19_2p_twloss = event.timestamp + 500;
			},
			"gear", function(itemData,itemID){
				if(itemID == 138343 || itemID == 138341 || itemID == 138345 || itemID == 138346 || itemID == 138348 || itemID == 138372) pV.t19_2p_gearCount++;
			}
		],
		obj: {
			type: "spell",
			name: "T19 2 set Bonus",
			quality: 10,
			id: 211992,
			gear: "t19_2p_Amount",
			gearFunc: function() { return pV.t19_2p_gearCount >= 2 },
			gearAdditionalText: function() { return rV.t19_2p_Count+" times" },
			icon: "spell_shaman_tidalwaves.jpg",
		},
	},
	{	//uncertain
		init: function() {
			rV.uncertainAmount = 0;
			pV.uncertainActive = 0;
			rV.uncertainPredictionAmount = 0;
			pV.uncertainPredictionTime = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(!OverallBlacklist[spellID]){
					if(pV.uncertainActive && (event.timestamp >= pV.uncertainTime)){
						rV.uncertainAmount += amount * (1 - 1 / 1.25);
					}
					if(event.timestamp < pV.uncertainPredictionTime){
						rV.uncertainPredictionAmount += amount * 0.25;
					}				
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 208416) {
					pV.uncertainActive = true;
					pV.uncertainTime = event.timestamp + 40000;
				}
			},			
			"removebuff", function(event,spellID){
				if(spellID == 208416) {
					pV.uncertainActive = false;
					pV.uncertainTime = 0;
					pV.uncertainPredictionTime = event.timestamp + 30000;
				}
			},			
		],
		obj: {
			type: "item",
			name: "Uncertain Reminder",
			quality: 5,
			id: 143732,
			prediction: "uncertainPredictionAmount",
			gear: "uncertainAmount",
		},
	},
	{	//boots
		init: function() {
			rV.bootsAmount = 0;
			rV.bootsPredictionAmount = 0;
			pV.bootsData = [];
			pV.bootsCast = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 73921){
					pV.bootsData[ event.targetID ] = true;
				} else if(pV.bootsData[ event.targetID ] && event.timestamp <= pV.bootsCast){
					rV.bootsPredictionAmount += amount * 0.1;
					rV.bootsAmount += amount * (1 - 1 / 1.1);
				}
			},
			"cast", function(event,spellID){
				if(spellID == 73920) {
					pV.bootsData = [];
					pV.bootsCast = event.timestamp + 10000;
				}
			},		
		],
		obj: {
			type: "item",
			name: "Elemental Rebalancers",
			quality: 5,
			id: 137036,
			prediction: "bootsPredictionAmount",
			gear: "bootsAmount",
		},
	},
	{	//nobundos
		init: function() {
			rV.nobundosAmount = 0;
			rV.nobundosMana = 0;
			rV.nobundosCount = 0;
			rV.nobundosPredictionAmount = 0;
			rV.nobundosPredictionMana = 0;
			rV.nobundosPredictionCount = 0;
			pV.nobundosLastCast = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 8004) {
					if(pV.nobundosLast){
						rV.nobundosPredictionMana += spellManaCost[8004] / 2;
						rV.nobundosPredictionCount++;
					}
					pV.nobundosLast = false;
					
					pV.nobundosLastCast = event.timestamp + 500;
				} else if(spellID == 1064) {
					pV.nobundosLast = true;
				}
			},		
			"removebuff", function(event,spellID){
				if(spellID == 208764 && (event.timestamp <= pV.nobundosLastCast)){
					rV.nobundosMana += spellManaCost[8004] / 2;
					rV.nobundosCount++;
					rV.manaGain += spellManaCost[8004] / 2;
					rV.manaUsage -= spellManaCost[8004] / 2;
					if(rV.manaUsageBySpell[8004]) rV.manaUsageBySpell[8004] -= spellManaCost[8004] / 2;
				}			
			},
		],
		afterParse: function() {
			rV.nobundosAmount = rV.nobundosMana / rV.manaUsage * rV.healFromMana;
			rV.nobundosPredictionAmount = rV.nobundosPredictionMana / (rV.manaUsage - rV.nobundosPredictionMana) * rV.healFromMana ;
		},
		obj: {
			type: "item",
			name: "Nobundo's Redemption",
			quality: 5,
			id: 137104,
			prediction: "nobundosPredictionAmount",
			gear: "nobundosAmount",
			text: function() { return "(mana saved: "+NumberToFormattedNumber(rV.nobundosPredictionMana,0,2)+")"; },
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.nobundosMana,0,2); },
		},
	},
	{	//manaring
		init: function() {
			rV.manaringAmount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(pV.manaringActive){
					rV.manaringAmount += amount * (1 - 1 / 1.05);
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 228461) pV.manaringActive = true;
			},			
			"removebuff", function(event,spellID){
				if(spellID == 228461) pV.manaringActive = false;
			},		
		],
		obj: {
			type: "item",
			name: "Gnawed Thumb Ring",
			quality: 4,
			id: 134526,
			gear: "manaringAmount",
		},
	},
	{	//roots
		init: function() {
			pV.rootsPlayerHP = 1;
			rV.rootsAmount = 0;
			rV.rootsPredictionAmount = 0;
			rV.rootsAmountNoFeed = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && event.resourceActor == 2 && event.maxHitPoints) pV.rootsPlayerHP = event.maxHitPoints;
			}
		],
		afterParse: function() {
			if(healingData[208981]) {
				rV.rootsAmount += healingData[208981][0];
			}
			rV.rootsAmountNoFeed = rV.rootsAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[208981]) rV.rootsAmount += rV.feed[ sSpellsKeys[k] ].spells[208981][0];
			}
			rV.rootsPredictionAmount = pV.rootsPlayerHP * 0.03 * (currFightData.end_time - currFightData.start_time) / 1000 * 0.2;
		},
		obj: {
			type: "item",
			name: "Roots of Shaladrassil",
			quality: 5,
			id: 132466,
			gear: "rootsAmount",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.rootsAmountNoFeed,0,2)+"<br>This item also feed your CBT, AG and ASC."+GetFeedTooltip(208981)+"<br>Note! It also feed when player with full hp, but that event is missing in logs. Can be a little inaccurate in that way</span></em>" },
		},
	},
	{	//cake
		init: function() {
			rV.cakeAmount = 0;
		},
		afterParse: function() {
			if(healingData[225723]) {
				rV.cakeAmount = healingData[225723][0];
			}
		},
		obj: {
			type: "item",
			name: "Perfectly Preserved Cake",
			quality: 4,
			id: 140793,
			gear: "cakeAmount",
		},
	},
	{	//etraeus
		init: function() {
			rV.etraeusAmount = 0;
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 140803) {
					var etraeusBuffStat = ScaleStat(3892.9,875,itemData.itemLevel);
					statsBuffs.haste[225753] = etraeusBuffStat;
					statsBuffs.mastery[225752] = etraeusBuffStat;
					statsBuffs.crit[225749] = etraeusBuffStat;
				}
			}
		],
		afterParse: function() {
			if(rV.buffs.haste[225753]) rV.etraeusAmount += rV.buffs.haste[225753];
			if(rV.buffs.mastery[225752]) rV.etraeusAmount += rV.buffs.mastery[225752];
			if(rV.buffs.crit[225749]) rV.etraeusAmount += rV.buffs.crit[225749];
		},
		obj: {
			type: "item",
			name: "Etraeus' Celestial Map",
			quality: 4,
			id: 140803,
			gear: "etraeusAmount",
		},
	},
	{	//Dreadstone of Endless Shadows
		init: function() {
			rV.coentrinkAmount = 0;
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 144480) {
					var buffStat = ScaleStat(3892.9,875,itemData.itemLevel);
					statsBuffs.haste[238501] = buffStat;
					statsBuffs.mastery[238500] = buffStat;
					statsBuffs.crit[238499] = buffStat;
				}
			}
		],
		afterParse: function() {
			if(rV.buffs.haste[238501]) rV.coentrinkAmount += rV.buffs.haste[238501];
			if(rV.buffs.mastery[238500]) rV.coentrinkAmount += rV.buffs.mastery[238500];
			if(rV.buffs.crit[238499]) rV.coentrinkAmount += rV.buffs.crit[238499];
		},
		obj: {
			type: "item",
			name: "Dreadstone of Endless Shadows",
			quality: 4,
			id: 144480,
			gear: "coentrinkAmount",
		},
	},	
	{	//darkmoon
		init: function() {
			rV.darkmoonAmount = 0;
			rV.darkmoonAmountMana = 0;
			pV.darkmoonManaNow = 0;
			pV.darkmoonBuffs = {
				191615: 770,
				191616: 1059,
				191617: 1349,
				191618: 1636,
				191619: 1924,
				191620: 2212,
				191621: 2501,
				191622: 3078,
			};
		},
		parse: [
			"cast", function(event,spellID){
 				if(spellManaCost[spellID] && !pV.innervate && (pV.darkmoonManaNow > 0)){
					rV.darkmoonAmountMana += pV.darkmoonManaNow;
					rV.manaGain += pV.darkmoonManaNow;
					rV.manaUsage -= pV.darkmoonManaNow;
					rV.manaUsageBySpell[pV.manaUsageLastSpell] -= pV.darkmoonManaNow;
				}
			},
			"applybuff", function(event,spellID){
				if(pV.darkmoonBuffs[spellID]) pV.darkmoonManaNow = pV.darkmoonBuffs[spellID];
			},
			"gear", function(itemData,itemID){
				if(itemID == 128710) {
					var updatedVals = {};
					Object.keys(pV.darkmoonBuffs).forEach(function (buffSpellID) {
						updatedVals[buffSpellID] = ScaleStat(pV.darkmoonBuffs[buffSpellID],900,itemData.itemLevel);
					});
					pV.darkmoonBuffs = updatedVals;
				}
			}
		],
		afterParse: function() {
			rV.darkmoonAmount = rV.darkmoonAmountMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Darkmoon Deck: Promises",
			quality: 4,
			id: 128710,
			gear: "darkmoonAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.darkmoonAmountMana,0,2); },
		},
	},
	{	//drape
		init: function() {
			rV.drapeAmount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
 				if(event.hitType == 2){
					rV.drapeAmount += pV.critAmount * (0.05 / 1.05);
				}
			},
		],
		obj: {
			type: "item",
			name: "Drape of Shame",
			quality: 4,
			id: 142170,
			gear: "drapeAmount",
		},
	},
	{	//belt
		init: function() {
			rV.beltAmount = 0;
			rV.beltCount = 0;
			pV.beltRiptideCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
 				if(spellID == 61295 && !event.tick && event.resourceActor == 2 && event.hitPoints && event.maxHitPoints){
 					var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
					if(targetHPbeforeHeal <= .4) rV.beltCount++;
				}
			},
			"cast", function(event,spellID){
 				if(spellID == 61295) pV.beltRiptideCount++;
			},			
		],
		afterParse: function() {
			if(healingData[61295]) rV.beltAmount = healingData[61295][0] / pV.beltRiptideCount * rV.beltCount;
		},
		obj: {
			type: "item",
			name: "Intact Nazjatar Molting",
			quality: 5,
			id: 137085,
			gear: "beltAmount",
			gearAdditionalText: function() { return "Procs number: "+rV.beltCount; },
			prediction: "beltAmount",
			text: function() { return "(procs: "+rV.beltCount+")"; }, 
		},
	},
	{	//Amalgam
		init: function() {
			rV.amalgamAmount = 0;
			rV.amalgamMana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 215270){
					rV.manaGain += event.resourceChange;
					rV.amalgamMana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			rV.amalgamAmount = rV.amalgamMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Amalgam's Seventh Spine",
			quality: 4,
			id: 136714,
			gear: "amalgamAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.amalgamMana,0,2); },
		},
	},
	{	//kara trink
		init: function() {
			rV.karatrinkAmount = 0;
			rV.karatrinkMana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 230144){
					rV.manaGain += event.resourceChange;
					rV.karatrinkMana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			rV.karatrinkAmount = rV.karatrinkMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Fluctuating Energy",
			quality: 4,
			id: 142162,
			gear: "karatrinkAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.karatrinkMana,0,2); },
		},
	},
	{	//darkmoon crit
		init: function() {
			rV.darkmoonCritAmount = 0;
			pV.darkmoonCritBuffs = {
				191603: 637,
				191604: 718,
				191605: 797,
				191606: 877,
				191607: 956,
				191608: 1037,
				191609: 1116,
				191610: 1275,
			};
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 128709) {
					Object.keys(pV.darkmoonCritBuffs).forEach(function (buffSpellID) {
						statsBuffs.crit[buffSpellID] = ScaleStat(pV.darkmoonCritBuffs[buffSpellID],812,itemData.itemLevel);
					});
				}
			}
		],
		afterParse: function() {
			Object.keys(pV.darkmoonCritBuffs).forEach(function (buffSpellID) {
				rV.darkmoonCritAmount += (rV.buffs.crit[buffSpellID] || 0);
			});
		},
		obj: {
			type: "item",
			name: "Darkmoon Deck: Hellfire",
			quality: 4,
			id: 128709,
			gear: "darkmoonCritAmount",
		},
	},
	{	//chest leggo
		init: function() {
			rV.firedeepAmount = 0;
			pV.firedeepLastAura = 0;
			pV.firedeepLastCast = 0;
			pV.firedeepTemp = 0;
			pV.firedeepHRCount = 0;
			pV.firedeepProcCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 114083 && pV.firedeepActive){
					rV.firedeepAmount += amount;
					pV.firedeepTemp += amount;
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 114052) {
					pV.firedeepLastAura = event.timestamp + 500;
					pV.firedeepActive = true;
					pV.firedeepProcCount++;
					if(event.timestamp <= pV.firedeepLastCast){
						rV.firedeepAmount -= pV.firedeepTemp;
						pV.firedeepActive = false;
						pV.firedeepProcCount--;
					}
					pV.firedeepTemp = 0;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 114052) {
					pV.firedeepLastCast = event.timestamp + 500;
					rV.firedeepAmount -= pV.firedeepTemp;
					pV.firedeepActive = false;
					pV.firedeepTemp = 0;
				} else if (spellID == 73920) {
					pV.firedeepHRCount++;
				}
			},
		],
		obj: {
			type: "item",
			name: "Fire in the Deep",
			quality: 5,
			id: 151785,
			gear: "firedeepAmount",
			gearAdditionalText: function() { return "Proc rate: "+(pV.firedeepHRCount > 0 ? (pV.firedeepProcCount / pV.firedeepHRCount * 100).toFixed(1) : 0)+"%" },
		},
	},
	{	//Chalice of Moonlight
		init: function() {
			rV.chaliceofMoonlightAmount = 0;
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 147005) {
					statsBuffs.crit[242544] = ScaleStat(3900,920,itemData.itemLevel);
					statsBuffs.haste[242543] = ScaleStat(3900,920,itemData.itemLevel);
				}
			}
		],
		afterParse: function() {
			rV.chaliceofMoonlightAmount += (rV.buffs.crit[242544] || 0) + (rV.buffs.haste[242543] || 0);
		},
		obj: {
			type: "item",
			name: "Chalice of Moonlight",
			quality: 4,
			id: 147005,
			gear: "chaliceofMoonlightAmount",
		},
	},
	{	//Charm of the Rising Tide
		init: function() {
			rV.charmOTRTAmount = 0;
			pV.charmOTRTLast10 = 0;
		},
		parse: [
			"applybuffstack", function(event,spellID){
				if(spellID == 242458 && event.stack == 10) {
					pV.charmOTRTLast10 = event.timestamp + 1000;
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 242458 && event.timestamp <= pV.charmOTRTLast10) {
					buffStatus[242458] = 10;
				}
			},
			"gear", function(itemData,itemID){
				if(itemID == 147002) {
					statsBuffs.haste[242458] = ScaleStat(609,915,itemData.itemLevel);
				}
			}
		],
		afterParse: function() {
			rV.charmOTRTAmount += (rV.buffs.haste[242458] || 0);
		},
		obj: {
			type: "item",
			name: "Charm of the Rising Tide",
			quality: 4,
			id: 147002,
			gear: "charmOTRTAmount",
		},
	},
	{	//Archive of Faith
		init: function() {
			rV.archiveofFaithAmount = 0;
		},
		afterParse: function() {
			if(healingData[242619])	rV.archiveofFaithAmount += healingData[242619][0];
			if(healingData[242621])	rV.archiveofFaithAmount += healingData[242621][0];
		},
		obj: {
			type: "item",
			name: "Archive of Faith",
			quality: 4,
			id: 147006,
			gear: "archiveofFaithAmount",
		},
	},
	{	//Ocean's Embrace
		init: function() {
			rV.oceansEmbraceAmount = 0;			
			rV.oceansEmbraceAmountNoFeed = 0;			
		},
		afterParse: function() {
			if(healingData[242474]) rV.oceansEmbraceAmount += healingData[242474][0];
			rV.oceansEmbraceAmountNoFeed = rV.oceansEmbraceAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[242474]) rV.oceansEmbraceAmount += rV.feed[ sSpellsKeys[k] ].spells[242474][0];
			}			
		},
		obj: {
			type: "item",
			name: "Sea Star of the Depthmother",
			quality: 4,
			id: 147004,
			gear: "oceansEmbraceAmount",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.oceansEmbraceAmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(242474)+"</span></em>" },
		},
	},	
	{	//The Deceiver's Grand Design [kj]
		init: function() {
			rV.dgdAmount = 0;			
			rV.dgdAmountNoFeed = 0;			
		},
		afterParse: function() {
			if(healingData[242622]) rV.dgdAmount += healingData[242622][0];
			if(healingData[242623]) rV.dgdAmount += healingData[242623][0];
			rV.dgdAmountNoFeed = rV.dgdAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[242622]) rV.dgdAmount += rV.feed[ sSpellsKeys[k] ].spells[242622][0];
			}			
		},
		obj: {
			type: "item",
			name: "The Deceiver's Grand Design",
			quality: 4,
			id: 147007,
			gear: "dgdAmount",
			gearAdditionalText: function() { 
				return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.dgdAmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(242622)+"</span></em>" 
			},
		},
	},
	{	//2t21
		init: function() {
			rV.t21_2p_PredictionAmount = 0;
			rV.t21_2p_Amount = 0;
			rV.t21_2p_AmountNoFeed = 0;
			pV.t21_2p_HRLast = 0;
			pV.t21_2p_gearCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if (spellID == 73921 && event.timestamp <= pV.t21_2p_HRLast){
					var heal = cV.intellect * 2.25;
					if(cV.traitInfo[1352]) heal *= 1.06;
					if(cV.traitInfo[1693]) heal *= 1.1;
					if(cV.traitInfo[1389]) heal *= 1.05;
					rV.t21_2p_PredictionAmount += heal;
				} else if (spellID == 252154) {
					rV.t21_2p_Amount += amount;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 73920){
					pV.t21_2p_HRLast = event.timestamp + 500;
				}
			},
			"gear", function(itemData,itemID){
				if(itemID == 152166 || itemID == 152168 || itemID == 152169 || itemID == 152170 || itemID == 152171 || itemID == 152167) pV.t21_2p_gearCount++;
			}
		],
		afterParse: function() {
			rV.t21_2p_AmountNoFeed = rV.t21_2p_Amount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[252154]) rV.t21_2p_Amount += rV.feed[ sSpellsKeys[k] ].spells[252154][0];
			}			
		},
		obj: {
			type: "spell",
			name: "T21 2 set Bonus",
			quality: 10,
			id: 251764,
			prediction: "t21_2p_PredictionAmount",
			predictionСondition: function() { return pV.t21_2p_gearCount < 2 },
			gear: "t21_2p_Amount",
			gearFunc: function() { return pV.t21_2p_gearCount >= 2 },
			icon: "spell_nature_giftofthewaterspirit.jpg",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.t21_2p_AmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(252154)+"</span></em>" },
		},
	},
	{	//4t21
		init: function() {
			rV.t21_4p_PredictionAmount = 0;
			rV.t21_4p_Amount = 0;
			rV.t21_4p_AmountNoFeed = 0;
			pV.t21_4p_HRLast = 0;
			pV.t21_4p_gearCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if ((spellID == 77472 || spellID == 8004) && event.timestamp <= pV.t21_4p_HRLast){
					rV.t21_4p_PredictionAmount += amount * 0.6 * (cV.critSpell/40000+1);
				} else if (spellID == 252159) {
					rV.t21_4p_Amount += amount;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 73920){
					pV.t21_4p_HRLast = event.timestamp + 10500;
				}
			},
			"gear", function(itemData,itemID){
				if(itemID == 152166 || itemID == 152168 || itemID == 152169 || itemID == 152170 || itemID == 152171 || itemID == 152167) pV.t21_4p_gearCount++;
			}
		],
		afterParse: function() {
			rV.t21_4p_AmountNoFeed = rV.t21_4p_Amount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[252159]) rV.t21_4p_Amount += rV.feed[ sSpellsKeys[k] ].spells[252159][0];
			}			
		},
		obj: {
			type: "spell",
			name: "T21 4 set Bonus",
			quality: 10,
			id: 251765,
			prediction: "t21_4p_PredictionAmount",
			predictionСondition: function() { return pV.t21_4p_gearCount < 4 },
			gear: "t21_4p_Amount",
			gearFunc: function() { return pV.t21_4p_gearCount >= 4 },
			icon: "spell_shaman_blessingoftheeternals.jpg",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.t21_4p_AmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(252159)+"</span></em>" },
		},
	},
	{	//Sephuz
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 132452) {
					statsBuffs.haste_mod[-132452] = 1.02;
					buffStatus[-132452] = true;
				}
			}
		],
	},
	{	//Insignia ring
		init: function() {
			rV.insigniaringAmount = 0;
			rV.insigniaringPredictionAmount = 0;
		},
		afterParse: function() {			
			for (var i = 0, len = NETHERLIGHT.length; i < len; i++) {
				if(NETHERLIGHT[i].obj && !NETHERLIGHT[i].obj.fakeTrait && rV.netherlight[ NETHERLIGHT[i].obj.spellID ] && cV.traitBySpell[ NETHERLIGHT[i].obj.spellID ]){
					console.log('NETHERLIGHT[i].obj',NETHERLIGHT[i].obj);
					rV.insigniaringAmount += rV.netherlight[ NETHERLIGHT[i].obj.spellID ] * (1 - 1 / 1.5);
					rV.insigniaringPredictionAmount += rV.netherlight[ NETHERLIGHT[i].obj.spellID ] * 0.5;
				}
			}
		},
		obj: {
			type: "item",
			name: "Insignia of the Grand Army",
			quality: 5,
			id: 152626,
			prediction: "insigniaringPredictionAmount",
			gear: "insigniaringAmount",
		},
	},
	{	//Highfather's Machination
		init: function() {
			rV.highfatherAmount = 0;			
			rV.highfatherAmountNoFeed = 0;	
			rV.highfatherCount = 0;
			rV.highfatherCountUsed = 0;
			pV.highfatherLast = {};
			pV.highfatherStacks = {};
		},
		parse: [
			"heal", function(event,spellID,amount){
				if (spellID == 253288 && pV.highfatherLast[event.targetID] && pV.highfatherLast[event.targetID][1] >= event.timestamp){
					rV.highfatherCountUsed += pV.highfatherLast[event.targetID][0];
				}
			},
			"applybuffany", function(event,spellID){
				if(spellID == 253287 && currFightData.actor == event.sourceID) {
					rV.highfatherCount++;
					pV.highfatherStacks[event.targetID] = 1;
				}
			},
			"applybuffstackany", function(event,spellID){
				if(spellID == 253287 && currFightData.actor == event.sourceID) {
					rV.highfatherCount++;
					pV.highfatherStacks[event.targetID] = event.stack;
				}
			},
			"removebuffany", function(event,spellID){
				if(spellID == 253287 && currFightData.actor == event.sourceID) {
					var highfatherCurrStacks = pV.highfatherStacks[event.targetID] || 1;
					pV.highfatherLast[event.targetID] = [highfatherCurrStacks,event.timestamp+300];
				}
			},
		],
		afterParse: function() {
			if(healingData[253288]) rV.highfatherAmount += healingData[253288][0];
			rV.highfatherAmountNoFeed = rV.highfatherAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[253288]) rV.highfatherAmount += rV.feed[ sSpellsKeys[k] ].spells[253288][0];
			}			
		},
		obj: {
			type: "item",
			name: "Highfather's Machination",
			quality: 4,
			id: 152289,
			gear: "highfatherAmount",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.highfatherAmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(253288)+"</span></em><br>"+
				"Buffs(charges) applied: "+rV.highfatherCount+"<br>Buffs(charges) used: "+rV.highfatherCountUsed+" ("+(rV.highfatherCount != 0 ? rV.highfatherCountUsed / rV.highfatherCount * 100 : 0).toFixed(1)+"%)";
			},
		},
	},	
	{	//Eonar's Compassion
		init: function() {
			rV.eonarsAmount = 0;			
			rV.eonarsAmountNoFeed = 0;
			rV.eonarsCount = 0;				
		},
		parse: [
			"applybuff", function(event,spellID){
				if(spellID == 257475) rV.eonarsCount++;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 257475) rV.eonarsCount++;
			},
		],
		afterParse: function() {
			if(healingData[257442]) rV.eonarsAmount += healingData[257442][0];
			if(healingData[257444]) rV.eonarsAmount += healingData[257444][0];
			rV.eonarsAmountNoFeed = rV.eonarsAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[257442]) rV.eonarsAmount += rV.feed[ sSpellsKeys[k] ].spells[257442][0];
			}			
		},
		obj: {
			type: "item",
			name: "Eonar's Compassion",
			quality: 4,
			id: 154175,
			gear: "eonarsAmount",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.eonarsAmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(257442)+"</span></em>"+
				"<br>Phanteon proc count: "+rV.eonarsCount;
			},
		},
	},	
	{	//Ishkar's Felshield Emitter
		init: function() {
			rV.ishkarsAmount = 0;			
		},
		afterParse: function() {
			if(healingData[253277]) rV.ishkarsAmount += healingData[253277][0];
		},
		obj: {
			type: "item",
			name: "Ishkar's Felshield Emitter",
			quality: 4,
			id: 151957,
			gear: "ishkarsAmount",
		},
	},		
	{	//Tarratus Keystone
		init: function() {
			rV.tarratusAmount = 0;			
			rV.tarratusAmountNoFeed = 0;			
		},
		afterParse: function() {
			if(healingData[253282]) rV.tarratusAmount += healingData[253282][0];
			rV.tarratusAmountNoFeed = rV.tarratusAmount;
			for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
				if(rV.feed[ sSpellsKeys[k] ].spells[253282]) rV.tarratusAmount += rV.feed[ sSpellsKeys[k] ].spells[253282][0];
			}			
		},
		obj: {
			type: "item",
			name: "Tarratus Keystone",
			quality: 4,
			id: 151958,
			gear: "tarratusAmount",
			gearAdditionalText: function() { return "<em class=\"tooltip\">Feed info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">\"Clear\" amount - "+NumberToFormattedNumber(rV.tarratusAmountNoFeed,0,2)+"<br>This trinket also feed your CBT, AG and ASC."+GetFeedTooltip(253282)+"</span></em>" },
		},
	},	
	{	//Carafe of Searing Light
		init: function() {
			rV.carafeAmount = 0;
			rV.carafeMana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 255981){
					rV.manaGain += event.resourceChange;
					rV.carafeMana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			rV.carafeAmount = rV.carafeMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Carafe of Searing Light",
			quality: 4,
			id: 151960,
			gear: "carafeAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.carafeMana,0,2); },
		},
	},
	
	
{parse:["gear", function(itemData,itemID){if(itemID == 159620) statsBuffs.crit[271071] = ScaleStat(485,310,itemData.itemLevel);}]}, //Conch of Dark Whispers
{parse:["gear", function(itemData,itemID){if(itemID == 158371) statsBuffs.haste[281724] = ScaleStat(83.6,300,itemData.itemLevel);}]}, //Seabreeze
{parse:["gear", function(itemData,itemID){if(itemID == 159615) statsBuffs.haste[271115] = ScaleStat(182,300,itemData.itemLevel);}]}, //Ignition Mage's Fuse
{parse:["gear", function(itemData,itemID){if(itemID == 159630) statsBuffs.int[268998] = ScaleStat(8,300,itemData.itemLevel,1);}]}, //Balefire Branch	
	
];

var TRAITS = [
{parse:["combantantInfo", function(){if(cV.traitBySpell[280577]) statsBuffs.crit[280780] = ScaleStat(304,310,cV.traitBySpell[280577].rank);}]}, //Glory in Battle	
{parse:["combantantInfo", function(){if(cV.traitBySpell[280577]) statsBuffs.haste[280780] = ScaleStat(190,310,cV.traitBySpell[280577].rank);}]}, //Glory in Battle	
{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.haste[268954] = ScaleStat(244,310,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.mastery[268955] = ScaleStat(244,310,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.crit[268953] = ScaleStat(244,310,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.vers[268956] = ScaleStat(244,310,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
{parse:["combantantInfo", function(){if(cV.traitBySpell[267880]) statsBuffs.haste[269085] = ScaleStat(198,310,cV.traitBySpell[267880].rank);}]}, //Woundbinder
{parse:["combantantInfo", function(){if(cV.traitBySpell[267892]) statsBuffs.mastery[272090] = ScaleStat(457,310,cV.traitBySpell[267892].rank);}]}, //Synergistic Growth
{parse:["combantantInfo", function(){if(cV.traitBySpell[279926]) statsBuffs.int[279928] = ScaleStat(31,310,cV.traitBySpell[279926].rank,1);}]}, //Earthlink
{parse:["combantantInfo", function(){if(cV.traitBySpell[280407]) statsBuffs.haste[280409] = ScaleStat(276,310,cV.traitBySpell[280407].rank);}]}, //Blood Rite
{parse:["combantantInfo", function(){if(cV.traitBySpell[273823]) statsBuffs.crit[280204] = ScaleStat(293,310,cV.traitBySpell[273823].rank);}]}, //Blightborne Infusion
{parse:["combantantInfo", function(){if(cV.traitBySpell[280410]) statsBuffs.mastery[280412] = ScaleStat(227,310,cV.traitBySpell[280410].rank);}]}, //Incite the Pack
{parse:["combantantInfo", function(){if(cV.traitBySpell[273829]) statsBuffs.int[273842] = ScaleStat(135,295,cV.traitBySpell[273829].rank,1);}]}, //Secrets of the Deep
{parse:["combantantInfo", function(){if(cV.traitBySpell[273829]) statsBuffs.int[273843] = ScaleStat(270,295,cV.traitBySpell[273829].rank,1);}]}, //Secrets of the Deep
{parse:["combantantInfo", function(){if(cV.traitBySpell[266180]) statsBuffs.haste[271711] = ScaleStat(14,340,cV.traitBySpell[266180].rank);}]}, //Overwhelming Power
{parse:["combantantInfo", function(){if(cV.traitBySpell[281841]) statsBuffs.mastery[281843] = ScaleStat(244,310,cV.traitBySpell[281841].rank);}]}, //Tradewinds
{parse:["combantantInfo", function(){if(cV.traitBySpell[273684]) statsBuffs.haste[273714] = ScaleStat(244,310,cV.traitBySpell[273684].rank);}]}, //Meticulous Scheming
{parse:["combantantInfo", function(){if(cV.traitBySpell[281514]) statsBuffs.int[281517] = ScaleStat(172,310,cV.traitBySpell[281514].rank,1);}]}, //Unstable Catalyst


	{	//SLT
		init: function() {
			rV.traits[423] = 0;
			pV.azeriteSLTPrediction = 0;
			pV.azeriteSLTPredictionLast = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 98008){
					pV.azeriteSLTPredictionLast = event.timestamp + 500;
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 98021 && event.timestamp > pV.azeriteSLTPredictionLast && event.timestamp < (pV.azeriteSLTPredictionLast + 1000)){
					pV.azeriteSLTPrediction++;
				}
			},
			"damage", function(event,spellID){
				if(spellID == 98021 && event.timestamp > pV.azeriteSLTPredictionLast && event.timestamp < (pV.azeriteSLTPredictionLast + 1000)){
					pV.azeriteSLTPrediction++;
				}
			},
		],
		obj: {
			name: "Spouting Spirits",
			id: 423,
			spellID: 278715,
			icon: "spell_shaman_spiritlink.jpg",
			tier: 1,
		},
	},
	{	//HR
		init: function() {
			rV.traits[449] = 0;
			pV.azeriteHRPrediction = 0;
			pV.azeriteHRPredictionLast = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 73920){
					pV.azeriteHRPredictionLast = event.timestamp + 200;
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 73921 && event.timestamp < pV.azeriteHRPredictionLast){
					pV.azeriteHRPrediction++;
				}
			},
		],
		obj: {
			name: "Overflowing Shores",
			id: 449,
			spellID: 277658,
			icon: "spell_nature_giftofthewaterspirit.jpg",
			tier: 1,
		},
	},
	{	//HTT
		init: function() {
			rV.traits[191] = 0;
			pV.azeriteHTTPrediction = 0;
			pV.azeriteHTTPredictionX = 0;
			pV.azeriteHTTPredictionY = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 108280){
					pV.azeriteHTTPredictionX = event.x;
					pV.azeriteHTTPredictionY = event.y;
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 114942 && pV.azeriteHTTPredictionX){
					var dX = (pV.azeriteHTTPredictionX - event.x) / 100
					var dY = (pV.azeriteHTTPredictionY - event.y) / 100
					var dist = Math.sqrt(dX * dX + dY * dY)				
				
					pV.azeriteHTTPrediction += Math.min((Math.max(8,dist) - 8) / 32,1) * (event.hitType == 2 ? 2 : 1);
				}
			},
		],
		obj: {
			name: "Ebb and Flow",
			id: 191,
			spellID: 273597,
			icon: "ability_shaman_healingtide.jpg",
			tier: 1,
		},
	},
	{	//Riptide
		init: function() {
			rV.traits[422] = 0;
			pV.azeriteRiptidePrediction = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
 				if(spellID == 61295 && !event.tick && event.resourceActor == 2 && event.hitPoints && event.maxHitPoints){
 					var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
					if(targetHPbeforeHeal <= .5) pV.azeriteRiptidePrediction++;
				}
			},
		],
		obj: {
			name: "Surging Tides",
			id: 422,
			spellID: 278713,
			icon: "spell_nature_riptide.jpg",
			tier: 1,
		},
	},
	{	//35% hp
		init: function() {
			rV.traits[42] = 0;
			pV.azerite35hpPrediction = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
 				if(event.resourceActor == 2 && event.hitPoints && event.maxHitPoints){
 					var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
					if(targetHPbeforeHeal <= .35) pV.azerite35hpPrediction++;
				}
			},
		],
		obj: {
			name: "Savior",
			id: 42,
			spellID: 267883,
			icon: "achievement_guildperk_everyones.jpg",
			tier: 2,
		},
	},
	{	//heal on damage
		init: function() {
			rV.traits[83] = 0;
			pV.azeriteImpassiveVisagePrediction = 0;
			pV.azeriteImpassiveVisageLast = 0;
		},
		parse: [
			"damage", function(event,spellID){
 				if(event.targetID == currFightData.actor && event.timestamp > pV.azeriteImpassiveVisageLast){
 					pV.azeriteImpassiveVisageLast = event.timestamp + 6000;
					pV.azeriteImpassiveVisagePrediction++;
				}
			},
		],
		obj: {
			name: "Impassive Visage",
			id: 83,
			spellID: 268437,
			icon: "inv_pet_inquisitoreye.jpg",
			tier: 3,
		},
	},
	{	//mastery after ch
		init: function() {
			rV.traits[102] = 0;
			pV.azeriteSynergisticGrowthPrediction = 0;
			pV.azeriteSynergisticGrowthLast = 0;
		},
		parse: [
			"cast", function(event,spellID){
 				if(spellID == 1064 && event.timestamp > pV.azeriteSynergisticGrowthLast){
 					pV.azeriteSynergisticGrowthLast = event.timestamp + 30000;
					pV.azeriteSynergisticGrowthPrediction++;
				}
			},
		],
		obj: {
			name: "Synergistic Growth",
			id: 102,
			spellID: 267892,
			icon: "inv_misc_markoftheworldtree.jpg",
			tier: 2,
		},
	},
	{	//heal on damage
		init: function() {
			rV.traits[83] = 0;
			pV.azeriteImpassiveVisagePrediction = 0;
			pV.azeriteImpassiveVisageLast = 0;
		},
		parse: [
			"damage", function(event,spellID){
 				if(event.targetID == currFightData.actor && event.timestamp > pV.azeriteImpassiveVisageLast){
 					pV.azeriteImpassiveVisageLast = event.timestamp + 6000;
					pV.azeriteImpassiveVisagePrediction++;
				}
			},
		],
		obj: {
			name: "Impassive Visage",
			id: 83,
			spellID: 268437,
			icon: "inv_pet_inquisitoreye.jpg",
			tier: 3,
		},
	},
];




NETHERLIGHT = [];

function GetTargetMissingHealth(event){
	if( (event.resourceActor == 2 || event.targetID == currFightData.actor) && event.hitPoints && event.maxHitPoints ){
		return event.maxHitPoints - event.hitPoints;
	}
	return 999999999;	//999mil, cant be reached
}

var TALENTS = [
	{	//CBT
		init: function() {
			rV.talents[157153] = 0;
		},
		afterParse: function() {
			if(healingData[157503]) {
				rV.talents[157153] = healingData[157503][0];
			}
		},
		obj: {
			name: "Cloudburst Totem",
			id: 157153,
			tier: 6,
			col: 3,
			icon: "ability_shaman_condensationtotem.jpg",
		},
	},
	{	//Torrent
		init: function() {
			rV.talents[200072] = 0;
			rV.talents_prediction[200072] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 61295 && !event.tick){
					rV.talents[200072] += Math.max((amount + overheal) * (1 - 1 / 1.3) - overheal,0);
					rV.talents_prediction[200072] += Math.min((amount + overheal) * 0.3,GetTargetMissingHealth(event));
				}
			},
		],
		obj: {
			name: "Torrent",
			id: 200072,
			tier: 1,
			col: 1,
			icon: "spell_nature_riptide.jpg",
		},
	},
	{	//UL
		init: function() {
			rV.talents[73685] = 0;
			rV.talents_prediction[73685] = 0;
			pV.ulLossTime = 0;
			pV.ulPredLast = 0;
			pV.ulPredStatus = 0;
			pV.ulPredStatusCH = 0;
			pV.ulPredRiptideTarget = {};
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if((event.timestamp - pV.ulLossTime) <= 300 && ((spellID == 61295 && !event.tick) || spellID == 77472 || spellID == 8004 || spellID == 1064)){
					rV.talents[73685] += Math.max((amount + overheal) * (1 - 1 / 1.45) - overheal,0);
				} else if(spellID == 73685){
					rV.talents[73685] += amount;
				} else if(spellID == 61295 && pV.ulPredRiptideTarget[event.targetID] && event.timestamp <= pV.ulPredRiptideTarget[event.targetID]){
					rV.talents_prediction[73685] -= amount * 0.5;
				}
				if(event.timestamp <= pV.ulPredStatus && ((spellID == 61295 && !event.tick) || spellID == 77472 || spellID == 8004 || spellID == 1064)){
					pV.ulPredStatus = 0;
					rV.talents_prediction[73685] += Math.min((amount + overheal) * 0.45,GetTargetMissingHealth(event));
					if(spellID == 1064) pV.ulPredStatusCH = event.timestamp + 500;
				} else if(event.timestamp <= pV.ulPredStatusCH){
					rV.talents_prediction[73685] += Math.min((amount + overheal) * 0.45,GetTargetMissingHealth(event));
				}
			},
			"cast", function(event,spellID){
				if(spellID == 61295 && (event.timestamp - pV.ulPredLast) > 15000) {
					pV.ulPredLast = event.timestamp;
					pV.ulPredRiptideTarget[event.targetID] = event.timestamp + 18500;
					pV.ulPredStatus = event.timestamp + 10000;
					
					rV.talents_prediction[73685] += 0.875 * cV.intellect * (pV.critNow / STATS.crit / 100 + 1) * (pV.versNow / STATS.vers / 100 + 1);
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 73685) pV.ulLossTime = event.timestamp; 
			},
			"removebuffany", function(event,spellID){
				if(spellID == 61295 && event.sourceID == currFightData.actor) {
					delete pV.ulPredRiptideTarget[event.targetID];
				} 
			},
		],
		obj: {
			name: "Unleash Life",
			id: 73685,
			tier: 1,
			col: 3,
			icon: "spell_shaman_unleashweapon_life.jpg",
			predictionTooltip: function(){ return "Some riptide casts replaced with UL<br>Can be better with timing for CH" },
		},
	},
	{	//EST
		init: function() {
			rV.talents[198838] = 0;
		},
		afterParse: function() {
			if(healingData[201633]) {
				rV.talents[198838] = healingData[201633][0];
			}
		},
		obj: {
			name: "Earthen Shield Totem",
			id: 198838,
			tier: 4,
			col: 2,
			icon: "spell_nature_stoneskintotem.jpg",
		},
	},
	{	//Ascendance
		init: function() {
			rV.talents[114052] = 0;
		},
		afterParse: function() {
			if(healingData[114083]) {
				rV.talents[114052] = healingData[114083][0];
			}
		},
		obj: {
			name: "Ascendance",
			id: 114052,
			tier: 7,
			col: 3,
			icon: "spell_fire_elementaldevastation.jpg",
		},
	},
	{	//Wellspring
		init: function() {
			rV.talents[197995] = 0;
		},
		afterParse: function() {
			if(healingData[197997]) {
				rV.talents[197995] = healingData[197997][0];
			}
		},
		obj: {
			name: "Wellspring",
			id: 197995,
			tier: 7,
			col: 2,
			icon: "ability_shawaterelemental_split.jpg",
		},
	},
	{	//highTide
		init: function() {
			rV.talents[157154] = 0;
			pV.highTideBounds = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 1064){
					if(pV.highTideBounds >= 4)
						rV.talents[157154] += amount;
					else
						rV.talents[157154] += amount * (1 - ( Math.pow(0.7,pV.highTideBounds) / Math.pow(0.85,pV.highTideBounds) ) );
					pV.highTideBounds++;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 1064) pV.highTideBounds = 0;
			},
		],
		obj: {
			name: "High Tide",
			id: 157154,
			tier: 7,
			col: 1,
			icon: "spell_shaman_hightide.jpg",
		},
	},
	{	//undulation
		init: function() {
			rV.talents[200071] = 0;
			rV.talents_prediction[200071] = 0;
			pV.undulationLossTime = 0;
			pV.undulationPredCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if((spellID == 77472 || spellID == 8004) && ((event.timestamp - pV.undulationLossTime) <= 300)){
					rV.talents[200071] += Math.max((amount + overheal) * (1 - 1 / 1.5) - overheal,0);
				}
				if(spellID == 77472 || spellID == 8004){
					pV.undulationPredCount++;
					if(pV.undulationPredCount % 3 == 0){
						rV.talents_prediction[200071] += Math.min((amount + overheal) * 0.5,GetTargetMissingHealth(event));
					}
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 216251) pV.undulationLossTime = event.timestamp;
			},
		],
		obj: {
			name: "Undulation",
			id: 200071,
			tier: 1,
			col: 2,
			icon: "spell_nature_healingwavelesser.jpg",
		},
	},	
	{	//Downpour
		init: function() {
			rV.talents[207778] = 0;
		},
		afterParse: function() {
			if(healingData[207778]) {
				rV.talents[207778] = healingData[207778][0];
			}
		},
		obj: {
			name: "Downpour",
			id: 207778,
			tier: 6,
			col: 2,
			icon: "ability_mage_waterjet.jpg",
		},
	},
	{	//es
		init: function() {
			rV.talents[974] = 0;
			pV.esTalentAmount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if( event.targetID && event.targetID == pV.talent974target && !OverallBlacklist[spellID] ){
					var v = Math.max((amount + overheal) * (1 - 1 / 1.1) - overheal,0);
					rV.talents[974] += v;
					pV.esTalentAmount += v;
				}
			},
			"applybuffany", function(event,spellID){
				if(spellID == 974) pV.talent974target = event.targetID;
			},
			"removebuffany", function(event,spellID){
				if(spellID == 974) delete pV.talent974target;
			},
		],
		afterParse: function() {
			if(healingData[379]) {
				rV.talents[974] += healingData[379][0];
			}
		},
		obj: {
			name: "Earth Shield",
			id: 974,
			tier: 2,
			col: 3,
			icon: "spell_nature_skinofearth.jpg",
			additionalText: function() { return "Bonus healing: "+NumberToFormattedNumber(pV.esTalentAmount,0,2,2); }
		},
	},
	{	//Nature's Guardian
		init: function() {
			rV.talents[30884] = 0;
		},
		afterParse: function() {
			if(healingData[30884]) {
				rV.talents[30884] = healingData[30884][0];
			}
		},
		obj: {
			name: "Nature's Guardian",
			id: 30884,
			tier: 5,
			col: 1,
			icon: "spell_nature_natureguardian.jpg",
		},
	},
	{
		obj: {
			name: "Graceful Spirit",
			id: 192088,
			tier: 5,
			col: 2,
			icon: "spell_shaman_spectraltransformation.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Wind Rush Totem",
			id: 192077,
			tier: 5,
			col: 3,
			icon: "ability_shaman_windwalktotem.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Static Charge",
			id: 265046,
			tier: 3,
			col: 3,
			icon: "spell_nature_brilliance.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Earthgrab Totem",
			id: 51485,
			tier: 3,
			col: 2,
			icon: "spell_nature_stranglevines.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Deluge",
			id: 200076,
			tier: 2,
			col: 2,
			icon: "ability_shawaterelemental_reform.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Ancestral Protection Totem",
			id: 207399,
			tier: 4,
			col: 3,
			icon: "spell_nature_reincarnation.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Ancestral Vigor",
			id: 207401,
			tier: 4,
			col: 1,
			icon: "spell_shaman_blessingoftheeternals.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Echo of the Elements",
			id: 108283,
			tier: 2,
			col: 1,
			icon: "ability_shaman_echooftheelements.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Spirit Wolf",
			id: 260878,
			tier: 3,
			col: 1,
			icon: "spell_hunter_lonewolf.jpg",
			none: true,
		},
	},
];

var RESURGENCE = [
	{	//surge
		init: function() {
			rV.resurgence[8004] = [0,0];
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 8004) pV.resurgenceLast6600 = 8004;
			},
			"energize", function(event,spellID){
				if((event.resourceChange == 120 || (cV.gearInfo[134488] && event.resourceChange == 126)) && spellID == 101033 && pV.resurgenceLast6600 == 8004) {
					rV.resurgence[8004][0] += event.resourceChange;
					rV.resurgence[8004][1] ++;
				}
			},
		],
		obj: {
			id: 8004,
			name: "Healing Surge",
			icon: "spell_nature_healingway.jpg",
		},
	},
	{	//riptide
		init: function() {
			rV.resurgence[61295] = [0,0];
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 61295) pV.resurgenceLast6600 = 61295;
			},
			"energize", function(event,spellID){
				if((event.resourceChange == 120 || (cV.gearInfo[134488] && event.resourceChange == 126)) && spellID == 101033 && pV.resurgenceLast6600 == 61295) {
					rV.resurgence[61295][0] += event.resourceChange;
					rV.resurgence[61295][1] ++;
				}
			},
		],
		obj: {
			id: 61295,
			name: "Riptide",
			icon: "spell_nature_riptide.jpg",
		},
	},
	{	//ul
		init: function() {
			rV.resurgence[73685] = [0,0];
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 73685) pV.resurgenceLast6600 = 73685;
			},
			"energize", function(event,spellID){
				if((event.resourceChange == 120 || (cV.gearInfo[134488] && event.resourceChange == 126)) && spellID == 101033 && pV.resurgenceLast6600 == 73685) {
					rV.resurgence[73685][0] += event.resourceChange;
					rV.resurgence[73685][1] ++;
				}
			},
		],
		obj: {
			id: 73685,
			name: "Unleash Life",
			icon: "spell_shaman_unleashweapon_life.jpg",
		},
	},
	{	//ch
		init: function() {
			rV.resurgence[1064] = [0,0];
		},
		parse: [
			"energize", function(event,spellID){
				if((event.resourceChange == 50 || (cV.gearInfo[134488] && event.resourceChange >= 52 && event.resourceChange <= 53)) && spellID == 101033) {
					rV.resurgence[1064][0] += event.resourceChange;
					rV.resurgence[1064][1] ++;
				}
			},
		],
		obj: {
			id: 1064,
			name: "Chain Heal",
			icon: "spell_nature_healingwavegreater.jpg",
		},
	},
	{	//hw
		init: function() {
			rV.resurgence[77472] = [0,0];
		},
		parse: [
			"energize", function(event,spellID){
				if((event.resourceChange == 200 || (cV.gearInfo[134488] && event.resourceChange == 210)) && spellID == 101033) {
					rV.resurgence[77472][0] += event.resourceChange;
					rV.resurgence[77472][1] ++;
				}
			},
		],
		obj: {
			id: 77472,
			name: "Healing Wave",
			icon: "spell_nature_healingwavelesser.jpg",
		},
	},
];
var POTIONS = [
	{
		init: function() {
			rV.potions[188016] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 188016) {
					rV.potions[188016] += amount;
				}
			},
		],
		obj: {
			id: 188016,
			name: "Ancient Healing Potion",
			icon: "inv_alchemy_70_red.jpg",
		},
	},
	{
		init: function() {
			rV.potions[229206] = 0;
			rV.prolongedTemp = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellScaleInt[spellID]){
					if(pV.prolongedActive){
						rV.potions[229206] += amount / cV.intellect * 113 * 1.05;
					} else {
						rV.prolongedTemp += amount / cV.intellect * 113 * 1.05;
					}
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 229206) pV.prolongedActive = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 229206) {
					if(!pV.prolongedActive) rV.potions[229206] = rV.prolongedTemp;
					pV.prolongedActive = false;
				}
			},			
		],
		obj: {
			id: 229206,
			name: "Potion of Prolonged Power",
			icon: "trade_alchemy_dpotion_a28.jpg",
		},
	},
	{
		init: function() {
			rV.potions[188017] = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 188017) rV.potions[188017] += event.resourceChange;
			},		
		],
		obj: {
			id: 188017,
			name: "Ancient Mana Potion",
			icon: "inv_alchemy_70_blue.jpg",
			text: function(){
				var amount = rV.potions[188017] / rV.manaUsage * rV.healFromMana;
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[188017],0,2)+"</em> ("+(rV.potions[188017]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
			},
		},
	},
	{
		init: function() {
			rV.potions[188030] = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 188030) rV.potions[188030] += event.resourceChange;
			},		
		],
		obj: {
			id: 188030,
			name: "Leytorrent Potion",
			icon: "inv_alchemy_70_flask01.jpg",
			text: function(){
				var amount = rV.potions[188030] / rV.manaUsage * rV.healFromMana;
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[188030],0,2)+"</em> ("+(rV.potions[188030]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
			},
		},
	},
];
var OTHER = [
	{	//HW or Surge without tidal
		init: function() {
			rV.hwWithoutTidal = 0;
			rV.hwWithoutTidalTotal = 0;
			pV.hwWithoutTidalLoss = 0;
			pV.tidalwavesStatus = false;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 77472 || spellID == 8004){
					if(!(event.timestamp <= pV.hwWithoutTidalLoss)) rV.hwWithoutTidal ++;	
					rV.hwWithoutTidalTotal++;
				}
			},
			"applybuff", function(event,spellID){
				pV.tidalwavesStatus = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 53390) pV.hwWithoutTidalLoss = event.timestamp + 500;
				pV.tidalwavesStatus = false;
			},
			"removebuffstack", function(event,spellID){
				if(spellID == 53390) pV.hwWithoutTidalLoss = event.timestamp + 500;
				pV.tidalwavesStatus = false;
			},
		],
	},
	{	//Spiritwalker's Grace
		init: function() {
			rV.spiritwalkerUptime = 0;
			pV.spiritwalkerLast = 0;
		},
		parse: [
			"removebuff", function(event,spellID){
				if(spellID == 79206 && pV.spiritwalkerLast > 0) rV.spiritwalkerUptime += event.timestamp - pV.spiritwalkerLast;
			},
			"applybuff", function(event,spellID){
				if(spellID == 79206) pV.spiritwalkerLast = event.timestamp;
			},
		],
	},
	{	//Wolf
		init: function() {
			rV.wolfUptime = 0;
			pV.wolfLast = 0;
		},
		parse: [
			"removebuff", function(event,spellID){
				if(spellID == 2645 && pV.wolfLast > 0) rV.wolfUptime += event.timestamp - pV.wolfLast;
			},
			"applybuff", function(event,spellID){
				if(spellID == 2645) pV.wolfLast = event.timestamp;
			},
		],
	},
	{	//Crit resurgence
		init: function() {
			rV.resurgenceCrit = 0;
			rV.resurgenceCritAmount = 0;
			pV.resurgenceCritAvg = 0;
			pV.resurgenceCritCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if((spellID == 8004 || (spellID == 61295 && !event.tick) || spellID == 73685 || spellID == 1064 || spellID == 77472) && event.hitType == 2){
					pV.resurgenceCritAvg += pV.critNow;
					pV.resurgenceCritCount ++;
				}
			},
			"energize", function(event,spellID){
				if(spellID == 101033) rV.resurgenceCrit += event.resourceChange;
			},
		],
		afterParse: function() {
			rV.resurgenceCritAmount = pV.resurgenceCritAvg / pV.resurgenceCritCount;
		},
	},
	{	//DR: Totem; Ghost in the Mists
		init: function() {
			rV.dr[260878] = 0;
			pV.dr207527active = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && pV.dr207527active > 0){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;
					
					var currDr = 1 - (0.05 * pV.dr207527active);
				
					rV.dr[260878] += (amount / currDr) - amount;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 260881) pV.dr207527active = 0;
			},
			"applybuff", function(event,spellID){
				if(spellID == 260881) pV.dr207527active = 1;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 260881) pV.dr207527active = event.stack;
			},
		],
		afterParse: function() {
			if(!cV.spellInfo[260878]){
				cV.spellInfo[260878] = {
					icon: "spell_hunter_lonewolf.jpg",
					name: "Spirit Wolf",
				};
			}
		
		},		
	},
	{	//DR: Astral Shift
		init: function() {
			rV.dr[108271] = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && pV.dr108271active){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;				
				
					rV.dr[108271] += (amount / 0.6) - amount;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 108271) pV.dr108271active = false;
			},
			"applybuff", function(event,spellID){
				if(spellID == 108271) pV.dr108271active = true;
			},
		],
	},
	{	//DR: Versatility
		init: function() {
			rV.dr["Versatility"] = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;				
				
					var currVersDr = 1 - pV.versNow / (STATS.vers * 2) / 100;	//used last known vers from healing event
				
					rV.dr["Versatility"] += (amount / currVersDr) - amount;
				}
			},
		],
	},
	{	//Utility
		init: function() {
			pV.critTidalLoss = 0;
			rV.feed = {
				CBT: {spells:{},total:0,heal:0,totalwo:0},
				AG: {spells:{},total:0,heal:0,totalwo:0},
				ASC: {spells:{},total:0,heal:0,totalwo:0},
			};
			pV.savedTime = 0;
			pV.savedTimeTotal = 0;
			pV.totalCastTime = 0;
			pV.prevCastTime = 0;
			pV.savedTimeSpells = {};
			pV.castNum = {};
			rV.hasteCastProfit = 0;
			rV.hasteCastProfitBySpell = {};
			pV.savedTimeNoCD = {};
			pV.savedTimeNoCDTotal = 0;
			pV.hasteCast = {};
		},
		afterParse: function() {
			pV.healFromHaste = 0;
			
			pV.savedTimeTotal = Math.min(pV.savedTimeTotal,pV.savedTimeNoCDTotal);
			
			Object.keys(spellCastTimeNoCD).forEach(function (spellCastID) {
				var spellIDs;
				if(spellCastIDToHealID[spellCastID])
					spellIDs = spellCastIDToHealID[spellCastID];
				else
					spellIDs = [spellCastID];
				for (var k = 0, k_len = spellIDs.length; k < k_len; k++) {
					var spellID = spellIDs[k];
					if(healingData[spellID]) {
						pV.healFromHaste += healingData[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal); 
						
						for (var j = 0, j_len = sSpellsKeys.length; j < j_len; j++) {
							if(rV.feed[ sSpellsKeys[j] ].spells[spellID]){
								pV.healFromHaste += rV.feed[ sSpellsKeys[j] ].spells[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal);
							}
						}
					}
				}

			});
			
			rV.hasteCastProfit = pV.healFromHaste / (pV.savedTimeTotal / pV.savedTime);
			
			Object.keys(pV.hasteCast).forEach(function (spellID) {
				if(rV.buffs.haste_mod[spellID]) {
					rV.buffs.haste_mod[spellID] += pV.hasteCast[spellID] / pV.savedTimeTotal * pV.healFromHaste;
				} else {
					if(!rV.buffs.haste[spellID]) rV.buffs.haste[spellID] = 0;
					rV.buffs.haste[spellID] += pV.hasteCast[spellID] / pV.savedTimeTotal * pV.healFromHaste;
				}				
			});
		},
	},
];

function GetVersFactor(){ return healPerStat.vers.avgStat / STATS.vers / 100 + 1; }
function GetCritFactor(){ return cV.combantantInfo.critSpell / STATS.crit / 100 + 1; }
function GetFightLenFactor(cd){ return (currFightData.end_time - currFightData.start_time) / cd / 1000; }
function GetHasteFactor(){ return healPerStat.haste.avgStat / STATS.haste / 100 + 1; }
function GetModFactor(){ return 1.4; }
function GetFeedFactor(){ 
	var factor = 1; 
	for (var i = 0, len = sSpellsKeys.length; i < len; i++) {
		var keyName = sSpellsKeys[i];
		if(rV.feed[keyName].total > 0){
			factor += rV.feed[keyName].total / (rV.total + rV.totalOver) * (rV.feed[keyName].heal / rV.feed[keyName].total)
		}
	}
	return factor;
}
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
	3: ["Hunter","Tomb of Sargeras"],
	4: ["Shaman","Antorus"],
	5: ["Druid","Legendary"],
	6: ["DemonHunter","Other"],
	10: ["DeathKnight","Equipped items"],
};

var GEAR = [
	{slot:-2,spell:272989,type:2,tier:1,name:"Soothing Waters",icon:"spell_nature_healingwavegreater",special:function(ilvl){ return ScaleStat(756,310,ilvl,1); }},
	{slot:-2,spell:278715,type:2,tier:1,name:"Spouting Spirits",icon:"spell_shaman_spiritlink",special:function(ilvl){ return ScaleStat(1890,310,ilvl,1); }},
	{slot:-2,spell:273597,type:2,tier:1,name:"Ebb and Flow",icon:"ability_shaman_healingtide",special:function(ilvl){ return ScaleStat(218,310,ilvl,1); }},
	{slot:-2,spell:278713,type:2,tier:1,name:"Surging Tides",icon:"spell_nature_riptide",special:function(ilvl){ return ScaleStat(3850,310,ilvl,1); }},
	{slot:-2,spell:277658,type:2,tier:1,name:"Overflowing Shores",icon:"spell_nature_giftofthewaterspirit",special:function(ilvl){ return ScaleStat(614,310,ilvl,1); }},
	{slot:-2,spell:275488,type:2,tier:1,name:"Swelling Stream",icon:"inv_spear_04",special:function(ilvl){ return ScaleStat(1001,310,ilvl,1); }},
	
	{slot:-3,spell:272989,type:4,tier:1,name:"Soothing Waters",icon:"spell_nature_healingwavegreater",special:function(ilvl){ return ScaleStat(756,310,ilvl,1) * (pV.castNum[1064] || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:278715,type:4,tier:1,name:"Spouting Spirits",icon:"spell_shaman_spiritlink",special:function(ilvl){ return ScaleStat(1890,310,ilvl,1) * (pV.azeriteSLTPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:273597,type:4,tier:1,name:"Ebb and Flow",icon:"ability_shaman_healingtide",special:function(ilvl){ return ScaleStat(218,310,ilvl,1) * (pV.azeriteHTTPrediction || 0) * GetModFactor() * GetVersFactor(); }},
	{slot:-3,spell:278713,type:4,tier:1,name:"Surging Tides",icon:"spell_nature_riptide",special:function(ilvl){ return ScaleStat(3850,310,ilvl,1) * (pV.azeriteRiptidePrediction || 0) * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:277658,type:4,tier:1,name:"Overflowing Shores",icon:"spell_nature_giftofthewaterspirit",special:function(ilvl){ return ScaleStat(614,310,ilvl,1) * (pV.azeriteHRPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:275488,type:4,tier:1,name:"Swelling Stream",icon:"inv_spear_04",special:function(ilvl){ return ScaleStat(1001,310,ilvl,1) * (pV.castNum[5394] || 0) * 2.19 * 5 * GetModFactor() * GetVersFactor() * GetCritFactor(); }},

	{slot:-3,spell:281841,type:2,tier:1,name:"Tradewinds",icon:"ability_skyreach_wind",special:function(ilvl){ return ScaleStat(244,310,ilvl) * healPerStat.mastery.amount * 15 / 60; }},
	{slot:-3,spell:281841,type:2,tier:1,name:"Meticulous Scheming",icon:"ability_rogue_masterofsubtlety",special:function(ilvl){ return ScaleStat(244,310,ilvl) * healPerStat.haste.amount * 20 / 60; }},
	{slot:-3,spell:280410,type:2,tier:1,name:"Incite the Pack",icon:"ability_hunter_pet_raptor",special:function(ilvl){ return ScaleStat(227,310,ilvl) * healPerStat.mastery.amount * 20 / 60; }},
	{slot:-3,spell:281514,type:2,tier:1,name:"Unstable Catalyst",icon:"inv__azerite-debuff",special:function(ilvl){ return ScaleStat(172,310,ilvl,1) * 1.05 * healPerStat.int.amount * 8 / 60 * 4; }},
	{slot:-3,spell:267886,type:2,tier:1,name:"Ephemeral Recovery",icon:"inv_gizmo_manasyphon",special:function(ilvl){ return ScaleStat(20,310,ilvl,1) * 2 * GetFightLenFactor(8) / rV.manaUsage * rV.healFromMana; }},
	{slot:-3,spell:277666,type:4,tier:1,name:"Ancestral Resonance",icon:"spell_shaman_improvedreincarnation",special:function(ilvl){ return ScaleStat(50 * 1.5,310,ilvl) * 40 * healPerStat.mastery.amount / ( (currFightData.end_time - currFightData.start_time) / 1000 ); }},
	{slot:-3,spell:280407,type:2,tier:1,name:"Blood Rite",icon:"inv_misc_volatilelife",special:function(ilvl){ return ScaleStat(276,310,ilvl) * healPerStat.haste.amount * 15 / 60; }},
	{slot:-3,spell:273823,type:2,tier:1,name:"Blightborne Infusion",icon:"ability_argus_soulbombdebuffsmall",special:function(ilvl){ return ScaleStat(293,310,ilvl) * healPerStat.crit.amount * 14 / 60; }},
	{slot:-3,spell:280555,type:3,tier:1,name:"Archive of the Titans",icon:"inv_trinket_80_titan01b",special:function(ilvl){ return ScaleStat(140,370,ilvl,1) * 1.05 * healPerStat.int.amount * 0.95; }},
	{slot:-3,spell:280559,type:3,tier:1,name:"Laser Matrix (unknown, 6targets)",icon:"spell_nature_groundingtotem",special:function(ilvl){ return ScaleStat(2160,370,ilvl,1) * GetFightLenFactor(60) * GetModFactor() * GetVersFactor() * GetCritFactor() * 6; }},

	{slot:-3,spell:279926,type:2,tier:2,name:"Earthlink",icon:"inv_smallazeritefragment",special:function(ilvl){ return ScaleStat(31 * 3,310,ilvl,1) * 1.05 * healPerStat.int.amount; }},
	{slot:-3,spell:267889,type:2,tier:2,name:"Blessed Portents",icon:"spell_holy_fanaticism",special:function(ilvl){ return ScaleStat(699,310,ilvl,1) * GetFightLenFactor(60 / 5) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:264108,type:2,tier:2,name:"Blood Siphon (only mastery)",icon:"ability_deathknight_deathsiphon2",special:function(ilvl){ return ScaleStat(87,310,ilvl) * healPerStat.mastery.amount; }},
	{slot:-3,spell:267883,type:2,tier:2,name:"Savior (20% chance)",icon:"achievement_guildperk_everyonesahero",special:function(ilvl){ return ScaleStat(465,310,ilvl,1) * 2 * (pV.azerite35hpPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor() * 0.2; }},
	{slot:-3,spell:266180,type:2,tier:2,name:"Overwhelming Power",icon:"ability_vehicle_electrocharge",special:function(ilvl){ return ScaleStat(150 * 0.9,310,ilvl) * healPerStat.haste.amount * 25 / 60; }},
	{slot:-3,spell:267880,type:2,tier:2,name:"Woundbinder",icon:"inv_misc_emberweavebandage",special:function(ilvl){ return ScaleStat(198,310,ilvl) * 0.5 * healPerStat.haste.amount * 6 / 60 * 2; }},
	{slot:-3,spell:279899,type:2,tier:2,name:"Unstable Flames (100% possible uptime)",icon:"inv_ember",special:function(ilvl){ return ScaleStat(109 * 1.5,310,ilvl) * healPerStat.crit.amount * 5 / 60 * 10; }},
	{slot:-3,spell:267884,type:2,tier:2,name:"Bracing Chill",icon:"achievement_zone_stormpeaks_01",special:function(ilvl){ return ScaleStat(337,310,ilvl,1) * 6 * GetModFactor() * GetVersFactor() * GetCritFactor() * GetFightLenFactor(60); }},
	{slot:-3,spell:267892,type:4,tier:2,name:"Synergistic Growth",icon:"inv_misc_markoftheworldtree",special:function(ilvl){ return ScaleStat(457,310,ilvl) * 10 * (pV.azeriteSynergisticGrowthPrediction || 0) * healPerStat.mastery.amount / ( (currFightData.end_time - currFightData.start_time) / 1000 ); }},
	{slot:-3,spell:263984,type:2,tier:2,name:"Elemental Whirl (full potential)",icon:"ability_skyreach_four_wind",special:function(ilvl){ return ScaleStat(244,310,ilvl) * (healPerStat.haste.amount + healPerStat.mastery.amount + healPerStat.crit.amount + healPerStat.vers.amount) * 10 / 60 * 2 / 4; }},
	{slot:-3,spell:267879,type:2,tier:2,name:"On My Way",icon:"inv_boots_cloth_08",special:function(ilvl){ return ScaleStat(87,310,ilvl) * healPerStat.vers.amount; }},
	{slot:-3,spell:267882,type:2,tier:2,name:"Concentrated Mending",icon:"inv_offhand_1h_pvpdraenors1_d_02",special:function(ilvl){ return ScaleStat(3528,310,ilvl,1) * 12 / 60 * 3 * GetModFactor() * GetVersFactor() * GetCritFactor() * GetFightLenFactor(60); }},

	{slot:-3,spell:263962,type:2,tier:3,name:"Resounding Protection",icon:"ability_vehicle_shellshieldgenerator_green",special:function(ilvl){ return ScaleStat(6349,310,ilvl,1) * GetFightLenFactor(60 / 2) * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:274412,type:2,tier:3,name:"Serene Spirit",icon:"ability_shaman_astralshift",special:function(ilvl){ return ScaleStat(4089,310,ilvl,1) * 2 * (pV.castNum[108271] || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:268437,type:2,tier:3,name:"Impassive Visage",icon:"inv_pet_inquisitoreye",special:function(ilvl){ return ScaleStat(2222,310,ilvl,1) * (pV.azeriteImpassiveVisagePrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
	{slot:-3,spell:280021,type:4,tier:3,name:"Pack Spirit",icon:"spell_nature_spiritwolf",special:function(ilvl){ return ScaleStat(1570,340,ilvl,1) * GetModFactor()  * GetVersFactor() * GetCritFactor() * (rV.wolfUptime / 1000) / 0.9; }},
];


var parsePlugins = {
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
	damage: [],
	energize: [],
	gear: [],
	combantantInfo: [],
	any: [],
	special: [],
};

var pluginsList = [OTHER, NETHERLIGHT, ITEMS, TRAITS, TALENTS, RESURGENCE, POTIONS];
for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
	var pluginData = pluginsList[k];
	for (var i = 0, len = pluginData.length; i < len; i++) {
		if(pluginData[i].parse){
			for (var j = 0, j_len = pluginData[i].parse.length; j < j_len; j=j+2) {
				parsePlugins[ pluginData[i].parse[j] ].push(pluginData[i].parse[j+1]);
			}
		}
	}
}

function AddStatAmount(stat,amount,amountWithOh,statNow,totalHeal,spellID,timestamp,event){
	Object.keys(statsBuffs[stat]).forEach(function (buffSpellID) {
		if(buffStatus[buffSpellID]){
			if(!rV.buffs[stat][buffSpellID]) rV.buffs[stat][buffSpellID] = 0;
			rV.buffs[stat][buffSpellID] += statsBuffs[stat][buffSpellID] / statNow * amount * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1);
		}
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
	
	if(event.type != "absorbed") {
		for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
			var sName = sSpellsKeys[k];
		
			if(pV["ss"+sName+"status"] && !sSpells[sName][1][spellID]){
				if(!pV["ss"+sName+"stats"]) pV["ss"+sName+"stats"] = {}
				if(!pV["ss"+sName+"stats"][spellID]) pV["ss"+sName+"stats"][spellID] = CreateHealPerStatTable();
				
				var CDdata = pV["ss"+sName+"stats"][spellID];
				
				CDdata[stat].amount += amountWithOh / statNow;
				CDdata[stat].total += amountWithOh;
				CDdata[stat].avg += statNow * amountWithOh;
				CDdata[stat].avgCount += amountWithOh;
				CDdata[stat].all += totalHeal;
			}
		}
	}
}

var AllStatsList = ['int','crit','mastery','vers','haste'];
function AddStatAmountSpecialSpell(sName,sSpellID,spellID,delta,timestamp){
	if(pV["ss"+sName+"stats"] && pV["ss"+sName+"stats"][spellID]){
		var CDdata = pV["ss"+sName+"stats"][spellID];
		
		var isPrev = false;
		if(CDdata.time && (timestamp - CDdata.time <= 200) && CDdata.prev) {
			CDdata = CDdata.prev;
			isPrev = true;
		}
		
		for (var k = 0, k_len = AllStatsList.length; k < k_len; k++) {
			var stat = AllStatsList[k];
		
			healPerStat[stat].amount += CDdata[stat].amount * delta;
			healPerStat[stat].total += CDdata[stat].total * delta;
			healPerStat[stat].avg += CDdata[stat].avg * delta;
			healPerStat[stat].avgCount += CDdata[stat].avgCount * delta;
			healPerStat[stat].all += CDdata[stat].all * delta;
			if(!healPerStat[stat].spells) healPerStat[stat].spells = {};
			healPerStat[stat].spells[sSpellID] = (healPerStat[stat].spells[sSpellID] || 0) + CDdata[stat].amount * delta;
			
			var timeGraph = Math.floor((timestamp - currFightData.start_time) / 1000 / STATS_GRAPH_STEP);
			if(!healPerStat.graph[timeGraph]) healPerStat.graph[timeGraph] = CreateHealPerStatTable();
		
			healPerStat.graph[timeGraph][stat].amount +=  CDdata[stat].amount * delta;
			healPerStat.graph[timeGraph][stat].total += CDdata[stat].total * delta;
			healPerStat.graph[timeGraph][stat].avg +=  CDdata[stat].avg * delta;
			healPerStat.graph[timeGraph][stat].avgCount +=  CDdata[stat].avgCount * delta;
			healPerStat.graph[timeGraph][stat].all += CDdata[stat].all * delta;
			
			for (var j = 0, j_len = sSpellsKeys.length; j < j_len; j++) {
				var sName_j = sSpellsKeys[j];
			
				if(sName_j != sName && pV["ss"+sName_j+"status"] && !sSpells[sName_j][1][sSpellID]){
					if(!pV["ss"+sName_j+"stats"]) pV["ss"+sName_j+"stats"] = {}
					if(!pV["ss"+sName_j+"stats"][sSpellID]) pV["ss"+sName_j+"stats"][sSpellID] = CreateHealPerStatTable();
					
					var CDdata_j = pV["ss"+sName_j+"stats"][sSpellID];
					
					CDdata_j[stat].amount += CDdata[stat].amount * delta;
					CDdata_j[stat].total += CDdata[stat].total * delta;
					CDdata_j[stat].avg += CDdata[stat].avg * delta;
					CDdata_j[stat].avgCount += CDdata[stat].avgCount * delta;
					CDdata_j[stat].all += CDdata[stat].all * delta;
				}
			}
		}
		
		if(!isPrev){
			var newRecord = CreateHealPerStatTable();
			newRecord.time = timestamp;
			newRecord.prev = pV["ss"+sName+"stats"][spellID];
			delete pV["ss"+sName+"stats"][spellID].prev;
			pV["ss"+sName+"stats"][spellID] = newRecord;
		}
	}
}

function SetSpecialSpellOn(sName,timestamp){
	pV["ss"+sName+"status"] = true;
	pV["ss"+sName] = CreateSpecialSpellCurrentData();
	pV["ss"+sName].time = timestamp;
	delete pV["ss"+sName+"stats"];
}

function ParseLog(fight_code,actor_id,start_time,end_time)
{
	$.getJSON( "https://www.warcraftlogs.com:443/v1/report/events/"+fight_code+"?start="+start_time+"&end="+end_time+"&actorid="+actor_id+"&api_key="+WCL_API_KEY ).done( function( data ) {
		if(data.status == 400){
			error_msg(data.error);
			throw new Error("Error: Parsing Error");
		}
		actors[actor_id] = true
		
		try {

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
				
				if(spellScaleInt[spellID]){
					AddStatAmount('int',amount,amount+overheal,cV.intellect,amount,spellID,event.timestamp,event);
				}
				
				if(event.hitType == 2){
					pV.critNow = cV.critSpell;
					pV.critAmount = amount / (cV.gearInfo[142170] ? (2.05 / 1.05) : 2);
					var critAmountOh = (amount + overheal) / (cV.gearInfo[142170] ? (2.05 / 1.05) : 2);
					
					Object.keys(statsBuffs.crit).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) pV.critNow += statsBuffs.crit[buffSpellID];
					});
					
					if(spellID == 1064){	//chain
						pV.critNow += GetTraitRank(1109) * 4 * STATS.crit;
					} else if(spellID == 73921){	//healing rain
						pV.critNow += GetTraitRank(1107) * 2 * STATS.crit;
					} else if(spellID == 8004 && event.timestamp <= pV.critTidalLoss){	//surge
						pV.critNow += (GetTraitRank(1103) * 4 + 40) * STATS.crit;
					}
					
					AddStatAmount('crit',pV.critAmount,critAmountOh,pV.critNow,amount,spellID,event.timestamp,event);
				}
				
				if(spellScaleMastery[spellID] && (event.resourceActor == 2 || event.targetID == actor_id) && event.hitPoints && event.maxHitPoints){
					var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
				
					pV.masteryNow = cV.mastery;

					Object.keys(statsBuffs.mastery).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								pV.masteryNow += statsBuffs.mastery[buffSpellID] * buffStatus[buffSpellID];
							else
								pV.masteryNow += statsBuffs.mastery[buffSpellID];
						}
					});

					pV.currHealFromMastery = amount * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) * (1 - targetHPbeforeHeal))) );
					var currHealFromMasteryOh = (amount + overheal) * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) * (1 - targetHPbeforeHeal))) );
				
					AddStatAmount('mastery',pV.currHealFromMastery,currHealFromMasteryOh,pV.masteryNow,amount,spellID,event.timestamp,event);
					
					if(targetHPbeforeHeal < 0.30) healPerStat.mastery.b30 += pV.currHealFromMastery; else
					if(targetHPbeforeHeal < 0.40) healPerStat.mastery.b40 += pV.currHealFromMastery; else
					if(targetHPbeforeHeal < 0.50) healPerStat.mastery.b50 += pV.currHealFromMastery; else
					if(targetHPbeforeHeal < 0.60) healPerStat.mastery.b60 += pV.currHealFromMastery; else
					if(targetHPbeforeHeal < 0.70) healPerStat.mastery.b70 += pV.currHealFromMastery; else
					if(targetHPbeforeHeal < 0.80) healPerStat.mastery.b80 += pV.currHealFromMastery; else
								      healPerStat.mastery.b100+= pV.currHealFromMastery;

					if(!healPerStat.mastery.t[event.targetID]) healPerStat.mastery.t[event.targetID] = {
						hp: 0,
						amount: 0,
						mamount: 0,
						spells: {},
					}
					healPerStat.mastery.t[event.targetID].hp += (amount - pV.currHealFromMastery) * (1 - targetHPbeforeHeal);
					healPerStat.mastery.t[event.targetID].amount += (amount - pV.currHealFromMastery);
					healPerStat.mastery.t[event.targetID].mamount += pV.currHealFromMastery;
					healPerStat.mastery.t[event.targetID].spells[spellID] = (healPerStat.mastery.t[event.targetID].spells[spellID] || 0) + pV.currHealFromMastery;
				}			

				if(spellScaleVers[spellID]){
					pV.versNow = cV.versatility;
					Object.keys(statsBuffs.vers).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) pV.versNow += statsBuffs.vers[buffSpellID];
					});
					
					pV.currHealFromVers = amount * ( 1 - (1 / ((pV.versNow / STATS.vers) / 100 + 1)) );
					var currHealFromVersOh = (amount + overheal) * ( 1 - (1 / ((pV.versNow / STATS.vers) / 100 + 1)) );
					
					AddStatAmount('vers',pV.currHealFromVers,currHealFromVersOh,pV.versNow,amount,spellID,event.timestamp,event);
				}
				
				if(!spellNotScaleHaste[spellID] && (event.tick || spellAffectedByHaste[spellID])){
					pV.hasteNow = cV.haste;
					Object.keys(statsBuffs.haste).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								pV.hasteNow += statsBuffs.haste[buffSpellID] * buffStatus[buffSpellID];
							else
								pV.hasteNow += statsBuffs.haste[buffSpellID];
						}
					});
					
					var hasteMod = (pV.hasteNow / STATS.haste / 100) + 1;
					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
					});
					
					pV.currHealFromHaste = (1 - (1 / hasteMod)) * amount;
					var currHealFromHasteOh = (1 - (1 / hasteMod)) * (amount + overheal);
					
					pV.hasteNow = (hasteMod - 1) * 100 * STATS.haste;
					
					AddStatAmount('haste',pV.currHealFromHaste,currHealFromHasteOh,pV.hasteNow,amount,spellID,event.timestamp,event);

					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]){
							if(!rV.buffs.haste_mod[buffSpellID]) rV.buffs.haste_mod[buffSpellID] = 0;
							rV.buffs.haste_mod[buffSpellID] += ((statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste) / pV.hasteNow * pV.currHealFromHaste;
						}
					});
				}
				
				for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
					if(cooldownsTracking[j].opened || (cooldownsTracking[j].spellID == 157153 && spellID == 157503 && (event["timestamp"] - cooldownsTracking[j].start) <= 20000)){
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
						
						if(spellID == 157503 && cooldownsTracking[j].spellID == 157153){	//CBT
							cooldownsTracking[j].ended = event["timestamp"];
							cooldownsTracking[j].opened = false;
							
							for (var k = 0, k_len = parsePlugins.special.length; k < k_len; k++) {
								parsePlugins.special[k]("CBT_end",event);
							}
						}
					}
				}
				
				if(spellID == 157503) pV.ssCBTstatus = false;
				
				//special Spells [CBT,AG,ASC]
				if(event.type != "absorbed") {
					for (var k = 0, k_len = sSpellsKeys.length; k < k_len; k++) {
						var sName = sSpellsKeys[k];
					
						if(spellID == sSpells[sName][0]){
							if(!pV["ss"+sName]){
								// unk error here
							} else if(event.timestamp - pV["ss"+sName].time <= 200) {
								if(pV["ss"+sName].prev){
									var ss_data = pV["ss"+sName].prev;
									
									var spells = Object.keys(ss_data.feedBySpell);
									for (var j = 0, j_len = spells.length; j < j_len; j++) {
										if(!rV.feed[sName].spells[ spells[j] ]) rV.feed[sName].spells[ spells[j] ] = [0,0];
										var fromSpellAmount = amount / ss_data.feed * ss_data.feedBySpell[ spells[j] ];
										rV.feed[sName].spells[ spells[j] ][0] += fromSpellAmount;
										
										rV.feed[sName].heal += fromSpellAmount;
										
										AddStatAmountSpecialSpell(sName,spellID,spells[j],amount / ss_data.feed,event.timestamp);
										
										for (var l = 0, l_len = parsePlugins.special.length; l < l_len; l++) {
											parsePlugins.special[l]("SS",sName,2,spells[j],fromSpellAmount,ss_data.feedBySpell[ spells[j] ]);
										}
									}
								}
							} else {
								var ss_data = pV["ss"+sName];
								
								var spells = Object.keys(ss_data.feedBySpell);
								for (var j = 0, j_len = spells.length; j < j_len; j++) {
									if(!rV.feed[sName].spells[ spells[j] ]) rV.feed[sName].spells[ spells[j] ] = [0,0];
									var fromSpellAmount = amount / ss_data.feed * ss_data.feedBySpell[ spells[j] ];
									rV.feed[sName].spells[ spells[j] ][0] += fromSpellAmount;
									
									rV.feed[sName].heal += fromSpellAmount;
									
									AddStatAmountSpecialSpell(sName,spellID,spells[j],amount / ss_data.feed,event.timestamp);
									
									for (var l = 0, l_len = parsePlugins.special.length; l < l_len; l++) {
										parsePlugins.special[l]("SS",sName,1,spells[j],fromSpellAmount,ss_data.feedBySpell[ spells[j] ]);
									}
								}
								
								var newRecord = CreateSpecialSpellCurrentData()
								newRecord.prev = pV["ss"+sName];
								delete pV["ss"+sName].prev;
								pV["ss"+sName] = newRecord;
								pV["ss"+sName].time = event.timestamp;
							}
						} else if(pV["ss"+sName+"status"] && !sSpells[sName][1][spellID]){
							pV["ss"+sName].feed += amount + overheal;
							if(!pV["ss"+sName].feedBySpell[spellID]) pV["ss"+sName].feedBySpell[spellID] = 0;
							pV["ss"+sName].feedBySpell[spellID] += amount + overheal;
							
							if(!rV.feed[sName].spells[spellID]) rV.feed[sName].spells[spellID] = [0,0];
							rV.feed[sName].spells[spellID][1] += amount + overheal;
							rV.feed[sName].total += amount + overheal;
							rV.feed[sName].totalwo += amount;
						}
					}
				}
				
				

				
				if(spellID == 98021){		//slt
					for (var j = 0, j_len = sltTracking.length; j < j_len; j++) {
						if((event["timestamp"] - sltTracking[j].start) < 8000){
							var currTime = event["timestamp"] - sltTracking[j].start;
							var pos = -1;
							for (var k = 0, k_len = sltTracking[j].heal.length; k < k_len; k++) {
								if(currTime == sltTracking[j].heal[k].time){
									pos = k;
									break;
								}else if(currTime > sltTracking[j].heal[k].time && ((currTime - sltTracking[j].heal[k].time) <= 500)){
									currTime = sltTracking[j].heal[k].time;
									pos = k;
									break;
								}
							}
							
							if(pos == -1){
								sltTracking[j].heal.push({
									time: currTime,
									data: [],
								});
								pos = sltTracking[j].heal.length - 1;
							}
							
							if(!sltTracking[j].heal[pos].data[event.targetID]){
								sltTracking[j].heal[pos].data[event.targetID] = {
									amount: 0,
									absorbed: 0,
								};
							}
							
							sltTracking[j].heal[pos].data[event.targetID].amount += event["amount"];
							if(event["absorbed"]) sltTracking[j].heal[pos].data[event.targetID].absorbed += event["absorbed"];
							
							sltTracking[j].ended = event["timestamp"];
						}
					}
				}
				
				for (var j = 0, j_len = parsePlugins.heal.length; j < j_len; j++) {
					parsePlugins.heal[j](event,spellID,amount,overheal);
				}			
			} else if(event.type == "summon" && actors[event.sourceID]){
				actors[event.targetID] = true;
			} else if((event.type == "applybuff" || event.type == "applydebuff") && actors[event.targetID]){
				var spellID = event.ability.guid;
				
				if(statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID]) {		//stats buffs
					buffStatus[spellID] = true;
				}
				if(spellID == 29166){
					pV.innervate = true;
				} else if(spellID == 108281){	//AG
					SetSpecialSpellOn("AG",event.timestamp);
				} else if(spellID == 114052){	//ASC
					SetSpecialSpellOn("ASC",event.timestamp);
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
				
				if(statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID]) {		//stats buffs
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
				
				if(statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID]) {		//stats buffs
					buffStatus[spellID] = false;
				}
				if(spellID == 29166){
					pV.innervate = false;
				} else if(spellID == 53390) {
					pV.critTidalLoss = event.timestamp + 500;
				} else if(spellID == 108281){	//AG
					pV.ssAGstatus = false;
				}  else if(spellID == 114052){	//ASC
					pV.ssASCstatus = false;
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
				
				if(statsBuffs['vers'][spellID] || statsBuffs['crit'][spellID] || statsBuffs['haste'][spellID] || statsBuffs['haste_mod'][spellID] || statsBuffs['mastery'][spellID] || statsBuffs['int'][spellID]) {		//stats buffs
					buffStatus[spellID] = event.stack;
				}				
				if(spellID == 53390) {
					pV.critTidalLoss = event.timestamp + 500;
				}

				for (var j = 0, j_len = parsePlugins.removebuffstack.length; j < j_len; j++) {
					parsePlugins.removebuffstack[j](event,spellID);
				}
				for (var j = 0, j_len = parsePlugins.removebuffstackany.length; j < j_len; j++) {
					parsePlugins.removebuffstackany[j](event,spellID);
				}
			} else if(event.type == "applybuff" || event.type == "applydebuff"){	//any target, but not player
				var spellID = event.ability.guid;
				
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
					var hasteMod = (hasteNow / STATS.haste / 100) + 1;
					var hasteFromNumeric = hasteNow;
					var hasteFromNumericMod = hasteMod;
					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
					});
					
					if(spellCastAffectedQA[spellID]) hasteMod *= (1 + 0.05 * GetTraitRank(1108));
					if(spellID == 77472 && pV.tidalwavesStatus) hasteMod *= 1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)));
					
					hasteNow = (hasteMod - 1) * 100 * STATS.haste;
					
					var castTime = Math.min(spellCastTime[spellID]*1000,event.timestamp - pV.prevCastTime);
					
					pV.totalCastTime += castTime;
					
					var savedTime = Math.max(0,spellCastTime[spellID]*1000 - (event.timestamp - pV.prevCastTime));
					
					if(savedTime > 0) {
						pV.savedTime += savedTime / hasteNow;
						pV.savedTimeTotal += savedTime;		
									
						pV.savedTimeSpells[spellID] = (pV.savedTimeSpells[spellID] || 0) + savedTime / hasteNow;
						
						Object.keys(statsBuffs.haste).forEach(function (buffSpellID) {
							if(buffStatus[buffSpellID]){
								if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
								pV.hasteCast[buffSpellID] += hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * STATS.haste / hasteNow * savedTime * (statsBuffs.haste[buffSpellID] * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1) / hasteFromNumeric);
							}
						});						
						pV.hasteCast[-1] = (pV.hasteCast[-1] || 0) + hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * STATS.haste / hasteNow * savedTime * (cV.haste / hasteFromNumeric);
						Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
							if(buffStatus[buffSpellID]){
								if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
								pV.hasteCast[buffSpellID] += hasteMod / statsBuffs.haste_mod[buffSpellID] * (statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste / hasteNow * savedTime;
							}
						});
						if(spellCastAffectedQA[spellID]) pV.hasteCast[-207288] = (pV.hasteCast[-207288] || 0) + hasteMod / (0.05 * GetTraitRank(1108) + 1) * ((0.05 * GetTraitRank(1108) + 1) - 1) * 100 * STATS.haste / hasteNow * savedTime;
						if(spellID == 77472 && pV.tidalwavesStatus) pV.hasteCast[-53390] = (pV.hasteCast[-53390] || 0) + hasteMod / (1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)))) * ((1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)))) - 1) * 100 * STATS.haste / hasteNow * savedTime;
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
				
				if(spellID == 201764){	//manual return CBT
					for (var j = 0, j_len = cooldownsTracking.length; j < j_len; j++) {
						if(cooldownsTracking[j].opened && cooldownsTracking[j].spellID == 157153){
							cooldownsTracking[j]['ended'] = event["timestamp"];
							cooldownsTracking[j]['opened'] = false;
							for (var k = 0, k_len = parsePlugins.special.length; k < k_len; k++) {
								parsePlugins.special[k]("CBT_end",event);
							}
						}
					}

					pV.ssCBTstatus = false;				
				} else if (spellID == 98008){	//slt
					sltTracking.push({
						start: event["timestamp"],
						heal: [],
						damage: [],
					});
				} else if (spellID == 157153){	//cbt
					pV.ssCBTdelay = event.timestamp + 200; 
				}

				for (var j = 0, j_len = parsePlugins.cast.length; j < j_len; j++) {
					parsePlugins.cast[j](event,spellID);
				}			
			} else if(event.type == "damage"){
				var spellID = event.ability.guid;

				if(spellID == 98021){		//slt
					for (var j = 0, j_len = sltTracking.length; j < j_len; j++) {
						if((event["timestamp"] - sltTracking[j].start) < 8000){
							var currTime = event["timestamp"] - sltTracking[j].start;
							var pos = -1;
							for (var k = 0, k_len = sltTracking[j].damage.length; k < k_len; k++) {
								if(currTime == sltTracking[j].damage[k].time){
									pos = k;
									break;
								}else if(currTime > sltTracking[j].damage[k].time && ((currTime - sltTracking[j].damage[k].time) <= 500)){
									currTime = sltTracking[j].damage[k].time;
									pos = k;
									break;
								}
							}
							
							if(pos == -1){
								sltTracking[j].damage.push({
									time: currTime,
									data: [],
								});
								pos = sltTracking[j].damage.length - 1;
							}
							
							if(!sltTracking[j].damage[pos].data[event.targetID]){
								sltTracking[j].damage[pos].data[event.targetID] = {
									amount: 0,
									absorbed: 0,
								};
							}
							
							sltTracking[j].damage[pos].data[event.targetID].amount += event["amount"];
							if(event["absorbed"]) sltTracking[j].damage[pos].data[event.targetID].absorbed += event["absorbed"];
							
							sltTracking[j].ended = event["timestamp"];
						}
					}
				}
				
				for (var j = 0, j_len = parsePlugins.damage.length; j < j_len; j++) {
					parsePlugins.damage[j](event,spellID);
				}
			} else if(event.type == "energize" && event.targetID == actor_id){
				if(event.resourceChangeType==0){
					var spellID = event.ability.guid;
					
					rV.manaGain += event.resourceChange;
					
					for (var j = 0, j_len = parsePlugins.energize.length; j < j_len; j++) {
						parsePlugins.energize[j](event,spellID);
					}				
				}			
			} else if(event.type == "combatantinfo" && event.sourceID == actor_id){

				if(event["specID"] != 264){
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
				
					cV.traitInfo[traitData.traitID] = traitData;
					cV.traitBySpell[traitData.spellID] = traitData;
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
				
				cV.critSpell = event["critSpell"] + 6 * STATS.crit;
				cV.intellect = event["intellect"];
				cV.intellect_min = cV.intellect;
				cV.versatility = event["versatilityHealingDone"] + vantusRune;
				cV.mastery = event["mastery"] + 24 * STATS.mastery;
				cV.haste = event["hasteSpell"];
				
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
					if(cooldownsTracking[j].spellID == 157153) {
						pV.ssCBTstatus = false;	
						for (var k = 0, k_len = parsePlugins.special.length; k < k_len; k++) {
							parsePlugins.special[k]("CBT_end",event);
						}
					}
				}
			}
			if(pV.ssCBTdelay && event.timestamp >= pV.ssCBTdelay){	// 200ms delay for CBT for beginning tracking <7.3 prefeeding fix>
				SetSpecialSpellOn("CBT",pV.ssCBTdelay - 200);
				delete pV.ssCBTdelay;
			}
			
			if(event.ability && !cV.spellInfo[event.ability.guid]){
				cV.spellInfo[event.ability.guid] = {
					icon: event["ability"]["abilityIcon"],
					name: event["ability"]["name"],
				};
			}			
		}
		
		} catch(err) { error_msg("Error: "+err); throw new Error(err); }
		
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
		
	}).fail( function( data ) {
		if(data.status == 404 || data.status == 503){
			error_msg("Warcraftlogs currently unavailable.");
			throw new Error("Warcraftlogs currently unavailable.");
		}	
		error_msg("Parsing Error. Log may be private or removed.");
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
	//return "//wow.zamimg.com/images/wow/icons/large/"+icon;
	return "//render-us.worldofwarcraft.com/icons/56/"+icon;
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
var GEAR_CHARTS_ILVL = 340;

function CreateAzChartData(fightLen){
	var tier_data = [];
	for (var i = 0, len = GEAR.length; i < len; i++) {
		var gearData = GEAR[i];
		if(gearData.slot == GEAR_CHARTS_SLOT) {
			var name = (gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/spell="+gearData.spell+"\" target=\"_blank\">"+gearData.name+"</a>";
		
			//tier_1.push( [ gearData.special(GEAR_CHARTS_ILVL) / (fightLen / 1000),name,gear_charts_colors[gearData.type][0] ] );
			if(!tier_data[gearData.tier - 1]) tier_data[gearData.tier - 1] = [];
			tier_data[gearData.tier - 1].push( [ gearData.special(GEAR_CHARTS_ILVL) / (GEAR_CHARTS_SLOT == -2 ? 1 : (fightLen / 1000)),name+" "+GEAR_CHARTS_ILVL,gear_charts_colors[gearData.type][0],gearData.special(GEAR_CHARTS_ILVL) ] );
		}
	}
	
	var HTML = "";
	for (var j = 0, len_j = tier_data.length; j < len_j; j++) {
		tier_data[j].sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	
		HTML += "<div class=\"row full\"><div class=\"col w20\">Tier "+(j+1)+"</div><div class=\"list-top-line\"></div></div>";
		for (var i = 0, len = tier_data[j].length; i < len; i++) {
			HTML += "<div class=\"row full\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_data[j][i][1]+"</div><div class=\"col w10 t-right\"><em class=\"tooltip\">"+Math.floor(tier_data[j][i][0]+0.5)+(GEAR_CHARTS_SLOT != -2 ? "hps" : "")+"<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Total amount - "+NumberToFormattedNumber(tier_data[j][i][3],2)+"</span></em></div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_data[j][i][2])+"-bg\" style=\"width: "+(Math.min(tier_data[j][i][0]/tier_data[j][0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
		}
	}
	
	$("#gear_chart").html(HTML);
	
	$("#gear_chart_adv").show();	
}

function CreateGearChartData(fightLen){
	if(GEAR_CHARTS_SLOT == -2 || GEAR_CHARTS_SLOT == -3){
		CreateAzChartData(fightLen)
		return;
	}

	var gear_chart_list = [];
	var HTML = "";
	for (var i = 0, len = GEAR.length; i < len; i++) {
		var gearData = GEAR[i];
		if(gearData.slot == GEAR_CHARTS_SLOT) {
			var profit = 0;
			var equippedProfit = 0;
			var isEquipped = false;
			var scaleIlvl = gearData.scale ? gearData.scale : Math.min(GEAR_CHARTS_ILVL,gearData.max || 985);
			
			Object.keys(gearData).forEach(function (statName) {
				if(healPerStat[statName]){
					var value = ScaleStat(gearData[statName],gearData.ilvl,scaleIlvl,statName == "int" ? 1 : (jewelSlots[ gearData.slot - 1 ] ? 2 : 0));
					profit += value * healPerStat[statName].amount * (statName == "int" ? 1.05 : 1);
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
			
			profit /= fightLen / 1000;
			equippedProfit /= fightLen / 1000;
			
			var bonusID = GetIlvBonusID(gearData.wilvl || gearData.ilvl,scaleIlvl);
	
			if(isEquipped && !gearData.hideonrealitem){
				var bonusIDEq = GetIlvBonusID(gearData.wilvl || gearData.ilvl,isEquipped);
				gear_chart_list.push([equippedProfit,isEquipped,(gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/item="+gearData.item+(bonusIDEq != 0 ? "&bonus="+bonusIDEq : "")+"\" target=\"_blank\">"+gearData.name+"</a>","DeathKnight",true]);
			}
			
			if(!isEquipped || isEquipped < scaleIlvl){
				gear_chart_list.push([profit,scaleIlvl,(gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/item="+gearData.item+(bonusID != 0 ? "&bonus="+bonusID : "")+"\" target=\"_blank\">"+gearData.name+"</a>"+(gearData.tip ? " <sup class=\"tooltip\" style=\"font-size: 0.4em\">[?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;font-size: 2em\">"+gearData.tip+"</span></sup>" : ""),gear_charts_colors[gearData.type][0],false]);
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
				]);
			}
		}
		gear_chart_list = new_list;	
	}
	
	gear_chart_list.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	for (var i = 0, len = gear_chart_list.length; i < len; i++) {
		HTML += "<div class=\"row full "+(gear_chart_list[i][4] ? "eq" : "")+"\"><div class=\"col w5\">"+gear_chart_list[i][1]+"</div><div class=\"col w20\">"+gear_chart_list[i][2]+"</div><div class=\"col w10 t-right\">"+NumberToFormattedNumber(gear_chart_list[i][0],1)+"</div><div class=\"col half clearfix\"><div class=\"performance-bar "+(gear_chart_list[i][3])+"-bg\" style=\"width: "+(Math.min(gear_chart_list[i][0]/gear_chart_list[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	
	$("#gear_chart").html(HTML);	
	
	if(GEAR_CHARTS_SLOT != -1){
		$("#gear_chart_adv").show();
	} else {
		$("#gear_chart_adv").hide();
	}

	$("#gear_chart_slider").attr("max",GEAR_CHARTS_SLOT == 14 ? 1000 : 985);
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
		if(spellID != 98021) currTotal += healingData[spellID][0];
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
		if(spellID != 98021) {
			rV.total += healingData[spellID][0];
			rV.totalOver += healingData[spellID][1];
		}
	});
	
	if(healingData[255227] && healingData[207778]){		//GotQ fix
		healingData[207778][0] += healingData[255227][0];
		healingData[207778][1] += healingData[255227][1];
		delete healingData[255227];
	}

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
	var hps = Math.round(rV.total / fightLen * 1000);
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingwavegreater.jpg\"></div><div class=\"col w75\">Healing Done: "+NumberToFormattedNumber(rV.total,2)+"<br>HPS: "+NumberToFormattedNumber(hps,0,3,3)+"</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingtouch.jpg\"></div><div class=\"col w75\">Mastery healing Done:<br>"+NumberToFormattedNumber(Math.round(healPerStat.mastery.total),2)+" ("+Math.round(healPerStat.mastery.total / healPerStat.mastery.all * 100)+"%)</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img style=\"filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"http://media.blizzard.com/wow/icons/56/spell_shaman_tidalwaves.jpg\"></div><div class=\"col w75\">HW or Surge without tidal:<br>"+rV.hwWithoutTidal+" ("+Math.round(rV.hwWithoutTidal / rV.hwWithoutTidalTotal * 100)+"%)</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_shaman_spiritwalkersgrace.jpg\"></div><div class=\"col w75\">Spiritwalker's uptime:<br>"+Math.round(rV.spiritwalkerUptime/1000)+"s ("+Math.round(rV.spiritwalkerUptime / fightLen * 100)+"%)</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_spiritwolf.jpg\"></div><div class=\"col w75\">Wolf uptime:<br>"+Math.round(rV.wolfUptime/1000)+"s ("+Math.round(rV.wolfUptime / fightLen * 100)+"%)</div></div></div></div>";
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

	HTML += "</div></div>";	
	
	/// Stats List
	HTML += "<div class=\"col-half\"><div class=\"box clearfix statlist\"><header class=\"box-header\" style=\"padding-bottom:0;padding-top:0\">Stats</header>";
	var allStatsList = [
		["int","Int","From gear: "+cV.intellect_min],
		["crit","Crit","From gear: "+(cV.critSpell-6*STATS.crit)+"<br>Base value: "+(STATS.crit*6).toFixed(0)+"<br>Avg number can be much higher due Floodwaters & Empowered Droplets traits and Tidal Waves buff"],
		["mastery","Mastery","From gear: "+(cV.mastery-24*STATS.mastery)+"<br>Base value: "+(STATS.mastery*24).toFixed(0)+""],
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
		if(statData[0] == "crit" && rV.resurgenceCritAmount > 0){
			var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
			var preTotal = total;
			total += regurgenceAmount;
			var preAmount = amount;
			amount += regurgenceAmount / rV.resurgenceCritAmount;
			amountText = "<em class=\"tooltip\">"+amount.toFixed(3)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+preAmount.toFixed(3)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount).toFixed(3)+"</span></em>";
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+NumberToFormattedNumber(preTotal,0,2)+"<br>From resurgence: "+NumberToFormattedNumber(regurgenceAmount,0,2)+"</span></em>";			
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+(preAmount / fightLen * 1000).toFixed(2)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount / fightLen * 1000).toFixed(2)+"</span></em>";
 		
 			healPerStat[ statData[0] ].amount = amount;
 		} else if(statData[0] == "int") {
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000 * 1.05).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">5% armor bonus included</span></em>";
		} else if(statData[0] == "mastery") {
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Based on health %:<br>";
			totalText += "100-80: "+NumberToFormattedNumber(healPerStat.mastery.b100,0,1)+"<br>";
			totalText += "80-70: "+NumberToFormattedNumber(healPerStat.mastery.b80,0,1)+"<br>";
			totalText += "70-60: "+NumberToFormattedNumber(healPerStat.mastery.b70,0,1)+"<br>";
			totalText += "60-50: "+NumberToFormattedNumber(healPerStat.mastery.b60,0,1)+"<br>";
			totalText += "50-40: "+NumberToFormattedNumber(healPerStat.mastery.b50,0,1)+"<br>";
			totalText += "40-30: "+NumberToFormattedNumber(healPerStat.mastery.b40,0,1)+"<br>";
			totalText += "30-0: "+NumberToFormattedNumber(healPerStat.mastery.b30,0,1)+"</span></em>";
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
					
					subSpellsList += "<img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+" - "+(rV.hasteCastProfitBySpell[spellID] / (healPerStat[ statData[0] ].avg / healPerStat[ statData[0] ].avgCount)).toFixed(1)+"<br>";
	
				}			
			}
			subSpellsList += "</span></em>"
		};
		
		HTML += "<div class=\"row full\"><div class=\"col size\">"+statData[1]+"</div><div class=\"col size\">"+amountText+subSpellsList+"</div><div class=\"col size\">"+weightText+"</div><div class=\"col size\">"+totalText+"</div><div class=\"col size\"><em class=\"tooltip\">"+(healPerStat[ statData[0] ].avg / healPerStat[ statData[0] ].avgCount).format()+"<span class=\"tip-text\" style=\"width: "+(statData[0] == "crit" ? 300 : 120)+"px;margin-left:-"+(statData[0] == "crit" ? 150 : 60)+"px;\">"+statData[2]+"</span></em></div></div>";

		healPerStat[ statData[0] ].avgStat = healPerStat[ statData[0] ].avg / healPerStat[ statData[0] ].avgCount;
	}
	
	
	var manaSpellsText = "<br>Mana used by spells:";
	var manaSpellsKeys = Object.keys(rV.manaUsageBySpell);
	manaSpellsKeys.sort(function(a,b){ return rV.manaUsageBySpell[a] > rV.manaUsageBySpell[b] ? -1 : 1 });
	for (var k = 0, k_len = manaSpellsKeys.length; k < k_len; k++) {
		var spellID = manaSpellsKeys[k];
		var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
		var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
		manaSpellsText += "<br><img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+" - "+NumberToFormattedNumber(rV.manaUsageBySpell[spellID],0,2);	
	}
	HTML += "<div class=\"row full\"><div class=\"col size\">Mana</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.healFromMana / rV.manaUsage * baseMana / 20).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Healing per 1% mana ("+(baseMana / 20).format()+")</span></em></div><div class=\"col size\"> </div><div class=\"col size\">"+NumberToFormattedNumber(rV.healFromMana,0,2)+"</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.manaUsage).format()+"<span class=\"tip-text\" style=\"width: 350px;margin-left:-175px;\">Mana used on fight: "+(rV.manaUsage).format()+"<br>Mana gained via passives & buffs: "+(rV.manaGain).format()+"<br>Mana regened: "+(fightLen / 1000 * 0.04 * baseMana).format()+"<br>Base manapull: "+(baseMana * 5).format()+manaSpellsText+"</span></em></div></div>";

	HTML += "<div class=\"row full\"><div class=\"col full\" id=\"stats_graph_more\"><a href=\"javascript:void(0)\" class=\"more_graph\">Show graph</a></div><div class=\"ct-chart\" style=\"display:none\"  id=\"stats_graph\"></div></div>";	

	HTML += "</div></div>";	
	
	
	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) {
			if(pluginData[i].afterStats) pluginData[i].afterStats();
		}
	}
	

	/// Items predictions
	HTML += "<div class=\"col-half\"><div class=\"box clearfix predictionlist\"><header class=\"box-header\" style=\"padding-bottom:0;padding-top:0\">Items predictions ";
	HTML += "<sup class=\"tooltip\" style=\"font-size: 0.4em\"> [?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Only benefit from \"spell\" part of item is counted here.<br>Without feeding (CBT/AG/ASC) bonus</span></sup></header>";
	for (var i = 0, len = ITEMS.length; i < len; i++) {
		if(ITEMS[i].obj && ITEMS[i].obj.prediction && (!ITEMS[i].obj.predictionСondition || ITEMS[i].obj.predictionСondition()) && (ITEMS[i].obj.type!="item" || (!ITEMS[i].obj.predictionСondition && !cV.gearInfo[ITEMS[i].obj.id]))){
			var itemData = ITEMS[i].obj;
			HTML += "<div class=\"row full\"><div class=\"col s-1\"><a href=\"//www.wowhead.com/"+itemData.type+"="+itemData.id+"\" target=\"_blank\" style=\"color: #"+qualityColors[ itemData.quality ]+";\">"+itemData.name+"</a></div><div class=\"col s-2\">"+NumberToFormattedNumber(rV[ itemData.prediction ],2)+(itemData.text ? (" "+itemData.text()) : "")+"</div><div class=\"col s-2\">"+(rV[ itemData.prediction ]/rV.total*100).toFixed(2)+"%</div></div>";
		}
	}
	HTML += "</div></div>";	
	
	HTML += "</div>";
	
	
	/// Items
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
	var itemsData = [];
	for (var i = 0, len = ITEMS.length; i < len; i++) {
		var obj = ITEMS[i].obj;
		if(obj && obj.gear && ((!obj.gearFunc && cV.gearInfo[obj.id]) || (obj.gearFunc && obj.gearFunc()))) itemsData.push([ obj.gear,ITEMS[i] ]);
	}
	itemsData.sort(function(a,b){ return rV[ a[0] ] > rV[ b[0] ] ? - 1 : 1 });
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
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix gear_charts\"><header class=\"box-header\">GEAR CHARTS <sup class=\"tooltip\" style=\"font-size: 0.4em\"> [?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Various numbers can be different based on buffs/fight length/overheal %/rng procs<br>Feeding into CBT/AG/ASC included in calculation.</span></sup></header>";
	HTML += "<div class=\"full clearfix slot_select\" style=\"padding-bottom:10px;\">";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"14\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_datacrystal04.jpg\" style=\"width:48px;height:48px;\"><br>Trinkets</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-1\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_hammer_unique_sulfuras.jpg\" style=\"width:48px;height:48px;\"><br>Legendaries</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"2\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_misc_necklace_firelands_2.jpg\" style=\"width:48px;height:48px;\"><br>Necks</div>";
	//HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"11\"><img src=\"http://media.blizzard.com/wow/icons/56/item_icecrownringc.jpg\" style=\"width:48px;height:48px;\"><br>Rings</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-2\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_paladin_empoweredsealstruth.jpg\" style=\"width:48px;height:48px;\"><br>Clear azerite power</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-3\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_paladin_empoweredsealstruth.jpg\" style=\"width:48px;height:48px;\"><br>Azerite prediction</div>";
	HTML += "</div>";
	
	HTML += "<div class=\"full clearfix\" style=\"padding-bottom:5px;display:none\" id=\"gear_chart_adv\">";
	HTML += "<input type=\"range\" min=\"310\" max=\"410\" value=\""+GEAR_CHARTS_ILVL+"\" step=\"5\" class=\"slider\" id=\"gear_chart_slider\">";
	/*
	HTML += "<div class=\"full\">";
	var gear_chart_colors_keys = Object.keys(gear_charts_colors);
	for (var i = 0, len = gear_chart_colors_keys.length; i < len; i++) {
		HTML += "<div class=\"col\" style=\"width:"+(99 / len).toFixed(2)+"%\">";
		HTML += "<div class=\"col performance-bar "+(gear_charts_colors[ gear_chart_colors_keys[i] ][0])+"-bg\" style=\"width: 14px;height:14px;margin-top:4px\"></div>";
		HTML += "<div class=\"col\" style=\"width:auto;\">"+gear_charts_colors[ gear_chart_colors_keys[i] ][1]+"</div>";
		HTML += "</div>";
	}
	HTML += "</div>";
	*/
	HTML += "</div>";

	HTML += "<div id=\"gear_chart\"></div></div></div></div>";

	/*
	/// Traits
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">TRAITS</header><div class=\"list-top-line\"> </div><ul class=\"list traits\">";
	counter = 0;
	var traitsData = [];
	for (var i = 0, len = TRAITS.length; i < len; i++) if(GetTraitRank(TRAITS[i].obj.id) > 0) traitsData.push([ TRAITS[i].obj.id,TRAITS[i] ]);
	traitsData.sort(function(a,b){ return rV.traits[ a[0] ] > rV.traits[ b[0] ] ? - 1 : 1 });
	for (var i = 0, len = traitsData.length; i < len; i++) {
		var traitData = traitsData[i][1].obj
		var traitRank = GetTraitRank(traitData.id)
		if(traitRank > 0){
			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
			HTML += "<a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(traitData.icon)+"\" alt=\""+traitData.name+"\"></a></div>";

			HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\">"+traitData.name+"</a>"+(traitRank > 1 ? " [Rank "+traitRank+"]" : "")+"</header>";
		
			var amount = rV.traits[traitData.id];
			HTML += "<em class=\"result "+(traitData.tip ? "tooltip" : "")+"\">"+NumberToFormattedNumber(amount,2)+(traitData.tip ? "<span class=\"tip-text\" style=\"width: 180px;margin-left:-90px;\">"+traitData.tip()+"</span>" : "")+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
			HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,1)+"</em>";

			if(traitData.additionalText) HTML += "<br>"+traitData.additionalText();
			else if(traitRank > 1) HTML += "<br>Per rank: "+NumberToFormattedNumber(amount / traitRank,0,2)+" ("+(amount / traitRank/rV.total*100).toFixed(2)+"%)";		
		
			HTML += "</div></div>";
			counter++;
		}
	}	
	HTML += "</ul></div></div></div>";
	*/
	
	
	/// Talents
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">TALENTS</header><div class=\"list-top-line\"> </div><ul class=\"list talents\">";
	counter = 0;
	var talentsData = [[],[],[],[],[],[],[],[]];
	for (var i = 0, len = TALENTS.length; i < len; i++) talentsData[ TALENTS[i].obj.tier ][ TALENTS[i].obj.col ] = [ TALENTS[i].obj.id,TALENTS[i] ];
	for (var i = 1; i <= 7; i++) {
		for (var j = 1; j <= 3; j++) {
			var talentData = talentsData[i][j];
	
			if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
			
			if(talentData){
				talentData = talentData[1].obj;
				
				var talentSelected = cV.talentInfo[ talentData.id ];
			
				HTML += "<div class=\"row w33"+(talentSelected ? " yellow-back" : "")+"\"><div class=\"clearfix\"><div class=\"col w70p\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+talentData.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(talentData.icon)+"\" alt=\""+talentData.name+"\"></a></div>";
		
				HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+talentData.id+"\" target=\"_blank\">"+talentData.name+"</a>";
			
				var amount = rV.talents[talentData.id];
				var prediction = rV.talents_prediction[talentData.id];
				if(amount && amount != 0 && talentSelected){
					HTML += "</header><em class=\"result\">"+NumberToFormattedNumber(amount,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
					HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,1)+"</em>";
			
					if(talentData.additionalText) HTML += "<br>"+talentData.additionalText();
				} else if(prediction && prediction != 0 && !talentSelected){
					if(talentData.predictionTooltip){
						HTML += " <em class=\"tooltip\">prediction<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">"+talentData.predictionTooltip()+"</span></em></header>";
					} else {
						HTML += " prediction</header>";
					}
					HTML += "<em class=\"result\">"+NumberToFormattedNumber(prediction,2)+"</em> ("+(prediction/rV.total*100).toFixed(2)+"%)<br>";
					HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(prediction / fightLen * 1000,1)+"</em>";
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
	console.log(talentsData);
	HTML += "</ul></div></div></div>";
		
	
	
	/// Resurgence
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">RESURGENCE</header><div class=\"list-top-line\"> </div><ul class=\"list resurgence\">";
	counter = 0;
	var resurgenceData = [];
	for (var i = 0, len = RESURGENCE.length; i < len; i++) if(rV.resurgence[ RESURGENCE[i].obj.id ][0] > 0) resurgenceData.push([ RESURGENCE[i].obj.id,RESURGENCE[i] ]);
	resurgenceData.sort(function(a,b){ return rV.resurgence[ a[0] ][0] > rV.resurgence[ b[0] ][0] ? - 1 : 1 });
	for (var i = 0, len = resurgenceData.length; i < len; i++) {
		var obj = resurgenceData[i][1].obj

		if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
		
		HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
		HTML += "<a href=\"//www.wowhead.com/spell="+obj.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(obj.icon)+"\" alt=\""+obj.name+"\"></a></div>";

		HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+obj.id+"\" target=\"_blank\">"+obj.name+"</a></header>";
	
		var amount = rV.resurgence[obj.id][0];
		HTML += "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.manaUsage*100).toFixed(2)+"%)<br>";
		HTML += "Count: "+rV.resurgence[obj.id][1];
	
		HTML += "</div></div>";
		counter++;
	}	
	HTML += "</ul></div></div></div>";
	
	
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
	
	
	/// Mastery
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix mastery_eff\"><header class=\"box-header\">MASTERY</header>";
	counter = 0;
	var masteryUnitsData = [];
	var masteryAVGMax;
	var masteryAmountTotal = 0;
	var masteryAmountTotal2 = 0;
	var masteryAmountMax;
	var masteryTmp1 = 0;
	Object.keys(healPerStat.mastery.t).forEach(function (unitID) {
		if(healPerStat.mastery.t[unitID].amount > 0 && actorsData[unitID] && actorsData[unitID].class && classes[ actorsData[unitID].class ]){
			healPerStat.mastery.t[unitID].avg = healPerStat.mastery.t[unitID].hp / healPerStat.mastery.t[unitID].amount;
			if(!masteryAVGMax || masteryAVGMax < healPerStat.mastery.t[unitID].avg)	masteryAVGMax = healPerStat.mastery.t[unitID].avg;
			masteryUnitsData.push(unitID);
			masteryAmountTotal2 += healPerStat.mastery.t[unitID].amount;
			masteryAmountTotal += healPerStat.mastery.t[unitID].mamount;
			if(!masteryAmountMax || masteryAmountMax < healPerStat.mastery.t[unitID].mamount) masteryAmountMax = healPerStat.mastery.t[unitID].mamount;
		}
	});
	HTML += "<div class=\"row full\"><div class=\"col w20\"></div><div class=\"col w5\"></div><div class=\"col w30\">Mastery effectiveness</div><div class=\"col w5\"></div><div class=\"col w30\"><em class=\"tooltip\">Healing done to target<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Only healing coming from mastery used here</span></em></div></div>";
	masteryUnitsData.sort(function(a,b){ return healPerStat.mastery.t[a].avg > healPerStat.mastery.t[b].avg ? - 1 : 1 });
	for (var i = 0, len = masteryUnitsData.length; i < len; i++) {
		var unitID = masteryUnitsData[i];
		var unitData = actorsData[unitID];
		var avg = 1 - healPerStat.mastery.t[unitID].avg;
		HTML += "<div class=\"row full\"><div class=\"col w5\"></div><div class=\"col w15\">"+unitData.name+"</div>";
		
		//HTML += "<div class=\"col w10 t-right\"><em class=\"tooltip\">"+((1 - avg)*100).toFixed(2)+"%<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Mastery effectiveness:"+((1 - avg)*100).toFixed(2)+"%<br>Target avg health:"+(avg*100).toFixed(2)+"%<br>Maximum mastery effectiveness:"+(healPerStat.mastery.t[unitID].max * 100).toFixed(2)+"%</span></em></div>";
		HTML += "<div class=\"col w10 t-right\"><em class=\"tooltip\">"+((1 - avg)*100).toFixed(2)+"%<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Mastery effectiveness:"+((1 - avg)*100).toFixed(2)+"%<br>Target avg health:"+(avg*100).toFixed(2)+"%</span></em></div>";
		
		var width = healPerStat.mastery.t[unitID].avg / masteryAVGMax;
		HTML += "<div class=\"col w25 clearfix\"><div class=\"performance-bar "+actorsData[unitID].class+"-bg\" style=\"width: "+(width * 100).toFixed(2)+"%;\"></div></div>";
		var amount = healPerStat.mastery.t[unitID].mamount / masteryAmountTotal;
		HTML += "<div class=\"col w10 t-right\">"+(amount*100).toFixed(2)+"%</div>";
		var amountWidth = healPerStat.mastery.t[unitID].mamount / masteryAmountMax;
		HTML += "<div class=\"col w25 clearfix\"><div class=\"performance-bar "+actorsData[unitID].class+"-bg\" style=\"width: "+(amountWidth * 100).toFixed(2)+"%;\"></div></div>";
		
		var spells = Object.keys(healPerStat.mastery.t[unitID].spells)
		spells.sort(function(a,b){ return healPerStat.mastery.t[unitID].spells[a] > healPerStat.mastery.t[unitID].spells[b] ? - 1 : 1 });
		var subSpellsList = "";
		for (var k = 0, k_len = spells.length; k < k_len; k++) {
			var spellID = spells[k]
			var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
			var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
			subSpellsList += "<img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+" - "+NumberToFormattedNumber(healPerStat.mastery.t[unitID].spells[spellID],0,2)+"<br>";

		}
		
		//masteryTmp1 += (1 - avg) * amount;
		masteryTmp1 += (1 - avg) * (healPerStat.mastery.t[unitID].amount / masteryAmountTotal2);
		
		
		HTML += "<div class=\"col w10\"><em class=\"tooltip\">"+NumberToFormattedNumber(healPerStat.mastery.t[unitID].mamount,0,2)+"<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">"+subSpellsList+"</span></em></div>";
		HTML += "<div class=\"list-top-line\"></div>";
		HTML += "</div>";
	}
	HTML += "<div class=\"row full\"><div class=\"col w5\"></div><div class=\"col w20\">Average mastery effectiveness</div><div class=\"col w5 t-right\">"+(masteryTmp1*100).toFixed(2)+"%</div><div class=\"col w25 clearfix\"><div class=\"performance-bar\" style=\"width: "+(Math.min(masteryTmp1/masteryAVGMax,1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	HTML += "</div></div></div>";


	/// FEED
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix\"><header class=\"box-header\">FEEDING</header><div class=\"list-top-line\"> </div><ul class=\"list cooldowns\">";
	for (var i = 0, len = sSpellsKeys.length; i < len; i++) {
		var keyName = sSpellsKeys[i];
		if(rV.feed[keyName].total > 0){
			var spellID = sSpells[keyName][2];
			HTML += "<li class=\"item clearfix\"><div class=\"row full\"><div class=\"col w70p\">";
			
			HTML += "<a href=\"//www.wowhead.com/spell="+spellID+"\"><img src=\""+GetIconUrl(cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "unk.jpg")+"\" alt=\""+(cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "unk")+"\"></a></div>";
		
			HTML += "<div class=\"col half\">";
			HTML += "<header class=\"cd_header\">"+(cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : ("Spell "+spellID))+"</header>";
	
			HTML += "<div class=\"col full div_more_3\">";

			HTML += "<div class=\"row full\"><div class=\"cd_more_3_info cd_more_3_info_heal\"> </div><div class=\"cd_more_3_info cd_more_3_info_amount\"><em class=\"tooltip\">Clear number<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">How much exactly spell is part of another</span></em></div><div class=\"cd_more_3_info cd_more_3_info_amount\"><em class=\"tooltip\">Total<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">How much total healing spend to feed this spell</span></em></div></div>";				
			
			var spellsKeys = Object.keys(rV.feed[keyName].spells);
			spellsKeys.sort(function(a,b){ return rV.feed[keyName].spells[a][0] > rV.feed[keyName].spells[b][0] ? -1 : 1 });
			for (var j = 0, j_len = spellsKeys.length; j < j_len; j++) {
				var j_spellID = spellsKeys[j];
				HTML += "<div class=\"row full\"><div class=\"cd_more_3_info cd_more_3_info_heal\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+j_spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[j_spellID].icon)+"\" alt=\""+cV.spellInfo[j_spellID].name+"\"> "+cV.spellInfo[j_spellID].name+"</a>";
				HTML += "</div><div class=\"cd_more_3_info cd_more_3_info_amount\">"+NumberToFormattedNumber(rV.feed[keyName].spells[j_spellID][0],2)+"</div><div class=\"cd_more_3_info cd_more_3_info_amount\">"+NumberToFormattedNumber(rV.feed[keyName].spells[j_spellID][1],2)+"</div></div>";				
			}
			
			HTML += "</div></div>";
		
			HTML += "<div class=\"col text-center w13\"> </div>";
			HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(rV.feed[keyName].heal,2)+"</div>HPS: "+NumberToFormattedNumber(rV.feed[keyName].heal / fightLen * 1000)+"</div>";
			HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(rV.feed[keyName].total)+"</div>total feeding</div>";
			HTML += "</div></li>";
		}
	}
	HTML += "</ul></div></div></div>";
	
	
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
		for (var j = 0, j_len = obj.spells.length; j < j_len; j++) {
			var j_spellID = obj.spells[j].spell;
			HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(obj.spells[j].time / 1000).toFixed(3)+"</div><div class=\"cd_more_3_info\">";
			HTML += "<a href=\"//www.wowhead.com/spell="+j_spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[j_spellID].icon)+"\" alt=\""+cV.spellInfo[j_spellID].name+"\"> "+cV.spellInfo[j_spellID].name+"</a></div></div>";
		
			var timeLimit = obj.spells[j+1] ? obj.spells[j+1].time : fightEnd;
			for (var k = cooldownData_healingMore_pos, k_len = obj.heal.length; k < k_len; k++) {
				if(obj.heal[k].time >= timeLimit) break;
				var healObj = obj.heal[k]
				
				HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(healObj.time / 1000).toFixed(3)+"</div><div class=\"cd_more_3_info cd_more_3_info_heal\">";
				HTML += "<a href=\"//www.wowhead.com/spell="+healObj.id+"\" target=\"_blank\"><img src=\""+GetIconUrl(cV.spellInfo[healObj.id].icon)+"\" alt=\""+cV.spellInfo[healObj.id].name+"\"> "+cV.spellInfo[healObj.id].name+"</a> x"+healObj.count;
				HTML += "</div><div class=\"cd_more_3_info cd_more_3_info_amount\">"+healObj.amount.format()+"</div><div class=\"cd_more_3_info cd_more_3_info_over\">"+healObj.over.format()+"</div></div>";				
				
				overHeal += healObj.over;
				
				//if(!devSpellsCount[healObj.id]) devSpellsCount[healObj.id] = 0;devSpellsCount[healObj.id] += healObj.amount;
				
				cooldownData_healingMore_pos = k + 1;
			}
		}
		//console.log(cV.spellInfo[spellID].name,MsToFormattedTime(obj.start - fightStart),devSpellsCount);
		HTML += "<br><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=healing&source="+currFightData.actor+"&start="+obj.start+"&end="+(obj.ended || fightEnd)+"\" target=\"_blank\">WCL link</a>";
		HTML += "<br><a href=\"javascript:void(0)\" class=\"more_3\">hide</a></div></div>";

		
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(obj.healing,2)+"</div>HPS: "+NumberToFormattedNumber(obj.healing / ((obj.ended ? obj.ended : fightEnd) - obj.start) * 1000,2)+"</div>";
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+(overHeal / (obj.healing + overHeal) * 100).toFixed(2)+"%</div>overhealing</div>";
		HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(obj.mana)+"</div>Mana</div></div></li>";
	}
	HTML += "</ul></div></div></div>";
	
	
	/// SLT
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">SPIRIT LINK</header><div class=\"list-top-line\"> </div><ul class=\"list slt\">";
	for (var i = 0, len = sltTracking.length; i < len; i++) {
		var obj = sltTracking[i]
		var spellID = 98021;
				
		HTML += "<li class=\"item clearfix\"><div class=\"row full\"><div class=\"col w70p\">";
		HTML += "<a href=\"//www.wowhead.com/spell="+spellID+"\"><img src=\""+GetIconUrl(cV.spellInfo[spellID].icon)+"\" alt=\""+cV.spellInfo[spellID].name+"\"></a></div>";
	
		HTML += "<div class=\"col half\">";
		HTML += "<header class=\"cd_header\"><a href=\"//www.wowhead.com/spell="+spellID+"\">"+cV.spellInfo[spellID].name+"</a> ("+MsToFormattedTime(obj.start - fightStart)+" -> "+MsToFormattedTime((obj.ended ? obj.ended : fightEnd) - fightStart)+"):</header>";

		HTML += "<div class=\"col full div_more_2\"><a href=\"javascript:void(0)\" class=\"more_2\">expand</a></div>";
		
		HTML += "<div class=\"col full div_more_3\" style=\"display:none;\">";
		
		var TotalHealing = 0;
		var cooldownData_healingMore_pos = 0;
		var prevTime = -1;
		for (var j = 0, j_len = obj.damage.length; j < j_len; j++) {
			Object.keys(obj.damage[j].data).forEach(function (unitID) {
				var unitData = actorsData[unitID];
				if(unitData){
					HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(prevTime < obj.damage[j].time ? (obj.damage[j].time / 1000).toFixed(3) : "")+"</div><div class=\"cd_more_3_info cd_more_3_info_heal"+(unitData.class ? (" "+unitData.class) : "")+"\">";
					HTML += unitData.name+"</div><div class=\"cd_more_3_info cd_more_3_info_amount slt-damage\">"+obj.damage[j].data[unitID].amount.format()+"</div>";
					if(obj.damage[j].data[unitID].absorbed > 0) HTML += "<div class=\"cd_more_3_info cd_more_3_info_over\">"+obj.damage[j].data[unitID].absorbed.format()+"</div>";
					HTML += "</div>";
					prevTime = obj.damage[j].time;
				}
			});
		
			var timeLimit = obj.damage[j+1] ? obj.damage[j+1].time : fightEnd;
			for (var k = cooldownData_healingMore_pos, k_len = obj.heal.length; k < k_len; k++) {
				if(obj.heal[k].time >= timeLimit) break;
				Object.keys(obj.heal[k].data).forEach(function (unitID) {
					var unitData = actorsData[unitID];
					if(unitData){
						HTML += "<div class=\"row full\"><div class=\"cd_more_3_time\">"+(prevTime < obj.heal[k].time ? (obj.heal[k].time / 1000).toFixed(3) : "")+"</div><div class=\"cd_more_3_info cd_more_3_info_heal"+(unitData.class ? (" "+unitData.class) : "")+"\">";
						HTML += unitData.name+"</div><div class=\"cd_more_3_info cd_more_3_info_amount slt-heal\">"+obj.heal[k].data[unitID].amount.format()+"</div>";
						if(obj.heal[k].data[unitID].absorbed > 0) HTML += "<div class=\"cd_more_3_info cd_more_3_info_over\">"+obj.heal[k].data[unitID].absorbed.format()+"</div>";
						HTML += "</div>";
						prevTime = obj.heal[k].time;
						TotalHealing += obj.heal[k].data[unitID].amount;
					}
				});
				
				cooldownData_healingMore_pos = k + 1;
			}
		}
		HTML += "<br><a href=\"javascript:void(0)\" class=\"more_3-2\">hide</a></div></div>";
		
		HTML += "<div class=\"col text-center w20\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(TotalHealing,2)+"</div>HPS: "+NumberToFormattedNumber(TotalHealing / ((obj.ended ? obj.ended : fightEnd) - obj.start) * 1000,2)+"</div></div></li>";
	}
	HTML += "</ul></div></div></div>";


	$("#main").html(HTML);

	$("a.more_1").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_2").show();return false;});
	$("a.more_2").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_3").show();return false;});
	$("a.more_3").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_1").show();return false;});
	$("a.more_3-2").click(function(){$(this).parent().hide();$(this).parent().parent().find(".div_more_2").show();return false;});


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
				if(actorsData[ obj.actors[j] ].class == "Shaman"){
					HTML += "<a href=\"?report="+reportFightCode+"&fight="+fightID+"&actor="+obj.actors[j]+"\" data-fight=\""+fightID+"\" data-actor=\""+obj.actors[j]+"\" class=\"fightlist-btn\">";
					HTML += "<li class=\"item clearfix\" style=\"padding: 5px 15px;\"><div class=\"row full\"><div class=\"col\" style=\"width:30%\">";
					HTML += diffIdToName[obj.difficulty]+" "+obj.name+" "+(!obj.kill ? "#"+WCLFightCounter[obj.boss][obj.difficulty] : "")+" <em class=\""+(obj.kill ? "kill" : "wipe")+"\">"+(obj.kill ? "kill" : "wipe")+"</em></div>";
					HTML += "<div class=\"col\" style=\"width:5%\">"+MsToFormattedTime(obj.end_time - obj.start_time)+"</div><div class=\"col\" style=\"width:20%\">"+actorsData[ obj.actors[j] ].name+"</div></div>";
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
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">Resto Analyzer</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"\" target=\"_blank\">Report</a></li>";
	$("#navbar-header").html(HTML);
	
	$("#nav-btn-main").click(function(e){ e.preventDefault(); BuildMainPage(); });
	
	$("#navbar-progress").width("0%").css('opacity', '0');
	
	window.history.pushState('report', 'Report', '?report='+reportFightCode);
}

function CreateHealPerStatTable(){
	return {
		int: {amount:0,total:0,avg:0,avgCount:0,all:0},
		crit: {amount:0,total:0,avg:0,avgCount:0,all:0},
		haste: {amount:0,total:0,avg:0,avgCount:0,all:0},
		mastery: {amount:0,total:0,avg:0,avgCount:0,all:0,b100:0,b80:0,b70:0,b60:0,b50:0,b40:0,b30:0,t:{}},
		vers: {amount:0,total:0,avg:0,avgCount:0,all:0},	
	}
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
	
	//erase variables 
	actors = [];
	healingData = [];
	pV = {},
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
		netherlight: [],
		dr: [],
	};
	cV = {
		traitInfo: [],
		traitBySpell: [],
		gearInfo: [],
		talentInfo: [],
		spellInfo: [],
	};
	healPerStat = CreateHealPerStatTable();
	healPerStat.graph = [];
	cooldownsTracking = [];
	sltTracking = [];
	buffStatus = [];
	
	for (var k = 0, k_len = pluginsList.length; k < k_len; k++) {
		var pluginData = pluginsList[k];
		for (var i = 0, len = pluginData.length; i < len; i++) if(pluginData[i].init) pluginData[i].init();
	}
	
	var HTML = "";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">Resto Analyzer</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?report="+reportFightCode+"\" id=\"nav-btn-fights\">"+currFightData.report_name+"</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=summary\" target=\"_blank\">"+currFightData.name+" ("+MsToFormattedTime(currFightData.end_time - currFightData.start_time)+")</a></li>";
	HTML += "<li class=\"breadcrumb-item\"><a href=\"https://www.warcraftlogs.com/reports/"+reportFightCode+"#fight="+currFightData.id+"&type=healing&source="+currFightData.actor+"\" target=\"_blank\">"+currFightData.actorName+"</a></li>";
	$("#navbar-header").html(HTML);

	$("#nav-btn-main").click(function(e){ e.preventDefault(); BuildMainPage(); });
	$("#nav-btn-fights").click(function(e){ e.preventDefault(); BuildFightsList(); });
	
	$("#main").html("");

	window.history.pushState('result', 'Result', '?report='+reportFightCode+'&fight='+fightID+'&actor='+actorID);

	ParseLog(reportFightCode,actorID,currFightData.start_time,currFightData.end_time);
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
	HTML += "<li class=\"breadcrumb-item\"><a href=\"?\" id=\"nav-btn-main\">Resto Analyzer</a></li>";
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