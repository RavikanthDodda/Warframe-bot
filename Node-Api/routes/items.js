const express = require("express");
const Items = require("warframe-items");
const fetchResponse = require("../services/fetch_response");

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

const router = express.Router();


router.get("/any/:name", (req, res) => {
  fetchResponse.getResponse(items, req.params.name, (response) => {
    res.json(response);
  });
});

router.get("/archwing/:name", (req, res) => {
  fetchResponse.getResponse(archwing, req.params.name, "archwing", (response) => {
    res.json(response);
  });
});

router.get("/enemy/:name", (req, res) => {
  fetchResponse.getResponse(enemy, req.params.name, "enemy", (response) => {
    res.json(response);
  });
});

router.get("/gear/:name", (req, res) => {
  fetchResponse.getResponse(gear, req.params.name, "gear", (response) => {
    res.json(response);
  });
});

router.get("/melee/:name", (req, res) => {
  fetchResponse.getResponse(melee, req.params.name, "melee", (response) => {
    res.json(response);
  });
});

router.get("/mods/:name", (req, res) => {
  fetchResponse.getResponse(mods, req.params.name, "mods", (response) => {
    res.json(response);
  });
});

router.get("/pets/:name", (req, res) => {
  fetchResponse.getResponse(pets, req.params.name, "pets", (response) => {
    res.json(response);
  });
});

router.get("/primary/:name", (req, res) => {
  fetchResponse.getResponse(primary, req.params.name, "primary", (response) => {
    res.json(response);
  });
});

router.get("/resources/:name", (req, res) => {
  fetchResponse.getResponse(resources, req.params.name, "resources", (response) => {
    res.json(response);
  });
});

router.get("/secondary/:name", (req, res) => {
  fetchResponse.getResponse(secondary, req.params.name, "secondary", (response) => {
    res.json(response);
  });
});

router.get("/sentinels/:name", (req, res) => {
  fetchResponse.getResponse(sentinels, req.params.name, "sentinels", (response) => {
    res.json(response);
  });
});

router.get("/warframe/:name", (req, res) => {
  fetchResponse.getResponse(warframes, req.params.name, "warframe", (response) => {
    res.json(response);
  });
});
module.exports = router;
