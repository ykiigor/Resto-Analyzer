//Disc priest, 7:27 27.11.2018

//OTHER & CLASS SPECIFIC
var OTHER_256 = [
	{	//OVERALL
		init: function() {
			uV.SPEC_ID = 256;
			uV.SPEC_NAME = "Disc";
		
			STATS_BASE.mastery = 9.6;
			STATS.mastery = 72 / (STATS_BASE.mastery / 8);
			
			baseMana = 100000;
			spellManaCost = {
				17: 2.5 / 100 * baseMana,	//pws
				585: 0.5 / 100 * baseMana,	//smite
				589: 1.8 / 100 * baseMana,	//swp
				194509: 6.5 / 100 * baseMana,	//radiance
				47540: 2 / 100 * baseMana,	//Penance
				120517: 2.7 / 100 * baseMana,	//halo
				214621: 0.5 / 100 * baseMana,	//Schism
				33206: 1.6 / 100 * baseMana,	//Pain Suppression
				62618: 4 / 100 * baseMana,	//Power Word: Barrier
				73325: 2.6 / 100 * baseMana,	//Leap of Faith
				204197: 1.8 / 100 * baseMana,	//Purge the Wicked
				271466: 4 / 100 * baseMana,	//Luminous Barrier
				132157: 1.6 / 100 * baseMana,	//Holy Nova
				32375: 8 / 100 * baseMana,	//Mass Dispel
				528: 4 / 100 * baseMana,	//Dispel Magic
				204263: 2.5 / 100 * baseMana,	//Shining Force
				527: 1.3 / 100 * baseMana,	//Purify
				186263: 3 / 100 * baseMana,	//Shadow Mend
				110744: 2 / 100 * baseMana,	//Divine Star
				21562: 4 / 100 * baseMana,	//stamina buff
				8122: 3 / 100 * baseMana,	//Psychic Scream
				204065: 2.8 / 100 * baseMana,	//Shadow Covenant
			};

			spellCastTime = {
				17: 1.5,	//pws
				120692: 1.5,	//halo
				194509: 2,	//radiance
				585: 1.5, 	//smite
				589: 1.5,	//swp
				129250: 1.5,	//Solace
				47540: 2,	//Penance
				120517: 1.5,	//halo
				214621: 1.5,	//Schism
				121536: 1.5,	//Angelic Feather
				246287: 1.5,	//Evangelism
				47536: 1.5,	//Rapture
				34433: 1.5,	//Shadowfiend
				19236: 1.5,	//Desperate Prayer
				33206: 1.5,	//Pain Suppression
				62618: 1.5,	//Power Word: Barrier
				73325: 1.5,	//Leap of Faith
				204197: 1.5,	//Purge the Wicked
				271466: 1.5,	//Luminous Barrier
				132157: 1.5,	//Holy Nova
				586: 1.5, 	//Fade
				32375: 1.5,	//Mass Dispel
				528: 1.5,	//Dispel Magic
				204263: 1.5,	//Shining Force
				527: 1.5,	//Purify
				186263: 1.5,	//Shadow Mend
				123040: 1.5,	//Mindbender
				110744: 1.5,	//Divine Star
				21562: 1.5,	//stamina buff
				8122: 1.5,	//Psychic Scream
				204065: 1.5,	//Shadow Covenant
				
				232633: 1.5,	//Arcane torrent
				69070: 1.5,	//Rocket jump
			};

			spellCastTimeNoCD = {	//only spells without cd
				17: 1.5,	//pws
				585: 1.5, 	//smite
				//589: 1.5,	//swp
			};
			
			spellCastIDToHealID = {};
			
			uV.spellIsAtonement = {
				81751: true,
				94472: true,
			};
			
			spellScaleInt = {
				17: true,	//pws
				120692: true,	//halo
				194509: true,	//radiance
				47750: true,	//Penance
				120692: true,	//halo
				271466: true,	//Luminous Barrier
				281265: true,	//Holy Nova
				186263: true,	//Shadow Mend
				110744: true,	//Divine Star
				204065: true,	//Shadow Covenant
				
				585: true, 	//smite
				589: true,	//swp
				204197: true,	//Purge the Wicked
			};
			
			spellScaleMastery = {
				17: true,	//pws
				120692: true,	//halo
				194509: true,	//radiance
				47750: true,	//Penance
				120692: true,	//halo
				271466: true,	//Luminous Barrier
				281265: true,	//Holy Nova
				186263: true,	//Shadow Mend
				110744: true,	//Divine Star
				204065: true,	//Shadow Covenant
				
				81751: true,	//Atonement
				94472: true,	//Atonement
			};
			
			spellNotScaleHaste = {
				272260: true,	//trait Concentrated Mending
				270661: true,	//trait Self Reliance
			};
			spellAffectedByHaste = {};	//not tick events, but still haste scaling
			
			spellScaleVers = {
				17: true,	//pws
				120692: true,	//halo
				194509: true,	//radiance
				47750: true,	//Penance
				120692: true,	//halo
				271466: true,	//Luminous Barrier
				281265: true,	//Holy Nova
				186263: true,	//Shadow Mend
				110744: true,	//Divine Star
				204065: true,	//Shadow Covenant
				208771: true,	//Smite absorb
				
				81751: true,	//Atonement
				94472: true,	//Atonement

				270117: true,	//trait impassive visage
				269279: true,	//trait absorb
			};
			
			cooldownsTrackingIDs = {
				29166: true,
				47536: true,
				214621: true,
			};
			
			cooldownsTrackingIDsbyCast = {
				246287: 15000,
			};
			
			ignoredSpellsForCDTracking = {
				[-32]: true,
				[-2]: true,
				[63619]: true,
			};
						
			healingFromMana = {
				17: 1,		//pws
				120692: 1,	//halo
				194509: 1,	//radiance
				47750: 1,	//Penance
				281265: 1,	//Holy Nova
				186263: 1,	//Shadow Mend
				81751: 1,	//Atonement
				94472: 1,	//Atonement
				110744: 1,	//Divine Star
				204065: 1,	//Shadow Covenant
			};
			
			uV.SpellParseInt = function(spellID){
				return spellScaleInt[spellID] || uV.spellIsAtonement[spellID];
			};
			
			uV.SpellParseMastery = function(spellID,event){
				return spellScaleMastery[spellID] && pV.AtonementTarget[event.targetID];
			};

			function GetAtonementOverhealFactor(spellID){ if(!rV.atonementData[spellID] || (rV.atonementData[spellID][1] == 0)) return 1; return rV.atonementData[spellID][1] / (rV.atonementData[spellID][0]+rV.atonementData[spellID][1]); }
			GEAR = [
				{slot:-3,spell:273307,type:9,tier:1,name:"Weal and Woe",icon:"spell_holy_penance",special:function(ilvl){ return ScaleTrait(273307,ilvl,1) * (pV.azeritePenancePredictionSmite || 0) * GetVersFactor() * GetCritFactor() * GetMasteryFactor() * 1.5 * GetDpsFactor() * 0.6 * GetAtonementOverhealFactor(585) + ScaleTrait(273307,ilvl,2) * (pV.azeritePenancePredictionPWS || 0) * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:272775,type:9,tier:1,name:"Moment of Repose",icon:"spell_holy_painsupression",special:function(ilvl){ return ScaleTrait(272775,ilvl) * (pV.azeritePainSuppressionPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor() + ScaleTrait(272775,ilvl) * (pV.azeritePainSuppressionPredictionMastery || 0) * GetMasteryFactor() * GetModFactor() * GetVersFactor() * GetCritFactor();},extra:function(){return pV.azeritePainSuppressionPredictionAtt; },addExtra:function(){return !GetTraitBySpell(272775);}},
				{slot:-3,spell:278643,type:9,tier:1,name:"Enduring",icon:"spell_priest_power-word",special:function(ilvl){ return ScaleTrait(278643,ilvl) * (pV.azeritePWRPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); },extra:function(ilvl){return GetTraitBySpell(278643) ? pV.azeritePWRAmountAtt : pV.azeritePWRPredictionAtt;},addExtra:function(){return !GetTraitBySpell(278643);},textAmount:function(ilvl){ var t="Atonement duration effect can't be stacked!<br>Atonement: "+NumberToFormattedNumber(this.extra(ilvl),2)+(GetTraitBySpell(278643) ? " (already have it, doesn't count in prediction, highlighted as translucent)" : ""); return t;}},
				{slot:-3,spell:275541,type:9,tier:1,name:"Depth of the Shadows",icon:"spell_shadow_shadowmend",special:function(ilvl){ return ScaleTrait(275541,ilvl) * (pV.azeriteShadowMendPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:278629,type:9,tier:1,name:"Contemptuous Homily",icon:"spell_shadow_painandsuffering",special:function(ilvl){ return ScaleTrait(278629,ilvl) * (pV.azeritePenanceDamagePrediction || 0) * GetMasteryFactor() * GetVersFactor() * GetCritFactor() * 0.6 * GetDpsFactor() * GetAtonementOverhealFactor(47666) + pV.azeritePenanceDamagePredictionSWPHeal; }},
				{slot:-3,spell:277680,type:9,tier:1,name:"Gift of Forgiveness",icon:"spell_holy_holysmite",special:function(ilvl){ return ScaleTrait(277680,ilvl) * (pV.azeriteSmitePrediction || 0) * GetMasteryFactor() * GetVersFactor() * GetCritFactor() * 1.5 * GetDpsFactor() * 0.6 * GetAtonementOverhealFactor(585); }},
				{slot:-3,spell:275541,type:9,tier:1,name:"Depth of the Shadows [8.1]",icon:"spell_shadow_shadowmend",special:function(ilvl){ return ScaleTrait(275541,ilvl) * (pV.azeriteShadowMendPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor() * 2;},extra:function(ilvl){return GetTraitBySpell(275541) ? pV.azeriteShadowMendAtt : pV.azeriteShadowMendAttPred; },addExtra:function(){return !GetTraitBySpell(275541);},textAmount:function(ilvl){ var t="Atonement duration effect can't be stacked!<br>Extra healing: "+NumberToFormattedNumber(this.special(ilvl),2)+"<br>Atonement duration: "+NumberToFormattedNumber(this.extra(ilvl),2)+(GetTraitBySpell(275541) ? " (already have it, doesn't count in prediction, highlighted as translucent)" : ""); return t;}},
				{slot:-3,spell:287355,type:9,tier:1,name:"Sudden Revelation",icon:"spell_holy_holynova",special:function(ilvl){ return Math.max(ScaleTrait(287355,ilvl) * (pV.azeriteSuddenRevelationPrediction2 || 0) * GetMasteryFactor() * GetVersFactor() * GetCritFactor() * GetDpsFactor() * 0.55 - pV.azeriteSuddenRevelationPredictionSmiteNegate);},extra:function(ilvl){return Math.floor(pV.azeriteSuddenRevelationPrediction * 3 / 20) * 10.5 * 5 * rV.healPerAtonement; },addExtra:function(){return !GetTraitBySpell(287355);},textAmount:function(ilvl){ var t="Cooldown reduction effect can't be stacked!<br>Extra healing: "+NumberToFormattedNumber(this.special(ilvl),2)+"<br>Cooldown reduction: "+NumberToFormattedNumber(this.extra(ilvl),2); return t;}},

				{slot:-3,spell:278659,type:9,tier:1,name:"Death Throes",icon:"spell_shadow_haunting",special:function(ilvl){ return ScaleTrait(278659,ilvl) / (8 * GetHasteFactor()) * (pV.azeriteSWDPrediction || 0) * GetMasteryFactor() * GetVersFactor() * GetCritFactor() * GetDpsFactor() * 0.6 * GetAtonementOverhealFactor(589); }},
			
				{slot:-3,spell:267892,type:9,tier:2,name:"Synergistic Growth",icon:"inv_misc_markoftheworldtree",special:function(ilvl){ return ScaleTrait(267892,ilvl) * (pV.azeriteSynergisticGrowthPrediction2 || 0); }},
				{slot:-3,spell:267892,type:9,tier:2,name:"Synergistic Growth [8.1]",icon:"inv_misc_markoftheworldtree",special:function(ilvl){ return ScaleTrait(267892,ilvl) * (pV.azeriteSynergisticGrowthPrediction || 0); }},
				
				{slot:-3,spell:274366,type:9,tier:3,name:"Sanctum",icon:"spell_magic_lesserinvisibilty",special:function(ilvl){ return ScaleTrait(274366,ilvl) * Math.max(pV.castNum[586] || 0,GetFightLenFactor(30) * 0.6) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:280018,type:9,tier:3,name:"Twist Magic",icon:"spell_nature_nullifydisease",special:function(ilvl){ return ScaleTrait(280018,ilvl) * (pV.azeriteTwistMagicPrediction || 0) * 5 * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:280018,type:9,tier:3,name:"Twist Magic [8.1]",icon:"spell_nature_nullifydisease",special:function(ilvl){ return ScaleTrait(280018,ilvl) * (pV.azeriteTwistMagicPrediction || 0) * 5 * GetModFactor() * GetVersFactor() * GetCritFactor() / 4; }},
				{slot:-3,spell:287717,type:9,tier:3,name:"Death Denied",icon:"priest_spell_leapoffaith_a",special:function(ilvl){ return ScaleTrait(287717,ilvl) * Math.max(pV.castNum[73325] || 0,GetFightLenFactor(75)) * GetVersFactor() * GetCritFactor(); }},

				{slot:1,item:160719,ilvl:385,type:6,name:"Visage of the Ascended Prophet",int:625,icon:"inv_helm_cloth_nazmirraidmythic_d_01",tier1:[280559,273307],tier2:[263984,267886,267880],tier3:[268437,263962],max:390,min:340},
				{slot:1,item:160616,ilvl:385,type:6,name:"Horrific Amalgam's Hood",int:625,icon:"inv_helm_cloth_nazmirraidmythic_d_01",tier1:[280555,278643,278659],tier2:[267883,267882],tier3:[268599],max:390,min:340},
				{slot:1,item:161401,ilvl:385,type:1,name:"Matriarch's Shadowveil",int:625,icon:"inv_helm_cloth_nazmirraid_d_01",tier1:[278643],tier2:[267886,264108,267882],max:360,min:355},
				{slot:1,item:155886,ilvl:385,type:2,name:"[S1] Smartly Plumed Cap",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[278643,273682],tier2:[267892,267889],tier3:[274366,268599],max:390},
				{slot:1,item:161555,ilvl:385,type:1,name:"Azerothian Champion's Crown",int:625,icon:"inv_helm_cloth_zandalardungeon_c_01",tier1:[278659,278629,280710],tier2:[267882,279926,267883],tier3:[263962,268599],max:360,min:355},
				{slot:1,item:160488,ilvl:385,type:1,name:"AZ3-R1-T3 Synthetic Specs",int:625,icon:"inv_helm_goggles_draenortradeskill_d_01",tier1:[280178],tier2:[267886,267884,266180],tier3:[280181],max:340,min:345},
				{slot:1,item:161455,ilvl:385,type:1,name:"Battlemage's Collar",int:625,icon:"ivn_helm_cloth_warfrontshorde_c_01",tier1:[280581,275541],tier2:[267879,267889],tier3:[263962,274366],max:340,min:375},
				{slot:1,item:159244,ilvl:385,type:2,name:"[S1] Stormlurker's Cowl",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[277680],tier2:[267889,267879,266180],tier3:[268437],max:390},
				{slot:1,item:159252,ilvl:385,type:2,name:"[S1] Grasping Crown of the Deep",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[278659,272775],tier2:[264108,267892,267884],tier3:[263962],max:390},
				{slot:1,item:159279,ilvl:385,type:2,name:"[S1] Soulfuel Headdress",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[273823,278629],tier2:[267886,267882],tier3:[280018],max:390},
				{slot:1,item:158315,ilvl:385,type:2,name:"[S1] Secret Spinner's Miter",int:625,icon:"inv_helm_cloth_zandalardungeon_c_01",tier1:[273307],tier2:[267880,267882,266180],tier3:[268599],max:390},
				{slot:1,item:159236,ilvl:385,type:2,name:"[S1] Headdress of the First Empire",int:625,icon:"inv_helm_cloth_zandalardungeon_c_01",tier1:[275541],tier2:[279926,267882,267889],tier3:[268437,263962],max:390},
				{slot:1,item:158315,ilvl:385,type:2,name:"[S2] Secret Spinner's Miter",int:625,icon:"inv_helm_cloth_zandalardungeon_c_01",tier1:[275541,278643],tier2:[273307],tier3:[267880,267882,266180],tier4:[268599],max:420},
				{slot:1,item:159236,ilvl:385,type:2,name:"[S2] Headdress of the First Empire",int:625,icon:"inv_helm_cloth_zandalardungeon_c_01",tier1:[272775,278659,278629],tier2:[275541],tier3:[279926,267882,267889],tier4:[268437,263962],max:420},
				{slot:1,item:155886,ilvl:385,type:2,name:"[S2] Smartly Plumed Cap",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[287355,278659,278629],tier2:[278643,273682],tier3:[267892,267889],tier4:[274366,268599],max:420},
				{slot:1,item:159244,ilvl:385,type:2,name:"[S2] Stormlurker's Cowl",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[272775,278643],tier2:[277680],tier3:[267889,267879,266180],tier4:[268437],max:420},
				{slot:1,item:159252,ilvl:385,type:2,name:"[S2] Grasping Crown of the Deep",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[278355,273307],tier2:[278659,272775],tier3:[264108,267892,267884],tier4:[263962],max:420},
				{slot:1,item:159279,ilvl:385,type:2,name:"[S2] Soulfuel Headdress",int:625,icon:"inv_helm_cloth_kultirasdungeon_c_01",tier1:[273307,275541],tier2:[273823,278629],tier3:[267886,267882],tier4:[280018],max:420},
				{slot:1,item:165500,ilvl:385,type:7,name:"Blazewing Hood",int:625,icon:"inv_helm_cloth_zuldazarraidmythic_d_01",tier1:[272775,275541],tier2:[288953,278629,278659],tier3:[267880,267889],tier4:[280018],max:420,min:370},
				{slot:1,item:165822,ilvl:385,type:7,name:"Cowl of Tideborne Omens",int:625,icon:"inv_helm_cloth_zuldazarraidmythic_d_01",tier1:[275541,273307],tier2:[288802,272775],tier3:[266180,267892,267883],tier4:[274366,263962],max:420,min:370},
				{slot:1,item:165818,ilvl:385,type:7,name:"Crown of the Seducer",int:625,icon:"inv_helm_crown_c_01_silver",tier1:[273307,287355],tier2:[288749,278643],tier3:[264108,267886,267883],tier4:[268437,287717],max:420,min:370},

				{slot:3,item:160613,ilvl:385,type:6,name:"Mantle of Contained Corruption",int:469,icon:"inv_shoulder_cloth_nazmirraidmythic_d_01",tier1:[280555,278629],tier2:[267880,267892,279899],tier3:[274366,263962],max:390,min:340},
				{slot:3,item:160726,ilvl:385,type:6,name:"Amice of Corrupting Horror",int:469,icon:"inv_shoulder_cloth_nazmirraidmythic_d_01",tier1:[275541,280559],tier2:[267889,267884,279926],tier3:[274366],max:390,min:340},
				{slot:3,item:160726,ilvl:385,type:1,name:"Amice of the Rending Abyss",int:469,icon:"inv_shoulder_cloth_nazmirraid_d_01",tier1:[272775],tier2:[267880,267889],max:360,min:355},
				{slot:3,item:161454,ilvl:385,type:1,name:"Warcaster's Doom Mantle",int:469,icon:"ivn_shoulder_cloth_warfrontshorde_c_01",tier1:[277680],tier2:[267882,267892,263984],tier3:[268437],max:375,min:340},
				{slot:3,item:158344,ilvl:385,type:2,name:"[S1] Mantle of Ceremonial Ascension",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[273307],tier2:[267880,267886,263984],tier3:[274366],max:390},
				{slot:3,item:159232,ilvl:385,type:2,name:"[S1] Exquisitely Aerodynamic Shoulderpads",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[281514,278629],tier2:[267880,267879],max:390},
				{slot:3,item:159238,ilvl:385,type:2,name:"[S1] Mantle of Void-Touched Waters",int:469,icon:"inv_shoulder_cloth_kultirasdungeon_c_01",tier1:[273829,278643],tier2:[267882,267884],tier3:[268599],max:390},
				{slot:3,item:159273,ilvl:385,type:2,name:"[S1] Amice of the Returned",int:469,icon:"inv_shoulder_cloth_kultirasdungeon_c_01",tier1:[275541,278659],tier2:[267892,267880,279899],tier3:[268437],max:390},
				{slot:3,item:159254,ilvl:385,type:2,name:"[S1] Brood Cleanser's Amice",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[272775,280429],tier2:[267884,267886,279926],tier3:[280018],max:390},
				{slot:3,item:159267,ilvl:385,type:2,name:"[S1] Pauldrons of Vile Corruption",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[277680,280407],tier2:[267884,267889,279899],tier3:[263962],max:390},
				{slot:3,item:158344,ilvl:385,type:2,name:"[S2] Mantle of Ceremonial Ascension",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[272775,287355],tier2:[273307],tier3:[267880,267886,263984],tier4:[274366],max:420},
				{slot:3,item:159254,ilvl:385,type:2,name:"[S2] Brood Cleanser's Amice",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[273307,287355],tier2:[272775,280429],tier3:[267884,267886,279926],tier4:[280018],max:420},
				{slot:3,item:159232,ilvl:385,type:2,name:"[S2] Exquisitely Aerodynamic Shoulderpads",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[275541,278643],tier2:[281514,278629],tier3:[267880,267879],tier4:[287717],max:420},
				{slot:3,item:159267,ilvl:385,type:2,name:"[S2] Pauldrons of Vile Corruption",int:469,icon:"inv_shoulder_cloth_zandalardungeon_c_01",tier1:[275541,278659,278629],tier2:[277680,280407],tier3:[267884,267889,279899],tier4:[263962],max:420},
				{slot:3,item:159238,ilvl:385,type:2,name:"[S2] Mantle of Void-Touched Waters",int:469,icon:"inv_shoulder_cloth_kultirasdungeon_c_01",tier1:[273307,278659,278629],tier2:[273829,278643],tier3:[267882,267884],tier4:[268599],max:420},
				{slot:3,item:159273,ilvl:385,type:2,name:"[S2] Amice of the Returned",int:469,icon:"inv_shoulder_cloth_kultirasdungeon_c_01",tier1:[272775,278643],tier2:[275541,278659],tier3:[267892,267880,279899],tier4:[268437],max:420},
				{slot:3,item:165497,ilvl:385,type:7,name:"Giga-Charged Shoulderpads",int:469,icon:"inv_shoulder_cloth_zuldazarraidmythic_d_01",tier1:[287355,275541],tier2:[288953,272775],tier3:[267889,267882],tier4:[287717],max:420,min:370},
				{slot:3,item:165922,ilvl:385,type:7,name:"Bristling Fur-Lined Amice",int:469,icon:"inv_shoulder_cloth_zuldazarraidmythic_d_01",tier1:[272775,278643],tier2:[288802,287355],tier3:[267882,267892],tier4:[287717],max:420,min:370},
				{slot:3,item:165507,ilvl:385,type:7,name:"Mantle of the Skyterror",int:469,icon:"inv_shoulder_cloth_zuldazarraidmythic_d_01",tier1:[273307,278629,278659],tier2:[288749,278643],tier3:[264108,267884,267879],tier4:[274366,268599],max:420,min:370},

				{slot:5,item:160614,ilvl:385,type:6,name:"Robes of the Unraveler",int:625,icon:"inv_robe_cloth_nazmirraidmythic_d_01",tier1:[280555,277680],tier2:[267883,267892,266180],tier3:[280018,268599],max:390,min:340},
				{slot:5,item:161400,ilvl:385,type:1,name:"Raider's Shrouding Thobe",int:625,icon:"inv_robe_cloth_nazmirraid_d_01",tier1:[280429,278629],tier2:[267883,267884],max:360,min:355},
				{slot:5,item:158301,ilvl:385,type:2,name:"Ruffled Poet Blouse",int:625,icon:"inv_chest_cloth_kultirasdungeon_c_01",tier1:[281841,275541],tier2:[267883,263984,267879],max:390},
				{slot:5,item:159268,ilvl:385,type:2,name:"Inmate's Straight Robe",int:625,icon:"inv_chest_cloth_kultirasdungeon_c_01",tier1:[278643],tier2:[267882,267879],tier3:[268437,280018],max:390},
				{slot:5,item:158349,ilvl:385,type:2,name:"Petticoat of the Self-Stylized Azerite Baron",int:625,icon:"inv_chest_cloth_zandalardungeon_c_01",tier1:[281514,277680],tier2:[279899,267886,267883],max:390},
				{slot:5,item:159233,ilvl:385,type:2,name:"Loa Betrayer's Vestments",int:625,icon:"inv_chest_cloth_zandalardungeon_c_01",tier1:[272775],tier2:[267879,267892],tier3:[274366,263962],max:390},
				{slot:5,item:159241,ilvl:385,type:2,name:"Blood-Drenched Robes",int:625,icon:"inv_chest_cloth_zandalardungeon_c_01",tier1:[278659,278629,273834],tier2:[267886,267883],tier3:[268599],max:390},
				{slot:5,item:159257,ilvl:385,type:2,name:"Robes of the Reborn Serpent",int:625,icon:"inv_chest_cloth_zandalardungeon_c_01",tier1:[273307],tier2:[267889,267883,264108],tier3:[268599],max:390},
				{slot:5,item:165834,ilvl:385,type:7,name:"Divine Fury Raiment",int:625,icon:"inv_robe_cloth_zuldazarraidmythic_d_01",tier1:[278643,272775],tier2:[288953,275541],tier3:[279926,267879,267886],tier4:[274366],max:420,min:370},
				{slot:5,item:165505,ilvl:385,type:7,name:"Robes of Biting Cold",int:625,icon:"inv_robe_cloth_zuldazarraidmythic_d_01",tier1:[278659,278629,278643],tier2:[288749,287355],tier3:[279899,267886,267884],tier4:[280018],max:420,min:370},
				{slot:5,item:165498,ilvl:385,type:7,name:"Vestments of the Afterlife",int:625,icon:"inv_robe_cloth_zuldazarraidmythic_d_01",tier1:[287355,278629,278659],tier2:[288802,273307],tier3:[263984,267886,267880],tier4:[280018,263962],max:420,min:370},
			];

			uV.BuildReportHeaderIcons = function(fightLen){
				var hps = Math.round(rV.total / fightLen * 1000);
				var HTML = "";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_priest_ascension.jpg\"></div><div class=\"col w75\">Healing Done: "+NumberToFormattedNumber(rV.total,2)+"<br>HPS: "+NumberToFormattedNumber(hps,0,3,3)+"</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_holy_hopeandgrace.jpg\"></div><div class=\"col w75\">Mastery healing Done:<br>"+NumberToFormattedNumber(Math.round(healPerStat.mastery.total),2)+" ("+Math.round(healPerStat.mastery.total / healPerStat.mastery.all * 100)+"%)</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/ability_priest_atonement.jpg\"></div><div class=\"col w75\">Healing Per 1sec Atonement: "+Math.floor(rV.healPerAtonement)+"</div></div></div></div>";

				return HTML;
			};

			uV.BuildReportTopRight = function(){
				var HTML = "";
				// Atonement spells
				var spellslistKeys = Object.keys(rV.atonementData);
				spellslistKeys.sort(function(a,b){ return rV.atonementData[a][0] > rV.atonementData[b][0] ? - 1 : 1 });
				HTML += "<div class=\"col-half\"><div class=\"box clearfix spellslist\"><header class=\"box-header\" style=\"padding-bottom:0;padding-top:0\">Atonement</header>";
				for (var j = 0, j_len = spellslistKeys.length; j < j_len; j++) {
					var spellID = spellslistKeys[j];
					if(spellID > 0){
						var spellInfo = cV.spellInfo[spellID];
						if(spellInfo)
							HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(spellInfo['icon'].replace(/\-/,""))+"\" alt=\""+spellInfo['name']+"\">"+spellInfo['name']+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][0],1,2,2)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][1],1)+"</div></div>";
						else
							HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\">Spell "+spellID+"</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][0],1,2,2)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][1],1)+"</div></div>";
					} else {
						HTML += "<div class=\"row full\"><div class=\"line half\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\">Undetermined</a></div><div class=\"line t-right w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][0],1,2,2)+"</div><div class=\"line t-right t-grey w15\">"+NumberToFormattedNumber(rV.atonementData[spellID][1],1)+"</div></div>";		
					}
				}
				HTML += "</div>";	
				HTML += "</div>";
				return HTML;
			}

			uV.BuildReportBeforeCooldowns = function(fightLen){
				var HTML = "";
				HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box clearfix procs\"><header class=\"box-header\">ATONEMENT DAMAGE</header><div class=\"list-top-line\" style=\"margin-bottom:10px;\"> </div>";

				//per dmg
				HTML += "<div class=\"row full\" style=\"font-size: 1.25em;\">Per damage event</div><div class=\"row full\" style=\"height: 300px; overflow-y: scroll;\">";
				HTML += "<div class=\"row full\"><div class=\"col w5\"> </div><div class=\"col w30\"> </div><div class=\"col w15\">Damage</div><div class=\"col w15\">Targets</div><div class=\"col w15\">Heal</div><div class=\"col w15\">Overheal</div></div>";
				for (var i = 0, len = rV.atonementHealEvents.length; i < len; i++) {
					var line = rV.atonementHealEvents[i];
					var spellID = line.spell;
					var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
					var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
					HTML += "<div class=\"row full\">";
					HTML += "<div class=\"col w5\">"+MsToFormattedTime(line.time - currFightData.start_time)+"</div>";
					HTML += "<div class=\"col w30\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+(line.isTick ? " (tick)" : "")+"</a>"+(line.isSchismUp ? " + <img src=\""+GetIconUrl(cV.spellInfo[214621].icon)+"\" style=\"height: 23px;width:23px;\" alt=\"Schism\">" : "")+"</div>";
					HTML += "<div class=\"col w15\">"+line.damage+"</div>";
					HTML += "<div class=\"col w15\">"+line.targets+"</div>";
					HTML += "<div class=\"col w15\">"+line.amount+"</div>";
					HTML += "<div class=\"col w15 t-grey\">"+line.overheal+"</div>";
					HTML += "</div>";				
				}
				HTML += "</div>";

				//per cast
				HTML += "<div class=\"list-top-line row full\" style=\"margin-bottom:10px;padding-top:10px;\"> </div><div class=\"row full\" style=\"font-size: 1.25em;\">Per cast</div><div class=\"row full\" style=\"height: 300px; overflow-y: scroll;\">";
				HTML += "<div class=\"row full\"><div class=\"col w5\"> </div><div class=\"col w25\"> </div><div class=\"col w15\">Damage</div><div class=\"col w15\">Target</div><div class=\"col w10\">Heal count</div><div class=\"col w15\">Heal</div><div class=\"col w15\">Overheal</div></div>";
				for (var i = 0, len = rV.atonementHealCasts.length; i < len; i++) {
					var line = rV.atonementHealCasts[i];
					var spellID = line.spell;
					var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
					var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
					HTML += "<div class=\"row full\">";
					HTML += "<div class=\"col w5\">"+MsToFormattedTime(line.time - currFightData.start_time)+"</div>";
					HTML += "<div class=\"col w25\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+"</a></div>";
					HTML += "<div class=\"col w15\">"+line.damage+"</div>";
					HTML += "<div class=\"col w15\">"+(actorsData[line.targetID] ? actorsData[line.targetID].name : "")+"</div>";
					HTML += "<div class=\"col w10\">"+line.count+"</div>";
					HTML += "<div class=\"col w15\">"+line.amount+"</div>";
					HTML += "<div class=\"col w15 t-grey\">"+line.overheal+"</div>";
					HTML += "</div>";				
				}
				HTML += "</div>";

				//per buff
				HTML += "<div class=\"list-top-line row full\" style=\"margin-bottom:10px;padding-top:10px;\"> </div><div class=\"row full\" style=\"font-size: 1.25em;\">Per buff</div><div class=\"row full\" style=\"height: 300px; overflow-y: scroll;\">";
				HTML += "<div class=\"row full\"><div class=\"col w10\"> </div><div class=\"col w30\"> </div><div class=\"col w15\">Target</div><div class=\"col w15\">Heal</div><div class=\"col w15\">Overheal</div></div>";
				for (var i = 0, len = rV.atonementHealBuffs.length; i < len; i++) {
					var line = rV.atonementHealBuffs[i];
					var spellID = line.spell;
					var icon = cV.spellInfo[spellID] ? cV.spellInfo[spellID].icon : "";
					var name = cV.spellInfo[spellID] ? cV.spellInfo[spellID].name : "";
					HTML += "<div class=\"row full\">";
					HTML += "<div class=\"col w10\">"+MsToFormattedTime(line.time - currFightData.start_time)+" - "+MsToFormattedTime((line.fade || currFightData.end_time) - currFightData.start_time)+"</div>";
					HTML += "<div class=\"col w30\"><a href=\"//www.wowhead.com/spell="+spellID+"\" target=\"_blank\"><img src=\""+GetIconUrl(icon)+"\" alt=\""+name+"\"> "+name+"</a></div>";
					HTML += "<div class=\"col w15 "+(actorsData[line.targetID] ? actorsData[line.targetID].class : "")+"\">"+(actorsData[line.targetID] ? actorsData[line.targetID].name : "")+"</div>";
					HTML += "<div class=\"col w15\"><em class=\"tooltip\">"+line.amount+"<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">"+CreateSpellsTextFromList(line.bySpell)+"</span></em></div>";
					HTML += "<div class=\"col w15 t-grey\">"+line.overheal+"</div>";
					HTML += "</div>";

									
				}
				HTML += "</div>";
				

				HTML += "</div></div></div>";
				return HTML;
			};


			pV.AtonementTarget = {};
		},
		parse: [
			"applybuffany", function(event,spellID){
				if(spellID == 194384 && actors[event.sourceID]) pV.AtonementTarget[event.targetID] = true;
			},
			"removebuffany", function(event,spellID){
				if(spellID == 194384 && actors[event.sourceID]) delete pV.AtonementTarget[event.targetID];
			},			
		],
	},
	{	//temp Atonement snapshot fix
		init: function() {
			pV.AtonementSnapshot = {};

			if(!currFightData.is81){
				console.log('add pre 8.1 mastery snapshot fix');
				uV.AtonementSnapshotFix = true;
				uV.MasteryParseDisable = true;
				uV.MasteryParseSpecial = function(event,spellID,amount,overheal){
					var masteryFix;
					if(pV.AtonementSnapshot[event.targetID])
						masteryFix = pV.AtonementSnapshot[event.targetID];
					else
						masteryFix = pV.masteryNow;
	
					pV.currHealFromMastery = amount * ( 1 - (1 / (1 + ((masteryFix / STATS.mastery) / 100) )) );
					pV.currHealFromMasteryOh = (amount + overheal) * ( 1 - (1 / (1 + ((masteryFix / STATS.mastery) / 100) )) );
	
					AddStatAmount('mastery',pV.currHealFromMastery,pV.currHealFromMasteryOh,masteryFix,amount,spellID,event.timestamp,event);
				}
			}
		},
		parse: [
			"applybuffany", function(event,spellID){
				if(!uV.AtonementSnapshotFix) return;
				if(spellID == 194384 && actors[event.sourceID]) {
					var masteryFix = cV.mastery;				

					Object.keys(statsBuffs.mastery).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								masteryFix += statsBuffs.mastery[buffSpellID] * buffStatus[buffSpellID];
							else
								masteryFix += statsBuffs.mastery[buffSpellID];
						}
					});
					Object.keys(statsBuffsOther.mastery).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.mastery[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) masteryFix += statsBuffsOther.mastery[sourceID][buffSpellID];
						});
					});

					pV.AtonementSnapshot[event.targetID] = masteryFix;
				}
			},
			"removebuffany", function(event,spellID){
				if(!uV.AtonementSnapshotFix) return;
				if(spellID == 194384 && actors[event.sourceID]) delete pV.AtonementSnapshot[event.targetID];
			},
			"any", function(event){
				if(!uV.AtonementSnapshotFix) return;
				if(event.type == "refreshbuff" && event.ability.guid == 194384 && actors[event.sourceID]) {
					var masteryFix = cV.mastery;				

					Object.keys(statsBuffs.mastery).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]) {
							if(typeof(buffStatus[buffSpellID]) == "number")
								masteryFix += statsBuffs.mastery[buffSpellID] * buffStatus[buffSpellID];
							else
								masteryFix += statsBuffs.mastery[buffSpellID];
						}
					});
					Object.keys(statsBuffsOther.mastery).forEach(function (sourceID) {
						Object.keys(statsBuffsOther.mastery[sourceID]).forEach(function (buffSpellID) {
							if(buffOtherStatus[sourceID] && buffOtherStatus[sourceID][buffSpellID]) masteryFix += statsBuffsOther.mastery[sourceID][buffSpellID];
						});
					});

					pV.AtonementSnapshot[event.targetID] = masteryFix;
				};
			},
		],	
	},
	{	//SW:P haste profit calcs
		parse: [
			"atonement", function(event,spellID){
				if(spellID == 589 || spellID == 204213) {
					var hasteCalc = GetCurrentHaste();
					var hasteNow = hasteCalc[0];
					var hasteMod = hasteCalc[1];
					
					var amount = event.amount;
					var overheal = event.overheal || 0;
										
					var currHealFromHaste = (1 - (1 / hasteMod)) * amount;
					var currHealFromHasteOh = (1 - (1 / hasteMod)) * (amount + overheal);
										
					AddStatAmount('haste',currHealFromHaste,currHealFromHasteOh,hasteNow,amount,spellID,event.timestamp,event);

					Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
						if(buffStatus[buffSpellID]){
							if(!rV.buffs.haste_mod[buffSpellID]) rV.buffs.haste_mod[buffSpellID] = 0;
							rV.buffs.haste_mod[buffSpellID] += ((statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste) / hasteNow * currHealFromHaste;
						}
					});				
				}
			},		
		],
	},
	{	//DR: Focused Will
		init: function() {
			rV.dr[45242] = 0;
			pV.dr45242active = 0;
		},
		parse: [
			"damageany", function(event,spellID){
				if(event.targetID == currFightData.actor && pV.dr45242active > 0){
					var amount = event.amount;
					if(event.absorbed) event.amount += event.absorbed;				
				
					rV.dr[45242] += (amount / (1 - 0.15 * pV.dr45242active)) - amount;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 45242) pV.dr45242active = 0;
			},
			"applybuff", function(event,spellID){
				if(spellID == 45242) pV.dr45242active = 1;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 45242) pV.dr45242active = event.stack;
			},
		],
	},
	{	//DR: Versatility
		init: function() {
			rV.dr["Versatility"] = 0;
		},
		parse: [
			"damageany", function(event,spellID){
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
			pV.savedTime = 0;
			pV.savedTimeTotal = 0;
			pV.totalCastTime = 0;
			pV.prevCastTime = 0;
			pV.savedTimeSpells = {};
			rV.hasteCastProfit = 0;
			rV.hasteCastProfitBySpell = {};
			pV.savedTimeNoCD = {};
			pV.savedTimeNoCDTotal = 0;
			pV.hasteCast = {};
			pV.savedTimeAvg = 0;
			pV.savedTimeAvgCount = 0;	
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
				var totalAmount = 0;
				for (var k = 0, k_len = spellIDs.length; k < k_len; k++) {
					var spellID = spellIDs[k];
					if(healingData[spellID]) {
						var amount = healingData[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal)
						pV.healFromHaste += amount; 
						totalAmount += amount;
					}						
					if(rV.atonementData[spellID]){
						var amount = rV.atonementData[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal); 
						pV.healFromHaste += amount; 
						totalAmount += amount;
					}
				}
				
				rV.hasteCastProfitBySpell[spellCastID] = totalAmount / (pV.savedTimeTotal / pV.savedTime);

			});
			
			rV.hasteCastProfit = pV.healFromHaste / (pV.savedTimeTotal / pV.savedTime);

			rV.hasteCastProfit = 0;
			pV.healFromHaste = 0;
			
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
	{	//Haste calcs 2
		init: function() {
			pV.hasteCalc2 = {};
			pV.hasteCalcRes = 0;
			pV.hasteCalcResTar = {};

			pV.hastePWSsaved = 0;
			pV.hastePWStargets = {};
			pV.hastePWStargetsHaste = {};
			pV.hasteCalcPWSRes = 0;

			uV.BuildReportStats = function(code,stat,text,arg1,arg2){
				if(code == 0){
					if(stat == "haste") return true;
					return false;
				} else if (code == 1 && stat == "haste"){	// totalText
					var totalTick = arg1 - pV.hasteCalcRes - pV.hasteCalcPWSRes;
			
					return "<em class=\"tooltip\">"+NumberToFormattedNumber(arg1,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+NumberToFormattedNumber(totalTick,0,2)+"<br>From atonement applications: "+NumberToFormattedNumber(pV.hasteCalcPWSRes,0,2)+"<br>From cast speed into atonements: "+NumberToFormattedNumber(pV.hasteCalcRes,0,2)+"</span></em>";	
				} else if (code == 2 && stat == "haste"){	// amountText
					var amountAtApp = pV.hasteCalcPWSRes / healPerStat[stat].total * arg1;
					var amoutTicks = pV.hasteCalcRes / healPerStat[stat].total * arg1;
					var amountAtHaste = (1 - (pV.hasteCalcRes + pV.hasteCalcPWSRes) / healPerStat[stat].total) * arg1;
					
					return "<em class=\"tooltip\">"+arg1.toFixed(3)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From ticks: "+amoutTicks.toFixed(3)+"<br>From atonement applications: "+amountAtApp.toFixed(3)+"<br>From cast speed into atonements: "+amountAtHaste.toFixed(3)+"</span></em>";
				} else if (code == 3 && stat == "haste"){	// weightText
					return (arg1 / arg2 * 1000).toFixed(2);
				} else if (code == 4 && stat == "haste"){	// fix stat numbers

				}
				return text;
			};


			uV.AddHasteAmount = function(amount,overheal,hasteNow,spellID,event){
				AddStatAmount('haste',amount,amount+overheal,hasteNow,amount,spellID,event.timestamp,event);

				Object.keys(statsBuffs.haste_mod).forEach(function (buffSpellID) {
					if(buffStatus[buffSpellID]){
						if(!rV.buffs.haste_mod[buffSpellID]) rV.buffs.haste_mod[buffSpellID] = 0;
						rV.buffs.haste_mod[buffSpellID] += ((statsBuffs.haste_mod[buffSpellID] - 1) * 100 * STATS.haste) / hasteNow * amount;
					}
				});
			}
		},
		parse: [
			// haste atonement application
			"cast", function(event,spellID){
				if(spellID == 17 || spellID == 186263){
					var hasteCalc = GetCurrentHaste();
					var hasteNow = hasteCalc[0];
					var hasteMod = hasteCalc[1];

					var castTime = spellCastTime[spellID]*1000 / hasteMod;
					
					pV.hastePWSsaved += spellCastTime[spellID]*1000 - castTime;
					if(pV.hastePWSsaved > castTime){
						pV.hastePWStargets[event.targetID] = event.timestamp + 15000 + ((spellID == 186263 && GetTraitBySpell(275541) && currFightData.is81) ? 3000 : 0);
						pV.hastePWSsaved -= castTime;
						pV.hastePWStargetsHaste[event.targetID] = hasteNow;
					}
				}
			},
			"atonement", function(event,spellID){
				if(pV.hastePWStargets[event.targetID] && event.timestamp <= pV.hastePWStargets[event.targetID]){
					pV.hasteCalcPWSRes += event.amount;

					uV.AddHasteAmount(event.amount,event.overheal || 0,pV.hastePWStargetsHaste[event.targetID],spellID,event);
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 17 && pV.hastePWStargets[event.targetID] && event.timestamp <= pV.hastePWStargets[event.targetID]) {
					pV.hasteCalcPWSRes += amount;

					uV.AddHasteAmount(event.amount,event.overheal || 0,pV.hastePWStargetsHaste[event.targetID],spellID,event);
				}
			},



			// haste in-atonement
			"cast", function(event,spellID){
				if(spellID == 17) pV.hasteCalc2[event.targetID] = 15000;
				else if(spellID == 186263) pV.hasteCalc2[event.targetID] = 15000 + ((GetTraitBySpell(275541) && currFightData.is81) ? 3000 : 0);
				else if(spellCastTime[spellID]) {
					Object.keys(pV.hasteCalc2).forEach(function (targetID) {
						pV.hasteCalc2[targetID] -= spellCastTime[spellID] * 1000;
					});
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 194509) pV.hasteCalc2[event.targetID] = GetTraitBySpell(278643) ? 10500 : 9000;
			},
			"atonement", function(event,spellID){
				if(typeof pV.hasteCalc2[event.targetID] !== 'undefined' && pV.hasteCalc2[event.targetID] <= 0 && spellID != 589 && spellID != 34433){
					pV.hasteCalcResTar[event.targetID] = (pV.hasteCalcResTar[event.targetID] || 0) + event.amount;
					pV.hasteCalcRes += event.amount;

					var hasteCalc = GetCurrentHaste();
					var hasteNow = hasteCalc[0];
					var hasteMod = hasteCalc[1];

					uV.AddHasteAmount(event.amount,event.overheal || 0,hasteNow,spellID,event);
				}
			},
			"removebuffany", function(event,spellID){
				if(spellID == 194384 && event.sourceID == currFightData.actor) delete pV.hasteCalc2[event.targetID];
			},
		],
	},
	{	//Crit calcs on absorbs
		//currently ignores absorb overheal
		init: function() {
			pV.critPWSraptureMod = 1;
		},
		parse: [
			"applybuffany", function(event,spellID){
				if(spellID == 17 && event.sourceID == currFightData.actor){	//PW:S
					var simulatePWS = 1.54 * cV.intellect * (((pV.versNow || cV.versatility) / STATS.vers) / 100 + 1) * pV.critPWSraptureMod;
					if(event.absorb / simulatePWS > 1.5){
						var critAmount = event.absorb * 0.5;

						var critNow = pV.critNow || cV.critSpell;
				
						AddStatAmount('crit',critAmount,critAmount,critNow,event.absorb,spellID,event.timestamp,event);
					}
				} else if (spellID == 271466 && event.sourceID == currFightData.actor){	//Luminous Barrier; not actually crit
					var simulateSpell = 2.8 * cV.intellect * (((pV.versNow || cV.versatility) / STATS.vers) / 100 + 1);
					if(event.absorb / simulateSpell > 1.5){
						var critAmount = event.absorb * 0.5;

						var critNow = pV.critNow || cV.critSpell;
				
						AddStatAmount('crit',critAmount,critAmount,critNow,event.absorb,spellID,event.timestamp,event);
					}
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 47536) pV.critPWSraptureMod = 3;
			},
			"removebuff", function(event,spellID){
				if(spellID == 47536) pV.critPWSraptureMod = 1;
			},
		],
	},
	{	//Atonement durations
		init: function() {
			pV.atonementTotalLength = 0;
			pV.atonementTLHeal = 0;
			pV.atonementTLCount = 0;
			pV.atonementTLTargets = {};
			rV.healPerAtonement = 0;
		},
		parse: [
			"applybuffany", function(event,spellID){
				if(spellID == 194384 && event.sourceID == currFightData.actor){
					pV.atonementTLTargets[event.targetID] = event.timestamp;
					pV.atonementTLCount ++;
				}
			},
			"removebuffany", function(event,spellID){
				if(spellID == 194384 && event.sourceID == currFightData.actor){
					var aLen = event.timestamp - (pV.atonementTLTargets[event.targetID] || currFightData.start_time);
					pV.atonementTotalLength += aLen;
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(uV.spellIsAtonement[spellID]) {
					pV.atonementTLHeal += amount;
				}
			},
		],
		afterParse: function() {
			if(pV.atonementTotalLength > 0) {
				rV.healPerAtonement = pV.atonementTLHeal / (pV.atonementTotalLength / 1000);
			}
		},
	},
];


var CLASS_256 = [
	{
		init: function() {
			rV.atonementData = {};
			pV.atonementQueue = [];
			pV.atonementQueueUID = 0;
			
			uV.AtonementDamageEvent = function (spellID,event,eSpellID) {
				if(eSpellID == spellID || eSpellID == true) {
					pV.atonementQueue.push([spellID,event.timestamp + 300,{},event.targetID,event.tick,event,++pV.atonementQueueUID]);

					if(uV.AtonementDamageEventSub1) uV.AtonementDamageEventSub1(spellID,event,event.tick,pV.atonementQueueUID);
				}
			}
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(uV.spellIsAtonement[spellID]) {
					var isFound = false;
					for (var k = 0, k_len = pV.atonementQueue.length; k < k_len; k++) {
						if(!pV.atonementQueue[k][2][ event.targetID ]){
							pV.atonementQueue[k][2][ event.targetID ] = true;
							if(!rV.atonementData[ pV.atonementQueue[k][0] ]){
								rV.atonementData[ pV.atonementQueue[k][0] ] = [0,0];
							}
							rV.atonementData[ pV.atonementQueue[k][0] ][0] += amount;
							rV.atonementData[ pV.atonementQueue[k][0] ][1] += overheal;
							isFound = true;
							for (var l = 0, l_len = parsePlugins.atonement.length; l < l_len; l++) {
								parsePlugins.atonement[l](event,pV.atonementQueue[k][0],pV.atonementQueue[k][3],pV.atonementQueue[k][4],pV.atonementQueue[k][5],pV.atonementQueue[k][6]);
							}
							break;
						}
					}
					if(!isFound){
						if(!rV.atonementData[ -1 ]){
							rV.atonementData[ -1 ] = [0,0];
						}
						rV.atonementData[ -1 ][0] += amount;
						rV.atonementData[ -1 ][1] += overheal;
						//console.log('Undetermined atonement',event.timestamp - currFightData.start_time);
					}
				}
			},
			"any", function(event){
				for (var k = pV.atonementQueue.length - 1; k >= 0; k--) {
					if(event.timestamp > pV.atonementQueue[k][1]){
						pV.atonementQueue.splice(k, 1);
					}
				}
			},
		],	
	},
	{	//Schism
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(214621,event,spellID); },
		],	
	},
	{	//Smite
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(585,event,spellID); },
		],	
	},
	{	//Power Word: Solace
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(129250,event,spellID); },
		],	
	},
	{	//Shadow Word: Pain
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(589,event,spellID); },
		],	
	},
	{	//Purge the Wicked
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(204197,event,spellID);uV.AtonementDamageEvent(204213,event,spellID); },
		],	
	},
	{	//Penance
		parse: [
			"damage", function(event,spellID){ uV.AtonementDamageEvent(47666,event,spellID); },
		],	
	},
	{	//Shadowfiend
		init: function() {
			pV.atonementShadowfiend = {};
		},
		parse: [
			"damage", function(event,spellID){ 
				if(event.sourceID && pV.atonementShadowfiend[event.sourceID]){
					uV.AtonementDamageEvent(34433,event,true);
				}
			},
			"any", function(event){ 
				if(event.type == "summon" && actors[event.sourceID] && (event.ability.guid == 34433 || event.ability.guid == 254224 || event.ability.guid == 254232 || event.ability.guid == 132603)){
					pV.atonementShadowfiend[ event.targetID ] = true;
				}
			},
		],	
	},
	{	//Mindbender
		init: function() {
			pV.atonementMindbender = {};
		},
		parse: [
			"damage", function(event,spellID){ 
				if(event.sourceID && pV.atonementMindbender[event.sourceID]){
					uV.AtonementDamageEvent(123040,event,true);
				}
			},
			"any", function(event){ 
				if(event.type == "summon" && actors[event.sourceID] && (event.ability.guid == 123040 || event.ability.guid == 200174)){
					pV.atonementMindbender[ event.targetID ] = true;
				}
			},
		],	
	},
	{	//Halo
		init: function() {
			pV.atonementHaloLast = 0;
		},
		parse: [
			"damage", function(event,spellID){ 
				if(pV.atonementHaloLast < event.timestamp && spellID == 120696){
					pV.atonementHaloLast = event.timestamp + 8000;
					uV.AtonementDamageEvent(120696,event,true);
				}
			},
		],	
	},
	{	//Divine Star
		init: function() {
			pV.atonementDivineStarLast = 0;
		},
		parse: [
			"damage", function(event,spellID){ 
				if(pV.atonementDivineStarLast < event.timestamp && spellID == 122128){
					pV.atonementDivineStarLast = event.timestamp + 8000;
					uV.AtonementDamageEvent(122128,event,true);
				}
			},
		],	
	},
	{	//Holy Nova
		init: function() {
			pV.atonementHolyNovaLast = 0;
		},
		parse: [
			"damage", function(event,spellID){ 
				if(pV.atonementHolyNovaLast < event.timestamp && spellID == 132157){
					pV.atonementHaloLast = event.timestamp + 750;
					uV.AtonementDamageEvent(132157,event,true);
				}
			},
		],	
	},



	{	//Atonement heal events list
		init: function() {
			rV.atonementHealEvents = [];
			rV.atonementHealCasts = [];
			rV.atonementHealBuffs = [];

			pV.atonementEventsUnsorted = {};
			pV.atonementEventsCastToHealSpells = {
				585: 585,
				34433: 34433,
				123040: 123040,
				120517: 120696,
				214621: 214621,
				129250: 129250,
				589: 589,
				47540: 47666,
				281265: 132157,
			};
			pV.atonementEventsCastToHealSpellsIgonreTarget = {
				34433: true,
				123040: true,
				120696: true,
				132157: true,
				122128: true,
			};
			pV.atonementEventsCastTargets = {};
			pV.atonementEventsCastUnsorted = {};
			pV.atonementEventsCastCounter = 0;
			pV.atonementEventsSchismUp = {};

			pV.atonementEventsCastToAttBuff = {
				17: true,
				186263: true,
				194509: true,
			};
			pV.atonementEventsBuffsToTable = {};

			uV.AtonementDamageEventSub1 = function(spellID,damageEvent,isTick,damageEventUID){
				pV.atonementEventsUnsorted[ damageEventUID ] = {
					spell: spellID,
					isTick: isTick,
					isSchismUp: pV.atonementEventsSchismUp[damageEvent.targetID],
					damage: damageEvent.amount,
					targets: 0,
					amount: 0,
					overheal: 0,
					time: damageEvent.timestamp,
					uid: damageEventUID,
				};
				if(pV.atonementEventsCastTargets[spellID] && pV.atonementEventsCastTargets[spellID][damageEvent.targetID]) 
					pV.atonementEventsCastTargets[spellID][damageEvent.targetID].push(damageEventUID);
				if(pV.atonementEventsCastToHealSpellsIgonreTarget[spellID] && pV.atonementEventsCastTargets[spellID] && pV.atonementEventsCastTargets[spellID][-1])
					pV.atonementEventsCastTargets[spellID][-1].push(damageEventUID);
			};
			uV.AtonementDamageEventSub2 = function(table,targetID){
				pV.atonementEventsCastUnsorted[ table[0] ] = {
					spell: table[1].ability.guid,
					damage: 0,
					amount: 0,
					overheal: 0,
					count: 0,
					time: table[1].timestamp,
					uid: table[0],
					targetID: targetID,				
				};
				for (var k = 2, len = table.length; k < len; k++) {
					pV.atonementEventsCastUnsorted[ table[0] ].damage += pV.atonementEventsUnsorted[ table[k] ].damage;
					pV.atonementEventsCastUnsorted[ table[0] ].amount += pV.atonementEventsUnsorted[ table[k] ].amount;
					pV.atonementEventsCastUnsorted[ table[0] ].overheal += pV.atonementEventsUnsorted[ table[k] ].overheal;
					pV.atonementEventsCastUnsorted[ table[0] ].count += pV.atonementEventsUnsorted[ table[k] ].targets;
				};
			};
		},
		parse: [
			"atonement", function(event,spellID,targetID,isTick,damageEvent,damageEventUID){ 
				if(pV.atonementEventsUnsorted[ damageEventUID ]){
					pV.atonementEventsUnsorted[ damageEventUID ].targets ++;
					pV.atonementEventsUnsorted[ damageEventUID ].amount += event.amount;
					pV.atonementEventsUnsorted[ damageEventUID ].overheal += event.overheal || 0;
				};
				if(typeof pV.atonementEventsBuffsToTable[event.targetID] !== 'undefined'){
					var line = rV.atonementHealBuffs[ pV.atonementEventsBuffsToTable[event.targetID] ];
					line.amount += event.amount;
					line.overheal += event.overheal || 0;
					line.bySpell[spellID] = (line.bySpell[spellID] || 0) + event.amount;
				}
			},
			"cast", function(event,spellID){ 
				if(pV.atonementEventsCastToHealSpells[ spellID ]){
					spellID = pV.atonementEventsCastToHealSpells[ spellID ];
					if(event.targetID || pV.atonementEventsCastToHealSpellsIgonreTarget[spellID]){
						if(!pV.atonementEventsCastTargets[spellID]) pV.atonementEventsCastTargets[spellID] = {};
						var targetID = pV.atonementEventsCastToHealSpellsIgonreTarget[spellID] ? -1 : event.targetID;
	
						if(pV.atonementEventsCastTargets[spellID][targetID]) uV.AtonementDamageEventSub2(pV.atonementEventsCastTargets[spellID][targetID],targetID);
						pV.atonementEventsCastTargets[spellID][targetID] = [++pV.atonementEventsCastCounter,event];
					}
				};
				if(pV.atonementEventsCastToAttBuff[spellID]){
					pV.atonementEventsLastApplicSpell = spellID;
				}
			},
			"applybuffany", function(event,spellID){ 
				if(spellID == 214621 && actors[event.sourceID]) pV.atonementEventsSchismUp[event.targetID] = true;
			},
			"removebuffany", function(event,spellID){ 
				if(spellID == 214621 && actors[event.sourceID]) delete pV.atonementEventsSchismUp[event.targetID];
				else if(spellID == 194384 && actors[event.sourceID]) {
					if(typeof pV.atonementEventsBuffsToTable[event.targetID] !== 'undefined') rV.atonementHealBuffs[ pV.atonementEventsBuffsToTable[event.targetID] ].fade = event.timestamp;
					delete pV.atonementEventsBuffsToTable[event.targetID];
				}
			},
			"any", function(event){
				if((event.type == "refreshbuff" || event.type == "applybuff") && event.ability.guid == 194384 && actors[event.sourceID]) {
					if(typeof pV.atonementEventsBuffsToTable[event.targetID] !== 'undefined') rV.atonementHealBuffs[ pV.atonementEventsBuffsToTable[event.targetID] ].fade = event.timestamp;

					rV.atonementHealBuffs.push({
						spell: pV.atonementEventsLastApplicSpell,
						amount: 0,
						overheal: 0,
						time: event.timestamp,
						targetID: event.targetID,
						bySpell: {},
					});
					pV.atonementEventsBuffsToTable[event.targetID] = rV.atonementHealBuffs.length - 1;
				};
			},
		],
		afterParse: function() {
			Object.keys(pV.atonementEventsCastTargets).forEach(function (spellID) {
				Object.keys(pV.atonementEventsCastTargets[spellID]).forEach(function (targetID) {
					uV.AtonementDamageEventSub2(pV.atonementEventsCastTargets[spellID][targetID],targetID);
				});
			});
			
			var sortTable = [];
			Object.keys(pV.atonementEventsUnsorted).forEach(function (damageEventUID) {
				sortTable.push([ damageEventUID,pV.atonementEventsUnsorted[ damageEventUID ] ]);
			});
			sortTable.sort(function(a,b){ return b - a });
			for (var k = 0, len = sortTable.length; k < len; k++) {
				rV.atonementHealEvents.push(sortTable[k][1]);
			};

			var sortTable2 = [];
			Object.keys(pV.atonementEventsCastUnsorted).forEach(function (UID) {
				sortTable2.push([ UID,pV.atonementEventsCastUnsorted[ UID ] ]);
			});
			sortTable2.sort(function(a,b){ return b - a });
			for (var k = 0, len = sortTable2.length; k < len; k++) {
				rV.atonementHealCasts.push(sortTable2[k][1]);
			};
		},	
	},
];

