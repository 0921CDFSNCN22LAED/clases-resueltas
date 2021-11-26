const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const productsFileText = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileText); //ARRAY de PRODUCTOS

function saveProducts() {
  const texto = JSON.stringify(products, null, 4);
  fs.writeFileSync(productsFilePath, texto, "utf-8");
}

module.exports = {
  getAll() {
    return products;
  },

  findOne(id) {
    const product = products.find((prod) => {
      return prod.id == id;
    });
    return product;
  },

  createOne(body) {
    const product = {
      id: Date.now(), //timestamp
      ...body,
    };

    products.push(product);

    saveProducts();
  },

  updateOne(id, body) {
    const index = products.findIndex((prod) => prod.id == id);

    const updatedProduct = {
      id: products[index].id,
      ...body,
    };

    products[index] = updatedProduct;

    saveProducts();
  },

  deleteOne(id) {
    const index = products.findIndex((prod) => prod.id == id);

    products.splice(index, 1);

    saveProducts();
  },
};
