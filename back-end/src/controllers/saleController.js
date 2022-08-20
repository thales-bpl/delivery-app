const saleService = require('../services/salesService');

const getAll = async (_req, res) => {
  const allSales = await saleService.getAll();
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { saleId } = req.params;
  const sale = await saleService.getById(saleId);
  return res.status(200).json(sale);
};

const getByUserId = async (req, res) => {
  const { userId } = req.params;
  const allUserSales = await saleService.getByUserId(userId);
  return res.status(200).json(allUserSales);
};

const postSale = async (req, res) => {
  const { body, headers } = req;
  const newSale = await saleService.postSaleProduct(body, headers.authorization);
  return res.status(201).json(newSale);
};

const updateSale = async (req, res) => {
  const { body } = req;
  const { saleId } = req.params;
  const { authorization } = req.headers;
  const result = await saleService.updateSale(body, saleId, authorization);
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
  getByUserId,
  postSale,
  updateSale,
};
