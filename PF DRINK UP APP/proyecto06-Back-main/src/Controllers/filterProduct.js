const { Op } = require("sequelize");
const { Products, Reviews } = require("../db");

const filterProduct = async (req, res) => {
  const {type} = req.query;
  if(type){
    const product = await Products.findAll({
    where: {
      type: type
    },
  })
  res.send(product);
}else{
  const productos = await Products.findAll()
  res.send(productos);
}
};

module.exports = filterProduct;
