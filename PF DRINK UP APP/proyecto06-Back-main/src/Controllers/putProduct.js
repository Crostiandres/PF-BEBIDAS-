const { Products } = require("../db");

const putProduct = async (req, res) => {
    try {
      const { productId, changes } = req.body;
  
      const product = await Products.findByPk(productId);
  
      if (product !== null) {
        for (const change of changes) {
          const { name, data } = change;
          product[name] = data;
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