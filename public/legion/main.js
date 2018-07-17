///
///
///   Resto Shaman Analyzer by Afiya
///
///

var LAST_UPDATE = "23.06.2018";

var itemsStats = {
	140803:{ilvl:875,int:1634},
	140793:{ilvl:870,mastery:1055},
	142507:{ilvl:865,int:1489,passive:1036},
	139076:{ilvl:865,int:1489,passive:1036},
	134336:{ilvl:865,int:1489,passive:1036},
	134204:{ilvl:865,int:1489,passive:1036},
	139114:{ilvl:865,int:1489,passive:1036},
	121311:{ilvl:865,int:1489,passive:1036},
	136750:{ilvl:865,int:1489,passive:1036},
	134292:{ilvl:865,int:1489,passive:1036},
	147276:{ilvl:865,int:1489,passive:1036},
	134160:{ilvl:865,int:1489,passive:1036},
	134380:{ilvl:865,int:1489,passive:1036},
	134248:{ilvl:865,int:1489,passive:1036},
	145231:{ilvl:865,int:1489,passive:1036},
	145230:{ilvl:865,int:1489,passive:1036},
	144258:{ilvl:940,int:2994,crit:456,mastery:456,haste:456},
	134526:{ilvl:825,crit:1062,mastery:797},
	141482:{ilvl:860,crit:847,mastery:847,vers:847,haste:847},
	137051:{ilvl:940,crit:2404,haste:1335},
	128911:{ilvl:825,int:6339,crit:271,mastery:260},
	128934:{ilvl:825,int:606,crit:356,mastery:342},
	132466:{ilvl:940,int:3150,crit:658,mastery:685,haste:1234},
	132452:{ilvl:940,crit:2671,haste:1818},
	
	142428:{ilvl:855,vers:1404,mastery:829,},
	142412:{ilvl:855,int:803,crit:544,vers:241,},
	142540:{ilvl:855,int:803,haste:325,vers:460,},
	142521:{ilvl:855,int:803,haste:510,mastery:275,},
	142432:{ilvl:855,int:1427,haste:579,vers:818,},
	142410:{ilvl:855,int:1427,crit:579,haste:818,},
	142431:{ilvl:855,int:1427,haste:579,vers:818,},
	142433:{ilvl:855,int:1427,haste:459,mastery:938,},
	142423:{ilvl:855,int:803,haste:325,mastery:460,},
	142419:{ilvl:855,int:803,crit:527,vers:258,},
	142415:{ilvl:855,int:803,vers:309,mastery:477,},
	142427:{ilvl:855,int:803,haste:510,vers:275,},
	142435:{ilvl:855,int:1070,crit:658,mastery:389,},
	142434:{ilvl:855,int:1070,crit:434,haste:613,},
	142430:{ilvl:855,int:1070,crit:411,mastery:635,},
	142429:{ilvl:855,int:1070,crit:680,vers:366,},
	142411:{ilvl:855,int:1070,haste:299,mastery:748,},
	142420:{ilvl:855,int:1070,crit:680,vers:366,},
	142416:{ilvl:855,int:1070,haste:613,mastery:434,},
	142424:{ilvl:855,int:1070,haste:411,mastery:635,},
	142421:{ilvl:855,int:1427,crit:968,haste:428,},
	142413:{ilvl:855,int:1427,crit:968,haste:428,},
	142425:{ilvl:855,int:1427,crit:459,mastery:938,},
	142418:{ilvl:855,int:1427,vers:518,mastery:878,},
	142422:{ilvl:855,int:1070,vers:658,mastery:389,},
	142417:{ilvl:855,int:1070,crit:680,haste:366,},
	142426:{ilvl:855,int:1070,crit:321,haste:725,},
	142414:{ilvl:855,int:1070,haste:725,mastery:321,},
	142520:{ilvl:855,crit:1021,haste:1212,},
	
	140870:{ilvl:875,int:1719,crit:1042,mastery:462,},
	138357:{ilvl:875,haste:1075,mastery:430,},
	138314:{ilvl:875,int:1719,haste:978,vers:527,},
	138330:{ilvl:875,int:1719,crit:914,mastery:591,},
	140866:{ilvl:875,int:1719,vers:849,mastery:656,},
	138312:{ilvl:875,int:1719,haste:1042,mastery:462,},
	138331:{ilvl:875,int:1719,crit:1042,vers:462,},
	140851:{ilvl:870,int:1641,crit:865,haste:612,},
	140903:{ilvl:870,int:1641,haste:897,vers:580,},
	140881:{ilvl:875,int:1719,crit:914,mastery:591,},
	138342:{ilvl:875,haste:623,mastery:881,},
	138332:{ilvl:875,crit:559,mastery:946,},
	138355:{ilvl:875,vers:527,mastery:978,},
	138378:{ilvl:875,int:1719,crit:527,haste:978,},
	138356:{ilvl:875,int:1719,crit:462,haste:1042,},
	140901:{ilvl:870,int:1641,haste:485,mastery:991,},
	138313:{ilvl:875,int:1719,crit:527,mastery:978,},
	138343:{ilvl:875,int:1719,crit:527,haste:978,},
	140900:{ilvl:875,haste:1151,vers:1368,},
	140899:{ilvl:875,crit:1440,mastery:1080,},
	140894:{ilvl:870,vers:908,mastery:1537,},
	140898:{ilvl:870,crit:768,haste:1677,},
	140853:{ilvl:870,int:1231,crit:744,mastery:364,},
	138347:{ilvl:875,crit:443,vers:685,},
	138363:{ilvl:875,vers:492,mastery:636,},
	140883:{ilvl:875,int:1289,crit:733,mastery:394,},
	138361:{ilvl:875,crit:346,haste:782,},
	138380:{ilvl:875,int:1289,haste:346,vers:782,},
	138323:{ilvl:875,int:1289,vers:443,mastery:685,},
	138362:{ilvl:875,int:1289,haste:443,vers:685,},
	140872:{ilvl:870,int:1231,crit:673,mastery:435,},
	138337:{ilvl:875,int:1289,vers:419,mastery:709,},
	138338:{ilvl:875,crit:758,haste:371,},
	138348:{ilvl:875,int:1289,haste:636,vers:492,},
	138336:{ilvl:875,int:1289,haste:733,mastery:394,},
	138321:{ilvl:875,int:1289,haste:782,vers:346,},
	138322:{ilvl:875,int:1289,haste:733,mastery:394,},
	140911:{ilvl:875,int:1289,crit:443,vers:685,},
	140864:{ilvl:875,int:1289,crit:492,mastery:636,},
	140917:{ilvl:880,int:1351,haste:328,mastery:822,},
	140855:{ilvl:875,int:967,crit:459,vers:386,},
	138375:{ilvl:875,int:967,crit:550,mastery:296,},
	138370:{ilvl:875,int:967,vers:550,mastery:296,},
	138373:{ilvl:875,int:967,haste:314,vers:532,},
	138366:{ilvl:875,int:967,haste:242,vers:604,},
	138369:{ilvl:875,int:967,haste:604,mastery:242,},
	138365:{ilvl:875,int:967,crit:513,mastery:332,},
	138367:{ilvl:875,int:967,crit:550,haste:296,},
	138368:{ilvl:875,int:967,vers:259,mastery:586,},
	138372:{ilvl:875,int:967,haste:314,mastery:532,},
	140910:{ilvl:875,int:967,haste:278,mastery:568,},
	138371:{ilvl:875,int:967,vers:568,mastery:278,},
	140909:{ilvl:875,int:967,haste:604,vers:242,},
	138374:{ilvl:875,int:967,haste:278,vers:568,},
	138364:{ilvl:875,int:967,vers:278,mastery:568,},
	138351:{ilvl:875,crit:1042,vers:462,},
	140877:{ilvl:875,int:1719,haste:623,vers:881,},
	138350:{ilvl:875,int:1719,crit:591,mastery:914,},
	140913:{ilvl:880,int:1801,haste:997,mastery:536,},
	138349:{ilvl:875,crit:430,haste:1075,},
	140865:{ilvl:870,int:1641,crit:644,haste:833,},
	138325:{ilvl:875,int:1719,haste:1075,mastery:430,},
	138339:{ilvl:875,haste:1075,vers:430,},
	138326:{ilvl:875,haste:623,mastery:881,},
	138376:{ilvl:875,int:1719,crit:978,vers:527,},
	138346:{ilvl:875,int:1719,crit:1042,mastery:462,},
	138324:{ilvl:875,int:1719,vers:462,mastery:1042,},
	138318:{ilvl:875,int:1719,vers:559,mastery:946,},
	140848:{ilvl:870,int:1641,haste:1023,mastery:454,},
	138319:{ilvl:875,int:1719,crit:914,haste:591,},
	138320:{ilvl:875,int:1719,crit:559,mastery:946,},
	140875:{ilvl:870,int:1641,haste:516,mastery:960,},
	140874:{ilvl:875,int:967,crit:568,mastery:278,},
	140878:{ilvl:875,int:967,crit:568,mastery:278,},
	140893:{ilvl:875,int:967,crit:314,haste:532,},
	140876:{ilvl:870,int:923,vers:487,mastery:344,},
	140886:{ilvl:875,int:967,haste:586,vers:259,},
	140889:{ilvl:875,int:967,crit:604,mastery:242,},
	140850:{ilvl:875,int:967,crit:314,mastery:532,},
	140902:{ilvl:870,int:923,vers:344,mastery:487,},
	140857:{ilvl:875,int:967,haste:550,mastery:296,},
	140869:{ilvl:870,int:1231,haste:720,mastery:387,},
	140863:{ilvl:870,int:1231,haste:411,mastery:696,},
	138327:{ilvl:875,int:1289,crit:758,vers:371,},
	138309:{ilvl:875,int:1289,crit:467,vers:661,},
	140905:{ilvl:875,int:1289,crit:467,mastery:661,},
	138328:{ilvl:875,int:1289,haste:443,vers:685,},
	138310:{ilvl:875,int:1289,crit:782,vers:346,},
	140888:{ilvl:870,int:1231,haste:387,mastery:720,},
	138377:{ilvl:875,int:1289,haste:782,mastery:346,},
	138353:{ilvl:875,int:1289,vers:394,mastery:733,},
	138354:{ilvl:875,crit:467,mastery:661,},
	138340:{ilvl:875,crit:685,haste:443,},
	140907:{ilvl:875,int:1289,crit:346,haste:782,},
	140879:{ilvl:870,int:1231,haste:506,mastery:601,},
	138329:{ilvl:875,haste:806,vers:322,},
	138341:{ilvl:875,int:1289,crit:492,vers:636,},
	138352:{ilvl:875,vers:709,mastery:419,},
	138311:{ilvl:875,int:1289,crit:782,mastery:346,},
	140880:{ilvl:870,int:1231,crit:459,mastery:648,},
	140887:{ilvl:875,int:1289,haste:636,mastery:492,},
	140912:{ilvl:875,int:1289,crit:733,vers:394,},
	140919:{ilvl:880,int:1351,crit:501,mastery:649,},
	140892:{ilvl:875,int:1289,haste:346,vers:782,},
	140890:{ilvl:875,int:1289,crit:515,vers:612,},
	140858:{ilvl:870,int:1231,crit:696,haste:411,},
	140868:{ilvl:875,int:1289,haste:661,mastery:467,},
	140859:{ilvl:875,int:1289,haste:733,vers:394,},
	140849:{ilvl:870,int:1231,haste:364,vers:744,},
	138379:{ilvl:875,int:1719,vers:591,mastery:914,},
	140908:{ilvl:875,int:1719,haste:656,vers:849,},
	140882:{ilvl:870,int:1641,haste:454,mastery:1023,},
	140871:{ilvl:870,int:1641,crit:454,haste:1023,},
	138359:{ilvl:875,int:1719,crit:978,vers:527,},
	138360:{ilvl:875,crit:623,haste:881,},
	138358:{ilvl:875,crit:914,haste:591,},
	140862:{ilvl:870,int:1641,haste:929,mastery:548,},
	138317:{ilvl:875,int:1719,crit:849,haste:656,},
	138333:{ilvl:875,int:1719,crit:494,haste:1010,},
	138315:{ilvl:875,int:1719,crit:978,haste:527,},
	138334:{ilvl:875,int:1719,crit:462,mastery:1042,},
	140852:{ilvl:875,int:1719,haste:688,mastery:817,},
	138344:{ilvl:875,crit:946,mastery:559,},
	138316:{ilvl:875,int:1719,haste:946,vers:559,},
	138345:{ilvl:875,int:1719,vers:623,mastery:881,},
	138335:{ilvl:875,crit:1042,vers:462,},
	140891:{ilvl:875,int:1289,haste:782,mastery:346,},
	140867:{ilvl:875,int:1289,vers:443,mastery:685,},
	140904:{ilvl:870,int:1231,crit:387,vers:720,},
	140885:{ilvl:875,int:1289,crit:419,vers:709,},
	140860:{ilvl:870,int:1231,haste:744,vers:364,},
	140854:{ilvl:870,int:1231,haste:506,mastery:601,},
	140861:{ilvl:875,int:1289,crit:492,mastery:636,},
	140914:{ilvl:880,int:1351,crit:772,mastery:378,},
	140884:{ilvl:870,int:1231,crit:673,haste:435,},
	140873:{ilvl:875,int:1289,crit:515,haste:612,},
	140895:{ilvl:875,crit:1728,mastery:792,},
	140896:{ilvl:875,haste:1512,vers:1008,},
	140906:{ilvl:875,crit:864,vers:1656,},
	140897:{ilvl:880,haste:742,mastery:1856,},
	140800:{ilvl:875,haste:1075,},
	140804:{ilvl:875,int:1634,},
	140795:{ilvl:875,haste:1075,},
	140798:{ilvl:875,crit:1075,},
	140793:{ilvl:870,mastery:1055,},
	140807:{ilvl:880,mastery:1095,},
	140808:{ilvl:880,haste:1095,},
	140792:{ilvl:870,int:1560,},
	140791:{ilvl:870,crit:1055,},
	140809:{ilvl:880,int:1712,},
	140805:{ilvl:875,int:1634,},
	140801:{ilvl:875,mastery:1075,},
	144406:{ilvl:870,int:1231,crit:340,mastery:767,},
	
	152169:{ilvl:930,int:2870,haste:1043,vers:805},
	152001:{ilvl:930,int:2870,crit:1162,haste:686},
	152000:{ilvl:930,int:2870,crit:752,mastery:1096},
	152423:{ilvl:940,int:3150,haste:1042,mastery:877},
	151966:{ilvl:930,haste:2112,mastery:1408},
	151965:{ilvl:930,crit:1609,vers:1911},
	151973:{ilvl:930,vers:1509,mastery:2011},
	152283:{ilvl:940,crit:2457,haste:1281},
	152005:{ilvl:940,int:2362,crit:575,mastery:863},
	152171:{ilvl:930,int:2153,crit:564,vers:822},
	152004:{ilvl:930,int:2153,haste:861,mastery:525},
	152062:{ilvl:930,int:1615,crit:475,haste:564},
	151938:{ilvl:930,int:1615,haste:438,mastery:601},
	152167:{ilvl:930,int:1615,vers:401,mastery:639},
	151937:{ilvl:930,int:1615,crit:557,mastery:483},
	151995:{ilvl:930,int:2870,haste:805,mastery:1043},
	152166:{ilvl:930,int:2870,crit:1162,haste:686},
	151994:{ilvl:930,int:2870,crit:1056,mastery:792},
	152008:{ilvl:930,int:1615,haste:669,vers:371},
	152280:{ilvl:930,int:1615,haste:386,mastery:654},
	151999:{ilvl:930,int:2153,crit:832,haste:554},
	152168:{ilvl:930,int:2153,crit:525,mastery:861},
	151998:{ilvl:930,int:2153,vers:594,mastery:792},
	152683:{ilvl:930,int:2153,crit:495,haste:891},
	152007:{ilvl:930,int:2153,vers:802,mastery:584},
	152006:{ilvl:930,int:2153,haste:604,mastery:782},
	152002:{ilvl:930,int:2870,crit:752,haste:1096},
	152170:{ilvl:930,int:2870,haste:1004,mastery:845},
	152003:{ilvl:930,int:2870,crit:1162,vers:686},
	151996:{ilvl:930,int:2153,crit:634,haste:752},
	152684:{ilvl:930,int:2153,haste:534,mastery:852},
	151997:{ilvl:930,int:2153,crit:802,vers:584},
	152284:{ilvl:930,crit:1408,haste:2112},
	152064:{ilvl:930,crit:1861,mastery:1659},
	152688:{ilvl:930,haste:1207,mastery:2313},
	152063:{ilvl:930,haste:1307,vers:2212},
	151972:{ilvl:940,vers:1602,mastery:2137},
	154172:{ilvl:1000,crit:1430,haste:1430,vers:1430,mastery:1430},
	151957:{ilvl:930,vers:1320},
	151960:{ilvl:930,int:2728},
	152289:{ilvl:930,mastery:1320},
	151958:{ilvl:930,int:2728},
	151956:{ilvl:930,int:2728},
	151970:{ilvl:930,vers:1320},
	154175:{ilvl:940,int:2994},
};


