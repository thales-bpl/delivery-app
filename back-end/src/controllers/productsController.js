const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const productById = await productService.getById(id);
  return res.status(200).json(productById);
}

module.exports = {
  getAll,
  getById,
};