var ITEMS_256 = [
	{	//Torrent of Elements Enchant
		init: function() {
			rV.TorrentOfElementsAmount = 0;
			pV.TorrentOfElementsActive = false;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(uV.spellIsAtonement[spellID] && pV.TorrentOfElementsActive){
					rV.TorrentOfElementsAmount += Math.max((amount + overheal) * (1 - 1 / 1.1) - overheal,0)
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 267685) {
					pV.TorrentOfElementsActive = false;
				}
			},	
			"applybuff", function(event,spellID){
				if(spellID == 267685) {
					pV.TorrentOfElementsActive = true;
				}
			},				
		],
		obj: {
			type: "spell",
			name: "Torrent of Elements",
			quality: 10,
			id: 267685,
			gear: "TorrentOfElementsAmount",
			icon: "ability_shaman_echooftheelements.jpg",
			gearFunc: function() { return rV.TorrentOfElementsAmount > 0 },
		},
	},
	{	//Leyshock's Grand Compilation
		init: function() {
			rV.leyshockAmount = 0;
		},
		parse: [
			"gear", function(itemData,itemID){
				if(itemID == 163937) {
					var buffStat = ScaleItemSpell(163937,itemData.itemLevel);
					statsBuffs.haste[281792] = buffStat;
					statsBuffs.mastery[281794] = buffStat;
					statsBuffs.crit[281791] = buffStat;
					statsBuffs.vers[281795] = buffStat;
				}
			}
		],
		afterParse: function() {
			if(rV.buffs.haste[281792]) rV.leyshockAmount += rV.buffs.haste[281792];
			if(rV.buffs.mastery[281794]) rV.leyshockAmount += rV.buffs.mastery[281794];
			if(rV.buffs.crit[281791]) rV.leyshockAmount += rV.buffs.crit[281791];
			if(rV.buffs.vers[281795]) rV.leyshockAmount += rV.buffs.vers[281795];
		},
		obj: {
			type: "item",
			name: "Leyshock's Grand Compilation",
			quality: 4,
			id: 163937,
			gear: "leyshockAmount",
		},
	},
	{	//Twitching Tentacle of Xalzaix [uldir mytrax trink]
		init: function() { rV.xalzaixAmount = 0; },
		afterParse: function() { if(rV.buffs.int[278156]) rV.xalzaixAmount += rV.buffs.int[278156]; },
		obj: { type: "item", name: "Twitching Tentacle of Xalzaix", quality: 4, id: 160656, gear: "xalzaixAmount", },
	},	
	{	//Dread Gladiator's Insignia
		init: function() { rV.item161676Amount = 0;},
		afterParse: function() { if(rV.buffs.int[277181]) rV.item161676Amount += rV.buffs.int[277181]; },
		obj: { type: "item", name: "Dread Gladiator's Insignia", quality: 4, id: 161676, gear: "item161676Amount", },
	},
	{	//Ignition Mage's Fuse
		init: function() { rV.ignitionMageAmount = 0; },
		afterParse: function() { if(rV.buffs.haste[271115]) rV.ignitionMageAmount += rV.buffs.haste[271115]; },
		obj: { type: "item", name: "Ignition Mage's Fuse", quality: 4, id: 159615, gear: "ignitionMageAmount", },
	},
	{	//Inoculating Extract
		init: function() { rV.inoculatingExtractAmount = 0; },
		afterParse: function() { if(healingData[278088]) rV.inoculatingExtractAmount += healingData[278088][0];	},
		obj: { type: "item", name: "Inoculating Extract", quality: 4, id: 160649, gear: "inoculatingExtractAmount", },
	},
	{	//Dread Gladiator's Medallion
		init: function() { rV.item161674Amount = 0;},
		afterParse: function() { if(rV.buffs.vers[277179]) rV.item161674Amount += rV.buffs.vers[277179]; },
		obj: { type: "item", name: "Dread Gladiator's Medallion", quality: 4, id: 161674, gear: "item161674Amount", },
	},	
	{	//Fangs of Intertwined Essence
		init: function() {
			rV.fangsTrinkAmount = 0;
			rV.fangsTrinkMana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 271058) rV.fangsTrinkMana += event.resourceChange;
			},
		],
		afterParse: function() {
			rV.fangsTrinkAmount = rV.fangsTrinkMana / rV.manaUsage * rV.healFromMana;
		},
		obj: {
			type: "item",
			name: "Fangs of Intertwined Essence",
			quality: 4,
			id: 158368,
			gear: "fangsTrinkAmount",
			gearAdditionalText: function() { return "Mana gain: "+NumberToFormattedNumber(rV.fangsTrinkMana,2); },
		},
	},	

	{parse:["gear", function(itemData,itemID){if(itemID == 159620) statsBuffs.crit[271071] = ScaleItemSpell(159620,itemData.itemLevel);}]}, //Conch of Dark Whispers
	{parse:["gear", function(itemData,itemID){if(itemID == 158371) statsBuffs.haste[281724] = ScaleItemSpell(158371,itemData.itemLevel);}]}, //Seabreeze
	{parse:["gear", function(itemData,itemID){if(itemID == 159615) statsBuffs.haste[271115] = ScaleItemSpell(159615,itemData.itemLevel);}]}, //Ignition Mage's Fuse
	{parse:["gear", function(itemData,itemID){if(itemID == 159630) statsBuffs.int[268998] = ScaleItemSpell(159630,itemData.itemLevel);}]}, //Balefire Branch	
	{parse:["gear", function(itemData,itemID){if(itemID == 161461) statsBuffs.vers[278359] = ScaleItemSpell(161461,itemData.itemLevel);}]}, //Doom's Hatred
	{parse:["gear", function(itemData,itemID){if(itemID == 161377) statsBuffs.haste[278383] = ScaleItemSpell(161377,itemData.itemLevel);}]}, //Azurethos' Singed Plumage
	{parse:["gear", function(itemData,itemID){if(itemID == 161380) statsBuffs.int[278862] = ScaleItemSpell(161380,itemData.itemLevel);}]}, //Drust-Runed Icicle	
	{parse:["gear", function(itemData,itemID){if(itemID == 161411) statsBuffs.crit[278227] = ScaleItemSpell(161411,itemData.itemLevel);}]}, //T'zane's Barkspines
	{parse:["gear", function(itemData,itemID){if(itemID == 160656) statsBuffs.int[278156] = ScaleItemSpell(160656,itemData.itemLevel);}]}, //Twitching Tentacle of Xalzaix
	{parse:["gear", function(itemData,itemID){if(itemID == 161902) statsBuffs.int[277185] = ScaleItemSpell(161902,itemData.itemLevel);}]}, //Dread Gladiator's Badge
	{parse:["gear", function(itemData,itemID){if(itemID == 161676) statsBuffs.int[277181] = ScaleItemSpell(161676,itemData.itemLevel);}]}, //Dread Gladiator's Insignia
	{parse:["gear", function(itemData,itemID){if(itemID == 161674) statsBuffs.vers[277179] = ScaleItemSpell(161674,itemData.itemLevel);}]}, //Dread Gladiator's Medallion
];


