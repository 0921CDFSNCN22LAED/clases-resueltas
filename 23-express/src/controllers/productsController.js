const productsService = require("../services/products");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", {
      products: productsService.getAll(),
    });
  },

  // Detail - Detail from one product
  //En la ruta el "id"
  detail: (req, res) => {
    const id = req.params.id;
    const product = productsService.findOne(id);

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
    productsService.createOne(req.body);
    res.redirect("/products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    const id = req.params.id;
    const product = productsService.findOne(id);

    res.render("product-edit-form", {
      product,
    });
  },

  // Update - Method to update
  update: (req, res) => {
    const id = req.params.id;

    productsService.updateOne(id, req.body);

    res.redirect(`/products/${id}`);
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const id = req.params.id;
    productsService.deleteOne(id);

    res.redirect(`/products`);
  },
};

module.exports = controller;
