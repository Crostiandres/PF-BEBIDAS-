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
      res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.messaje });
  }
};

module.exports = getAllProducts;
