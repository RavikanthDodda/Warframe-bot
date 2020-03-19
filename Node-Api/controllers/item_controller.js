const fetchResponse = require("../services/fetch_response");
const Items = require("warframe-items");

const items = new Items("All");
const archwing = new Items("Archwing");
const enemy = new Items("Enemy");
const gear = new Items("Gear");
const melee = new Items("Melee");
const mods = new Items("Mods");
const pets = new Items("Pets");
const primary = new Items("Primary");
const resources = new Items("Resources");
const secondary = new Items("Secondary");
const sentinels = new Items("Sentinels");
const warframes = new Items("Warframes");


function getItem(type) {
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
}

exports.getAny = (req, res) => {
    items = getItem("any");
    fetchResponse.getResponse(items, req.params.name, (response) => {
        res.json(response);
    });
}

exports.getArchwing = (req, res) => {
    archwing = getItem("archwing");
    fetchResponse.getResponse(archwing, req.params.name, "archwing", (response) => {
        res.json(response);
    });
}

exports.getEnemy = (req, res) => {
    enemy = getItem("enemy");
    fetchResponse.getResponse(enemy, req.params.name, "enemy", (response) => {
        res.json(response);
    });
}

exports.getGear = (req, res) => {
    gear = getItem("gear");
    fetchResponse.getResponse(gear, req.params.name, "gear", (response) => {
        res.json(response);
    });
}

exports.getMelee = (req, res) => {
    melee = getItem("melee");
    fetchResponse.getResponse(melee, req.params.name, "melee", (response) => {
        res.json(response);
    });
}

exports.getMods = (req, res) => {
    mods = getItem("mods");
    fetchResponse.getResponse(mods, req.params.name, "mods", (response) => {
        res.json(response);
    });
}
exports.getPets = (req, res) => {
    pets = getItem("pets");
    fetchResponse.getResponse(pets, req.params.name, "pets", (response) => {
        res.json(response);
    });
}
exports.getPrimary = (req, res) => {
    primary = getItem("primary");
    fetchResponse.getResponse(primary, req.params.name, "primary", (response) => {
        res.json(response);
    });
}

exports.getResources = (req, res) => {
    resources = getItem("resources");
    fetchResponse.getResponse(resources, req.params.name, "resources", (response) => {
        res.json(response);
    });
}

exports.getSecondary = (req, res) => {
    secondary = getItem("secondary");
    fetchResponse.getResponse(secondary, req.params.name, "secondary", (response) => {
        res.json(response);
    });
}

exports.getSentinels = (req, res) => {
    sentinels = getItem("sentinels");
    fetchResponse.getResponse(sentinels, req.params.name, "sentinels", (response) => {
        res.json(response);
    });
}

exports.getWarframes = (req, res) => {
    warframes = getItem("warframes");
    fetchResponse.getResponse(warframes, req.params.name, "warframe", (response) => {
        res.json(response);
    });
}






