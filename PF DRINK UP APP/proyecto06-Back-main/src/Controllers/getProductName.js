const { Op } = require("sequelize");
const { Products } = require("../db");

const getByName = (req, res, next) => {
  const { search } = req.query;
  Products.findAll({
    where: {
      name: {
        [Op.iLike]: `%${search}%`,
      },
    },
  })
    .then((products) => {
      res.send(products);
    })
    .catch((error) => next(error));
};

module.exports = getByName
