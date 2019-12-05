var express = require("express");
var router = express.Router();
const axios = require("axios");

// const search = "https://api.mercadolibre.com/sites/MLA/search?q=";
// const categoryUrl = "https://api.mercadolibre.com/categories/";
// var category_id = "";
// var con = [];
// var cat = [];
// var c = [];
// const q = "Apple ipod";
// var consulta = [];

//categories

//consulta
// axios
//   .get(search + q)
//   .then(e => {
//     consulta = e.data.results.map(element => {
//       return {
//         author: {},
//         categories: cat,
//         items: [
//           {
//             id: element.id,
//             title: element.title,
//             price: {},
//             picture: "",
//             condition: "",
//             free_shipping: ""
//           }
//         ]
//       };
//     });

//     console.log(consulta);
//   })
//   .catch(console.log("error"));

router.get("/", async (req, res, next) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`
    );

    const categories = response.data.filters.find(
      filter => filter.id === "category"
    );
  }

  res.send(cat);
});

module.exports = router;