var TRAITS_256 = [
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280577]) statsBuffs.crit[280780] = ScaleStatRanks(280577,cV.traitBySpell[280577].rank,1);}]}, //Glory in Battle	
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280577]) statsBuffs.haste[280780] = ScaleStatRanks(280577,cV.traitBySpell[280577].rank,2);}]}, //Glory in Battle	
	{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.haste[268954] = ScaleStatRanks(263984,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
	{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.mastery[268955] = ScaleStatRanks(263984,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
	{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.crit[268953] = ScaleStatRanks(263984,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
	{parse:["combantantInfo", function(){if(cV.traitBySpell[263984]) statsBuffs.vers[268956] = ScaleStatRanks(263984,cV.traitBySpell[263984].rank);}]}, //Elemental Whirl
	{parse:["combantantInfo", function(){if(cV.traitBySpell[267880]) statsBuffs.haste[269085] = ScaleStatRanks(267880,cV.traitBySpell[267880].rank)*0.6;}]}, //Woundbinder
	{parse:["combantantInfo", function(){if(cV.traitBySpell[267892]) statsBuffs.mastery[272090] = ScaleStatRanks(267892,cV.traitBySpell[267892].rank);}]}, //Synergistic Growth
	{parse:["combantantInfo", function(){if(cV.traitBySpell[279926]) statsBuffs.int[279928] = ScaleStatRanks(279926,cV.traitBySpell[279926].rank);}]}, //Earthlink
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280407]) statsBuffs.haste[280409] = ScaleStatRanks(280407,cV.traitBySpell[280407].rank);}]}, //Blood Rite
	{parse:["combantantInfo", function(){if(cV.traitBySpell[273823]) statsBuffs.crit[280204] = ScaleStatRanks(273823,cV.traitBySpell[273823].rank);}]}, //Blightborne Infusion
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280410]) statsBuffs.mastery[280412] = ScaleStatRanks(280410,cV.traitBySpell[280410].rank);}]}, //Incite the Pack
	{parse:["combantantInfo", function(){if(cV.traitBySpell[273829]) statsBuffs.int[273842] = ScaleStatRanks(273829,cV.traitBySpell[273829].rank,1);}]}, //Secrets of the Deep
	{parse:["combantantInfo", function(){if(cV.traitBySpell[273829]) statsBuffs.int[273843] = ScaleStatRanks(273829,cV.traitBySpell[273829].rank,2);}]}, //Secrets of the Deep
	{parse:["combantantInfo", function(){if(cV.traitBySpell[266180]) statsBuffs.haste[271711] = ScaleStatRanks(266180,cV.traitBySpell[266180].rank);}]}, //Overwhelming Power
	{parse:["combantantInfo", function(){if(cV.traitBySpell[281841]) statsBuffs.mastery[281843] = ScaleStatRanks(281841,cV.traitBySpell[281841].rank);}]}, //Tradewinds
	{parse:["combantantInfo", function(){if(cV.traitBySpell[273682]) statsBuffs.haste[273714] = ScaleStatRanks(273682,cV.traitBySpell[273682].rank);}]}, //Meticulous Scheming
	{parse:["combantantInfo", function(){if(cV.traitBySpell[281514]) statsBuffs.int[281517] = ScaleStatRanks(281514,cV.traitBySpell[281514].rank);}]}, //Unstable Catalyst
	{parse:["combantantInfo", function(){if(cV.traitBySpell[279899]) statsBuffs.crit[279902] = ScaleStatRanks(279899,cV.traitBySpell[279899].rank);}]}, //Unstable Flames
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280555]) statsBuffs.int[280709] = ScaleStatRanks(280555,cV.traitBySpell[280555].rank);}]}, //Archive of the Titans
	{parse:["combantantInfo", function(){if(cV.traitBySpell[277666]) statsBuffs.mastery[277942] = ScaleStatRanks(277666,cV.traitBySpell[277666].rank);}]}, //Ancestral Resonance
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280579]) statsBuffs.mastery[280788] = ScaleStatRanks(280579,cV.traitBySpell[280579].rank);}]}, //Retaliatory Fury
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280579]) statsBuffs.mastery[280787] = ScaleStatRanks(280579,cV.traitBySpell[280579].rank);}]}, //Retaliatory Fury
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280429]) statsBuffs.crit[280433] = ScaleStatRanks(280429,cV.traitBySpell[280429].rank);}]}, //Swirling Sands
	{parse:["combantantInfo", function(){if(cV.traitBySpell[280710]) {
		statsBuffs.crit[280713] = ScaleStatRanks(280710,cV.traitBySpell[280710].rank);
		statsBuffs.vers[280713] = ScaleStatRanks(280710,cV.traitBySpell[280710].rank);
		statsBuffs.haste[280713] = ScaleStatRanks(280710,cV.traitBySpell[280710].rank);
		statsBuffs.mastery[280713] = ScaleStatRanks(280710,cV.traitBySpell[280710].rank);
	}}]}, //Champion of Azeroth
	//{parse:["combantantInfo", function(){if(cV.traitBySpell[279926]) statsBuffs.crit[280433] = ScaleStatRanks(279926,cV.traitBySpell[279926].rank);}]}, //Earthlink

	
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,280410,280413,"mastery",2);  }]}, //Incite the Pack
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,281841,281844,"mastery",2);  }]}, //Tradewinds
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,280581,280830,"int");  }]}, //Collective Will

	{	//Penance
		init: function() {
			rV.traits[164] = 0;
			pV.azeritePenancePredictionPWS = 0;
			pV.azeritePenancePredictionSmite = 0;
			pV.azeritePenancePredictionLast = 0;
			pV.azeritePenanceSmite = 0;
			pV.azeritePenanceSmiteValue = 0;
			pV.azeritePenanceSmiteLastMod = 0;
			pV.azeritePenanceSmiteAuraStatus = false;
			pV.azeritePenancePWS = 0;
			pV.azeritePenancePWSValue = 0;
			pV.azeritePenancePWSAuraStatus = false;
			pV.azeritePenanceRaptureStatus = false;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 17 && pV.azeritePenancePredictionType == 2){
					pV.azeritePenancePredictionType = 0;
					pV.azeritePenancePredictionPWS ++; 
					if(pV.azeritePenanceRaptureStatus) pV.azeritePenancePredictionPWS += 2; 
				} else if(spellID == 585 && pV.azeritePenancePredictionType == 1){
					pV.azeritePenancePredictionType = 0;
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						pV.azeritePenancePredictionSmite ++; 
					});
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 47750){
					pV.azeritePenancePredictionLast = event.timestamp;
					pV.azeritePenancePredictionType = 1;
				}
			},
			"damage", function(event,spellID){
				if(spellID == 47666){
					pV.azeritePenancePredictionLast = event.timestamp;
					pV.azeritePenancePredictionType = 2;
				} else if(spellID == 585){
					if(event.amount > 0 && pV.azeritePenanceSmiteAuraStatus){
						var value = pV.azeritePenanceSmiteValue * 1.05;
						if(event.hitType == 2) value *= 2;
						value *= (1 / ((pV.versNow / STATS.vers) / 100 + 1));
						pV.azeritePenanceSmiteLastMod = Math.min(value / event.amount,1);
					} else
						pV.azeritePenanceSmiteLastMod = 0;
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 273312) pV.azeritePenanceSmiteAuraStatus = true;
				else if(spellID == 273310) pV.azeritePenancePWSAuraStatus = true;
				else if(spellID == 47536) pV.azeritePenanceRaptureStatus = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 273312) pV.azeritePenanceSmiteAuraStatus = false;
				else if(spellID == 273310) pV.azeritePenancePWSAuraStatus = false;
				else if(spellID == 47536) pV.azeritePenanceRaptureStatus = false;
			},
			"applybuffany", function(event,spellID){
				if(spellID == 17 && actors[event.sourceID]) {
					if(event.absorb && event.absorb > 0 && pV.azeritePenancePWSAuraStatus){
						var value = pV.azeritePenancePWSValue;
						if(pV.AtonementTarget[event.targetID]) value *= (1 / ((pV.masteryNow / STATS.mastery) / 100 + 1));
						value *= (1 / ((pV.versNow / STATS.vers) / 100 + 1));
						if(pV.azeritePenanceRaptureStatus) value *= 3;
						pV.azeritePenancePWS += Math.min(value,event.absorb);
					}				
				}
			},			
			"atonement", function(event,spellID){
				if(spellID == 585){
					pV.azeritePenanceSmite += event.amount * pV.azeritePenanceSmiteLastMod;
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(273307);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeritePenanceSmiteValue += ScaleTrait(273307,trait.rank[k],1) * 1.5;
						pV.azeritePenancePWSValue += ScaleTrait(273307,trait.rank[k],2);
					}
				}
			},			
			
		],
		afterParse: function() {
			rV.traits[164] += pV.azeritePenanceSmite;
			rV.traits[164] += pV.azeritePenancePWS;
		},
		obj: {
			name: "Weal and Woe",
			id: 164,
			spellID: 273307,
			icon: "spell_holy_penance.jpg",
			tier: 1,
			additionalText: function(){ return "Smite: "+NumberToFormattedNumber(pV.azeritePenanceSmite,1)+"<br>PW:S: "+NumberToFormattedNumber(pV.azeritePenancePWS,1); },
		},
	},
	{	//Pain Suppression
		init: function() {
			rV.traits[113] = 0;
			pV.azeritePainSuppressionPrediction = 0;
			pV.azeritePainSuppressionPredictionMastery = 0;
			pV.azeritePainSuppressionPredictionAtt = 0;
			pV.azeritePainSuppressionPredictionLast = 0;
			pV.azeritePainSuppressionAtt = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 33206){
					if(pV.AtonementTarget[event.targetID])
						pV.azeritePainSuppressionPredictionMastery ++;
					else
						pV.azeritePainSuppressionPrediction ++;
					pV.azeritePainSuppressionPredictionLast = event.timestamp + 15000;
					pV.azeritePainSuppressionPredictionTarget = event.targetID;
				} else if (spellID == 246287 && event.timestamp < pV.azeritePainSuppressionPredictionLast){
					pV.azeritePainSuppressionPredictionLast += 6000;
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if((spellID == 81751 || spellID == 94472) && event.timestamp < pV.azeritePainSuppressionPredictionLast &&
					!pV.AtonementTarget[pV.azeritePainSuppressionPredictionTarget] && (!pV.azeritePainSuppressionPredictionLastAtt || event.timestamp > pV.azeritePainSuppressionPredictionLastAtt)
				) {
					pV.azeritePainSuppressionPredictionAtt += amount + overheal;
					pV.azeritePainSuppressionPredictionLastAtt = event.timestamp + 200;
				}
				if(uV.spellIsAtonement[spellID] && event.timestamp < pV.azeritePainSuppressionPredictionLast){
					rV.traits[113] += amount;
				}
			},
		],
		afterParse: function() {
			pV.azeritePainSuppressionAtt = rV.traits[113];
			if(healingData[272776])
				rV.traits[113] += healingData[272776][0];
		},
		obj: {
			name: "Moment of Repose",
			id: 113,
			spellID: 272775,
			icon: "spell_holy_painsupression.jpg",
			tier: 1,
			additionalText: function(){ return "Atonement: "+NumberToFormattedNumber(pV.azeritePainSuppressionAtt,1); },
		},
	},
	{	//Power Word: Radiance 
		init: function() {
			rV.traits[399] = 0;
			pV.azeritePWRPrediction = 0;
			pV.azeritePWRPredictionAtt = 0;
			pV.azeritePWRPredictionTargets = {};
			pV.azeritePWRPredictionLast = 0;
			pV.azeritePWRValue = 0;
			pV.azeritePWRAmountBonus = 0;
			pV.azeritePWRAmountAtt = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if (spellID == 246287){
					Object.keys(pV.azeritePWRPredictionTargets).forEach(function (targetID) {
						if(pV.azeritePWRPredictionTargets[targetID] > event.timestamp){
							pV.azeritePWRPredictionTargets[targetID] += 6000;
						}
					});
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 194509){
					var trait = pV.azeritePWRValue * 1.4;
					if(event.hitType == 2) trait *= 2;
					trait *= (1 / ((pV.versNow / STATS.vers) / 100 + 1));
					if(pV.AtonementTarget[event.targetID]){
						trait *= (1 / ((pV.masteryNow / STATS.mastery) / 100 + 1));
					}
					
					rV.traits[399] += Math.min(trait,amount);
					pV.azeritePWRAmountBonus += Math.min(trait,amount);
				
					pV.azeritePWRPrediction ++;
					pV.azeritePWRPredictionTargets[event.targetID] = event.timestamp + 10500;
				} else if(uV.spellIsAtonement[spellID]) {
					if(event.timestamp > pV.azeritePWRPredictionLast && !GetTraitBySpell(278643)){
						pV.azeritePWRPredictionLast = event.timestamp + 100;
						Object.keys(pV.azeritePWRPredictionTargets).forEach(function (targetID) {
							//console.log(amount + overheal,pV.azeritePWRPredictionTargets[targetID] - event.timestamp,event.timestamp-currFightData.start_time,actorsData[targetID].name);
							if((pV.azeritePWRPredictionTargets[targetID] - event.timestamp) <= 1500 && (pV.azeritePWRPredictionTargets[targetID] - event.timestamp) >= 0){
								pV.azeritePWRPredictionAtt += (amount + overheal) * 0.65;
							}
						});
					}
					
					if(GetTraitBySpell(278643) && pV.azeritePWRPredictionTargets[event.targetID] && (pV.azeritePWRPredictionTargets[event.targetID] - event.timestamp) <= 1500 && (pV.azeritePWRPredictionTargets[event.targetID] - event.timestamp) >= 0 && pV.AtonementTarget[event.targetID]) {
						rV.traits[399] += amount;
						pV.azeritePWRAmountAtt += amount;
					}
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(278643);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeritePWRValue += ScaleTrait(278643,trait.rank[k]);
					}
				}
			},
		],
		obj: {
			name: "Enduring",
			id: 399,
			spellID: 278643,
			icon: "spell_priest_power-word.jpg",
			tier: 1,
			additionalText: function(){ return "Bonus: "+NumberToFormattedNumber(pV.azeritePWRAmountBonus,1)+(GetTraitBySpell(278643).rank.length > 1 ? " (per item: "+NumberToFormattedNumber(pV.azeritePWRAmountBonus/GetTraitBySpell(278643).rank.length,1)+")" : "")+"<br>Atonement: "+NumberToFormattedNumber(pV.azeritePWRAmountAtt,1); },
			disablePerItem: true,
		},
	},
	{	//Shadow Mend
		init: function() {
			rV.traits[227] = 0;
			pV.azeriteShadowMendPrediction = 0;
			pV.azeriteShadowMendPredictionCount = 0;
			pV.azeriteShadowMendAtt = 0;
			pV.azeriteShadowMendAttTargetsStart = {};
			pV.azeriteShadowMendAttTargetsEnd = {};
			pV.azeriteShadowMendAttPred = 0;
			pV.azeriteShadowMendAttPredLast = 0;
			pV.azeriteShadowMendStack = 0;
			pV.azeriteShadowMendValue = 0;
			pV.azeriteShadowMendTraitActive = false;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 186263){
					pV.azeriteShadowMendPrediction += pV.azeriteShadowMendPredictionCount;
					pV.azeriteShadowMendPredictionCount = 0;

					pV.azeriteShadowMendAttTargetsStart[event.targetID] = event.timestamp + 15000;
					pV.azeriteShadowMendAttTargetsEnd[event.targetID] = event.timestamp + 18000;
				}
			},
			"damage", function(event,spellID){
				if(spellID == 589 || spellID == 204197 || spellID == 204213){
					pV.azeriteShadowMendPredictionCount = Math.min(pV.azeriteShadowMendPredictionCount + 1,30);
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 275544)  pV.azeriteShadowMendStack = 1;
			},
			"applybuffstack", function(event,spellID){
				if(spellID == 275544)  pV.azeriteShadowMendStack = event.stack;
			},
			"removebuff", function(event,spellID){
				if(spellID == 275544)  pV.azeriteShadowMendStack = 0;
			},
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 186263){
					var trait = pV.azeriteShadowMendValue * 1.4 * pV.azeriteShadowMendStack;
					if(event.hitType == 2) trait *= 2;
					trait *= (1 / ((pV.versNow / STATS.vers) / 100 + 1));
					if(pV.AtonementTarget[event.targetID]){
						trait *= (1 / ((pV.masteryNow / STATS.mastery) / 100 + 1));
					}
					rV.traits[227] += Math.min(trait,amount);
				}
				if(uV.spellIsAtonement[spellID]){
					if(pV.azeriteShadowMendTraitActive){
						if(pV.azeriteShadowMendAttTargetsStart[event.targetID] && event.timestamp >= pV.azeriteShadowMendAttTargetsStart[event.targetID] && event.timestamp < pV.azeriteShadowMendAttTargetsEnd[event.targetID]){
							pV.azeriteShadowMendAtt += amount;
						}
					} else {
						if(event.timestamp - pV.azeriteShadowMendAttPredLast > 100){
							pV.azeriteShadowMendAttPredLast = event.timestamp;
							Object.keys(pV.azeriteShadowMendAttTargetsStart).forEach(function (targetID) {
								if(event.timestamp >= pV.azeriteShadowMendAttTargetsStart[targetID] && event.timestamp < pV.azeriteShadowMendAttTargetsEnd[targetID]){
									pV.azeriteShadowMendAttPred += amount + overheal;
								}
							});
						}
					}
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(275541);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeriteShadowMendValue += ScaleTrait(275541,trait.rank[k]);
					}
					pV.azeriteShadowMendTraitActive = true;
				}
			},			
		],
		obj: {
			name: "Depth of the Shadows",
			id: 227,
			spellID: 275541,
			icon: "spell_shadow_shadowmend.jpg",
			tier: 1,
		},
	},
	{	//Penance Damage
		init: function() {
			rV.traits[398] = 0;
			pV.azeritePenanceDamagePrediction = 0;
			pV.azeritePenanceDamagePredictionSWP = 0;
			pV.azeritePenanceDamagePredictionSWPHeal = 0;
			pV.azeritePenanceDamagePredictionSWPCast = 0;
			pV.azeritePenanceDamagePredictionSWPTargets = {};
			pV.azeritePenanceDamagePredictionSWPTime = 0;
			pV.azeritePenanceDamageLastMod = 0;
			pV.azeritePenanceDamageValue = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if(spellID == 47666){
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						pV.azeritePenanceDamagePrediction++;
					});
					pV.azeritePenanceDamagePredictionSWP ++;
					
					if(event.amount > 0){
						var value = pV.azeritePenanceDamageValue * 1.05;
						if(event.hitType == 2) value *= 2;
						value *= (1 / (((pV.versNow || cV.versatility) / STATS.vers) / 100 + 1));
						pV.azeritePenanceDamageLastMod = Math.min(value / event.amount,0.2);
					} else
						pV.azeritePenanceDamageLastMod = 0;
				}
			},
			"cast", function(event,spellID){
				if(spellID == 589 || spellID == 204197){
					pV.azeritePenanceDamagePredictionSWPCast ++;
				}
			},
			"applybuffany", function(event,spellID){
				if((spellID == 589 || spellID == 204213) && actors[event.sourceID]){
					pV.azeritePenanceDamagePredictionSWPTargets[event.targetID] = event.timestamp;
				}
			},
			"removebuffany", function(event,spellID){
				if((spellID == 589 || spellID == 204213) && actors[event.sourceID] && pV.azeritePenanceDamagePredictionSWPTargets[event.targetID]){
					pV.azeritePenanceDamagePredictionSWPTime += event.timestamp - pV.azeritePenanceDamagePredictionSWPTargets[event.targetID];
				}
			},
			"atonement", function(event,spellID){
				if(spellID == 47666){
					rV.traits[398] += event.amount * pV.azeritePenanceDamageLastMod;
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(278629);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeritePenanceDamageValue += ScaleTrait(278629,trait.rank[k]);
					}
				}
			},
		],
		afterParse: function() {
			pV.azeritePenanceDamageFromDamage = rV.traits[398];
			if(pV.azeritePenanceDamagePredictionSWPCast > 0){
				var a = pV.azeritePenanceDamagePredictionSWP / 16;
				pV.azeritePenanceDamagePredictionSWPHeal = pV.healFromHaste / pV.savedTimeTotal * cV.gcd * a;
				rV.traits[398] += pV.azeritePenanceDamagePredictionSWPHeal;
			}
		},
		obj: {
			name: "Contemptuous Homily",
			id: 398,
			spellID: 278629,
			icon: "spell_shadow_painandsuffering.jpg",
			tier: 1,
			additionalText: function(){ return "Atonement: "+NumberToFormattedNumber(pV.azeritePenanceDamageFromDamage,1)+"<br>SW:P: "+NumberToFormattedNumber(pV.azeritePenanceDamagePredictionSWPHeal,1); },
		},
	},
	{	//Smite
		init: function() {
			rV.traits[397] = 0;
			pV.azeriteSmitePrediction = 0;
			pV.azeriteSmiteValue = 0;
			pV.azeriteSmiteLastMod = 0;
			pV.azeriteSmiteT = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 585){
					var count = 0;
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						count++;
					});
					if(count >= 3) {
						pV.azeriteSmitePrediction += count;
						//console.log('prediction',count * ScaleStat(375,340,360,1) * GetMasteryFactor() * (cV.versatility / STATS.vers / 100 + 1) * GetCritFactor() * 1.5 * GetDpsFactor() * 0.6,ScaleStat(375,340,360,1) * GetMasteryFactor() * (cV.versatility / STATS.vers / 100 + 1) * GetCritFactor() * 1.5 * GetDpsFactor() * 0.6);
					}
				}
			},
			"damage", function(event,spellID){
				if(spellID == 585){
					if(event.amount > 0){
						var value = pV.azeriteSmiteValue * 1.05;
						if(event.hitType == 2) value *= 2;
						value *= (1 / ((pV.versNow / STATS.vers) / 100 + 1));
						pV.azeriteSmiteLastMod = Math.min(value / event.amount,1);
					} else
						pV.azeriteSmiteLastMod = 0;
						
					var count = 0;
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						count++;
					});
					if(count < 3) {
						pV.azeriteSmiteLastMod = 0;
					}
				}
			},
			"atonement", function(event,spellID){
				if(spellID == 585){
					rV.traits[397] += event.amount * pV.azeriteSmiteLastMod;
					if(pV.azeriteSmiteLastMod > 0) {
						pV.azeriteSmiteT++;
						//console.log('real',event.amount * pV.azeriteSmiteLastMod);
					}
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(277680);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeriteSmiteValue += ScaleTrait(277680,trait.rank[k]) * 1.5;
					}
				}
			},
		],
		obj: {
			name: "Gift of Forgiveness",
			id: 397,
			spellID: 277680,
			icon: "spell_holy_holysmite.jpg",
			tier: 1,
		},
	},
	{	//Enemy-dispel
		init: function() {
			rV.traits[472] = 0;
			pV.azeriteTwistMagicPrediction = 0;
		},
		parse: [
			"dispel", function(event,spellID){
				if(spellID == 528){
					pV.azeriteTwistMagicPrediction ++;
				}
			},
		],
		obj: {
			name: "Twist Magic",
			id: 472,
			spellID: 280018,
			icon: "spell_nature_nullifydisease.jpg",
			tier: 3,
		},
	},
	{	//SWD
		init: function() {
			rV.traits[404] = 0;
			pV.azeriteSWDPrediction = 0;
			pV.azeriteSWDValue = 0;
		},
		parse: [
			"damage", function(event,spellID){
				if((spellID == 589 || spellID == 204213) && event.tick){						
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						pV.azeriteSWDPrediction++;
					});
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(278659);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeriteSWDValue += ScaleTrait(278659,trait.rank[k]);
					}
				}
			},
		],
		obj: {
			name: "Death Throes",
			id: 404,
			spellID: 278659,
			icon: "spell_shadow_haunting.jpg",
			tier: 1,
		},
	},
	{	// -PWR cd after holy nova
		init: function() {
			rV.traits[-100] = 0;
			pV.azeriteSuddenRevelationPrediction = 0;
			pV.azeriteSuddenRevelationPrediction2 = 0;
			pV.azeriteSuddenRevelationPredictionSmiteNegate = 0;
			pV.azeriteSuddenRevelationPWRCount = 0;
			pV.azeriteSuddenRevelationPWRLastProc = 0;
			pV.azeriteSuddenRevelationValue = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 194509){						
					pV.azeriteSuddenRevelationPWRCount++;
					if(pV.azeriteSuddenRevelationPWRCount % 2 == 1){
						Object.keys(pV.AtonementTarget).forEach(function (targetID) {
							pV.azeriteSuddenRevelationPrediction2 ++; 
						});
						pV.azeriteSuddenRevelationPWRLastProc = event.timestamp + 10000;
					}
				}
			},
			"atonement", function(event,spellID,targetID,isTick,damageEvent){
				if(spellID == 585 && event.timestamp < pV.azeriteSuddenRevelationPWRLastProc){
					pV.azeriteSuddenRevelationPWRLastProc = event.timestamp + 200;
					pV.azeriteSuddenRevelationPredictionSmiteNegate += event.amount * 0.66;
				}
			},
			"combantantInfo", function(event){
				var trait = GetTraitBySpell(287355);
				if(trait){
					for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
						pV.azeriteSuddenRevelationValue += ScaleTrait(287355,trait.rank[k]);
					}
				}
			},
		],
		afterParse: function() {
			pV.azeriteSuddenRevelationPrediction = pV.azeriteSuddenRevelationPWRCount / 2;
		},
		obj: {
			name: "Sudden Revelation",
			id: -100,
			spellID: 287355,
			icon: "spell_holy_holynova.jpg",
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
					if(targetHPbeforeHeal <= .5) pV.azerite35hpPrediction++;
				}
			},
		],
		obj: {
			name: "Savior",
			id: 42,
			spellID: 267883,
			icon: "achievement_guildperk_everyonesahero.jpg",
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
			"damageany", function(event,spellID){
 				if(event.targetID == currFightData.actor && event.timestamp > pV.azeriteImpassiveVisageLast){
					if(event.absorbed && event.absorbed != event.amount){
	 					pV.azeriteImpassiveVisageLast = event.timestamp + 6000;
						pV.azeriteImpassiveVisagePrediction++;
					}
				}
			},
		],
		afterParse: function() {
			if(healingData[270117])
				rV.traits[83] += healingData[270117][0];
		},
		obj: {
			name: "Impassive Visage",
			id: 83,
			spellID: 268437,
			icon: "inv_pet_inquisitoreye.jpg",
			tier: 3,
		},
	},
	{	//mastery after radiance
		init: function() {
			rV.traits[102] = 0;
			pV.azeriteSynergisticGrowthPrediction = 0;
			pV.azeriteSynergisticGrowthLast = 0;
			pV.azeriteSynergisticGrowthPrediction2 = 0;
			pV.azeriteSynergisticGrowthLast2 = 0;
			pV.azeriteSynergisticGrowthLast3 = 0;
			pV.azeriteSynergisticGrowthATargets = {};
		},
		parse: [
			"cast", function(event,spellID){
 				if(spellID == 194509 && event.timestamp > pV.azeriteSynergisticGrowthLast){
 					pV.azeriteSynergisticGrowthLast = event.timestamp + 30000;
 					pV.azeriteSynergisticGrowthLast2 = event.timestamp + 10000;
					pV.azeriteSynergisticGrowthLast3 = event.timestamp + 300;
				}
			},
			"heal", function(event,spellID){
				if(spellScaleMastery[spellID] && (event.timestamp < pV.azeriteSynergisticGrowthLast2) && pV.masteryNow && !uV.spellIsAtonement[spellID]){
					pV.azeriteSynergisticGrowthPrediction2 += pV.currHealFromMastery / pV.masteryNow;
					pV.azeriteSynergisticGrowthPrediction += pV.currHealFromMastery / pV.masteryNow;
				} else if(uV.spellIsAtonement[spellID]){
					if(pV.azeriteSynergisticGrowthATargets[event.targetID]) pV.azeriteSynergisticGrowthPrediction2 += pV.currHealFromMastery / pV.azeriteSynergisticGrowthATargets[event.targetID];
					if(pV.masteryNow) pV.azeriteSynergisticGrowthPrediction += pV.currHealFromMastery / pV.masteryNow;
				}
			},
			"applybuffany", function(event,spellID){
				if(spellID == 194384 && event.sourceID == currFightData.actor && (event.timestamp < pV.azeriteSynergisticGrowthLast2) && (event.timestamp > pV.azeriteSynergisticGrowthLast3)){
					pV.azeriteSynergisticGrowthATargets[event.targetID] = pV.masteryNow;
				}
			},
			"removebuffany", function(event,spellID){
				if(spellID == 194384 && event.sourceID == currFightData.actor){
					delete pV.azeriteSynergisticGrowthATargets[event.targetID];
				}
			},
			"any", function(event){
				if(event.type == "refreshbuff" && event.ability.guid == 194384 && event.sourceID == currFightData.actor) {
					if((event.timestamp < pV.azeriteSynergisticGrowthLast2) && (event.timestamp > pV.azeriteSynergisticGrowthLast3))
						pV.azeriteSynergisticGrowthATargets[event.targetID] = pV.masteryNow;
					else
						delete pV.azeriteSynergisticGrowthATargets[event.targetID];
				};
			},
		],
		afterParse: function() {
			if(rV.buffs.mastery[272090])
				rV.traits[102] += rV.buffs.mastery[272090];
		},
		obj: {
			name: "Synergistic Growth",
			id: 102,
			spellID: 267892,
			icon: "inv_misc_markoftheworldtree.jpg",
			tier: 2,
		},
	},
	{	//prydaz 2.0
		init: function() { rV.traits[15] = 0; },
		afterParse: function() { if(healingData[269279]) rV.traits[15] += healingData[269279][0]; },
		obj: { name: "Resounding Protection", id: 15, spellID: 263962, icon: "ability_vehicle_shellshieldgenerator_green.jpg", tier: 3, },
	},
	{	//mastery passive
		init: function() { rV.traits[18] = 0; },
		afterParse: function() {
			var trait = GetTraitBySpell(264108);
			if(trait) for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
				rV.traits[18] += ScaleTrait(264108,trait.rank[k]) * healPerStat.mastery.amount;
			}
		},
		obj: { name: "Blood Siphon", id: 18, spellID: 264108, icon: "ability_deathknight_deathsiphon2.jpg", tier: 2, },
	},
	{	//vers passive
		init: function() { rV.traits[38] = 0; },
		afterParse: function() {
			var trait = GetTraitBySpell(267879);
			if(trait) for (var k = 0, k_len = trait.rank.length; k < k_len; k++) {
				rV.traits[38] += ScaleTrait(267879,trait.rank[k]) * healPerStat.vers.amount;
			}
		},
		obj: { name: "On My Way", id: 38, spellID: 267879, icon: "inv_boots_cloth_08.jpg", tier: 2, },
	},
	{	//crit on damage, rppm
		init: function() { rV.traits[459] = 0; },
		afterParse: function() { if(rV.buffs.crit[279902]) rV.traits[459] += rV.buffs.crit[279902]; },
		obj: { name: "Unstable Flames", id: 459, spellID: 279899, icon: "inv_ember.jpg", tier: 2, },
	},
	{	//Concentrated Mending
		init: function() { rV.traits[103] = 0; },
		afterParse: function() { if(healingData[272260]) rV.traits[103] += healingData[272260][0]; },
		obj: { name: "Concentrated Mending", id: 103, spellID: 267882, icon: "inv_offhand_1h_pvpdraenors1_d_02.jpg", tier: 2, },
	},
	{	//crit buff from damage
		init: function() { rV.traits[504] = 0; },
		afterParse: function() { if(rV.buffs.int[281517]) rV.traits[504] += rV.buffs.int[281517]; },
		obj: { name: "Unstable Catalyst", id: 504, spellID: 281514, icon: "inv__azerite-debuff.jpg", tier: 1, },
	},
	{	//haste proc
		init: function() { rV.traits[480] = 0; },
		afterParse: function() { if(rV.buffs.haste[280409]) rV.traits[480] += rV.buffs.haste[280409]; },
		obj: { name: "Blood Rite", id: 480, spellID: 280407, icon: "inv_misc_volatilelife.jpg", tier: 1, },
	},
	{	//Archive of the Titans
		init: function() { rV.traits[483] = 0; },
		afterParse: function() { if(rV.buffs.int[280709]) rV.traits[483] += rV.buffs.int[280709]; },
		obj: { name: "Archive of the Titans", id: 483, spellID: 280555, icon: "inv_trinket_80_titan01b.jpg", tier: 1, },
	},
	{	//int proc
		init: function() { rV.traits[195] = 0; },
		afterParse: function() {
			if(rV.buffs.int[273842]) rV.traits[195] += rV.buffs.int[273842];
			if(rV.buffs.int[273843]) rV.traits[195] += rV.buffs.int[273843];
		},
		obj: { name: "Secrets of the Deep", id: 195, spellID: 273829, icon: "inv_misc_enchantedpearlf.jpg", tier: 1,},
	},
	{	//mastery proc
		init: function() { rV.traits[505] = 0; },
		afterParse: function() { if(rV.buffs.mastery[281843]) rV.traits[505] += rV.buffs.mastery[281843]; },
		obj: { name: "Tradewinds", id: 505, spellID: 281841, icon: "ability_skyreach_wind.jpg", tier: 1, },
	},
	{	//haste proc
		init: function() { rV.traits[19] = 0; },
		afterParse: function() { if(rV.buffs.haste[269085]) rV.traits[19] += rV.buffs.haste[269085]; },
		obj: { name: "Woundbinder", id: 19, spellID: 267880, icon: "inv_misc_emberweavebandage.jpg", tier: 2, },
	},	
	{	//Glory in Battle
		init: function() { rV.traits[486] = 0; },
		afterParse: function() {
			if(rV.buffs.haste[280780]) rV.traits[486] += rV.buffs.haste[280780];
			if(rV.buffs.crit[280780]) rV.traits[486] += rV.buffs.crit[280780];
		},
		obj: { name: "Glory in Battle", id: 486, spellID: 280577, icon: "inv_60pvp_neck1a.jpg", tier: 1, },
	},
	{	//int buff cycle
		init: function() { rV.traits[461] = 0; },
		afterParse: function() { if(rV.buffs.int[279928]) rV.traits[461] += rV.buffs.int[279928]; },
		obj: { name: "Earthlink", id: 461, spellID: 279926, icon: "inv_smallazeritefragment.jpg", tier: 2, },
	},
	{	//Retaliatory Fury
		init: function() { rV.traits[487] = 0; },
		afterParse: function() {
			if(rV.buffs.mastery[280788]) rV.traits[487] += rV.buffs.mastery[280788];
			if(rV.buffs.mastery[280787]) rV.traits[487] += rV.buffs.mastery[280787];
			if(healingData[280788]) rV.traits[487] += healingData[280788][0];
		},
		obj: { name: "Retaliatory Fury", id: 487, spellID: 280579, icon: "achievement_boss_twinorcbrutes.jpg", tier: 1,},
	},
	{	//crit tornado
		init: function() { rV.traits[196] = 0; },
		afterParse: function() { if(rV.buffs.crit[280433]) rV.traits[196] += rV.buffs.crit[280433]; },
		obj: { name: "Swirling Sands", id: 196, spellID: 280429, icon: "spell_sandstorm.jpg", tier: 1, },
	},
	{	// 4 diff stats proc buffs
		init: function() { rV.traits[21] = 0; },
		afterParse: function() {
			if(rV.buffs.haste[268954]) rV.traits[21] += rV.buffs.haste[268954];
			if(rV.buffs.crit[268953]) rV.traits[21] += rV.buffs.crit[268953];
			if(rV.buffs.mastery[268955]) rV.traits[21] += rV.buffs.mastery[268955];
			if(rV.buffs.vers[268956]) rV.traits[21] += rV.buffs.vers[268956];
		},
		obj: { name: "Elemental Whirl", id: 21, spellID: 263984, icon: "ability_skyreach_four_wind.jpg", tier: 2, },
	},
	{	//crit souls
		init: function() { rV.traits[193] = 0; },
		afterParse: function() { if(rV.buffs.crit[280204]) rV.traits[193] += rV.buffs.crit[280204]; },
		obj: { name: "Blightborne Infusion", id: 193, spellID: 273823, icon: "ability_argus_soulbombdebuffsmall.jpg", tier: 1, },
	},
	{	//haste proc
		init: function() { rV.traits[30] = 0; },
		afterParse: function() { if(rV.buffs.haste[271711]) rV.traits[30] += rV.buffs.haste[271711]; },
		obj: { name: "Overwhelming Power", id: 30, spellID: 266180, icon: "ability_vehicle_electrocharge.jpg", tier: 2, },
	},
	{	//mastery proc
		init: function() { rV.traits[481] = 0; },
		afterParse: function() { if(rV.buffs.mastery[280412]) rV.traits[481] += rV.buffs.mastery[280412]; },
		obj: { name: "Incite the Pack", id: 481, spellID: 280410, icon: "ability_hunter_pet_raptor.jpg", tier: 1, },
	},	
	{	//heal on kill
		init: function() { 
			rV.traits[44] = 0; 
			pV.azeriteVampiricSpeedPrediction = 0;

			EXTRA_QUERY.push([
				"type%20%3D%20%22death%22%20and%20target.disposition%20%3D%20%22enemy%22",	// type = "death" and target.disposition = "enemy"
				function(event) {
					pV.azeriteVampiricSpeedPrediction ++;
				}
			]);
		},
		afterParse: function() { if(healingData[269238]) rV.traits[44] += healingData[269238][0]; },
		obj: { name: "Vampiric Speed", id: 44, spellID: 268599, icon: "inv_misc_monsterfang_02.jpg", tier: 3, },
	},
	{	//mana trait
		init: function() { rV.traits[105] = 0; pV.trait105Mana = 0; },
		parse: [ "energize", function(event,spellID){ if(spellID == 272572) pV.trait105Mana += event.resourceChange; }],
		afterParse: function() { rV.traits[105] = pV.trait105Mana / rV.manaUsage * rV.healFromMana; },
		obj: { name: "Ephemeral Recovery", id: 105, spellID: 267886, icon: "inv_gizmo_manasyphon.jpg", tier: 2, },
	},
	{	//highfathers 2.0
		init: function() { rV.traits[463] = 0; },
		afterParse: function() { if(healingData[280052]) rV.traits[463] += healingData[280052][0]; },
		obj: { name: "Blessed Portents", id: 463, spellID: 267889, icon: "spell_holy_fanaticism.jpg", tier: 2, },
	},
	{	//Laser Matrix
		init: function() { rV.traits[485] = 0; },
		afterParse: function() { if(healingData[280707]) rV.traits[485] += healingData[280707][0]; },
		obj: { name: "Laser Matrix", id: 485, spellID: 280559, icon: "spell_nature_groundingtotem.jpg", tier: 1, },
	},
];