var baseMana = 1100000 / 5;
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

var sSpellsKeys = ["CBT","AG","ASC"];
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
	AG: [114911, 
		{
			114911: true,	//ag
			52042: true,	//hst
			209069: true,	//tidal
			114942: true,	//htt
			98021: true,	//slt
			206985: true, 	//guldan absorb
			143924: true, 	//leech
			235967: true,	//velens
			201633: true,	//est
		},
	114911],
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
};

var vantusRunes = {
	192776: 'guldan',
	192768: 'anomaly',
	192775: 'elisande',
	192772: 'telarn',
	192773: 'krosus',
	192767: 'scorp',
	192770: 'aluriel',
	192774: 'etraeus',
	192771: 'tich',
	192769: 'trillax',
	
	237821: 'goroth',
	237828: 'di',
	237824: 'harj',
	237826: 'saj',
	237822: 'sotm',
	237827: 'dh',
	237823: 'mov',
	237820: 'fa',
	237825: 'kj',
	
	250153: 'Garothi',
	250156: 'Felhounds',
	250150: 'Eonar',
	250158: 'Imonar',
	250148: 'Kingaroth',
	250160: 'Portal',
	250167: 'War Council',
	250165: 'Varimathras',
	250163: 'Shivarra',
	250146: 'Aggramar',
	250144: 'Argus',
};

var statsBuffs = {
	vers: {
		240670: 600,	//Stat Buff: Feral
		253901: 2000,	//Argus
	},
	crit: {
		240671: 800,	//Stat Buff: Fire
		190909: 1000, 	//Mark of the Claw
		224151: 3000,	//Traitor's Oath [suramar 5ppl set]
		253903: 2000,	//Argus
	},
	haste: {
		240673: 800,	//Stat Buff: spriest
		224347: 400,	//Flask of the Solemn Night
		214128: 6008,	//Chrono Shard
		190909: 1000, 	//Mark of the Claw
		253269: 855,	//abt trinket
		253901: 2000,	//Argus
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
		240672: 600,	//Stat Buff: Rouge
		215198: 430,	//Thrumming Gossamer
		253903: 2000,	//Argus
	},
	int: {
		33697: 2137,	//orc racial
		253258: 9000,	//abt trink
	},
};

var foodBuffs = {	//downscale stats if food buff went down; only top food, lazy for anotherone
	185736: ["vers",475],
	225603: ["haste",375],
	225604: ["mastery",375],
	225602: ["crit",375],
	225605: ["vers",375],
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
	130222: ["mastery",150],
	130220: ["haste",150],
	130219: ["crit",150],
	130221: ["vers",150],
	130248: ["int",200],
	151584: ["mastery",200],
	151583: ["haste",200],
	151580: ["crit",200],
	151585: ["vers",200],
};
var enchToStat = {
	5436: ["int",200],
	5469: ["int",200],
	5890: ["mastery",600],
	5429: ["mastery",150],
	5427: ["crit",150],
	5428: ["haste",150],
	5430: ["vers",150],
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

function ScaleStat(stat,fromIlvl,toIlvl,isLinear)
{
	//	linear == 1 for int, linear == nil for secondaries, linear == 2 for jewel slots
	var scalingFrom = (fromIlvl <= 800 || isLinear == 1) ? 1 : (isLinear == 2 ? Math.pow(0.996754034,fromIlvl - 800) : Math.pow(0.994435486,fromIlvl - 800));
	var scalingTo = (toIlvl <= 800 || isLinear == 1) ? 1 : (isLinear == 2 ? Math.pow(0.996754034,toIlvl - 800) : Math.pow(0.994435486,toIlvl - 800));
	
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
						rV.nobundosPredictionMana += 22000;
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
					rV.nobundosMana += 22000;
					rV.nobundosCount++;
					rV.manaGain += 22000;
					rV.manaUsage -= 22000;
					if(rV.manaUsageBySpell[8004]) rV.manaUsageBySpell[8004] -= 22000;
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
];

var TRAITS = [
	{	//Grace [+6%]
		init: function() {
			rV.traits[1352] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(!OverallBlacklist[spellID]){
					//rV.traits[1352] += amount * (1 - 1 / 1.06);
					rV.traits[1352] += Math.max((amount + overheal) * (1 - 1 / 1.06) - overheal,0);
				}
			},
		],
		obj: {
			name: "Grace of the Sea",
			id: 1352,
			spellID: 224841,
			icon: "inv_elemental_crystal_water.jpg",
		},
	},
	{	//Echo [+10%]
		init: function() {
			rV.traits[1693] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(!OverallBlacklist[spellID]){
					//rV.traits[1693] += amount * (1 - 1 / 1.1);
					rV.traits[1693] += Math.max((amount + overheal) * (1 - 1 / 1.1) - overheal,0);
				}
			},
		],
		obj: {
			name: "Echo of the Earthen Ring",
			id: 1693,
			spellID: 241205,
			icon: "misc_legionfall_shaman.jpg",
		},
	},
	{	//+5%
		init: function() {
			rV.traits[1389] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(!OverallBlacklist[spellID]){
					rV.traits[1389] += Math.max((amount + overheal) * (1 - 1 / 1.05) - overheal,0);
				}
			},
		],
		obj: {
			name: "Flow of the Tides",
			id: 1389,
			spellID: 214933,
			icon: "inv_mace_1h_artifactazshara_d_02.jpg",
		},
	},
	{	//Paragon
		init: function() {
			rV.traits[1600] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellScaleInt[spellID]){
					if(pV.paragonTraitActive && GetTraitRank(1600) > 0){
						rV.traits[1600] += amount / cV.intellect * ((4000 + (GetTraitRank(1600) - 1) * 300) * 1.05);
					}
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 242586) pV.paragonTraitActive = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 242586) pV.paragonTraitActive = false;
			},
		],
		obj: {
			name: "Concordance of the Legionfall",
			id: 1600,
			spellID: 239042,
			icon: "trade_archaeology_sharkjaws.jpg",
			additionalText: function(){
				var rank = GetTraitRank(1600);
				if(rank == 1){
					return "";
				} else {
					var amount = ((rank * 300) / (rank*300  + 4000)) * rV.traits[1600];
					rank--;
					return "Per rank: "+NumberToFormattedNumber(amount / rank,0,2)+" ("+(amount / rank/rV.total*100).toFixed(2)+"%)";
				}	
			},
		},
	},
	{	//BL trait
		init: function() {
			rV.traits[1112] = 0;
			pV.trait1112Temp = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(!OverallBlacklist[spellID]){
					if(pV.blTraitActive){
						//rV.traits[1112] += amount * (1 - 1 / 1.25);
						rV.traits[1112] += Math.max((amount + overheal) * (1 - 1 / 1.25) - overheal,0);
					} else {
						pV.trait1112Temp += Math.max((amount + overheal) * (1 - 1 / 1.25) - overheal,0);
					}
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 208416) pV.blTraitActive = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 208416) {
					if(!pV.blTraitActive){
						rV.traits[1112] += pV.trait1112Temp;
						pV.trait1112Temp = 0;
					}
					pV.blTraitActive = false;
				}
			},
		],
		obj: {
			name: "Sense of Urgency",
			id: 1112,
			spellID: 207355,
			icon: "inv_misc_pocketwatch_02.jpg",
		},
	},
	{	//CH crit trait
		init: function() {
			rV.traits[1109] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 1064 && event.hitType == 2){
					rV.traits[1109] += pV.critAmount * ((GetTraitRank(1109) * 4 * 400) / pV.critNow);
				}
			},
		],
		obj: {
			name: "Floodwaters",
			id: 1109,
			spellID: 207348,
			icon: "spell_nature_healingwavegreater.jpg",
		},
	},
	{	//HR heal+crit trait
		init: function() {
			rV.traits[1107] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 73921){
					if(event.hitType == 2) rV.traits[1107] += pV.critAmount * ((GetTraitRank(1107) * 2 * 400) / pV.critNow);
					//rV.traits[1107] += amount * (1 - 1 / (1 + 0.02 * GetTraitRank(1107)));
					rV.traits[1107] += Math.max((amount + overheal) * (1 - 1 / (1 + 0.02 * GetTraitRank(1107))) - overheal,0);
				}
			},
		],
		obj: {
			name: "Empowered Droplets",
			id: 1107,
			spellID: 207255,
			icon: "spell_nature_giftofthewaterspirit.jpg",
		},
	},
	{	//CH mana
		init: function() {
			rV.traits[1113] = 0;
		},
		afterParse: function() {
			rV.trait_1113 = rV.traits[1113];
			rV.traits[1113] = rV.traits[1113] / rV.manaUsage * rV.healFromMana;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 101033 && event.resourceChange == 4125){
					rV.traits[1113] += 1325;
				}
			},
		],
		obj: {
			name: "Refreshing Currents",
			id: 1113,
			spellID: 207356,
			icon: "ability_monk_cracklingjadelightning.jpg",
			additionalText: function(){
				return "Total mana gained: "+NumberToFormattedNumber(rV.trait_1113,0,2);
			},
		},
	},
	{	//HTT
		init: function() {
			rV.traits[1117] = 0;
			pV.httTraitLast = 0;
			pV.httTraitCount = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 114942){
					if((event["timestamp"] - pV.httTraitLast) > 15000){
						pV.httTraitCount = 0;
					} else if((event["timestamp"] - pV.httTraitLast) >= 300){
						pV.httTraitCount = Math.min(pV.httTraitCount + 1,7);
					}
					pV.httTraitLast = event["timestamp"];
					
					//rV.traits[1117] += amount * (1 - 1 / (1 + 0.1 * pV.httTraitCount));
					rV.traits[1117] += Math.max((amount + overheal) * (1 - 1 / (1 + 0.1 * pV.httTraitCount)) - overheal,0);
				}
			},
		],
		obj: {
			name: "Cumulative Upkeep",
			id: 1117,
			spellID: 207362,
			icon: "ability_shaman_healingtide.jpg",
		},
	},
	{	//HR +30
		init: function() {
			rV.traits[1598] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 73921){
					//rV.traits[1598] += amount * (1 - 1 / 1.3);
					rV.traits[1598] += Math.max((amount + overheal) * (1 - 1 / 1.3) - overheal,0);
				}
			},
		],
		obj: {
			name: "Pitter-Patter",
			id: 1598,
			spellID: 242652,
			icon: "spell_nature_giftofthewaterspirit.jpg",
		},
	},
	{	//GotQ
		init: function() {
			rV.traits[1599] = 0;
			pV.gotqLast = 0;
			pV.gotqDisableOldDetect = false;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 207778 && !pV.gotqDisableOldDetect){
					if((event["timestamp"] - pV.gotqLast) > 2000 && (event["timestamp"] - pV.gotqLast) < 4000){
						rV.traits[1599] += amount;
					}
				} else if (spellID == 255227){	//7.3 update
					rV.traits[1599] += amount;
					pV.gotqDisableOldDetect = true;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 207778) pV.gotqLast = event["timestamp"];
			},
		],
		obj: {
			name: "Deep Waters",
			id: 1599,
			spellID: 238143,
			icon: "inv_mace_1h_artifactazshara_d_02.jpg",
		},
	},
	{	//QD [hst]
		init: function() {
			rV.traits[1116] = 0;
		},
		afterParse: function() {
			if(healingData[208899]) {
				rV.traits[1116] = healingData[208899][0];
			}
		},
		obj: {
			name: "Queen's Decree",
			id: 1116,
			spellID: 207360,
			icon: "inv_misc_volatilewater.jpg",
		},
	},
	{	//riptide totem
		init: function() {
			rV.traits[1115] = 0;
		},
		afterParse: function() {
			if(healingData[209069]) {
				rV.traits[1115] = healingData[209069][0];
			}
		},
		obj: {
			name: "Tidal Pools",
			id: 1115,
			spellID: 207358,
			icon: "achievement_dungeon_throneofthetides.jpg",
		},
	},
	{	//riptide
		init: function() {
			rV.traits[1105] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 61295){
					//rV.traits[1105] += amount * (1 - 1 / (1 + 0.05 * GetTraitRank(1105)));
					rV.traits[1105] += Math.max((amount + overheal) * (1 - 1 / (1 + 0.05 * GetTraitRank(1105))) - overheal,0);
				}
			},
		],
		obj: {
			name: "Pull of the Sea",
			id: 1105,
			spellID: 210031,
			icon: "inv_tradeskillitem_sorcererswater.jpg",
		},
	},
	{	//hst speed
		init: function() {
			rV.traits[1106] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 52042){
					rV.traits[1106] += amount * (1 - 1 / (1 + 0.1 * GetTraitRank(1106)));
				}
			},
		],
		obj: {
			name: "Wavecrash",
			id: 1106,
			spellID: 207206,
			icon: "inv_spear_04.jpg",
		},
	},
	{	//hw & surge
		init: function() {
			rV.traits[1104] = 0;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 77472 || spellID == 8004){
					//rV.traits[1104] += amount * (1 - 1 / (1 + 0.05 * GetTraitRank(1104)));
					rV.traits[1104] += Math.max((amount + overheal) * (1 - 1 / (1 + 0.05 * GetTraitRank(1104))) - overheal,0);
				}
			},
		],
		obj: {
			name: "Buffeting Waves",
			id: 1104,
			spellID: 207092,
			icon: "ability_skyreach_four_wind.jpg",
		},
	},
	{	//tidal buff
		init: function() {
			rV.traits[1103] = 0;
			rV.traits1103_CastTime = 0;
			rV.traits1103_Crit = 0;
			pV.traits1103_TidalLoss = 0;
			pV.traits1103_HRStartCast = 0;
			pV.traits1103_HRCastTime = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if((spellID == 77472 || spellID == 8004) && (event.timestamp <= pV.hwWithoutTidalLoss)){
					if(spellID == 8004 && event.hitType == 2){
						rV.traits1103_Crit += ( GetTraitRank(1103) * 4 * 400 ) / pV.critNow * pV.critAmount;;
					} else if(spellID == 77472) {
						var tidal = (GetTraitRank(1103) * 0.03);
						rV.traits1103_CastTime += pV.traits1103_HRCastTime / (1 - tidal) * tidal;
					}
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 53390) pV.traits1103_TidalLoss = event.timestamp + 500;
			},
			"removebuffstack", function(event,spellID){
				if(spellID == 53390) pV.traits1103_TidalLoss = event.timestamp + 500;
			},
			"begincast", function(event,spellID){
				if(spellID == 77472) pV.traits1103_HRStartCast = event.timestamp;
			},
			"cast", function(event,spellID){
				if(spellID == 77472) {
					pV.traits1103_HRCastTime = event.timestamp - pV.traits1103_HRStartCast;
				}
			},			
		],
		afterParse: function() {
			var hps = rV.total / (currFightData.end_time - currFightData.start_time);
			
			//rV.traits[1103] = rV.traits1103_Crit + hps * rV.traits1103_CastTime;
			rV.traits[1103] = rV.traits1103_Crit + (rV.buffs.haste[-53390] || 0);
		},		
		obj: {
			name: "Tidal Chains",
			id: 1103,
			spellID: 207088,
			icon: "spell_frost_chainsofice.jpg",
			tip: function() { return "From surge crit: "+NumberToFormattedNumber(rV.traits1103_Crit,0,2)+"<br>Reduced HW cast time: "+(rV.traits1103_CastTime/1000).toFixed(1)+"s" },
		},
	},
	{	//QA
		init: function() {
			rV.traits[1108] = 0;
			rV.traits1108_CastTime = 0;
			pV.traits1108_LastCast = 0;
			pV.traits1108_QALoss = 0;
		},
		parse: [
			"applybuff", function(event,spellID){
				if(spellID == 207288) pV.traits1108_QAActive = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 207288) pV.traits1108_QAActive = false;
			},
			"begincast", function(event,spellID){
				if(spellID == 77472 || spellID == 8004 || spellID == 1064) pV.traits1108_LastCast = event.timestamp;
			},
			"cast", function(event,spellID){
				if(pV.traits1108_QAActive && (spellID == 77472 || spellID == 8004 || spellID == 1064)) {
					var castTime = event.timestamp - pV.traits1108_LastCast;
					
					var trait = (GetTraitRank(1108) * 0.05);
					
					rV.traits1108_CastTime += castTime / (1 - trait) * trait;
				}
			},			
		],
		afterParse: function() {
			var hps = rV.total / (currFightData.end_time - currFightData.start_time);
			
			//rV.traits[1108] = hps * rV.traits1108_CastTime;
			rV.traits[1108] = rV.buffs.haste[-207288] || 0;
		},		
		obj: {
			name: "Queen Ascendant",
			id: 1108,
			spellID: 207288,
			icon: "ability_shaman_watershield.jpg",
			//tip: function() { return "Reduced cast time: "+(rV.traits1108_CastTime/1000).toFixed(1)+"s<br>To value heal number used HPS*Reduced time" },
			tip: function() { return "Reduced cast time: "+(rV.traits1108_CastTime/1000).toFixed(1)+"s" },
		},
	},	
];

