const { sale, product, salesProducts } = require('../database/models');
const { verifyToken } = require('../utils/jwt');

const formatSale = (saleById) => {
  const formatedProducts = saleById.products.map((prod) => ({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    urlImage: prod.urlImage,
    quantity: prod.salesProducts.quantity,
  }));

  const { products: unformatedProd, ...saleInfo } = saleById;
  const formatedSale = { ...saleInfo, products: formatedProducts };
  return formatedSale;
};

const getAll = async () => { // TO-DO: OPTIMIZE JOINS
  const allSales = await sale.findAll({
    include: { model: product, as: 'products' },
  });
  if (allSales.length > 0) {
    const formatedSales = allSales.map(({ dataValues }) => formatSale(dataValues));
    return formatedSales;
  }
  
  const formatedSale = formatSale(allSales[0].dataValues);
  return formatedSale;
};

const getById = async (id) => { // TO-DO: OPTIMIZE JOINS
  const saleById = await sale.findByPk(id, {
    include: { model: product, as: 'products' },
  });

  const formatedSale = formatSale(saleById.dataValues);
  return formatedSale;
};

const getByUserId = async (userId) => { // TO-DO: OPTIMIZE JOINS
  const saleByUser = await sale.findAll({
    include: { model: product, as: 'products' },
    where: { userId },
  });

  return saleByUser;
};

const postSale = async (saleBody) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber } = saleBody;

  const { id } = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
    saleDate: new Date(),
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

const updateSale = async (status, id, token) => {
  verifyToken(token);
  await sale.update(status, { where: { id } });
  const newData = await getById(id);
  return newData;
};

module.exports = {
  getAll,
  getById,
  getByUserId,
  postSale,
  postSaleProduct,
  updateSale,
};
