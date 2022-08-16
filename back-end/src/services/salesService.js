const { sale } = require('../database/models');
const { salesProducts } = require('../database/models');

const getAll = async () => { // TO-DO: JOINS
  const allSales = await sale.findAll();
  return allSales;
};

const getById = async (id) => { // TO-DO: JOINS
  const saleById = await sale.findAll({ where: { id } });
  return saleById;
};

const postSale = async (saleBody) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleBody;

  const { id } = await sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente',
  });

  return id;
};

const postSaleProduct = async (salesProductBody) => {
  const { products } = salesProductBody;
  const newSaleId = await postSale(salesProductBody);

  await salesProducts.bulkCreate({
    products,
  }, {
    where: { id: newSaleId },
  });

  return { newSaleId };
};

module.exports = {
  getAll,
  getById,
  postSale,
  postSaleProduct,
};