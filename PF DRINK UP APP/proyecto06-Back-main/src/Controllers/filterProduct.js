const { Op } = require("sequelize");
const { Products, Reviews } = require("../db");

const filterProduct = async (req, res, next) => {
  const {
    tipos,
    precio,
    ofertas,
    reviews,
    ventas,
    porcentajeDesc,
    Variedad,
    marca,
    contenido,
    discountOrd,
    contenidoOrd,
    envase,
  } = req.body;

  const findProduct = {};
  const oredenar = [];

  if (tipos) {
    findProduct.type = {
      [Op.eq]: tipos,
    };
  }

  if (Variedad) {
    findProduct.Variety = {
      [Op.eq]: Variedad,
    };
  }

  if (envase) {
    findProduct.container = {
      [Op.eq]: envase,
    };
  }

  if (contenido) {
    findProduct.amount = {
      [Op.gte]: contenido,
    };
  }

  if (marca) {
    findProduct.brand = {
      [Op.eq]: marca,
    };
  }

  if (ofertas) {
    findProduct.ableDiscount = {
      [Op.eq]: ofertas,
    };
  }

  if (porcentajeDesc) {
    findProduct.percentageDiscount = {
      [Op.gte]: porcentajeDesc,
    };
  }

  if (discountOrd === "A") {
    oredenar.push(["percentageDiscount", "ASC"]);
  }

  if (discountOrd === "D") {
    oredenar.push(["percentageDiscount", "DESC"]);
  }

  if (contenidoOrd === "A") {
    oredenar.push(["amount", "ASC"]);
  }

  if (contenidoOrd === "D") {
    oredenar.push(["amount", "DESC"]);
  }

  if (precio === "A" && ventas === "") {
    oredenar.push(["price", "ASC"]);
  }
  if (precio === "D" && ventas === "") {
    oredenar.push(["price", "DESC"]);
  }

  if (ventas === "A" && precio === "") {
    oredenar.push(["sells", "ASC"]);
  }

  if (ventas === "D" && precio === "") {
    oredenar.push(["sells", "DESC"]);
  }

  if (reviews === "A") {
    oredenar.push(["averageScore", "ASC"]);
  }
  if (reviews === "D") {
    oredenar.push(["averageScore", "DESC"]);
  }
  Products.findAll({
    where: findProduct,
    include: [Reviews],
    order: oredenar,
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = filterProduct;