NETHERLIGHT = [
	{	//Infusion of Light
		init: function() {
			rV.netherlight[253093] = 0;
		},
		afterParse: function() {
			if(healingData[253099]) {
				rV.netherlight[253093] = healingData[253099][0];
			}
		},		
		obj: {
			name: "Infusion of Light",
			spellID: 253093,
			icon: "ability_malkorok_blightofyshaarj_yellow.jpg",
		},
	},	
	{	//Secure in the Light
		init: function() {
			rV.netherlight[253070] = 0;
		},
		afterParse: function() {
			if(healingData[253072]) {
				rV.netherlight[253070] = healingData[253072][0];
			}
		},		
		obj: {
			name: "Secure in the Light",
			spellID: 253070,
			icon: "ability_paladin_toweroflight.jpg",
		},
	},
	{	//Light Speed
		init: function() {
			rV.netherlight[252088] = 0;
		},
		afterParse: function() {
			var rank = 1;
			var perRankBonus = cV.gearInfo[152626] ? 750 : 500;
			if(cV.traitBySpell[252088]) rank = cV.traitBySpell[252088].rank || 1;
			rV.netherlight[252088] = healPerStat["haste"].amount * perRankBonus * rank;
		},		
		obj: {
			name: "Light Speed",
			spellID: 252088,
			icon: "ability_rogue_sprint.jpg",
		},
	},
	{	//Master of Shadows
		init: function() {
			rV.netherlight[252091] = 0;
		},
		afterParse: function() {
			var rank = 1;
			var perRankBonus = cV.gearInfo[152626] ? 750 : 500;
			if(cV.traitBySpell[252091]) rank = cV.traitBySpell[252091].rank || 1;
			rV.netherlight[252091] = healPerStat["mastery"].amount * perRankBonus * rank;
		},		
		obj: {
			name: "Master of Shadows",
			spellID: 252091,
			icon: "spell_shadow_shadesofdarkness.jpg",
		},
	},
	{	//Shocklight
		init: function() {
			rV.netherlight[252799] = 0;
		},
		parse: [
			"combantantInfo", function(event){
				var perRankBonus = cV.gearInfo[152626] ? 2250 : 1500;
				for (var k = 0, k_len = event.artifact.length; k < k_len; k++) {
					var traitData = event.artifact[k];
					if( traitData.spellID == 252799 ){
						statsBuffs.crit[242586] = perRankBonus * (traitData.rank || 1);
					}
				}
			}
		],		
		afterParse: function() {
			if(rV.buffs.crit[242586]) {
				rV.netherlight[252799] = rV.buffs.crit[242586];
			}
			
			delete statsBuffs.crit[242586];
		},		
		obj: {
			name: "Shocklight",
			spellID: 252799,
			icon: "paladin_icon_speedoflight.jpg",
		},
	},
	{	//Murderous Intent
		init: function() {
			rV.netherlight[252191] = 0;
		},
		parse: [
			"combantantInfo", function(event){
				var perRankBonus = cV.gearInfo[152626] ? 2250 : 1500;
				for (var k = 0, k_len = event.artifact.length; k < k_len; k++) {
					var traitData = event.artifact[k];
					if( traitData.spellID == 252191 ){
						statsBuffs.vers[242586] = perRankBonus * (traitData.rank || 1);
					}
				}
			}
		],	
		afterParse: function() {
			if(rV.buffs.vers[242586]) {
				rV.netherlight[252191] = rV.buffs.vers[242586];
			}
			
			delete statsBuffs.vers[242586];
		},		
		obj: {
			name: "Murderous Intent",
			spellID: 252191,
			icon: "spell_shadow_charm.jpg",
		},
	},
	{	//Refractive Shell
		init: function() {
			rV.netherlight[252207] = 0;
		},
		afterParse: function() {
			if(healingData[252208]) {
				rV.netherlight[252207] = healingData[252208][0];
			}
		},		
		obj: {
			name: "Refractive Shell",
			spellID: 252207,
			icon: "ability_priest_reflectiveshield.jpg",
		},
	},
	{	//Light's Embrace
		init: function() {
			rV.netherlight[253111] = 0;
		},
		afterParse: function() {
			if(healingData[253216]) {
				rV.netherlight[253111] = healingData[253216][0];
			}
		},		
		obj: {
			name: "Light's Embrace",
			spellID: 253111,
			icon: "achievement_reputation_07.jpg",
		},
	},
	{	//Chaotic Darkness
		init: function() {
			rV.netherlight[252888] = 0;
		},
		afterParse: function() {
			if(healingData[252897]) {
				rV.netherlight[252888] = healingData[252897][0];
			}
		},		
		obj: {
			name: "Chaotic Darkness",
			spellID: 252888,
			icon: "inv_artifact_powerofthedarkside.jpg",
		},
	},
	{	//Shadowbind
		init: function() {
			rV.netherlight[252875] = 0;
		},
		afterParse: function() {
			if(healingData[252879]) {
				rV.netherlight[252875] = healingData[252879][0];
			}
		},		
		obj: {
			name: "Shadowbind",
			spellID: 252875,
			icon: "spell_shadow_deathpact.jpg",
		},
	},
	{	//+1 ilvl
		init: function() {
			rV.netherlight[-1] = 0;
			
			pV.netherlightIlvlCurrWeapon = 750;
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 128911) pV.netherlightIlvlCurrWeapon = itemData.itemLevel;
			}
		],
		afterStats: function() {
			var items = [128911, 128934];
			var stats = ["int","crit","mastery"];
			for (var i = 0, len = items.length; i < len; i++) {
				var itemData = itemsStats[ items[i] ];
				for (var j = 0, j_len = stats.length; j < j_len; j++) {
					var statName = stats[j];
					
					var valDef = ScaleStat(itemData[statName],itemData.ilvl,pV.netherlightIlvlCurrWeapon,statName == "int" ? 1 : 0);
					var valBuffed = ScaleStat(itemData[statName],itemData.ilvl,pV.netherlightIlvlCurrWeapon + 1,statName == "int" ? 1 : 0)
					
					rV.netherlight[-1] += (valBuffed - valDef) * healPerStat[statName].amount * (statName == "int" ? 1.05 : 1);
				}
			}
			
		},		
		obj: {
			name: "+1 weapon item level",
			spellID: -1,
			icon: "inv_mace_1h_artifactazshara_d_02.jpg",
			tip: function() { return "Not real trait. Just for compare numbers" },
			fakeTrait: true,
		},
	},
];

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
			col: 2,
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
			col: 3,
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
					
					rV.talents_prediction[73685] += 3.5 * cV.intellect * (pV.critNow / 40000 + 1) * (pV.versNow / 47500 + 1) * 1.2 * 1.06 * 1.05 * 1.1;
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
			col: 2,
			icon: "spell_shaman_unleashweapon_life.jpg",
			predictionTooltip: function(){ return "Some riptide casts replaced with UL<br>Can be better with timing for CH" },
		},
	},
	{	//AG
		init: function() {
			rV.talents[108281] = 0;
		},
		afterParse: function() {
			if(healingData[114911]) {
				rV.talents[108281] = healingData[114911][0];
			}
		},
		obj: {
			name: "Ancestral Guidance",
			id: 108281,
			tier: 4,
			col: 2,
			icon: "ability_shaman_ancestralguidance.jpg",
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
			tier: 5,
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
			col: 1,
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
			col: 3,
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
			col: 1,
			icon: "spell_nature_healingwavelesser.jpg",
		},
	},	
	{
		obj: {
			name: "Gust of Wind",
			id: 192063,
			tier: 2,
			col: 1,
			icon: "ability_skyreach_four_wind.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Graceful Spirit",
			id: 192088,
			tier: 2,
			col: 2,
			icon: "spell_shaman_spectraltransformation.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Wind Rush Totem",
			id: 192077,
			tier: 2,
			col: 3,
			icon: "ability_shaman_windwalktotem.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Lightning Surge Totem",
			id: 192058,
			tier: 3,
			col: 1,
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
			name: "Voodoo Totem",
			id: 196932,
			tier: 3,
			col: 3,
			icon: "spell_totem_wardofdraining.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Crashing Waves",
			id: 197464,
			tier: 4,
			col: 1,
			icon: "spell_frost_summonwaterelemental.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Deluge",
			id: 200076,
			tier: 4,
			col: 3,
			icon: "ability_shawaterelemental_reform.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Ancestral Protection Totem",
			id: 207399,
			tier: 5,
			col: 1,
			icon: "spell_nature_reincarnation.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Ancestral Vigor",
			id: 207401,
			tier: 5,
			col: 3,
			icon: "spell_shaman_blessingoftheeternals.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Echo of the Elements",
			id: 108283,
			tier: 6,
			col: 3,
			icon: "ability_shaman_echooftheelements.jpg",
			none: true,
		},
	},
	{
		obj: {
			name: "Bottomless Depths",
			id: 197467,
			tier: 6,
			col: 1,
			icon: "ability_shawaterelemental_swirl.jpg",
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
				if((event.resourceChange == 6600 || (cV.gearInfo[134488] && event.resourceChange == 6930)) && spellID == 101033 && pV.resurgenceLast6600 == 8004) {
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
				if((event.resourceChange == 6600 || (cV.gearInfo[134488] && event.resourceChange == 6930)) && spellID == 101033 && pV.resurgenceLast6600 == 61295) {
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
				if((event.resourceChange == 6600 || (cV.gearInfo[134488] && event.resourceChange == 6930)) && spellID == 101033 && pV.resurgenceLast6600 == 73685) {
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
				if((event.resourceChange == 4125 || event.resourceChange == 2750 || (cV.gearInfo[134488] && event.resourceChange >= 4330 && event.resourceChange <= 4333) || (cV.gearInfo[134488] && event.resourceChange >= 2886 && event.resourceChange <= 2889)) && spellID == 101033) {
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
				if((event.resourceChange == 11000 || (cV.gearInfo[134488] && event.resourceChange == 11550)) && spellID == 101033) {
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
						rV.potions[229206] += amount / cV.intellect * 2500 * 1.05;
					} else {
						rV.prolongedTemp += amount / cV.intellect * 2500 * 1.05;
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
	{	//DR: Totem; Caress of the Tidemother
		init: function() {
			rV.dr[209950] = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && pV.dr209950active){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;
					
					var currDr = GetTraitRank(1111);
					currDr = 1 - (currDr % 3 == 0 ? currDr / 3 * 0.1 : Math.floor(currDr/3)*0.1 + 0.03 * (currDr % 3));
				
					rV.dr[209950] += (amount / currDr) - amount;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 209950) pV.dr209950active = false;
			},
			"applybuff", function(event,spellID){
				if(spellID == 209950) pV.dr209950active = true;
			},
		],
	},
	{	//DR: Totem; Ghost in the Mists
		init: function() {
			rV.dr[207527] = 0;
			pV.dr207527active = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(event.targetID == currFightData.actor && pV.dr207527active > 0){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;
					
					var currDr = 1 - (GetTraitRank(1110) * 0.01 * pV.dr207527active);
				
					rV.dr[207527] += (amount / currDr) - amount;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 207527) pV.dr207527active = 0;
			},
			"applybuff", function(event,spellID){
				if(spellID == 207527) pV.dr207527active = 1;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 207527) pV.dr207527active = event.stack;
			},
		],
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
				
					var currVersDr = 1 - pV.versNow / 950 / 100;	//used last known vers from healing event
				
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

function GetVersFactor(){ return healPerStat.vers.avgStat / 475 / 100 + 1; }
function GetCritFactor(){ return cV.combantantInfo.critSpell / 400 / 100 + 1; }
function GetFightLenFactor(cd){ return (currFightData.end_time - currFightData.start_time) / cd / 1000; }
function GetHasteFactor(){ return healPerStat.haste.avgStat / 375 / 100 + 1; }
function GetAftifactFactor(){ return 1.06 * 1.05 * 1.1; }
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
	var haste_amount = healPerStat.haste.amount * 200;
	var crit_amount = healPerStat.crit.amount * 200;
	var vers_amount = healPerStat.vers.amount * 200;
	var mastery_amount = healPerStat.mastery.amount * 200;
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
	//Trinkets
	{slot:14,item:141482,ilvl:860,type:1,name:"Unstable Arcanocrystal",haste:847,vers:847,crit:847,mastery:847,icon:"inv_datacrystal04"},
	{slot:14,item:134160,ilvl:865,type:1,name:"Stat Stick: Crit",int:1489,crit:1036,icon:"inv_misc_gem_bloodstone_01",wilvl:810},
	{slot:14,item:134336,ilvl:865,type:1,name:"Stat Stick: Vers",int:1489,vers:1036,icon:"inv_misc_gem_crystalcut_01",wilvl:810},
	{slot:14,item:134204,ilvl:865,type:1,name:"Stat Stick: Haste",int:1489,haste:1036,icon:"inv_weapon_crossbow_22",wilvl:810},
	{slot:14,item:121311,ilvl:865,type:1,name:"Stat Stick: Mastery",int:1489,mastery:1036,icon:"inv_misc_herb_mana_thistle_leaf",wilvl:810},

	{slot:14,item:137419,ilvl:845,type:2,name:"Chrono Shard",int:1236,icon:"inv_7_0raid_trinket_05a",special:function(ilvl){ return ScaleStat(5269,845,ilvl) * healPerStat.haste.amount * 10 / 60 * 1; },wilvl:820},
	{slot:14,item:144480,ilvl:885,type:2,name:"Dreadstone of Endless Shadows",int:1794,icon:"inv_jewelcrafting_shadowsongamethyst_01",special:function(ilvl){ return ScaleStat(4040,885,ilvl) * healPerStat.haste.amount * 8 / 60 * 0.75 + ScaleStat(4040,885,ilvl) * healPerStat.crit.amount * 8 / 60 * 0.75 + ScaleStat(4040,885,ilvl) * healPerStat.mastery.amount * 8 / 60 * 0.75; },wilvl:820},
	{slot:14,item:136714,ilvl:865,type:2,name:"Amalgam's Seventh Spine",int:1489,icon:"spell_priest_mindspike",special:function(ilvl){ return ScaleStat(4138,865,ilvl) * ((pV.castNum[77472] || 0) + (pV.castNum[8004] || 0)) / rV.manaUsage * rV.healFromMana * 0.8; },wilvl:820},
	{slot:14,item:142162,ilvl:865,type:2,name:"Fluctuating Energy",int:1489,icon:"inv_elemental_primal_mana",special:function(ilvl){ return ScaleStat(19704,865,ilvl) * GetFightLenFactor(60) * 2 / rV.manaUsage * rV.healFromMana * 0.75; },wilvl:860},
	{slot:14,item:137452,ilvl:825,type:2,name:"Thrumming Gossamer",int:1026,icon:"inv_misc_web_02",special:function(ilvl){ return ScaleStat(350,825,ilvl) * 10.5 * 20 / 60 * 0.75 * healPerStat.mastery.amount; },wilvl:820},
	{slot:14,item:133642,ilvl:825,type:2,name:"Horn of Valor",vers:892,icon:"inv_misc_horn_03",special:function(ilvl){ return ScaleStat(2461,825,ilvl,1) * 30 / 120 * healPerStat.int.amount * 1.05; },wilvl:820},

	{slot:14,item:147002,ilvl:900,type:3,name:"Charm of the Rising Tide",int:2063,icon:"inv_7_0raid_trinket_04a",special:function(ilvl){ return ScaleStat(576,900,ilvl) * 7.75 * healPerStat.haste.amount * 20 / 90; },wilvl:890},
	{slot:14,item:147004,ilvl:900,type:3,name:"Sea Star of the Depthmothe",vers:1180,icon:"inv_jewelcrafting_starofelune_02",special:function(ilvl){ return ScaleStat(29716,900,ilvl,1) * 32 * (pV.castNum[1064] || 0) * 0.4 * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * 0.7 * GetFeedFactor(); },wilvl:890,tip:"Rare using CH in the current fight can devalue real power of this trinket"},
	{slot:14,item:147007,ilvl:910,type:3,name:"The Deceiver's Grand Design",mastery:1225,icon:"inv_offhand_1h_pvpcataclysms3_c_01",special:function(ilvl){ return ScaleStat(96098,910,ilvl,1) * 40 * GetHasteFactor() * GetAftifactFactor() * (GetFightLenFactor(120) + 1.5) * GetVersFactor() * GetCritFactor() * 0.5 * GetFeedFactor() + ScaleStat(1680000,910,ilvl,1)* (GetFightLenFactor(120) + 2) * GetVersFactor() * 0.5; },wilvl:890},
	{slot:14,item:147006,ilvl:900,type:3,name:"Archive of Faith",crit:1180,icon:"inv__wod_arakoa4",special:function(ilvl){ return ScaleStat(1776330,900,ilvl,1) * (GetFightLenFactor(60) + 0.5) * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * 0.5 * GetFeedFactor() + ScaleStat(647633,900,ilvl,1) * (GetFightLenFactor(60) + 1) * GetVersFactor() * 0.7; },wilvl:890},
	{slot:14,item:147005,ilvl:900,type:3,name:"Chalice of Moonlight: Day",int:2063,icon:"inv_offhand_pvealliance_d_01",special:function(ilvl){ return ScaleStat(3619,900,ilvl) * healPerStat.crit.amount * 12 / 60 * 1.5; },wilvl:890},
	{slot:14,item:147005,ilvl:900,type:3,name:"Chalice of Moonlight: Night",int:2063,icon:"inv_offhand_pvealliance_d_01",special:function(ilvl){ return ScaleStat(3619,900,ilvl) * healPerStat.haste.amount * 12 / 60 * 1.5; },wilvl:890},
	{slot:14,item:147003,ilvl:900,type:3,name:"Barbaric Mindslaver",int:2063,icon:"spell_priest_psyfiend",special:function(ilvl){ return ScaleStat(181467,900,ilvl,1) * 6 * GetFightLenFactor(60) * GetVersFactor() * GetCritFactor() * 0.6 * GetFeedFactor(); },wilvl:890},

	{slot:14,item:151956,ilvl:930,type:4,name:"Garothi Feedback Conduit",int:2728,icon:"inv_misc_enggizmos_06",special:function(ilvl){ return ScaleStat(855*1.5*1.1,930,ilvl) * healPerStat.haste.amount * 8 / 60 * 10; }},
	{slot:14,item:151960,ilvl:930,type:4,name:"Carafe of Searing Light",int:2728,icon:"inv_offhand_pvealliance_d_01_gold",special:function(ilvl){ return ScaleStat(4991,930,ilvl) * 10 / rV.manaUsage * rV.healFromMana * (GetFightLenFactor(60) + 0.5); }},
	{slot:14,item:151958,ilvl:930,type:4,name:"Tarratus Keystone",int:2728,icon:"inv_datacrystal06",special:function(ilvl){ return ScaleStat(1633313,930,ilvl,1) * 1.1 * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * (GetFightLenFactor(90) + 1) * 0.9 * GetFeedFactor(); }},
	{slot:14,item:152289,ilvl:930,type:4,name:"Highfather's Machination",mastery:1320,icon:"spell_nature_astralrecalgroup",special:function(ilvl){ return ScaleStat(216140,930,ilvl,1) * 1.3 * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * 10 * GetFightLenFactor(60) * GetFeedFactor(); }},
	{slot:14,item:152289,ilvl:930,type:4,name:"Highfather's Machination [rare proc]",mastery:1320,icon:"spell_nature_astralrecalgroup",special:function(ilvl){ return ScaleStat(216140,930,ilvl,1) * 1.3 * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * 10 * GetFightLenFactor(60) * 0.5 * GetFeedFactor(); },hideonrealitem:true},
	{slot:14,item:151957,ilvl:930,type:4,name:"Ishkar's Felshield Emitter",vers:1320,icon:"ability_vehicle_shellshieldgenerator_green",special:function(ilvl){ return ScaleStat(2416491,930,ilvl,1) * 1.1 * GetVersFactor() * GetCritFactor() * (GetFightLenFactor(60) + 0.5) * 0.9; }},
	{slot:14,item:154175,ilvl:940,type:4,name:"Eonar's Compassion",int:2994,icon:"inv_antorus_green",special:function(ilvl){ return ScaleStat(127273,940,ilvl,1) * GetVersFactor() * GetCritFactor() * GetAftifactFactor() * 7 * 1.2 * GetFightLenFactor(60) * 0.8 * GetFeedFactor() + ScaleStat(250782,940,ilvl,1) * GetVersFactor() * 4 * 1 * GetFightLenFactor(60) * GetFeedFactor(); },max:1000},
	{slot:14,item:151970,ilvl:930,type:4,name:"Vitality Resonator",vers:1320,icon:"inv_7_0raid_trinket_08d",special:function(ilvl){ return ScaleStat(9705*1.1,930,ilvl,1) * healPerStat.int.amount * 1.05 * 15 / 60 * 0.75; }},

	{slot:14,item:144258,ilvl:940,type:5,name:"Velen's Future Sight",int:2994,crit:456,mastery:456,haste:456,icon:"spell_holy_healingfocus",scale:970,special:function(ilvl){ return rV.total * 10 / 75 * 0.15 + rV.totalOver * 10 / 75 * 0.5 * 0.65 * GetAftifactFactor(); },wilvl:910},
	{slot:14,item:154172,ilvl:1000,type:5,name:"Aman'Thul's Vision",int:2345,crit:1429,mastery:1429,haste:1429,vers:1429,icon:"inv_antorus_turquoise",scale:1000,wilvl:940},

	{slot:14,item:128710,ilvl:900,type:6,name:"Darkmoon Deck: Promises",int:2063,icon:"70_inscription_deck_promises",scale:900,special:function(ilvl){ return 0.05 * rV.healFromMana; },wilvl:835},
	{slot:14,item:140805,ilvl:875,type:6,name:"Ephemeral Paradox",int:1634,icon:"inv_7_0raid_trinket_07c",special:function(ilvl){ return (ScaleStat(3457,875,ilvl) + 19800) * GetFightLenFactor(60) * 1.2 / rV.manaUsage * rV.healFromMana; }},
	{slot:14,item:140793,ilvl:870,type:6,name:"Perfectly Preserved Cake",mastery:1055,icon:"inv_misc_celebrationcake_01",special:function(ilvl){ return ScaleStat(547872,870,ilvl,1) * 5 * (GetFightLenFactor(120) + 0.5); },wilvl:875},
	{slot:14,item:139322,ilvl:850,type:6,name:"Cocoon of Enforced Solitude",int:1295,icon:"inv_misc_web_01",special:function(ilvl){ return ScaleStat(7043,850,ilvl) * 10 * (GetFightLenFactor(120) + 0.5) / rV.manaUsage * rV.healFromMana * 0.5; }},

	//Legendaries
	{slot:-1,item:144258,ilvl:940,type:5,name:"Velen's Future Sight",int:2994,crit:456,mastery:456,haste:456,icon:"spell_holy_healingfocus",scale:970,special:function(ilvl){ return rV.total * 10 / 75 * 0.15 + rV.totalOver * 10 / 75 * 0.5 * 0.65 * GetAftifactFactor(); },wilvl:910},
	{slot:-1,item:137058,ilvl:910,type:5,name:"Praetorian's Tidecallers",int:1786,mastery:551,haste:735,icon:"inv_gauntlets_plate_raidpaladin_i_01",scale:970,special:function(ilvl){ return rV.tidecallersPredictionAmount; },wilvl:910},	
	{slot:-1,item:137051,ilvl:910,type:5,name:"Focuser of Jonat, the Elder",crit:2004,haste:1114,icon:"inv_jewelry_ring_96",scale:970,special:function(ilvl){ return rV.jonatPredictionAmount * GetFeedFactor() + GetSocketFactor(); },wilvl:910},	
	{slot:-1,item:132444,ilvl:910,type:5,name:"Prydaz, Xavaric's Magnum Opus",crit:1247,haste:1247,mastery:1247,icon:"inv_misc_necklace15",scale:970,special:function(ilvl){ return rV.prydazPredictionAmount + GetSocketFactor(); },wilvl:910},	
	{slot:-1,item:143732,ilvl:910,type:5,name:"Uncertain Reminder",int:2382,crit:612,mastery:1103,icon:"inv_helm_mail_korkronshaman_d_01",scale:970,special:function(ilvl){ return rV.uncertainPredictionAmount; },wilvl:910},	
	{slot:-1,item:137036,ilvl:910,type:5,name:"Elemental Rebalancers",int:1786,haste:459,mastery:827,icon:"inv_boots_mail_raidshaman_j_01",scale:970,special:function(ilvl){ return rV.bootsPredictionAmount * GetFeedFactor(); },wilvl:910},	
	{slot:-1,item:137104,ilvl:910,type:5,name:"Nobundo's Redemption",int:1340,crit:551,mastery:413,icon:"inv_bracer_leather_cataclysm_b_01",scale:970,special:function(ilvl){ return rV.nobundosPredictionAmount; },wilvl:910},	
	{slot:-1,item:137085,ilvl:910,type:5,name:"Intact Nazjatar Molting",int:1786,crit:827,haste:459,icon:"inv_leather_raiddruid_m_01belt",scale:970,special:function(ilvl){ return rV.beltAmount * GetFeedFactor(); },wilvl:910},	
	{slot:-1,item:152626,ilvl:910,type:5,name:"Insignia of the Grand Army",mastery:1067,crit:1011,haste:1039,icon:"inv_jewelry_ring_60",scale:970,special:function(ilvl){ return rV.insigniaringPredictionAmount + GetSocketFactor(); },wilvl:910},	
	{slot:-1,item:132466,ilvl:970,type:5,name:"Roots of Shaladrassil",int:4166,mastery:767,crit:736,haste:1380,icon:"inv_robe_pants_pvpwarlock_c_02",scale:970,special:function(ilvl){ return rV.rootsPredictionAmount; },wilvl:910},	
	{slot:-1,item:151785,ilvl:970,type:5,name:"Fire in the Deep",int:4166,mastery:997,crit:1150,icon:"inv_chest_mail_raidshaman_m_01",scale:970,special:function(ilvl){ return (rV.total + rV.totalOver) * 6 / ((currFightData.end_time - currFightData.start_time) / 1000) * (pV.castNum[114052] || 0) * 0.15 * 0.5; },wilvl:910},	
	{slot:-1,item:151647,ilvl:970,type:5,name:"Soul of the Farseer",mastery:1486,crit:1230,haste:974,icon:"inv_70_quest_ring2b",scale:970,special:function(ilvl){ return GetSocketFactor(); },wilvl:910},	
	{slot:-1,item:132452,ilvl:970,type:5,name:"Sephuz's Secret",crit:3204,haste:1281,icon:"inv_jewelry_ring_149",scale:970,special:function(ilvl){ return 375 * 2 * healPerStat.haste.amount + GetSocketFactor(); },wilvl:910},	

	//Neck
	{slot:2,item:132444,ilvl:910,type:5,name:"Prydaz, Xavaric's Magnum Opus",crit:1247,haste:1247,mastery:1247,icon:"inv_misc_necklace15",scale:970,special:function(ilvl){ return rV.prydazPredictionAmount + GetSocketFactor(); },wilvl:910},	
	{slot:2,item:142207,ilvl:885,haste:1913,vers:765,name:"Amulet of the Last Guardian",icon:"inv_jewelry_necklace_95",type:2,wilvl:860},
	{slot:2,item:142174,ilvl:885,crit:1607,mastery:1071,name:"Choker of Barbed Reins",icon:"inv_jewelry_necklace_22",type:2,wilvl:855},
	{slot:2,item:137536,ilvl:885,crit:918,haste:1760,name:"Pendant of the Watchful Eye",icon:"inv_7_0raid_necklace_11c",type:2,wilvl:820},
	{slot:2,item:137535,ilvl:885,haste:1071,mastery:1607,name:"Lavadrip Pendant",icon:"inv_neck_firelands_03",type:2,wilvl:820},
	{slot:2,item:134488,ilvl:885,crit:1530,vers:1148,name:"Stabilized Energy Pendant",icon:"inv_7_0raid_necklace_14d",special:function(ilvl){ var a=0;for(var i = 0, len = RESURGENCE.length; i < len; i++) a+=rV.resurgence[ RESURGENCE[i].obj.id ][0]; return (a * 0.05 + 55000 * 0.85) / rV.manaUsage * rV.healFromMana; },type:2,wilvl:820},
	{slot:2,item:137418,ilvl:885,crit:1224,mastery:1454,name:"Erratically Ticking Talisman",icon:"inv_7_0raid_necklace_10d",type:2,wilvl:820},
	{slot:2,item:134529,ilvl:885,haste:1760,vers:918,name:"Chain of Scorched Bones",icon:"inv_7_0raid_necklace_13d",type:2,wilvl:820},
	{slot:2,item:137487,ilvl:885,vers:1454,mastery:1224,name:"Strand of the Stars",icon:"inv_7_0raid_necklace_12b",type:2,wilvl:820},
	{slot:2,item:134499,ilvl:885,vers:1683,mastery:995,name:"Raven Filigree Pendant",icon:"inv_7_0raid_necklace_08c",type:2,wilvl:820},
	{slot:2,item:134491,ilvl:885,crit:1760,vers:918,name:"Understone Gorget",icon:"inv_7_0raid_necklace_13c",type:2,wilvl:820},
	{slot:2,item:134495,ilvl:885,crit:1607,mastery:1071,name:"Chain of the Underking",icon:"inv_7_0raid_necklace_11d",type:2,wilvl:820},
	{slot:2,item:134492,ilvl:885,haste:1607,mastery:1071,name:"Hatecoil Commander's Amulet",icon:"inv_7_0raid_necklace_11b",type:2,wilvl:820},
	{slot:2,item:134497,ilvl:885,crit:1837,mastery:841,name:"Stormcharged Choker",icon:"inv_7_0raid_necklace_01d",type:2,wilvl:820},
	{slot:2,item:151309,ilvl:885,haste:1500,vers:1178,name:"Necklace of the Twisting Void",icon:"inv_7_0raid_necklace_06d",type:2,wilvl:820},
	{slot:2,item:144479,ilvl:885,crit:841,haste:1837,name:"Master Thrasher's Lockcollar",icon:"inv_7_0raid_necklace_04c",type:2,wilvl:820},
	{slot:2,item:133636,ilvl:885,vers:765,mastery:1913,name:"Brysngamen, Torc of Helheim",icon:"inv_7_0raid_necklace_13a",type:2,wilvl:820},
	{slot:2,item:137311,ilvl:885,crit:841,mastery:1837,name:"Chain of the Green Flight",icon:"inv_7_0raid_necklace_12c",type:2,wilvl:820},
	{slot:2,item:133633,ilvl:885,haste:765,mastery:1913,name:"Wolfstride Pendant",icon:"inv_7_0raid_necklace_01b",type:2,wilvl:820},
	{slot:2,item:133767,ilvl:885,crit:1683,haste:995,name:"Pendant of the Stormforger",icon:"inv_7_0raid_necklace_14a",type:2,wilvl:820},
	{slot:2,item:137461,ilvl:885,crit:1913,haste:765,name:"Breathless Choker",icon:"inv_7_0raid_necklace_12d",type:2,wilvl:820},
	{slot:2,item:134541,ilvl:885,crit:1148,haste:1530,name:"Tightweb Choker",icon:"inv_7_0raid_necklace_02c",type:2,wilvl:820},
	{slot:2,item:137458,ilvl:885,vers:1224,mastery:1454,name:"Chaos-Forged Necklace",icon:"inv_7_0raid_necklace_01c",type:2,wilvl:820},
	{slot:2,item:134498,ilvl:885,haste:1913,mastery:765,name:"Chain of a Hundred Maws",icon:"inv_jewelry_necklace_ahnqiraj_02",type:2,wilvl:820},
	{slot:2,item:139332,ilvl:850,crit:1422,haste:742,name:"Blackened Portalstone Necklace",icon:"inv_7_0raid_necklace_07d",type:6,wilvl:850},
	{slot:2,item:139239,ilvl:850,haste:990,mastery:1175,name:"Cursed Beartooth Necklace",icon:"inv_7_0raid_necklace_13b",type:6,wilvl:850},
	{slot:2,item:142428,ilvl:865,vers:1490,mastery:880,name:"Sea Fan Pendant",icon:"inv_7_0raid_necklace_13b",type:6,wilvl:855},
	{slot:2,item:140900,ilvl:875,haste:1151,vers:1368,name:"Brooch of the Astral Scryer",icon:"inv_7_0raid_necklace_17b",type:6,wilvl:875},
	{slot:2,item:140899,ilvl:875,crit:1440,mastery:1080,name:"Beleron's Choker of Misery",icon:"inv_7_0raid_necklace_04d",type:6,wilvl:875},
	{slot:2,item:140894,ilvl:870,vers:908,mastery:1537,name:"Zealous Timestone Pendant",icon:"inv_7_0raid_necklace_09a",type:6,wilvl:875},
	{slot:2,item:140898,ilvl:870,crit:768,haste:1677,name:"Radiant String of Scorpid Eyes",icon:"inv_7_0raid_necklace_16c",type:6,wilvl:875},
	{slot:2,item:147014,ilvl:900,crit:1341,mastery:1592,name:"Locket of Splintered Souls",icon:"inv_jewelry_necklace_46",type:3,wilvl:890},
	{slot:2,item:147013,ilvl:900,haste:1760,vers:1173,name:"String of Extracted Incisors",icon:"inv_misc_necklace_bone04",type:3,wilvl:890},
	{slot:2,item:151966,ilvl:930,haste:2112,mastery:1408,name:"Riveted Choker of Delirium",icon:"inv_7_0raid_necklace_04b",type:4,wilvl:930},
	{slot:2,item:151965,ilvl:930,crit:1609,vers:1911,name:"Vulcanarcore Pendant",icon:"inv_7_0raid_necklace_14b",type:4,wilvl:930},
	{slot:2,item:151973,ilvl:930,vers:1509,mastery:2011,name:"Collar of Null-Flame",icon:"inv_7_0raid_necklace_07b",type:4,wilvl:930},
	{slot:2,item:152283,ilvl:940,crit:2457,haste:1281,name:"Chain of the Unmaker",icon:"inv_7_0raid_necklace_18a",type:4,wilvl:940},
	{slot:2,item:121284,ilvl:845,crit:1261,haste:840,name:"Nightmare Pendant",icon:"inv_7_0raid_necklace_08d",type:1,wilvl:810},
	
	//Rings
	{slot:11,item:137051,ilvl:910,type:5,name:"Focuser of Jonat, the Elder",crit:2004,haste:1114,icon:"inv_jewelry_ring_96",scale:970,special:function(ilvl){ return rV.jonatPredictionAmount * GetFeedFactor() + GetSocketFactor(); },wilvl:910},	
	{slot:11,item:152626,ilvl:910,type:5,name:"Insignia of the Grand Army",mastery:1067,crit:1011,haste:1039,icon:"inv_jewelry_ring_60",scale:1000,special:function(ilvl){ return rV.insigniaringPredictionAmount + GetSocketFactor(); },wilvl:910},	
	{slot:11,item:151647,ilvl:970,type:5,name:"Soul of the Farseer",mastery:1486,crit:1230,haste:974,icon:"inv_70_quest_ring2b",scale:970,special:function(ilvl){ return GetSocketFactor(); },wilvl:910},	
	{slot:11,item:132452,ilvl:970,type:5,name:"Sephuz's Secret",crit:3204,haste:1281,icon:"inv_jewelry_ring_149",scale:970,special:function(ilvl){ return 375 * 2 * healPerStat.haste.amount + GetSocketFactor(); },wilvl:910},	
	{slot:11,item:142173,ilvl:885,haste:841,mastery:1837,name:"Ring of Collapsing Futures",icon:"inv_70_raid_ring3c",type:2,wilvl:860},
	{slot:11,item:142172,ilvl:885,crit:1148,haste:1530,name:"Terestian's Signet Ring",icon:"inv_jewelry_ring_37",type:2,wilvl:860},
	{slot:11,item:142171,ilvl:885,vers:1683,mastery:995,name:"Seal of Darkshire Nobility",icon:"inv_70_dungeon_ring4d",type:2,wilvl:855},
	{slot:11,item:137533,ilvl:885,vers:1071,mastery:1607,name:"Ring of Minute Mirrors",icon:"inv_jewelry_ring_155",type:2,wilvl:820},
	{slot:11,item:137532,ilvl:885,haste:1683,mastery:995,name:"Seal of Saltheril",icon:"inv_70_dungeon_ring2c",type:2,wilvl:820},
	{slot:11,item:134540,ilvl:885,haste:995,mastery:1683,name:"Ring of Twisted Webbing",icon:"inv_jewelry_ring_62",type:2,wilvl:820},
	{slot:11,item:134533,ilvl:885,haste:1607,vers:1071,name:"Ring of Looming Menace",icon:"inv_70_dungeon_ring8d",type:2,wilvl:820},
	{slot:11,item:134526,ilvl:885,crit:1530,mastery:1148,name:"Gnawed Thumb Ring",icon:"inv_70_dungeon_ring6a",special:function(ilvl){ return rV.total * 0.05 * 12 / 180; },type:2,wilvl:820},
	{slot:11,item:134542,ilvl:885,crit:1224,haste:1454,name:"Jeweled Signet of Melandrus",icon:"inv_70_dungeon_ring7d",type:2,wilvl:820},
	{slot:11,item:134528,ilvl:885,crit:1913,haste:765,name:"Band of Callous Dominance",icon:"inv_70_dungeon_ring2d",type:2,wilvl:820},
	{slot:11,item:134490,ilvl:885,haste:1837,vers:841,name:"Ring of Contempt",icon:"inv_70_dungeon_ring3b",type:2,wilvl:820},
	{slot:11,item:134530,ilvl:885,haste:1837,mastery:841,name:"Loop of Vitriolic Intent",icon:"inv_70_dungeon_ring6b",type:2,wilvl:820},
	{slot:11,item:134524,ilvl:885,crit:1683,vers:995,name:"Band of the Wyrm Matron",icon:"inv_70_dungeon_ring5c",type:2,wilvl:820},
	{slot:11,item:134532,ilvl:885,crit:765,haste:1913,name:"Band of Fused Coral",icon:"inv_70_dungeon_ring6d",type:2,wilvl:820},
	{slot:11,item:134525,ilvl:885,crit:1760,haste:918,name:"Seal of the Nazjatar Empire",icon:"inv_70_dungeon_ring4a",type:2,wilvl:820},
	{slot:11,item:134539,ilvl:885,vers:1224,mastery:1454,name:"Braided Silver Ring",icon:"inv_jewelry_ring_118",type:2,wilvl:820},
	{slot:11,item:151308,ilvl:885,crit:1040,vers:1637,name:"Mac'Aree Seal of Nobility",icon:"inv_70_dungeon_ring3c",type:2,wilvl:820},
	{slot:11,item:151311,ilvl:885,haste:1530,vers:1148,name:"Band of the Triumvirate",icon:"inv_70_dungeon_ring2b",type:2,wilvl:820},
	{slot:11,item:144481,ilvl:885,vers:1837,mastery:841,name:"Ring of Fel Domination",icon:"inv_70_dungeon_ring8b",type:2,wilvl:820},
	{slot:11,item:144478,ilvl:885,crit:1913,vers:765,name:"Band of Dark Solitude",icon:"inv_70_dungeon_ring5b",type:2,wilvl:820},
	{slot:11,item:133634,ilvl:885,haste:1148,mastery:1530,name:"Grasping Tentacle Loop",icon:"inv_misc_ring_6_0_013",type:2,wilvl:820},
	{slot:11,item:133637,ilvl:885,crit:1837,vers:841,name:"Utgarde Royal Signet",icon:"inv_70_dungeon_ring4c",type:2,wilvl:820},
	{slot:11,item:134531,ilvl:885,crit:1837,mastery:841,name:"Band of Twisted Bark",icon:"inv_70_dungeon_ring1d",type:2,wilvl:820},
	{slot:11,item:134487,ilvl:885,haste:765,mastery:1913,name:"Arch-Druid's Tainted Seal",icon:"inv_70_dungeon_ring2a",type:2,wilvl:820},
	{slot:11,item:134537,ilvl:885,crit:995,mastery:1683,name:"Signet of the Highborne Magi",icon:"inv_70_dungeon_ring7c",type:2,wilvl:820},
	{slot:11,item:133638,ilvl:885,crit:1148,mastery:1530,name:"Woe-Bearer's Band",icon:"inv_70_dungeon_ring5a",type:2,wilvl:820},
	{slot:11,item:133679,ilvl:885,crit:1607,mastery:1071,name:"Val'kyr Ascension Signet",icon:"inv_70_dungeon_ring8a",type:2,wilvl:820},
	{slot:11,item:134527,ilvl:885,vers:841,mastery:1837,name:"Loop of Eightfold Eyes",icon:"inv_70_dungeon_ring1c",type:2,wilvl:820},
	{slot:11,item:134493,ilvl:885,vers:1683,mastery:995,name:"Band of Crystalline Bone",icon:"inv_jewelry_ring_84",type:2,wilvl:820},
	{slot:11,item:137438,ilvl:885,crit:1607,haste:1071,name:"Band of Decaying Rubies",icon:"item_icecrownringc",type:2,wilvl:820},
	{slot:11,item:137432,ilvl:885,crit:918,mastery:1760,name:"Ring of Mind-Shielding",icon:"inv_70_dungeon_ring5d",type:2,wilvl:820},
	{slot:11,item:134489,ilvl:885,crit:995,haste:1683,name:"Seal of Malicious Deceit",icon:"inv_70_dungeon_ring3a",type:2,wilvl:820},
	{slot:11,item:134534,ilvl:885,haste:1454,mastery:1224,name:"Dingy Wedding Band",icon:"inv_70_dungeon_ring4b",type:2,wilvl:820},
	{slot:11,item:141486,ilvl:860,crit:1644,haste:658,name:"Demonic Birthstone Ring",icon:"inv_70_quest_ring7d",type:1},
	{slot:11,item:141545,ilvl:860,vers:854,mastery:1447,name:"Ring of Deep Sea Pearls",icon:"inv_70_dungeon_ring3d",type:1},
	{slot:11,item:141533,ilvl:860,crit:920,haste:1381,name:"Ring of Frozen Magic",icon:"inv_70_raid_ring2d",type:1},
	{slot:11,item:141534,ilvl:860,crit:1052,mastery:1249,name:"Loop of Polished Pebbles",icon:"inv_70_pvp_ring1a",type:1},
	{slot:11,item:141488,ilvl:860,haste:1513,vers:789,name:"Mana-Dowsing Ring",icon:"inv_70_raid_ring6d",type:1},
	{slot:11,item:141544,ilvl:860,haste:1644,mastery:658,name:"Marshstomper Oracle's Loop",icon:"inv_70_raid_ring7b",type:1},
	{slot:11,item:147766,ilvl:900,haste:1844,vers:1090,name:"Band of Dark Millennia",icon:"inv_70_raid_ring6c",type:1},
	{slot:11,item:147767,ilvl:900,crit:1928,mastery:1006,name:"Coral Band of the Abyss",icon:"inv_70_raid_ring4c",type:1},
	{slot:11,item:141492,ilvl:860,crit:1644,vers:658,name:"Dingy Suramar Mercantile Signet",icon:"inv_70_raid_ring5c",type:1},
	{slot:11,item:141546,ilvl:860,crit:1315,mastery:986,name:"Cursed Warden's Keepsake",icon:"inv_70_quest_ring8c",type:1},
	{slot:11,item:139236,ilvl:850,crit:1237,vers:928,name:"Grubby Silver Ring",icon:"inv_70_raid_ring1b",type:6},
	{slot:11,item:139238,ilvl:850,crit:1484,haste:680,name:"Twice-Warped Azsharan Signet",icon:"inv_70_raid_ring6b",type:6},
	{slot:11,item:139237,ilvl:850,haste:1175,mastery:990,name:"Dreadful Cyclopean Signet",icon:"inv_70_raid_ring3b",type:6},
	{slot:11,item:138220,ilvl:850,haste:804,mastery:1361,name:"Mindrend Band",icon:"inv_70_raid_ring8a",type:6},
	{slot:11,item:142520,ilvl:860,crit:1052,haste:1249,name:"Ring of Ascended Glory",icon:"inv_70_dungeon_ring8c",type:6,wilvl:855},
	{slot:11,item:140895,ilvl:875,crit:1728,mastery:792,name:"Spellblade's Gemmed Signet",icon:"inv_70_raid_ring4b",type:6},
	{slot:11,item:140896,ilvl:875,haste:1512,vers:1008,name:"Ring of Braided Stems",icon:"inv_70_raid_ring1a",type:6},
	{slot:11,item:140906,ilvl:875,crit:864,vers:1656,name:"Ring of Exclusive Servitude",icon:"inv_70_raid_ring5a",type:6},
	{slot:11,item:140897,ilvl:880,haste:742,mastery:1856,name:"Ring of the Scoured Clan",icon:"inv_70_raid_ring2b",type:6},
	{slot:11,item:147194,ilvl:900,vers:1844,mastery:1090,name:"Band of Rescinded Truths",icon:"inv_70_quest_ring7b",type:3,wilvl:890},
	{slot:11,item:147021,ilvl:900,crit:2011,vers:922,name:"Yathae's Thumb Ring",icon:"inv_70_dungeon_ring1b",type:3,wilvl:890},
	{slot:11,item:147195,ilvl:910,crit:1425,haste:1693,name:"Seal of the Second Duumvirate",icon:"inv_misc_ring_mop19",type:3,wilvl:890},
	{slot:11,item:147020,ilvl:900,haste:1257,mastery:1676,name:"Scaled Band of Servitude",icon:"inv_70_raid_ring5b",type:3,wilvl:890},
	{slot:11,item:152284,ilvl:930,crit:1408,haste:2112,name:"Zealous Tormentor's Ring",icon:"inv_70_quest_ring7a",type:4},
	{slot:11,item:152064,ilvl:930,crit:1861,mastery:1659,name:"Band of the Sargerite Smith",icon:"inv_70_raid_ring4a",type:4},
	{slot:11,item:152688,ilvl:930,haste:1207,mastery:2313,name:"Loop of the Life-Binder",icon:"inv_70_raid_ring7d",type:4},
	{slot:11,item:152063,ilvl:930,haste:1307,vers:2212,name:"Seal of the Portalmaster",icon:"inv_70_raid_ring2c",type:4},
	{slot:11,item:151972,ilvl:940,vers:1602,mastery:2137,name:"Sullied Seal of the Pantheon",icon:"inv_70_raid_ring3a",type:4},
	{slot:11,item:134323,ilvl:925,crit:1463,mastery:1951,name:"Glinting Quartz Ring",icon:"inv_70_quest_ring3b",type:1,wilvl:810},
	{slot:11,item:146767,ilvl:845,crit:780,vers:1320,name:"Portal Keeper's Seal",icon:"inv_70_quest_ring3b",type:1,wilvl:810},

	// Netherlight
	{slot:15,spell:253093,type:2,tier:2,name:"Infusion of Light",icon:"ability_malkorok_blightofyshaarj_yellow",special:function(){ return 101000 * GetCritFactor() * GetAftifactFactor() * GetVersFactor() * GetFightLenFactor(60) * 4 * 0.7 * GetFeedFactor(); }},
	{slot:15,spell:253070,type:2,tier:2,name:"Secure in the Light",icon:"ability_paladin_toweroflight",special:function(){ return 135000 * GetVersFactor() * GetFightLenFactor(60) * 3 * 0.9; }},
	{slot:15,spell:252088,type:2,tier:2,name:"Light Speed",icon:"ability_rogue_sprint",special:function(){ return healPerStat.haste.amount * 500; }},
	{slot:15,spell:252091,type:6,tier:2,name:"Master of Shadows",icon:"spell_shadow_shadesofdarkness",special:function(){ return healPerStat.mastery.amount * 500; }},
	{slot:15,spell:252799,type:2,tier:2,name:"Shocklight",icon:"paladin_icon_speedoflight",special:function(){ return healPerStat.crit.amount * 1500 * 0.3; }},
	{slot:15,spell:252191,type:6,tier:2,name:"Murderous Intent",icon:"spell_shadow_charm",special:function(){ return healPerStat.vers.amount * 1500 * 0.3; }},
	{slot:15,spell:252207,type:2,tier:2,name:"Refractive Shell",icon:"ability_priest_reflectiveshield",special:function(){ return 300000 * GetVersFactor() * GetFightLenFactor(60) * 2 * 0.9; }},
	{slot:15,spell:253111,type:2,tier:2,name:"Light's Embrace",icon:"achievement_reputation_07",special:function(){ return 45500 * GetCritFactor() * GetHasteFactor() * GetAftifactFactor() * GetVersFactor() * GetFightLenFactor(60) * 8 * 0.6 * GetFeedFactor(); }},
	{slot:15,spell:252888,type:6,tier:2,name:"Chaotic Darkness",icon:"inv_artifact_powerofthedarkside",special:function(){ return 180000 * GetCritFactor() * GetAftifactFactor() * GetVersFactor() * GetFightLenFactor(60) * 2  * 0.75 * GetFeedFactor(); }},
	{slot:15,spell:252875,type:6,tier:2,name:"Shadowbind",icon:"spell_shadow_deathpact",special:function(){ return 200000 * GetCritFactor() * GetAftifactFactor() * GetVersFactor() * GetFightLenFactor(60) * 2 * 0.65 * GetFeedFactor(); }},

	{slot:15,spell:-1,type:2,tier:1,name:"+1 weapon ilvl",icon:"inv_mace_1h_artifactazshara_d_02",special:function(){ return rV.netherlight[-1] * 1; }},
	{slot:15,spell:-1,type:2,tier:1,name:"+2 weapon ilvl",icon:"inv_mace_1h_artifactazshara_d_02",special:function(){ return rV.netherlight[-1] * 2; }},
	{slot:15,spell:-1,type:2,tier:1,name:"+3 weapon ilvl",icon:"inv_mace_1h_artifactazshara_d_02",special:function(){ return rV.netherlight[-1] * 3; }},
	{slot:15,spell:-1,type:2,tier:1,name:"+4 weapon ilvl",icon:"inv_mace_1h_artifactazshara_d_02",special:function(){ return rV.netherlight[-1] * 4; }},
	{slot:15,spell:-1,type:2,tier:1,name:"+5 weapon ilvl",icon:"inv_mace_1h_artifactazshara_d_02",special:function(){ return rV.netherlight[-1] * 5; }},

	{slot:15,spell:207348,type:4,tier:3,name:"Floodwaters",icon:"spell_nature_healingwavegreater",special:function(){ return rV.traits[1109] / GetTraitRank(1109); }},
	{slot:15,spell:207255,type:4,tier:3,name:"Empowered Droplets",icon:"spell_nature_giftofthewaterspirit",special:function(){ return rV.traits[1107] / GetTraitRank(1107); }},
	{slot:15,spell:210031,type:4,tier:3,name:"Pull of the Sea",icon:"inv_tradeskillitem_sorcererswater",special:function(){ return rV.traits[1105] / GetTraitRank(1105); }},
	{slot:15,spell:207206,type:4,tier:3,name:"Wavecrash",icon:"inv_spear_04",special:function(){ return rV.traits[1106] / GetTraitRank(1106); }},
	{slot:15,spell:207092,type:4,tier:3,name:"Buffeting Waves",icon:"ability_skyreach_four_wind",special:function(){ return rV.traits[1104] / GetTraitRank(1104); }},
	{slot:15,spell:207088,type:4,tier:3,name:"Tidal Chains",icon:"spell_frost_chainsofice",special:function(){ return rV.traits[1103] / GetTraitRank(1103); }},
	{slot:15,spell:207288,type:4,tier:3,name:"Queen Ascendant",icon:"ability_shaman_watershield",special:function(){ return rV.traits[1108] / GetTraitRank(1108); }},

	//Boots
	{slot:8,item:137036,ilvl:910,type:5,name:"Elemental Rebalancers",int:1786,haste:459,mastery:827,icon:"inv_boots_mail_raidshaman_j_01",scale:970,special:function(ilvl){ return rV.bootsPredictionAmount * GetFeedFactor(); },wilvl:910},	
	{slot:8,item:142132,ilvl:885,int:1415,haste:812,vers:360,name:"Doomstride Footguards",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:142204,ilvl:885,int:1415,crit:385,mastery:787,name:"Boots of False Promises",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:134386,ilvl:885,int:1415,crit:787,vers:385,name:"Mardum Chain Boots",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:137517,ilvl:885,int:1415,crit:761,haste:410,name:"Striders of Furious Flight",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:134298,ilvl:885,int:1415,haste:376,mastery:795,name:"Ley Dragoon's Stompers",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:134298,ilvl:885,int:1415,haste:376,mastery:795,name:"Ley Dragoon's Stompers",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:134477,ilvl:885,int:1415,haste:787,mastery:385,name:"Ravencrest's Unerring Striders",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:134166,ilvl:885,int:1415,haste:736,vers:435,name:"Bitestone Boots",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:134465,ilvl:885,int:1415,crit:485,haste:686,name:"Hydra Scale Sabatons",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:151320,ilvl:885,int:1415,crit:652,haste:519,name:"Void-Coated Stompers",icon:"inv_boot_mail_legiondungeon_c_03",type:2},
	{slot:8,item:144490,ilvl:885,int:1415,haste:435,mastery:736,name:"Corruption-Fused Stompers",icon:"inv_boot_mail_legiondungeon_c_02",type:2},
	{slot:8,item:134210,ilvl:885,int:1415,crit:686,mastery:485,name:"Tideskorn Sabatons",icon:"inv_boots_mail_legionendgame_c_01",type:2},
	{slot:8,item:134464,ilvl:885,int:1415,haste:435,mastery:736,name:"Whelp Handler's Lined Boots",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:133623,ilvl:885,int:1415,crit:334,mastery:837,name:"Felstep Footguards",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:134466,ilvl:885,int:1415,crit:812,mastery:360,name:"Begrudging Trudgers",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:137444,ilvl:885,int:1415,haste:812,vers:360,name:"Plasma-Drilled Steel Toes",icon:"inv_boot_mail_legiondungeon_c_01",type:2},
	{slot:8,item:147744,ilvl:900,int:1628,crit:433,haste:805,name:"Treads of Disorderly Retreat",icon:"inv_boot_mail_raidshaman_r_01",type:1},
	{slot:8,item:141432,ilvl:860,int:1121,crit:648,haste:419,name:"Frostburned Sabatons",icon:"inv_boot_mail_raidhunter_q_01",type:1},
	{slot:8,item:139219,ilvl:850,int:1021,haste:712,mastery:316,name:"Black Venom Sabatons",icon:"inv_boot_mail_raidshaman_q_01",type:6},
	{slot:8,item:138211,ilvl:850,int:1021,crit:734,haste:293,name:"Malignant Sabatons",icon:"inv_boot_mail_raidhunter_q_01",type:6},
	{slot:8,item:139220,ilvl:850,int:1021,crit:646,haste:382,name:"Scored Ironclaw Sabatons",icon:"inv_boot_mail_raidshaman_q_01",type:6},
	{slot:8,item:142422,ilvl:860,int:1121,vers:671,mastery:396,name:"Radiant Soul Sabatons",icon:"inv_boot_mail_legionraid_d_01",type:6},
	{slot:8,item:140867,ilvl:875,int:1289,vers:443,mastery:685,name:"Sabatons of Burning Steps",icon:"inv_boot_mail_raidshaman_q_01",type:6},
	{slot:8,item:140873,ilvl:875,int:1289,crit:515,haste:612,name:"Shal'dorei Weedstompers",icon:"inv_boot_mail_raidhunter_q_01",type:6},
	{slot:8,item:147046,ilvl:910,int:1786,crit:809,mastery:477,name:"Star-Stalker Treads",icon:"inv_boot_mail_raidhunter_r_01",type:3},
	{slot:8,item:147045,ilvl:900,int:1628,haste:460,mastery:779,name:"Insulated Finpads",icon:"inv_boot_mail_raidshaman_r_01",type:3},
	{slot:8,item:151996,ilvl:930,int:2153,crit:634,haste:752,name:"Deft Soulhunter's Sabatons",icon:"inv_boot_mail_raidhunter_s_01",type:4},
	{slot:8,item:152684,ilvl:930,int:2153,haste:534,mastery:852,name:"Greatboots of the Searing Tempest",icon:"inv_boot_mail_raidshamanraid_s_01",type:4},
	{slot:8,item:151997,ilvl:930,int:2153,crit:802,vers:584,name:"Nathrezim Shade-Walkers",icon:"inv_boot_mail_raidshamanraid_s_01",type:4},
	{slot:8,item:152367,ilvl:930,int:2153,haste:832,vers:554,name:"Sabatons of Ceaseless Assault",icon:"inv_boot_mail_raidhunter_s_01",type:1},

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
						pV.critNow += GetTraitRank(1109) * 4 * 400;
					} else if(spellID == 73921){	//healing rain
						pV.critNow += GetTraitRank(1107) * 2 * 400;
					} else if(spellID == 8004 && event.timestamp <= pV.critTidalLoss){	//surge
						pV.critNow += (GetTraitRank(1103) * 4 + 40) * 400;
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

					pV.currHealFromMastery = amount * ( 1 - (1 / (1 + ((pV.masteryNow / 133.33) / 100) * (1 - targetHPbeforeHeal))) );
					var currHealFromMasteryOh = (amount + overheal) * ( 1 - (1 / (1 + ((pV.masteryNow / 133.33) / 100) * (1 - targetHPbeforeHeal))) );
				
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
					
					pV.currHealFromVers = amount * ( 1 - (1 / ((pV.versNow / 475) / 100 + 1)) );
					var currHealFromVersOh = (amount + overheal) * ( 1 - (1 / ((pV.versNow / 475) / 100 + 1)) );
					
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
					
					var hasteMod = (pV.hasteNow / 375 / 100) + 1;
					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
					});
					
					pV.currHealFromHaste = (1 - (1 / hasteMod)) * amount;
					var currHealFromHasteOh = (1 - (1 / hasteMod)) * (amount + overheal);
					
					pV.hasteNow = (hasteMod - 1) * 100 * 375;
					
					AddStatAmount('haste',pV.currHealFromHaste,currHealFromHasteOh,pV.hasteNow,amount,spellID,event.timestamp,event);

					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]){
							if(!rV.buffs.haste_mod[buffSpellID]) rV.buffs.haste_mod[buffSpellID] = 0;
							rV.buffs.haste_mod[buffSpellID] += ((statsBuffs.haste_mod[buffSpellID] - 1) * 100 * 375) / pV.hasteNow * pV.currHealFromHaste;
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
					var hasteMod = (hasteNow / 375 / 100) + 1;
					var hasteFromNumeric = hasteNow;
					var hasteFromNumericMod = hasteMod;
					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) hasteMod *= statsBuffs.haste_mod[buffSpellID];
					});
					
					if(spellCastAffectedQA[spellID]) hasteMod *= (1 + 0.05 * GetTraitRank(1108));
					if(spellID == 77472 && pV.tidalwavesStatus) hasteMod *= 1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)));
					
					hasteNow = (hasteMod - 1) * 100 * 375;
					
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
								pV.hasteCast[buffSpellID] += hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * 375 / hasteNow * savedTime * (statsBuffs.haste[buffSpellID] * (typeof(buffStatus[buffSpellID]) == "number" ? buffStatus[buffSpellID] : 1) / hasteFromNumeric);
							}
						});						
						pV.hasteCast[-1] = (pV.hasteCast[-1] || 0) + hasteMod / hasteFromNumericMod * (hasteFromNumericMod - 1) * 100 * 375 / hasteNow * savedTime * (cV.haste / hasteFromNumeric);
						Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
							if(buffStatus[buffSpellID]){
								if(!pV.hasteCast[buffSpellID]) pV.hasteCast[buffSpellID] = 0;
								pV.hasteCast[buffSpellID] += hasteMod / statsBuffs.haste_mod[buffSpellID] * (statsBuffs.haste_mod[buffSpellID] - 1) * 100 * 375 / hasteNow * savedTime;
							}
						});
						if(spellCastAffectedQA[spellID]) pV.hasteCast[-207288] = (pV.hasteCast[-207288] || 0) + hasteMod / (0.05 * GetTraitRank(1108) + 1) * ((0.05 * GetTraitRank(1108) + 1) - 1) * 100 * 375 / hasteNow * savedTime;
						if(spellID == 77472 && pV.tidalwavesStatus) pV.hasteCast[-53390] = (pV.hasteCast[-53390] || 0) + hasteMod / (1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)))) * ((1 / (1 - (0.3 + 0.03 * GetTraitRank(1103)))) - 1) * 100 * 375 / hasteNow * savedTime;
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
						vantusRune = 1500;
					}

					for (var j = 0, j_len = parsePlugins.applybuff.length; j < j_len; j++) {
						parsePlugins.applybuff[j](event,auraData.ability);
					}

				}
				
				cV.critSpell = event["critSpell"] + 2000;
				cV.intellect = event["intellect"];
				cV.intellect_min = cV.intellect;
				cV.versatility = event["versatilityHealingDone"] + vantusRune;
				cV.mastery = event["mastery"] + 3200;
				cV.haste = event["hasteSpell"];
				
				cV.gcd = 1500 / (cV.haste / 375 / 100 + 1);
				
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

