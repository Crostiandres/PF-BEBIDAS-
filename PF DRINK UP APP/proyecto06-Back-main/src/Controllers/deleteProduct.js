const { Products } = require("../db");

const deleteProduct = async (req, res) => {
    try {
      const {id} = req.params;
      const product = await Products.findByPk(id);
      if (product) {
        await product.destroy();
        res.send({ message: "Producto eliminado" });
      } else {
        res.send({ message: "No se encontró el producto" });
      }
    } catch (error) {
      res.send({messaje: "se a producido un error"})
    }
  };
  
  module.exports = deleteProduct;