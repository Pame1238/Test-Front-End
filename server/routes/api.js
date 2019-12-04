var express = require("express");
var router = express.Router();
const axios = require("axios");

const search = "https://api.mercadolibre.com/sites/MLA/search?q=";
const q = "mesas";
var consulta;
axios
  .get(search + q)
  .then(e => {
    consulta = e.data;
  })
  .catch(console.log("error"));

router.get("/", function(req, res, next) {
  res.send(consulta);
});

module.exports = router;