var TALENTS_256 = [
	{	//Schism
		init: function() {
			rV.talents[214621] = 0;
			rV.talents_prediction[214621] = 0;
			pV.talent214621LastTarget = 0;
			pV.talent214621Data = {};
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 214621){
					pV.talent214621LastTarget = event.targetID;
				}
			},
			"removebuffany", function(event,spellID){
				if(spellID == 214621 && actors[event.sourceID]){
					pV.talent214621LastTarget = 0;
				}
			},			
			"atonement", function(event,spellID,targetID,isTick,damageEvent){
				if(targetID == pV.talent214621LastTarget && spellID != 214621 && damageEvent.sourceID == currFightData.actor){
					var amount = Math.max((event.amount + (event.overheal || 0)) * (1 - 1 / 1.4) - (event.overheal || 0),0);
					rV.talents[214621] += amount;
					pV.talent214621Data[spellID] = (pV.talent214621Data[spellID] || 0) + amount;
				}
			},
		],
		afterParse: function() {
			if(rV.atonementData[214621])
				rV.talents[214621] += rV.atonementData[214621][0];
		},
		obj: {
			name: "Schism",
			id: 214621,
			tier: 1,
			col: 3,
			icon: "spell_warlock_focusshadow.jpg",
			additionalText: function() { return "<em class=\"tooltip\">More info<span class=\"tip-text\" style=\"width: 300px;margin-left:-150px;\">"+CreateSpellsTextFromList(pV.talent214621Data)+"</span></em>"; },
		},
	},
	{	//Twist of Fate
		init: function() {
			rV.talents[265259] = 0;
			rV.talents_prediction[265259] = 0;
			pV.talent265259Last = -10000;
			pV.talent265259Active = false;
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(event.timestamp < pV.talent265259Last){
					rV.talents_prediction[265259] += Math.min((amount + overheal) * 0.2 * (uV.spellIsAtonement[spellID] ? 0.6 : 1),GetTargetMissingHealth(event));
				}
				if(pV.talent265259Active){
					rV.talents[265259] += Math.max((amount + overheal) * (1 - 1 / (uV.spellIsAtonement[spellID] ? 1.2 : 1.12)) - overheal,0);
				}
 				if(event.resourceActor == 2 && event.hitPoints && event.maxHitPoints){
 					var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
					if(targetHPbeforeHeal <= .35) pV.talent265259Last = event.timestamp + 10000;
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 265258){
					pV.talent265259Active = true;
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 265258){
					pV.talent265259Active = false;
				}
			},
		],
		obj: {
			name: "Twist of Fate",
			id: 265259,
			tier: 1,
			col: 2,
			icon: "spell_shadow_mindtwisting.jpg",
		},
	},
	{	//Castigation
		init: function() {
			rV.talents[193134] = 0;
			rV.talents_prediction[193134] = 0;
		},
		afterParse: function() {
			if(rV.atonementData[47666])
				rV.talents[193134] += rV.atonementData[47666][0] / 4;
			if(healingData[47750])
				rV.talents[193134] += healingData[47750][0] / 4;		
		
			if(rV.atonementData[47666])
				rV.talents_prediction[193134] += rV.atonementData[47666][0] / 3;
			if(healingData[47750])
				rV.talents_prediction[193134] += healingData[47750][0] / 3;
		},
		obj: {
			name: "Castigation",
			id: 193134,
			tier: 1,
			col: 1,
			icon: "spell_holy_searinglightpriest.jpg",
		},
	},
	{	//Shield Discipline
		init: function() {
			rV.talents[197045] = 0;
			rV.talents_prediction[197045] = 0;
			pV.talents197045Count = 0;
			pV.talents197045Mana = 0;
		},
		parse: [
			"removebuffany", function(event,spellID){
				if(actors[event.sourceID] && spellID == 17 && event.absorb == 0) {
					pV.talents197045Count++;
				}
			},
			"energize", function(event,spellID){
				if(spellID == 47755) {
					pV.talents197045Mana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			rV.talents_prediction[197045] = (pV.talents197045Count * baseMana * 0.005) / rV.manaUsage * rV.healFromMana;
			
			rV.talents[197045] += pV.talents197045Mana / rV.manaUsage * rV.healFromMana;
		},		
		obj: {
			name: "Shield Discipline",
			id: 197045,
			tier: 3,
			col: 1,
			icon: "spell_holy_divineprotection.jpg",
			predictionTooltip: function() { return "Count: "+pV.talents197045Count+", "+NumberToFormattedNumber(pV.talents197045Count * baseMana * 0.005,1); },
		},
	},
	{	//Power Word: Solace
		init: function() {
			rV.talents[129250] = 0;
			rV.talents_prediction[129250] = 0;
			pV.talents129250Mana = 0;
			pV.talents129250PredictionLast = 0;
			pV.talents129250PredictionCount = 0;
			pV.talents129250PredictionSmiteCount = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 585){
					if (event.timestamp > pV.talents129250PredictionLast) {
						pV.talents129250PredictionLast = event.timestamp + 12000;
						pV.talents129250PredictionCount++;
					}
					pV.talents129250PredictionSmiteCount++;
				}
			},
			"energize", function(event,spellID){
				if(spellID == 129253) {
					pV.talents129250Mana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			if(rV.atonementData[129250])
				rV.talents[129250] += rV.atonementData[129250][0];
			rV.talents129250Mana = pV.talents129250Mana;
			rV.talents[129250] += pV.talents129250Mana / rV.manaUsage * rV.healFromMana;
			
			if(rV.atonementData[585])
				rV.talents_prediction[129250] += rV.atonementData[585][0] * pV.talents129250PredictionCount / pV.talents129250PredictionSmiteCount * 0.33;
			rV.talents_prediction[129250] += pV.talents129250PredictionCount * baseMana / 100 / rV.manaUsage * rV.healFromMana;
		},		
		obj: {
			name: "Power Word: Solace",
			id: 129250,
			tier: 3,
			col: 3,
			icon: "ability_priest_flashoflight.jpg",
		},
	},
	{	//Mindbender
		init: function() {
			rV.talents[123040] = 0;
			rV.talents_prediction[123040] = 0;
			pV.talents123040Mana = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 123051) {
					pV.talents123040Mana += event.resourceChange;
				}
			},
		],
		afterParse: function() {
			if(rV.atonementData[123040])
				rV.talents[123040] += rV.atonementData[123040][0];
			rV.talents123040Mana = pV.talents123040Mana;
			rV.talents[123040] += pV.talents123040Mana / rV.manaUsage * rV.healFromMana;
			
			if(rV.atonementData[34433])
				rV.talents_prediction[123040] += rV.atonementData[34433][0] * 0.7;	//nerf this 0.7, cuz 3min cd always as burst, when 1min is just press on cd
			rV.talents_prediction[123040] += GetFightLenFactor(60) * (baseMana * 0.055) / rV.manaUsage * rV.healFromMana;
		},		
		obj: {
			name: "Mindbender",
			id: 123040,
			tier: 3,
			col: 2,
			icon: "spell_shadow_soulleech_3.jpg",
		},
	},
	{	//Evangelism
		init: function() {
			rV.talents[246287] = 0;
			rV.talents_prediction[246287] = 0;
			pV.talents246287Targets = {};
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 246287) {
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						pV.talents246287Targets[targetID] = event.timestamp + 6000;
					});
				}
			},
			"heal", function(event,spellID,amount,overheal){
				if(uV.spellIsAtonement[spellID] && pV.talents246287Targets[event.targetID] && event.timestamp < pV.talents246287Targets[event.targetID]){
					rV.talents[246287] += amount;
				}
			},
		],
		obj: {
			name: "Evangelism",
			id: 246287,
			tier: 7,
			col: 3,
			icon: "spell_holy_divineillumination.jpg",
		},
	},
	{	//Luminous Barrier
		init: function() {
			rV.talents[271466] = 0;
			rV.talents_prediction[271466] = 0;
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 62618) {
					var count = 0;
					var mastery = 0;
					Object.keys(cV.units).forEach(function (targetID) {
						count++;
						if(pV.AtonementTarget[targetID]) mastery++;
					});
					rV.talents_prediction[271466] += count * 2.8 * cV.intellect * 
						((pV.versNow || cV.versatility) / STATS.vers / 100 + 1) *
						((pV.masteryNow || cV.mastery) / STATS.mastery / 100 * (mastery / count) + 1) * 
						((pV.critNow || (cV.combantantInfo && cV.combantantInfo.critSpell)) / STATS.crit / 100 + 1);
				}
			},
		],
		afterParse: function() {
			if(healingData[271466])
				rV.talents[271466] += healingData[271466][0] / 4;
		},
		obj: {
			name: "Luminous Barrier",
			id: 271466,
			tier: 7,
			col: 2,
			icon: "spell_priest_burningwill.jpg",
		},
	},
	{	//Lenience
		init: function() {
			rV.talents[238063] = 0;
			rV.talents_prediction[238063] = 0;
			pV.talents238063prediction = 0;
		},
		obj: {
			name: "Lenience",
			id: 238063,
			tier: 7,
			col: 1,
			icon: "ability_priest_atonement.jpg",
			prediction_extra_parse: function(){
				$("#talent-238063-prediction").html("...");
				ParseDR(reportFightCode,currFightData.start_time,currFightData.end_time,
					"%28IN%20RANGE%20FROM%20type%20%3D%20%22applybuff%22%20AND%20ability.id%20%3D%20194384%20TO%20type%20%3D%20%22removebuff%22%20AND%20ability.id%20%3D%20194384%20GROUP%20BY%20target%20ON%20target%20END%29%20and%20inCategory%28%22damage%22%29%20%3D%20true%20and%20target.type%20%3D%20%22player%22",
					"talents238063prediction",
					function(){
						var fightLen = (currFightData.end_time_parsed || currFightData.end_time) - currFightData.start_time;
						rV.talents_prediction[238063] = pV.talents238063prediction * 0.03;
						$("#talent-238063-header").html( $("#talent-238063-header").html()+" prediction" );
						$("#talent-238063-prediction").html(
							"<em class=\"result\">"+NumberToFormattedNumber(rV.talents_prediction[238063],2)+"</em> ("+(rV.talents_prediction[238063]/rV.total*100).toFixed(2)+"%)<br>"+
							"HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(rV.talents_prediction[238063] / fightLen * 1000,1)+"</em>"
						);
					}
				)
			},
			extra_parse: function(){
				$("#talent-238063-result").html("...");
				ParseDR(reportFightCode,currFightData.start_time,currFightData.end_time,
					"%28IN%20RANGE%20FROM%20type%20%3D%20%22applybuff%22%20AND%20ability.id%20%3D%20194384%20TO%20type%20%3D%20%22removebuff%22%20AND%20ability.id%20%3D%20194384%20GROUP%20BY%20target%20ON%20target%20END%29%20and%20inCategory%28%22damage%22%29%20%3D%20true%20and%20target.type%20%3D%20%22player%22",
					"talents238063",
					function(){
						var fightLen = (currFightData.end_time_parsed || currFightData.end_time) - currFightData.start_time;
						rV.talents[238063] = pV.talents238063 * (1 / (1 - 0.03) - 1);
						$("#talent-238063-result").html(
							"<em class=\"result\">"+NumberToFormattedNumber(rV.talents[238063],2)+"</em> ("+(rV.talents[238063]/rV.total*100).toFixed(2)+"%)<br>"+
							"HPS: <em class=\"result-hps\">"+NumberToFormattedNumber(rV.talents[238063] / fightLen * 1000,1)+"</em>"
						);
					}
				)
			},
		},
	},
	{	//Sins of the Many	
		init: function() {
			rV.talents[280391] = 0;
			rV.talents_prediction[280391] = 0;
		},
		afterParse: function() {
			if(healingData[81751]) {
				rV.talents_prediction[280391] += healingData[81751][0] * 0.04;
				rV.talents[280391] += healingData[81751][0] * 0.04;
			}
			if(healingData[94472]) {
				rV.talents_prediction[280391] += healingData[94472][0] * 0.04;
				rV.talents[280391] += healingData[94472][0] * 0.04;
			}
		},
		obj: {
			name: "Sins of the Many",
			id: 280391,
			tier: 5,
			col: 1,
			icon: "spell_holy_holyguidance.jpg",
			amountTooltip: function() { return "Flat 4%"},
		},
	},
	{	//Contrition
		init: function() {
			rV.talents[197419] = 0;
			rV.talents_prediction[197419] = 0;
		},
		parse: [
			"heal", function(event,spellID){
				if(spellID == 47750) {
					var amount = 0.12 * cV.intellect * 1.4 *
						((pV.versNow || cV.versatility) / STATS.vers / 100 + 1) *
						((pV.masteryNow || cV.mastery) / STATS.mastery / 100 + 1) * 
						((pV.critNow || (cV.combantantInfo && cV.combantantInfo.critSpell)) / STATS.crit / 100 + 1);
						
					Object.keys(pV.AtonementTarget).forEach(function (targetID) {
						rV.talents_prediction[197419] += amount;
					});
				}
			},
		],
		afterParse: function() {
			if(healingData[270501])	rV.talents[197419] += healingData[270501][0];
			if(healingData[281469])	rV.talents[197419] += healingData[281469][0];
		},
		obj: {
			name: "Contrition",
			id: 197419,
			tier: 5,
			col: 2,
			icon: "ability_priest_savinggrace.jpg",
		},
	},
	{	//Shadow Covenant	
		init: function() {
			rV.talents[204065] = 0;
			rV.talents_prediction[204065] = 0;
		},
		afterParse: function() {
			if(healingData[204065])	rV.talents[204065] += healingData[204065][0];
		},
		obj: {
			name: "Shadow Covenant",
			id: 204065,
			tier: 5,
			col: 3,
			icon: "spell_shadow_summonvoidwalker.jpg",
		},
	},
	{	//Purge the Wicked
		init: function() {
			rV.talents[204197] = 0;
			rV.talents_prediction[204197] = 0;
			pV.talents204197PredictionSWDInitAtonement = 0;
		},
		parse: [
			"atonement", function(event,spellID,targetID,isTick){
				if(spellID == 589 && !isTick) {
					pV.talents204197PredictionSWDInitAtonement += event.amount;
				}
			},
		],
		afterParse: function() {
			rV.talents_prediction[204197] = pV.talents204197PredictionSWDInitAtonement * 0.3636;
			rV.talents_prediction[204197] += pV.healFromHaste * ((pV.castNum[589] * 0.2 * cV.gcd) / pV.savedTimeTotal);
		},
		obj: {
			name: "Purge the Wicked",
			id: 204197,
			tier: 6,
			col: 1,
			icon: "ability_mage_firestarter.jpg",
		},
	},
	{	//Divine Star
		init: function() {
			rV.talents[110744] = 0;
			rV.talents_prediction[110744] = 0;
		},
		afterParse: function() {
			if(rV.atonementData[122128]) rV.talents[110744] += rV.atonementData[122128][0];
			if(healingData[110745])	rV.talents[110744] += healingData[110745][0];
		},
		obj: {
			name: "Divine Star",
			id: 110744,
			tier: 6,
			col: 2,
			icon: "spell_priest_divinestar.jpg",
		},
	},
	{	//Halo
		init: function() {
			rV.talents[120517] = 0;
			rV.talents_prediction[120517] = 0;
		},
		afterParse: function() {
			if(rV.atonementData[120696]) rV.talents[120517] += rV.atonementData[120696][0];
			if(healingData[120692])	rV.talents[120517] += healingData[120692][0];
		},
		obj: {
			name: "Halo",
			id: 120517,
			tier: 6,
			col: 3,
			icon: "ability_priest_halo.jpg",
		},
	},
];