function CreateNCChartData(fightLen){
	var tier_1 = [],tier_2 = [],tier_3 = [];
	for (var i = 0, len = GEAR.length; i < len; i++) {
		var gearData = GEAR[i];
		if(gearData.slot == 15) {
			var name = (gearData.icon ? "<img src=\""+GetIconUrl(gearData.icon.replace(/\-/,"")+".jpg")+"\" alt=\""+gearData.name+"\">" : "")+" <a href=\"//www.wowhead.com/spell="+gearData.spell+"\" target=\"_blank\">"+gearData.name+"</a>";
		
			if(gearData.tier == 1) {
				tier_1.push( [ gearData.special() / (fightLen / 1000),name,false,gear_charts_colors[gearData.type][0] ] );
			} else if(gearData.tier == 2) {
				if(cV.traitBySpell[ gearData.spell ]){
					var amount = rV.netherlight[gearData.spell] / ( cV.traitBySpell[gearData.spell].rank ? cV.traitBySpell[gearData.spell].rank : 1 );
					tier_2.push( [ amount / (fightLen / 1000),name,true,"DeathKnight" ] );
				} else {
					tier_2.push( [ gearData.special() / (fightLen / 1000) * (cV.gearInfo[152626] ? 1.5 : 1),name,false,gear_charts_colors[gearData.type][0] ] );
				}
			} else if(gearData.tier == 3) {
				tier_3.push( [ gearData.special() / (fightLen / 1000),name,false,gear_charts_colors[gearData.type][0] ] );
			}
		}
	}
	
	tier_1.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	tier_2.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	tier_3.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });

	var HTML = "";
	HTML += "<div class=\"row full\"><div class=\"col w20\">Tier 1</div><div class=\"list-top-line\"></div></div>";
	for (var i = 0, len = tier_1.length; i < len; i++) {
		HTML += "<div class=\"row full "+(tier_1[i][2] ? "eq" : "")+"\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_1[i][1]+"</div><div class=\"col w10 t-right\">"+NumberToFormattedNumber(tier_1[i][0],1)+"</div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_1[i][3])+"-bg\" style=\"width: "+(Math.min(tier_1[i][0]/tier_1[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	HTML += "<div class=\"row full\"><div class=\"col w20\">Tier 2</div><div class=\"list-top-line\"></div></div>";
	for (var i = 0, len = tier_2.length; i < len; i++) {
		HTML += "<div class=\"row full "+(tier_2[i][2] ? "eq" : "")+"\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_2[i][1]+"</div><div class=\"col w10 t-right\">"+NumberToFormattedNumber(tier_2[i][0],1)+"</div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_2[i][3])+"-bg\" style=\"width: "+(Math.min(tier_2[i][0]/tier_2[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	HTML += "<div class=\"row full\"><div class=\"col w20\">Tier 3</div><div class=\"list-top-line\"></div></div>";
	for (var i = 0, len = tier_3.length; i < len; i++) {
		HTML += "<div class=\"row full "+(tier_3[i][2] ? "eq" : "")+"\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_3[i][1]+"</div><div class=\"col w10 t-right\">"+NumberToFormattedNumber(tier_3[i][0],1)+"</div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_3[i][3])+"-bg\" style=\"width: "+(Math.min(tier_3[i][0]/tier_3[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	
	var tier_2_3 = [];
	for (var i = 0, len = tier_2.length; i < len; i++) {
		for (var j = 0, j_len = tier_3.length; j < j_len; j++) {
			tier_2_3.push([
				tier_2[i][0] + tier_3[j][0],
				tier_2[i][0] > tier_3[j][0] ? (tier_2[i][1] + "<br>" + tier_3[j][1]) : (tier_3[j][1] + "<br>" + tier_2[i][1]),
				false,
				gear_charts_colors[3][0],
			]);
		}
	}
	tier_2_3.sort(function(a,b){ return a[0] > b[0] ? -1 : 1 });
	HTML += "<div class=\"row full\"><div class=\"col w20\">Tier 2+3</div><div class=\"list-top-line\"></div></div>";
	for (var i = 0, len = tier_2_3.length; i < len; i++) {
		HTML += "<div class=\"row full "+(tier_2_3[i][2] ? "eq" : "")+"\"><div class=\"col w5\"></div><div class=\"col w20\">"+tier_2_3[i][1]+"</div><div class=\"col w10 t-right\">"+NumberToFormattedNumber(tier_2_3[i][0],1)+"</div><div class=\"col half clearfix\"><div class=\"performance-bar "+(tier_2_3[i][3])+"-bg\" style=\"width: "+(Math.min(tier_2_3[i][0]/tier_2_3[0][0],1) * 100).toFixed(2)+"%;\"></div></div><div class=\"list-top-line\"></div></div>";
	}
	
	
	$("#gear_chart").html(HTML);
	
	$("#gear_chart_adv").hide();	
}

var GEAR_CHARTS_SLOT = 14;
var GEAR_CHARTS_ILVL = 930;

function CreateGearChartData(fightLen){
	if(GEAR_CHARTS_SLOT == 15){
		CreateNCChartData(fightLen)
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

function GetItemDataFromWowhead(itemID)
{
	if(!IsWowheadResponceRewritten){
		if(!$WowheadPower || !$WowheadPower.register) return false;
		var oldRegister = $WowheadPower.register;
		$WowheadPower.register = function(arr,id,locale,json){
			if(arr == 3 && json && json.tooltip_enus){
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
			oldRegister(arr,id,locale,json);
		}
		IsWowheadResponceRewritten = true;
	}
	
	$.ajaxSetup({cache: true});
	$.getScript( "https://www.wowhead.com/item="+itemID+"&power" );	
}

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
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingwavegreater.jpg\"></div><div class=\"col w75\">Healing Done: "+NumberToFormattedNumber(rV.total)+"<br>HPS: "+NumberToFormattedNumber(hps,0,3)+"</div></div></div></div>";
	HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingtouch.jpg\"></div><div class=\"col w75\">Mastery healing Done:<br>"+NumberToFormattedNumber(Math.round(healPerStat.mastery.total),1)+" ("+Math.round(healPerStat.mastery.total / healPerStat.mastery.all * 100)+"%)</div></div></div></div>";
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
		HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(spellInfo['icon'].replace(/\-/,""))+"\" alt=\""+spellInfo['name']+"\">"+spellInfo['name']+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(healingData[spellID][0],1)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(healingData[spellID][1],1)+"</div></div>";
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
		["crit","Crit","From gear: "+(cV.critSpell-2000)+"<br>Base value: 2000<br>Avg number can be much higher due Floodwaters & Empowered Droplets traits and Tidal Waves buff"],
		["mastery","Mastery","From gear: "+(cV.mastery-3200)+"<br>Base value: 3200"],
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
		var totalText = NumberToFormattedNumber(total);
		var weightText = (amount / fightLen * 1000).toFixed(2);
		if(statData[0] == "crit" && rV.resurgenceCritAmount > 0){
			var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
			var preTotal = total;
			total += regurgenceAmount;
			var preAmount = amount;
			amount += regurgenceAmount / rV.resurgenceCritAmount;
			amountText = "<em class=\"tooltip\">"+amount.toFixed(3)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+preAmount.toFixed(3)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount).toFixed(3)+"</span></em>";
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+NumberToFormattedNumber(preTotal)+"<br>From resurgence: "+NumberToFormattedNumber(regurgenceAmount)+"</span></em>";			
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+(preAmount / fightLen * 1000).toFixed(2)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount / fightLen * 1000).toFixed(2)+"</span></em>";
 		
 			healPerStat[ statData[0] ].amount = amount;
 		} else if(statData[0] == "int") {
			weightText = "<em class=\"tooltip\">"+(amount / fightLen * 1000 * 1.05).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">5% armor bonus included</span></em>";
		} else if(statData[0] == "mastery") {
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Based on health %:<br>";
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
			totalText = "<em class=\"tooltip\">"+NumberToFormattedNumber(total+hasteCastProfit)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+NumberToFormattedNumber(total)+"<br>From cast speed: "+NumberToFormattedNumber(hasteCastProfit)+"</span></em>";			
 			
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
	HTML += "<div class=\"row full\"><div class=\"col size\">Mana</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.healFromMana / rV.manaUsage * 1000).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Healing per 1000 mana points</span></em></div><div class=\"col size\"> </div><div class=\"col size\">"+NumberToFormattedNumber(rV.healFromMana)+"</div><div class=\"col size\"><em class=\"tooltip\">"+(rV.manaUsage).format()+"<span class=\"tip-text\" style=\"width: 350px;margin-left:-175px;\">Mana used on fight: "+(rV.manaUsage).format()+"<br>Mana gained via passives & buffs: "+(rV.manaGain).format()+"<br>Mana regened: "+(fightLen / 1000 * 8800).format()+"<br>Base manapull: "+(1100000).format()+manaSpellsText+"</span></em></div></div>";

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
			if(amount > 0) HTML += NumberToFormattedNumber(amount / fightLen * 1000,1);
			if(passiveStats.heal > 0) HTML += (amount > 0 ? " / " : "")+NumberToFormattedNumber(passiveStats.heal / fightLen * 1000,1);
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
						
			if(passiveStats.heal > 0) HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(passiveStats.heal / fightLen * 1000,1)+"</em>";
		
			HTML += "</div></div></div>";
			counter++;
			
			UpdateFromWowhead.push(itemID);
		}
	}	
	HTML += "</ul></div></div></div>";

	
	/// Gear Charts
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix gear_charts\"><header class=\"box-header\">GEAR CHARTS <sup class=\"tooltip\" style=\"font-size: 0.4em\"> [?]<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">Various numbers can be different based on buffs/fight length/overheal %/rng procs<br>Feeding into CBT/AG/ASC included in calculation.</span></sup></header>";
	HTML += "<div class=\"full clearfix slot_select\" style=\"padding-bottom:10px;\">";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"14\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_datacrystal04.jpg\" style=\"width:48px;height:48px;\"><br>Trinkets</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"-1\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_hammer_unique_sulfuras.jpg\" style=\"width:48px;height:48px;\"><br>Legendaries</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"2\"><img src=\"http://media.blizzard.com/wow/icons/56/inv_misc_necklace_firelands_2.jpg\" style=\"width:48px;height:48px;\"><br>Necks</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"11\"><img src=\"http://media.blizzard.com/wow/icons/56/item_icecrownringc.jpg\" style=\"width:48px;height:48px;\"><br>Rings</div>";
	HTML += "<div class=\"col gear_charts_slot_select\" style=\"width:15%;height:68px;\" data-id=\"15\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_paladin_empoweredsealstruth.jpg\" style=\"width:48px;height:48px;\"><br>Netherlight Crucible</div>";
	HTML += "</div>";
	
	HTML += "<div class=\"full clearfix\" style=\"padding-bottom:5px;display:none\" id=\"gear_chart_adv\">";
	HTML += "<input type=\"range\" min=\"900\" max=\"985\" value=\"930\" step=\"5\" class=\"slider\" id=\"gear_chart_slider\">";
	HTML += "<div class=\"full\">";
	var gear_chart_colors_keys = Object.keys(gear_charts_colors);
	for (var i = 0, len = gear_chart_colors_keys.length; i < len; i++) {
		HTML += "<div class=\"col\" style=\"width:"+(99 / len).toFixed(2)+"%\">";
		HTML += "<div class=\"col performance-bar "+(gear_charts_colors[ gear_chart_colors_keys[i] ][0])+"-bg\" style=\"width: 14px;height:14px;margin-top:4px\"></div>";
		HTML += "<div class=\"col\" style=\"width:auto;\">"+gear_charts_colors[ gear_chart_colors_keys[i] ][1]+"</div>";
		HTML += "</div>";
	}
	HTML += "</div></div>";

	HTML += "<div id=\"gear_chart\"></div></div></div></div>";

	
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
	
	
	/// NETHERLIGHT
	HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">NETHERLIGHT CRUCIBLE</header><div class=\"list-top-line\"> </div><ul class=\"list traits\">";
	counter = 0;
	var netherlightData = [];
	for (var i = 0, len = NETHERLIGHT.length; i < len; i++) if(cV.traitBySpell[ NETHERLIGHT[i].obj.spellID ] || NETHERLIGHT[i].obj.spellID == -1) netherlightData.push([ NETHERLIGHT[i].obj.spellID,NETHERLIGHT[i] ]);
	netherlightData.sort(function(a,b){ return rV.netherlight[ a[0] ] > rV.netherlight[ b[0] ] ? - 1 : 1 });
	for (var i = 0, len = netherlightData.length; i < len; i++) {
		var traitData = netherlightData[i][1].obj;
		
		var traitRank = 1;
		if(cV.traitBySpell[traitData.spellID] && cV.traitBySpell[traitData.spellID].rank) traitRank = cV.traitBySpell[traitData.spellID].rank;

		if(counter % 3 == 0) HTML += "<li class=\"item clearfix\">";
		
		HTML += "<div class=\"row w33\"><div class=\"col w70p\">";
		HTML += "<a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(traitData.icon)+"\" alt=\""+traitData.name+"\"></a></div>";

		HTML += "<div class=\"col div_more_1 w80\"><header><a href=\"//www.wowhead.com/spell="+traitData.spellID+"\" target=\"_blank\">"+traitData.name+"</a>";
		if(traitRank > 1) HTML += " x"+traitRank;		
		HTML += "</header>";
	
		var amount = rV.netherlight[traitData.spellID];
		HTML += "<em class=\"result "+(traitData.tip ? "tooltip" : "")+"\">"+NumberToFormattedNumber(amount,2)+(traitData.tip ? "<span class=\"tip-text\" style=\"width: 180px;margin-left:-90px;\">"+traitData.tip()+"</span>" : "")+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)<br>";
		HTML += "HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(amount / fightLen * 1000,1)+"</em>";

		if(traitData.additionalText) HTML += "<br>"+traitData.additionalText();
		if(traitRank > 1) HTML += "<br>Per rank: "+NumberToFormattedNumber(amount / traitRank,0,2)+" ("+(amount / traitRank/rV.total*100).toFixed(2)+"%)";		
	
		HTML += "</div></div>";
		counter++;
	}	
	HTML += "</ul></div></div></div>";

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