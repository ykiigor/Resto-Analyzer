//  Resto Shaman, 21:05 06.08.2018

var OTHER_264 = [
	{	//OVERALL
		init: function() {
			uV.SPEC_ID = 264;
			uV.SPEC_NAME = "Resto";
		
			STATS_BASE.mastery = 24;
			STATS.mastery = 72 / (STATS_BASE.mastery / 8);
			
			baseMana = 100000 / 5;
			spellManaCost = {
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

			spellCastTime = {
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

			spellCastTimeNoCD = {	//only spells without cd
				77472: true,	//hw
				1064: true,	//ch
				8004: true,	//surge
			};
			
			spellCastIDToHealID = {
				5394: [52042,208899],
				207778: [207778, 255227],
				157153: [157503],
				198838: [201633],
			};
			
			uV.OverallBlacklist = {
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
			
			spellScaleInt = {
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
			
			spellScaleMastery = {
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
			
			spellNotScaleHaste = {
				208899: true,	//qd
				209069: true,	//tidal
				98021: true,	//slt
				208981: true,	//roots
				//242622: true,	//kj trink
				242619: true,	//tos(fa) trink
				257442: true,	//abt eonar
			};
			spellAffectedByHaste = {
				73921: true,	//hr
				114942: true,	//htt
			};	//not tick events, but still haste scaling
			
			spellScaleVers = {
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
						
			uV.CreateSpecialSpellCurrentData = function (){
				return {
					feedBySpell: {},
					feed: 0,
				}
			}
			
			uV.sSpellsKeys = ["CBT","ASC"];
			uV.sSpells = {		// specialSpellSpellID, blacklist of spells that not feed special spell, SpellID for icon
				CBT: [157503, {}, 157503, {
					1064: true,	//ch
					73921: true,	//hr
					77472: true,	//hw
					61295: true,	//riptide
					207778: true,	//downpour
					73685: true,	//ul
					8004: true,	//surge
					197997: true,	//wellspring
					31616: true,	//Nature's Guardian
				}],
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
			
			cooldownsTrackingIDs = {
				108281: true,
				235966: true,
				114052: true,
				29166: true,
			};
			
			cooldownsTrackingIDsbyCast = {
				157153: 15500,			
			};
			
			ignoredSpellsForCDTracking = {
				198839: true,
				201633: true,
				5672: true,
				257442: true,
			};
						
			healingFromMana = {
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
			
			uV.CritParse = function (event,spellID,overheal){
				if(spellID == 8004 && event.timestamp <= pV.critTidalLoss){	//surge
					pV.critNow += 40 * STATS.crit;
				}			
			};
						
			uV.SpellParseMastery = function(spellID,event){
				return spellScaleMastery[spellID] && (event.resourceActor == 2 || event.targetID == currFightData.actor) && event.hitPoints && event.maxHitPoints;
			};
			
			uV.MasteryParse = function(event,spellID,amount,overheal){
				var targetHPbeforeHeal = Math.max(event.hitPoints - amount,0) / event.maxHitPoints;
				
				pV.currHealFromMastery = amount * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) * (1 - targetHPbeforeHeal))) );
				pV.currHealFromMasteryOh = (amount + overheal) * ( 1 - (1 / (1 + ((pV.masteryNow / STATS.mastery) / 100) * (1 - targetHPbeforeHeal))) );
				
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
			};
			
			uV.SpellParseCooldown = function(spellID,event,cooldown){
				return cooldown.spellID != 157503 || (cooldown.spellID == 157153 && spellID == 157503 && (event.timestamp - cooldown.start) <= 17000);
			};
			
			uV.SpellParseCooldownAdd = function(spellID,event,cooldown){
				if(spellID == 157503 && cooldown.spellID == 157153){	//CBT
					cooldown.ended = event["timestamp"];
					cooldown.opened = false;
					
					for (var k = 0, k_len = parsePlugins.special.length; k < k_len; k++) {
						parsePlugins.special[k]("CBT_end",event);
					}
				}
			};
			
			uV.SpellParseCooldownEnd = function(cooldown,event){
				if(cooldown.spellID == 157153) {
					pV.ssCBTstatus = false;	
					for (var k = 0, k_len = parsePlugins.special.length; k < k_len; k++) {
						parsePlugins.special[k]("CBT_end",event);
					}
				}
			};
			
			uV.SpellParseCastHasteMod = function(hasteMod,spellID){
				if(spellID == 77472 && pV.tidalwavesStatus) 
					return hasteMod * 1 / (1 - 0.3);
				else
					return hasteMod;
			};
			
			uV.SpellParseCastHasteAdd = function(spellID,hasteMod,hasteNow,savedTime){
				if(spellID == 77472 && pV.tidalwavesStatus) pV.hasteCast[-53390] = (pV.hasteCast[-53390] || 0) + hasteMod / (1 / (1 - 0.3)) * ((1 / (1 - 0.3)) - 1) * 100 * STATS.haste / hasteNow * savedTime;
			};
			
			uV.AddStatAmount = function(stat,amount,amountWithOh,statNow,totalHeal,spellID,timestamp,event){
				if(event.type != "absorbed") {
					for (var k = 0, k_len = uV.sSpellsKeys.length; k < k_len; k++) {
						var sName = uV.sSpellsKeys[k];
					
						if(pV["ss"+sName+"status"] && ((!uV.sSpells[sName][3] && !uV.sSpells[sName][1][spellID]) || (uV.sSpells[sName][3] && uV.sSpells[sName][3][spellID]))){
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
			};
			
			var AllStatsList = ['int','crit','mastery','vers','haste'];
			uV.AddStatAmountSpecialSpell = function (sName,sSpellID,spellID,delta,timestamp){
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
						
						for (var j = 0, j_len = uV.sSpellsKeys.length; j < j_len; j++) {
							var sName_j = uV.sSpellsKeys[j];
						
							if(sName_j != sName && pV["ss"+sName_j+"status"] && ((!uV.sSpells[sName_j][3] && !uV.sSpells[sName_j][1][sSpellID]) || (uV.sSpells[sName_j][3] && uV.sSpells[sName_j][3][sSpellID]))){
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
			
			uV.SetSpecialSpellOn = function (sName,timestamp){
				pV["ss"+sName+"status"] = true;
				pV["ss"+sName] = uV.CreateSpecialSpellCurrentData();
				pV["ss"+sName].time = timestamp;
				delete pV["ss"+sName+"stats"];
			}

			function GetFeedFactor(){ 
				var factor = 1; 
				for (var i = 0, len = uV.sSpellsKeys.length; i < len; i++) {
					var keyName = uV.sSpellsKeys[i];
					if(rV.feed[keyName].total > 0){
						factor += rV.feed[keyName].total / (rV.total + rV.totalOver) * (rV.feed[keyName].heal / rV.feed[keyName].total)
					}
				}
				return factor;
			}
			GEAR = [
				{slot:-2,spell:272989,type:2,tier:1,name:"Soothing Waters",icon:"spell_nature_healingwavegreater",special:function(ilvl){ return ScaleTrait(272989,ilvl); }},
				{slot:-2,spell:278715,type:2,tier:1,name:"Spouting Spirits",icon:"spell_shaman_spiritlink",special:function(ilvl){ return ScaleTrait(278715,ilvl); }},
				{slot:-2,spell:273597,type:2,tier:1,name:"Ebb and Flow",icon:"ability_shaman_healingtide",special:function(ilvl){ return ScaleTrait(273597,ilvl); }},
				{slot:-2,spell:278713,type:2,tier:1,name:"Surging Tides",icon:"spell_nature_riptide",special:function(ilvl){ return ScaleTrait(278713,ilvl); }},
				{slot:-2,spell:277658,type:2,tier:1,name:"Overflowing Shores",icon:"spell_nature_giftofthewaterspirit",special:function(ilvl){ return ScaleTrait(277658,ilvl); }},
				{slot:-2,spell:275488,type:2,tier:1,name:"Swelling Stream",icon:"inv_spear_04",special:function(ilvl){ return ScaleTrait(275488,ilvl); }},
				
				{slot:-3,spell:272989,type:4,tier:1,name:"Soothing Waters",icon:"spell_nature_healingwavegreater",special:function(ilvl){ return ScaleTrait(272989,ilvl) * (pV.castNum[1064] || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:278715,type:4,tier:1,name:"Spouting Spirits",icon:"spell_shaman_spiritlink",special:function(ilvl){ return ScaleTrait(278715,ilvl) * (pV.azeriteSLTPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:273597,type:4,tier:1,name:"Ebb and Flow",icon:"ability_shaman_healingtide",special:function(ilvl){ return ScaleTrait(273597,ilvl) * (pV.azeriteHTTPrediction || 0) * GetModFactor() * GetVersFactor(); }},
				{slot:-3,spell:278713,type:4,tier:1,name:"Surging Tides",icon:"spell_nature_riptide",special:function(ilvl){ return ScaleTrait(278713,ilvl) * (pV.azeriteRiptidePrediction || 0) * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:277658,type:4,tier:1,name:"Overflowing Shores",icon:"spell_nature_giftofthewaterspirit",special:function(ilvl){ return ScaleTrait(277658,ilvl) * (pV.azeriteHRPrediction || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:275488,type:4,tier:1,name:"Swelling Stream",icon:"inv_spear_04",special:function(ilvl){ return ScaleTrait(275488,ilvl) * ((pV.castNum[5394] || 0) + (pV.castNum[157153] || 0)) * 2.19 * 5 * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:277666,type:4,tier:1,name:"Ancestral Resonance",icon:"spell_shaman_improvedreincarnation",special:function(ilvl){ return ScaleTrait(277666,ilvl) * 15 * 40 * healPerStat.mastery.amount / ( (currFightData.end_time - currFightData.start_time) / 1000 ); }},
			
				{slot:-3,spell:267892,type:4,tier:2,name:"Synergistic Growth",icon:"inv_misc_markoftheworldtree",special:function(ilvl){ return ScaleTrait(267892,ilvl) * (pV.azeriteSynergisticGrowthPrediction || 0) * healPerStat.mastery.amount * 10 / ( (currFightData.end_time - currFightData.start_time) / 1000 ); }},
			
				{slot:-3,spell:274412,type:4,tier:3,name:"Serene Spirit",icon:"ability_shaman_astralshift",special:function(ilvl){ return ScaleTrait(274412,ilvl) * 2 * (pV.castNum[108271] || 0) * GetModFactor() * GetVersFactor() * GetCritFactor(); }},
				{slot:-3,spell:280021,type:4,tier:3,name:"Pack Spirit",icon:"spell_nature_spiritwolf",special:function(ilvl){ return ScaleTrait(280021,ilvl) * GetModFactor()  * GetVersFactor() * GetCritFactor() * (rV.wolfUptime / 1000) / 0.9; }},
			];

			uV.BuildReportHeaderIcons = function(fightLen){
				var HTML = "";
				var hps = Math.round(rV.total / fightLen * 1000);
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingwavegreater.jpg\"></div><div class=\"col w75\">Healing Done: "+NumberToFormattedNumber(rV.total,2)+"<br>HPS: "+NumberToFormattedNumber(hps,0,3,3)+"</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_healingtouch.jpg\"></div><div class=\"col w75\">Mastery healing Done:<br>"+NumberToFormattedNumber(Math.round(healPerStat.mastery.total),2)+" ("+Math.round(healPerStat.mastery.total / healPerStat.mastery.all * 100)+"%)</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img style=\"filter: grayscale(100%);-webkit-filter: grayscale(100%);\" src=\"http://media.blizzard.com/wow/icons/56/spell_shaman_tidalwaves.jpg\"></div><div class=\"col w75\">HW or Surge without tidal:<br>"+rV.hwWithoutTidal+" ("+Math.round(rV.hwWithoutTidal / rV.hwWithoutTidalTotal * 100)+"%)</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_shaman_spiritwalkersgrace.jpg\"></div><div class=\"col w75\">Spiritwalker's uptime:<br>"+Math.round(rV.spiritwalkerUptime/1000)+"s ("+Math.round(rV.spiritwalkerUptime / fightLen * 100)+"%)</div></div></div></div>";
				HTML += "<div class=\"col\"><div class=\"box small-box clearfix\"><div class=\"row\"><div class=\"col w25\"><img src=\"http://media.blizzard.com/wow/icons/56/spell_nature_spiritwolf.jpg\"></div><div class=\"col w75\">Wolf uptime:<br>"+Math.round(rV.wolfUptime/1000)+"s ("+Math.round(rV.wolfUptime / fightLen * 100)+"%)</div></div></div></div>";
				return HTML;
			};
			
			uV.BuildReportStats = function(code,stat,text,arg1,arg2){
				if(code == 0){
					if(stat == "crit") return true;
					else if(stat == "mastery") return true;
					return false;
				} else if (code == 1 && stat == "mastery"){	// totalText
					text = "<em class=\"tooltip\">"+NumberToFormattedNumber(arg1,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">Based on health %:<br>";
					text += "100-80: "+NumberToFormattedNumber(healPerStat.mastery.b100,0,1)+"<br>";
					text += "80-70: "+NumberToFormattedNumber(healPerStat.mastery.b80,0,1)+"<br>";
					text += "70-60: "+NumberToFormattedNumber(healPerStat.mastery.b70,0,1)+"<br>";
					text += "60-50: "+NumberToFormattedNumber(healPerStat.mastery.b60,0,1)+"<br>";
					text += "50-40: "+NumberToFormattedNumber(healPerStat.mastery.b50,0,1)+"<br>";
					text += "40-30: "+NumberToFormattedNumber(healPerStat.mastery.b40,0,1)+"<br>";
					text += "30-0: "+NumberToFormattedNumber(healPerStat.mastery.b30,0,1)+"</span></em>";
					return text;
				} else if (code == 1 && stat == "crit"){	// totalText
					var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
					var preTotal = arg1;
					arg1 += regurgenceAmount;
					
					return "<em class=\"tooltip\">"+NumberToFormattedNumber(arg1,0,2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+NumberToFormattedNumber(preTotal,0,2)+"<br>From resurgence: "+NumberToFormattedNumber(regurgenceAmount,0,2)+"</span></em>";
				} else if (code == 2 && stat == "crit"){	// amountText
					var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
					var preAmount = arg1;
					arg1 += regurgenceAmount / rV.resurgenceCritAmount;
					
					return "<em class=\"tooltip\">"+arg1.toFixed(3)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+preAmount.toFixed(3)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount).toFixed(3)+"</span></em>";
				} else if (code == 3 && stat == "crit"){	// weightText
					var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
					var preAmount = arg1;
					arg1 += regurgenceAmount / rV.resurgenceCritAmount;
					
					return "<em class=\"tooltip\">"+(arg1 / arg2 * 1000).toFixed(2)+"<span class=\"tip-text\" style=\"width: 200px;margin-left:-100px;\">From crit heals: "+(preAmount / arg2 * 1000).toFixed(2)+"<br>From resurgence: "+(regurgenceAmount / rV.resurgenceCritAmount / arg2 * 1000).toFixed(2)+"</span></em>";
				} else if (code == 4 && stat == "crit"){	// fix stat numbers
					var regurgenceAmount = rV.resurgenceCrit / rV.manaUsage * rV.healFromMana;
					var amount = healPerStat[ stat ].amount;
					amount += regurgenceAmount / rV.resurgenceCritAmount;
					
					healPerStat[ stat ].amount = amount;
				}
				return text;
			};

			uV.BuildReportAfterTalents = function(fightLen){
				var HTML = "";
				/// Resurgence
				HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">RESURGENCE</header><div class=\"list-top-line\"> </div><ul class=\"list resurgence\">";
				counter = 0;
				var resurgenceData = [];
				for (var i = 0, len = CLASS_264.length; i < len; i++) if(rV.resurgence[ CLASS_264[i].obj.id ][0] > 0) resurgenceData.push([ CLASS_264[i].obj.id,CLASS_264[i] ]);
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
				return HTML;
			};
			
			uV.BuildReportBeforeCooldowns = function(fightLen){
				var HTML = "";
			
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
				for (var i = 0, len = uV.sSpellsKeys.length; i < len; i++) {
					var keyName = uV.sSpellsKeys[i];
					if(rV.feed[keyName].total > 0){
						var spellID = uV.sSpells[keyName][2];
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
						HTML += "<div class=\"col text-center w13\"><div style=\"font-size: 2em;\">"+NumberToFormattedNumber(rV.feed[keyName].total,2)+"</div>total feeding</div>";
						HTML += "</div></li>";
					}
				}
				HTML += "</ul></div></div></div>";

				return HTML;
			};
			uV.BuildReportBottom = function(fightLen,fightStart,fightEnd){
				var HTML = "";
				if(!uV.sltTracking) return HTML;

				/// SLT
				HTML += "<div class=\"panel\"><div class=\"col-full\"><div class=\"box\"><header class=\"box-header\">SPIRIT LINK</header><div class=\"list-top-line\"> </div><ul class=\"list slt\">";
				for (var i = 0, len = uV.sltTracking.length; i < len; i++) {
					var obj = uV.sltTracking[i]
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
			
				return HTML;
			};
		},
		parse: [
			"heal", function(event,spellID,amount,overheal){
				if(spellID == 157503) pV.ssCBTstatus = false;
				
				//special Spells [CBT,AG,ASC]
				if(event.type != "absorbed") {
					for (var k = 0, k_len = uV.sSpellsKeys.length; k < k_len; k++) {
						var sName = uV.sSpellsKeys[k];
					
						if(spellID == uV.sSpells[sName][0]){
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
										
										uV.AddStatAmountSpecialSpell(sName,spellID,spells[j],amount / ss_data.feed,event.timestamp);
										
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
									
									uV.AddStatAmountSpecialSpell(sName,spellID,spells[j],amount / ss_data.feed,event.timestamp);
									
									for (var l = 0, l_len = parsePlugins.special.length; l < l_len; l++) {
										parsePlugins.special[l]("SS",sName,1,spells[j],fromSpellAmount,ss_data.feedBySpell[ spells[j] ]);
									}
								}
								
								var newRecord = uV.CreateSpecialSpellCurrentData();
								newRecord.prev = pV["ss"+sName];
								delete pV["ss"+sName].prev;
								pV["ss"+sName] = newRecord;
								pV["ss"+sName].time = event.timestamp;
							}
						} else if(pV["ss"+sName+"status"] && ((!uV.sSpells[sName][3] && !uV.sSpells[sName][1][spellID]) || (uV.sSpells[sName][3] && uV.sSpells[sName][3][spellID]))){
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
			},
			"applybuff", function(event,spellID){
				if(spellID == 108281){	//AG
					uV.SetSpecialSpellOn("AG",event.timestamp);
				} else if(spellID == 114052){	//ASC
					uV.SetSpecialSpellOn("ASC",event.timestamp);
				}
			},
			"removebuff", function(event,spellID){
				if(spellID == 53390) {
					pV.critTidalLoss = event.timestamp + 500;
				} else if(spellID == 108281){	//AG
					pV.ssAGstatus = false;
				}  else if(spellID == 114052){	//ASC
					pV.ssASCstatus = false;
				}
			},			
			"removebuffstack", function(event,spellID){
				if(spellID == 53390) {
					pV.critTidalLoss = event.timestamp + 500;
				}			
			},
			"cast", function(event,spellID){
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
				} else if (spellID == 157153){	//cbt
					pV.ssCBTdelay = event.timestamp + 200; 
				}			
			},
		],
		afterParse: function(){
			if(healingData[98021]){
				rV.total -= healingData[98021][0];
				rV.totalOver -= healingData[98021][1];			
			}
		
			if(healingData[255227] && healingData[207778]){		//GotQ fix
				healingData[207778][0] += healingData[255227][0];
				healingData[207778][1] += healingData[255227][1];
				delete healingData[255227];
			}
		},
	},

	{	//SLT
		init: function(){
			uV.sltTracking = [];
		},
		parse: [
			"heal", function(event,spellID,amount){
				if(spellID == 98021){		//slt
					for (var j = 0, j_len = uV.sltTracking.length; j < j_len; j++) {
						if((event["timestamp"] - uV.sltTracking[j].start) < 8000){
							var currTime = event["timestamp"] - uV.sltTracking[j].start;
							var pos = -1;
							for (var k = 0, k_len = uV.sltTracking[j].heal.length; k < k_len; k++) {
								if(currTime == uV.sltTracking[j].heal[k].time){
									pos = k;
									break;
								}else if(currTime > uV.sltTracking[j].heal[k].time && ((currTime - uV.sltTracking[j].heal[k].time) <= 500)){
									currTime = uV.sltTracking[j].heal[k].time;
									pos = k;
									break;
								}
							}
							
							if(pos == -1){
								uV.sltTracking[j].heal.push({
									time: currTime,
									data: [],
								});
								pos = uV.sltTracking[j].heal.length - 1;
							}
							
							if(!uV.sltTracking[j].heal[pos].data[event.targetID]){
								uV.sltTracking[j].heal[pos].data[event.targetID] = {
									amount: 0,
									absorbed: 0,
								};
							}
							
							uV.sltTracking[j].heal[pos].data[event.targetID].amount += event["amount"];
							if(event["absorbed"]) uV.sltTracking[j].heal[pos].data[event.targetID].absorbed += event["absorbed"];
							
							uV.sltTracking[j].ended = event["timestamp"];
						}
					}
				}
			},
			"damageany", function(event,spellID){
				if(spellID == 98021){		//slt
					for (var j = 0, j_len = uV.sltTracking.length; j < j_len; j++) {
						if((event["timestamp"] - uV.sltTracking[j].start) < 8000){
							var currTime = event["timestamp"] - uV.sltTracking[j].start;
							var pos = -1;
							for (var k = 0, k_len = uV.sltTracking[j].damage.length; k < k_len; k++) {
								if(currTime == uV.sltTracking[j].damage[k].time){
									pos = k;
									break;
								}else if(currTime > uV.sltTracking[j].damage[k].time && ((currTime - uV.sltTracking[j].damage[k].time) <= 500)){
									currTime = uV.sltTracking[j].damage[k].time;
									pos = k;
									break;
								}
							}
							
							if(pos == -1){
								uV.sltTracking[j].damage.push({
									time: currTime,
									data: [],
								});
								pos = uV.sltTracking[j].damage.length - 1;
							}
							
							if(!uV.sltTracking[j].damage[pos].data[event.targetID]){
								uV.sltTracking[j].damage[pos].data[event.targetID] = {
									amount: 0,
									absorbed: 0,
								};
							}
							
							uV.sltTracking[j].damage[pos].data[event.targetID].amount += event["amount"];
							if(event["absorbed"]) uV.sltTracking[j].damage[pos].data[event.targetID].absorbed += event["absorbed"];
							
							uV.sltTracking[j].ended = event["timestamp"];
						}
					}
				}
			},
			"cast", function(event,spellID){
				if (spellID == 98008){	//slt
					uV.sltTracking.push({
						start: event["timestamp"],
						heal: [],
						damage: [],
					});
				}			
			},
			"any", function(event){
				if(pV.ssCBTdelay && event.timestamp >= pV.ssCBTdelay){	// 200ms delay for CBT for beginning tracking <7.3 prefeeding fix>
					uV.SetSpecialSpellOn("CBT",pV.ssCBTdelay - 200);
					delete pV.ssCBTdelay;
				}			
			},
		],	
	},
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
			"damageany", function(event,spellID){
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
			"damageany", function(event,spellID){
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
						var amount = healingData[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal);
						
						for (var j = 0, j_len = uV.sSpellsKeys.length; j < j_len; j++) {
							if(rV.feed[ uV.sSpellsKeys[j] ].spells[spellID]){
								amount += rV.feed[ uV.sSpellsKeys[j] ].spells[spellID][0] * (pV.savedTimeTotal / pV.savedTimeNoCDTotal) * (pV.savedTimeNoCD[spellID] / pV.savedTimeNoCDTotal);
							}
						}
						
						pV.healFromHaste += amount; 
						totalAmount += amount;
					}						
				}
				
				rV.hasteCastProfitBySpell[spellCastID] = totalAmount / (pV.savedTimeTotal / pV.savedTime);
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

var ITEMS_264 = [

	{parse:["gear", function(itemData,itemID){if(itemID == 159620) statsBuffs.crit[271071] = ScaleItemSpell(159620,itemData.itemLevel);}]}, //Conch of Dark Whispers
	{parse:["gear", function(itemData,itemID){if(itemID == 158371) statsBuffs.haste[281724] = ScaleItemSpell(158371,itemData.itemLevel);}]}, //Seabreeze
	{parse:["gear", function(itemData,itemID){if(itemID == 159615) statsBuffs.haste[271115] = ScaleItemSpell(159615,itemData.itemLevel);}]}, //Ignition Mage's Fuse
	{parse:["gear", function(itemData,itemID){if(itemID == 159630) statsBuffs.int[268998] = ScaleItemSpell(159630,itemData.itemLevel);}]}, //Balefire Branch	
	{parse:["gear", function(itemData,itemID){if(itemID == 161461) statsBuffs.vers[278359] = ScaleItemSpell(161461,itemData.itemLevel);}]}, //Doom's Hatred
	{parse:["gear", function(itemData,itemID){if(itemID == 161377) statsBuffs.haste[278383] = ScaleItemSpell(161377,itemData.itemLevel);}]}, //Azurethos' Singed Plumage
	{parse:["gear", function(itemData,itemID){if(itemID == 161380) statsBuffs.int[278862] = ScaleItemSpell(161380,itemData.itemLevel);}]}, //Drust-Runed Icicle	
	{parse:["gear", function(itemData,itemID){if(itemID == 161411) statsBuffs.crit[278227] = ScaleItemSpell(161411,itemData.itemLevel);}]}, //T'zane's Barkspines
	{parse:["gear", function(itemData,itemID){if(itemID == 160656) statsBuffs.int[278156] = ScaleItemSpell(160656,itemData.itemLevel);}]}, //Twitching Tentacle of Xalzaix
	
];


var TRAITS_264 = [
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
	
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,280410,280413,"mastery",2);  }]}, //Incite the Pack
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,281841,281844,"mastery",2);  }]}, //Tradewinds
	{parse:["allCombantantInfo", function(e){ CreateDataByTraitBySpellID(e,280581,280830,"int");  }]}, //Collective Will

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
			"damageany", function(event,spellID){
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
		afterParse: function() { 
			if(healingData[279187]) rV.traits[422] += healingData[279187][0]; 
		},
		obj: {
			name: "Surging Tides",
			id: 422,
			spellID: 278713,
			icon: "spell_nature_riptide.jpg",
			tier: 1,
		},
	},
	{	//heal on -40%
		init: function() { rV.traits[207] = 0; },
		afterParse: function() { if(healingData[274416]) rV.traits[207] += healingData[274416][0]; },
		obj: { name: "Serene Spirit", id: 207, spellID: 274412, icon: "ability_shaman_astralshift.jpg", tier: 3, },
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
 					pV.azeriteImpassiveVisageLast = event.timestamp + 6000;
					pV.azeriteImpassiveVisagePrediction++;
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
		init: function() { rV.traits[44] = 0; },
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
];


var TALENTS_264 = [
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


var CLASS_264 = [
	{	//surge
		init: function() {
			rV.resurgence[8004] = [0,0];
		},
		parse: [
			"cast", function(event,spellID){
				if(spellID == 8004) pV.resurgenceLast6600 = 8004;
			},
			"energize", function(event,spellID){
				if(event.resourceChange == 600 && spellID == 101033 && pV.resurgenceLast6600 == 8004) {
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
				if(event.resourceChange == 600 && spellID == 101033 && pV.resurgenceLast6600 == 61295) {
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
				if(event.resourceChange == 600 && spellID == 101033 && pV.resurgenceLast6600 == 73685) {
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
				if(event.resourceChange == 250 && spellID == 101033) {
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
				if(event.resourceChange == 1000 && spellID == 101033) {
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

var POTIONS_264 = [
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
];



SPECS[264] = function(){
	$('body').css('background-image', 'url("background-merged-shaman.png")');
	return [OTHER_264, CLASS_264, ITEMS_264, TRAITS_264, TALENTS_264, POTIONS_264];
}
SPECS_CLASS[264] = "Shaman";
CLASS_AVAILABLE["Shaman"] = true;