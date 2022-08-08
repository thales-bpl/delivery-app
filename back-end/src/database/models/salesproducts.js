'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.belongsToMany(models.Sale, {
        through: SalesProduct,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'sales',
      });

      models.Sale.belongsToMany(models.Sale, {
        through: SalesProduct,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        as: 'products',
      });
    }
  }
  SalesProduct.init({
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false,
    sequelize,
    modelName: 'SalesProduct',
  });
  return SalesProduct;
};