var POTIONS_256 = [
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
				if(SpellParseInt(spellID,event)){
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
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[188017],2)+"</em> ("+(rV.potions[188017]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
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
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[188030],2)+"</em> ("+(rV.potions[188030]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
			},
		},
	},
	{
		init: function() {
			rV.potions[250871] = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 250871) rV.potions[250871] += event.resourceChange;
			},		
		],
		obj: {
			id: 250871,
			name: "Coastal Mana Potion",
			icon: "inv_alchemy_80_potion01blue.jpg",
			text: function(){
				var amount = rV.potions[250871] / rV.manaUsage * rV.healFromMana;
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[250871],2)+"</em> ("+(rV.potions[250871]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
			},
		},
	},
	{
		init: function() {
			rV.potions[252753] = 0;
		},
		parse: [
			"energize", function(event,spellID){
				if(spellID == 252753) rV.potions[252753] += event.resourceChange;
			},		
		],
		obj: {
			id: 252753,
			name: "Potion of Replenishment",
			icon: "inv_alchemy_80_elixir01orange.jpg",
			text: function(){
				var amount = rV.potions[252753] / rV.manaUsage * rV.healFromMana;
			
				return "Mana gained: <em class=\"result\">"+NumberToFormattedNumber(rV.potions[252753],2)+"</em> ("+(rV.potions[252753]/rV.manaUsage*100).toFixed(2)+"%)<br>Helaing: <em class=\"result-hps\">"+NumberToFormattedNumber(amount,0,2)+"</em> ("+(amount/rV.total*100).toFixed(2)+"%)";
			},
		},
	},
	{
		init: function() {
			rV.potions[279151] = 0;
			rV.potion279151Temp = 0;
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(SpellParseInt(spellID,event)){
					if(pV.potion279151Active){
						rV.potions[279151] += amount / cV.intellect * 900 * 1.05;
					} else {
						rV.potion279151Temp += amount / cV.intellect * 900 * 1.05;
					}
				}
			},
			"applybuff", function(event,spellID){
				if(spellID == 279151) pV.potion279151Active = true;
			},
			"removebuff", function(event,spellID){
				if(spellID == 279151) {
					if(!pV.potion279151Active) rV.potions[279151] = rV.potion279151Temp;
					pV.potion279151Active = false;
				}
			},			
		],
		obj: {
			id: 279151,
			name: "Battle Potion of Intellect",
			icon: "trade_alchemy_potionc4.jpg",
		},
	},
];

SPECS[256] = function(){
	$('body').css('background-image', 'url("background-merged-priest.png")');
	return [OTHER_256, CLASS_256, ITEMS_256, TRAITS_256, TALENTS_256, POTIONS_256];
}
SPECS_CLASS[256] = "Priest";
CLASS_AVAILABLE["Priest"] = true;