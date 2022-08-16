'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.product.belongsToMany(models.sale, {
        through: salesProducts,
        foreignKey: 'saleId',
        otherKey: 'productId',
        as: 'Sales',
      });

      models.sale.belongsToMany(models.product, {
        through: salesProducts,
        foreignKey: 'productId',
        otherKey: 'saleId',
        as: 'Products',
      });
    }
  }

  salesProducts.init({
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps: false,
    sequelize,
    tableName: 'sales_products',
  });
  return salesProducts;
};