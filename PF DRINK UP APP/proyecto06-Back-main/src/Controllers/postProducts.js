const { Products } = require("../db");

const postProduct = async (req, res, next) => {
  const product = req.body;
  if (Array.isArray(product)) {
    const productosExistentes = [];
    const productoCreado = [];
    const promises = product.map(async (product1) => {
      const findProduct = await Products.findOne({
        where: { name: product1.name, amount: product1.amount },
      });
      if (!findProduct) {
        productoCreado.push(`${product1.name}`);
        await Products.create(product1).catch((error) => next(error));
      } else {
        productosExistentes.push(`${product1.name}`);
      }
    });

    await Promise.all(promises);
    res.send({
      productCreated: productoCreado,
      existingProduct: productosExistentes,
    });
  } else {
    const findProduct = await Products.findOne({
      where: { name: product.name, amount: product.amount },
    });
    if (!findProduct) {
      Products.create(product)
        .then((createProduct) => {
          res.send(createProduct);
        })
        .catch((error) => next(error));
    } else {
      res.send({ messaje: "producto existente", product: findProduct });
    }
  }
};

module.exports = postProduct;
