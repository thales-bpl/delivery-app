const { product } = require('../database/models');

const getAll = async () => {
  const allProducts = await product.findAll();
  return allProducts;
};

const getById = async (id) => {
  const productById = await product.findAll({ where: { id } });
  return productById;
};

module.exports = {
  getAll,
  getById,
};
