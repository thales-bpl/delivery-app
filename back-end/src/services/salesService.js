const { sale, product, salesProducts } = require('../database/models');
const { verifyToken } = require('../utils/jwt');

const getAll = async () => { // TO-DO: OPTIMIZE JOINS
  const allSales = await sale.findAll({
    include: [
      { model: product, as: 'products' },
    ],
  });

  return allSales;
};

const getById = async (id) => { // TO-DO: OPTIMIZE JOINS
  const saleById = await sale.findByPk(id, {
    include: [
      { model: product, as: 'products' },
    ],
  });
  return saleById;
};

const postSale = async (saleBody) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleBody;

  const { id } = await sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente',
  });

  return id;
};

const postSaleProduct = async (salesProductBody, token) => {
  verifyToken(token);
  const { purchasedProducts } = salesProductBody;
  const newSaleId = await postSale(salesProductBody);

  const newProducts = purchasedProducts.map((item) => ({ ...item, saleId: newSaleId }));
  await salesProducts.bulkCreate(newProducts);

  return { newSaleId };
};

module.exports = {
  getAll,
  getById,
  postSale,
  postSaleProduct,
};