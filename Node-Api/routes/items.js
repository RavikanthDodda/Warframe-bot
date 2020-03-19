const express = require("express");

const item_controller = require("../controllers/item_controller");

const router = express.Router();


router.get("/any/:name", item_controller.getAny);

router.get("/archwing/:name", item_controller.getArchwing);

router.get("/enemy/:name", item_controller.getEnemy);

router.get("/gear/:name", item_controller.getGear)

router.get("/melee/:name", item_controller.getMelee);

router.get("/mods/:name", item_controller.getMods);

router.get("/pets/:name", item_controller.getPets);

router.get("/primary/:name", item_controller.getPrimary);

router.get("/resources/:name", item_controller.getResources);

router.get("/secondary/:name", item_controller.getSecondary);

router.get("/sentinels/:name", item_controller.getSentinels);

router.get("/warframe/:name", item_controller.getWarframes);

module.exports = router;
