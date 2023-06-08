const { Products, Reviews } = require("../db");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      include: {
        model: Reviews,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (products.length) {
      res.status(200).json(products);
    } else {
      res.status(404).json({ messaje: "missing Products" });
    }
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getAllProducts;
