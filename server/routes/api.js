var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/items", async (req, res) => {

  try{
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)

     const categories_id = response.data.results.map(e =>{
      return e.category_id
    });
    
    const filtro_categories = categories_id.filter((e, index, arr) =>{
      return arr.indexOf(e) === index;
    });
    
    res.json({
      author: {
        name: "Pame",
        lastname: "Torres Lujan"
      },
      categories: filtro_categories,
      items: response.data.results.map(element => {
        return {
          id: element.id,
          title: element.title,
          price: {
            currency: element.currency_id,
            amount: element.price
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

router.get("/items/:id", async (req, res) =>{
  try{
    const response = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)
    const description = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/descriptions`)
    res.json({
        author: {
        name: "Pame",
        lastname: "Torres Lujan"
      },
      item: {
        id: response.data.id,
        title: response.data.title,
        price: {
          currency: response.data.currency_id,
          amount: response.data.price
        },
        picture: response.data.thumbnail,
        condition: response.data.condition,
        free_shipping: response.data.shipping.free_shipping,
        sold_quantity: response.data.sold_quantity,
        description: description.data[0].plain_text

      }
    })
  }catch(error){
    if (error.response) {
      res
        .status(error.response.status)
        .json({ error: error.response.data.message });
    }
  }
}); 

module.exports = router;
