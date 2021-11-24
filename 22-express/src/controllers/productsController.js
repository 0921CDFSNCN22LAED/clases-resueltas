const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const productsFileText = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileText); //ARRAY de PRODUCTOS

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", {
      products: products,
    });
  },

  // Detail - Detail from one product
  //En la ruta el "id"
  detail: (req, res) => {
    const id = req.params.id;

    const product = products.find((prod) => {
      return prod.id == id;
    });

    res.render("detail", {
      product,
    });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    res.send("Te termino la próxima");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;

    const product = products.find((prod) => {
      return prod.id == id;
    });

    res.render("product-edit-form", {
      product,
    });
  },

  // Update - Method to update
  update: (req, res) => {
    res.send("Te termino la próxima");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    res.send("Te termino la próxima");
  },
};

module.exports = controller;
