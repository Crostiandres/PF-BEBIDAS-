const { Router } = require("express");
const getAllProducts = require("../Controllers/getAllProducts");
const postProduct = require("../Controllers/postProducts");
const putProduct = require("../Controllers/putProduct");
const getByName = require("../Controllers/getProductName");
const getByID = require("../Controllers/getById");
const filterProduct = require("../Controllers/filterProduct");

const router = Router();
router.get("/search", getByName);

router.get("/all", getAllProducts);
router.get("/filtrado", filterProduct);

router.get("/:id", getByID);


router.put("/putProduct", putProduct);

router.post("/postProduct", postProduct);

module.exports = router;
