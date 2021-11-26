const productService = require("../services/products");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    const lastVisitedProducts = productService.getAll().filter((prod) => {
      return prod.category == "visited";
    });
    const inSaleProducts = productService.getAll().filter((prod) => {
      return prod.category == "in-sale";
    });

    res.render("index", {
      lastVisitedProducts: lastVisitedProducts,
      inSaleProducts: inSaleProducts,
    });
  },
  search: (req, res) => {
    // Do the magic
    // req.query
  },
};

module.exports = controller;
