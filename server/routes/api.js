var express = require("express");
var router = express.Router();
const axios = require("axios");

const search = "https://api.mercadolibre.com/sites/MLA/search?q=";
const q = "mesas";
var query;

router.get("/", function(req, res, next) {
  res.send(consulta);
  console.log(consulta);
});

router.get("/items?q=", function(req, res, next) {
  axios
    .get(search + q)
    .then(e => {
      query = {
        author: {
          name: "Pame",
          lastname: "Torres Lujan"
        },
        categories: [],
        items: e.data.results.map(element => {
          return {
            id: element.id,
            title: element.title,
            price: {
              currency: element.currency_id,
              amount: Math.trunc(element.installments.amount),
              decimals:
                element.installments.amount -
                Math.trunc(element.installments.amount)
            },
            picture: element.thumbnail,
            condition: element.condition,
            free_shipping: element.shipping.free_shipping
          };
        })
      };
    })
    .catch(console.log("error"));

  res.send(query);
});
module.exports = router;
