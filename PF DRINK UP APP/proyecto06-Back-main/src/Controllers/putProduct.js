const { Products } = require("../db");

const putProduct = async (req, res) => {
    try {
      const changes = req.body;
      const product = await Products.findByPk(changes.id);
      if (product) {
        for (const key in changes) {
          product[key] = changes[key];
        }
        await product.save();
  
        res.send(product);
      } else {
        res.send({ message: "No se encontró el producto" });
      }
    } catch (error) {
      res.send({messaje: "se a producido un error"})
    }
  };
  
  module.exports = putProduct;