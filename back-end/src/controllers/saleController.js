const saleService = require('../services/salesService');

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getById(id);
  return res.status(200).json(sale);
};

const postSale = async (req, res) => {
  const { body, headers } = req;
  const newSale = await saleService.postSaleProduct(body, headers.authorization);
  return res.status(201).json(newSale);
};

const updateSale = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await saleService.updateSale(body, id, authorization);
  return res.status(200).json(result);
};

// const postSaleTest = async (req, res) => {
//   const { body } = req;
//   const newSale = await saleService.postSale(body);
//   return res.status(208).json(newSale);
// };

module.exports = {
  getAll,
  getById,
  postSale,
  updateSale,
  // postSaleTest,
};
