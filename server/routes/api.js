var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/items", async (req, res) => {
  try{
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
    res.json({
      author: {
        name: "Pame",
        lastname: "Torres Lujan"
      },
      categories: [],
      items: response.data.results.map(element => {
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
        }
      })
    })
  }catch(error){
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  }
});

router.get("/test", function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
