const { Products, Reviews } = require("../db");


const getByID = (req, res, next) => {
    const { id } = req.params;
    Products.findByPk(id, {include: [
        Reviews
    ]})
        .then((products) => {
          res.send(products);
        })
        .catch((error) => next(error));
}

module.exports = getByID;