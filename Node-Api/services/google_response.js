const parse = (key) => {
	return key.replace("$", " ");

}
const getError = (error_msg, callback)=> {
	var jsonRes = {
		"payload": {
			"google": {
				"expectUserResponse": true,
				"richResponse": {
					"items": [
						{
							"simpleResponse": {
								"textToSpeech": error_msg
							}
						}
					]
				}
			}
		}
	}
	callback(jsonRes);
}

const getTable = (item, type, simpleResponse, callback) => {
	let Item = {};

	switch (type) {
		case "archwing": Item.Name = item.name;
			Item.Description = item.description;
			Item.Damage = item.totalDamage;
			Item.DPS = item.damagePerSecond;
			Item.Reload$Time = item.reloadTime;
			Item.Accuracy = item.accuracy;
			Item.Critical$chance = (item.criticalChance * 100).toPrecision(2) + "%";
			Item.Critical$Multiplier = item.criticalMultiplier;
			Item.Mastery$Requirement = item.masteryReq;
			Item.Build$price = item.buildPrice;
			Item.Skip$build$cost = item.skipBuildCost;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "enemy": Item.Name = item.name;
			Item.Description = item.description;
			Item.Faction = item.type;
			Item.Health = item.health;
			Item.Shield = item.shield;
			Item.Armor = item.armor;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "gear": Item.Name = item.name;
			Item.Description = item.description;
			Item.Type = item.type;
			Item.Build$price = item.buildPrice;
			Item.Skip$build$cost = item.skipBuildCost;
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "melee": Item.Name = item.name;
			Item.Description = item.description;
			Item.Type = item.type;
			Item.Damage = item.totalDamage;
			Item.DPS = item.damagePerSecond;
			Item.Critical$chance = (item.criticalChance * 100).toPrecision(2) + "%";
			Item.Critical$Multiplier = item.criticalMultiplier;
			Item.Mastery$Requirement = item.masteryReq;
			Item.Build$price = item.buildPrice;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "mods": Item.Name = item.name;
			Item.Type = item.type;
			Item.polarity = item.polarity;
			Item.Rarity = item.rarity;
			Item.Base$Drain = item.baseDrain;
			Item.Fusion$Limit = item.fusionLimit;

			break;
		case "pets": Item.Name = item.name;
			Item.Description = item.description;
			Item.Health = item.health;
			Item.Shield = item.shield;
			Item.Armor = item.armor;
			Item.Stamina = item.stamina;
			Item.Power = item.power;
			if (item.tradable === true)
				Item.Tradable = "Yes";
			else
				Item.Tradable = "No";

			break;
		case "primary": Item.Name = item.name;
			Item.Description = item.description;
			Item.Type = item.type;
			Item.Damage = item.totalDamage;
			Item.DPS = item.damagePerSecond;
			Item.Reload$Time = item.reloadTime;
			Item.Accuracy = item.accuracy;
			Item.Critical$chance = (item.criticalChance * 100).toPrecision(2) + "%";
			Item.Critical$Multiplier = item.criticalMultiplier;
			Item.Mastery$Requirement = item.masteryReq;
			Item.Build$price = item.buildPrice;
			Item.Skip$build$cost = item.skipBuildCost;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "resources": Item.Name = item.name;
			Item.Description = item.description;
			Item.Type = item.type;
			break;
		case "secondary": Item.Name = item.name;
			Item.Description = item.description;
			Item.Type = item.type;
			Item.Damage = item.totalDamage;
			Item.DPS = item.damagePerSecond;
			Item.Reload$Time = item.reloadTime;
			Item.Accuracy = item.accuracy;
			Item.Critical$chance = (item.criticalChance * 100).toPrecision(2) + "%";
			Item.Critical$Multiplier = item.criticalMultiplier;
			Item.Mastery$Requirement = item.masteryReq;
			Item.Build$price = item.buildPrice;
			Item.Skip$build$cost = item.skipBuildCost;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}
			break;
		case "sentinels": Item.Name = item.name;
			Item.Description = item.description;
			Item.Category = item.type;
			Item.Health = item.health;
			Item.Shield = item.shield;
			Item.Armor = item.armor;
			Item.Stamina = item.stamina;
			Item.Power = item.power;
			Item.Build$price = item.buildPrice;
			Item.Skip$build$cost = item.skipBuildCost;
			break;
		case "warframe": Item.Name = item.Name;
			Item.Description = item.description;
			Item.Category = item.type;
			Item.Health = item.health;
			Item.Shield = item.shield;
			Item.Armor = item.armor;
			Item.Power = item.power;
			Item.Abilities = "";
			for (var i in item.abilities) {
				Item.Abilities += `${item.abilities[i].name},`;
			}
			Item.Cost = item.buildPrice;
			Item.Components = "";
			for (var i in item.components) {
				Item.Components += `${item.components[i].name},`;
			}

			break;
		default: Item.Name = item.Name;
			Item.Description = item.description;
			Item.Category = item.type;
			break;
	}
	var rows = [];
	var i = 0;
	for (var key in Item) {
		if (Item[key] != null) {
			var cellsArr = [];
			var cells = {};
			var text1 = { "text": parse(key) };
			var text2 = { "text": Item[key] };
			cellsArr[0] = text1;
			cellsArr[1] = text2;
			cells.cells = cellsArr;
			cells.dividerAfter = true;
			rows[i] = cells;
			i++;
		}
	}
	var jsonRes = {
		"payload": {
			"google": {
				"expectUserResponse": true,
				"richResponse": {
					"items": [
						{
							"simpleResponse": {
								"textToSpeech": simpleResponse
							}
						},
						{
							"tableCard": {
								"title": `${item.name} details`,
								"subtitle": `${item.type}`,
								"image": {
									"url": `https://cdn.warframestat.us/img/${item.imageName}`,
									"accessibilityText": "Actions on Google"
								},
								"rows": rows,
								"buttons": [
									{
										"title": "Wiki",
										"openUrlAction": {
											"url": item.wikiaUrl

										}
									}
								]

							}

						}
					],
					// "suggestions":[
					//         {
					//             "title": "Yes"
					//         },
					//         {
					//             "title": "No"
					//         }
					//   ]

				}
			},
			"userStorage": "{\"data\":{}}"
		}
	};
	callback(jsonRes);


}

exports.getTable = getTable;