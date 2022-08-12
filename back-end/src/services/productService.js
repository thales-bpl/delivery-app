const { Product } = require('../database/models');

const getAll = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getById = async (id) => {
  const productById = await Product.findAll({ where: { id } });
  return productById
}

module.exports = {
  getAll,
  getById,
}