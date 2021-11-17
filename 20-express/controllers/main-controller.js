const dishes = [
  {
    id: 15,
    name: "Carpaccio fresco",
    desc: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
    img: "/images/Carpaccio-de-salmon.jpg",
  },
  {
    id: 2000,
    name: "Risotto de berenjena",
    desc: "Risotto de berenjena y queso de cabra",
    price: "U$S 47.00",
    img: "/images/Carpaccio-de-salmon.jpg",
  },
  {
    id: 5,
    name: "Mousse de arroz",
    desc: "Mousse de arroz con leche y aroma de azahar",
    price: "U$S 27.50",
    img: "/images/Carpaccio-de-salmon.jpg",
  },
  {
    id: 1,
    name: "Espárragos blancos",
    desc: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "U$S 37.50",
    img: "/images/esparragos.png",
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", {
      dishes,
    });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const dish = dishes.find((dish) => {
      return id == dish.id;
    });
    if (dish) {
      res.render("detalle-menu", {
        dish,
        pageTitle: dish.name,
      });
    } else {
      res.send("Te equivocaste, hermano. 404");
    }
  },
};
