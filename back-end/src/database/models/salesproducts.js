'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sales_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.product.belongsToMany(models.sale, {
        through: sales_products,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
        as: 'sales',
      });

      models.sale.belongsToMany(models.sale, {
        through: sales_products,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
        as: 'products',
      });
    }
  }
  sales_products.init({
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    underscored: true,
    timestamps: false,
    sequelize,
    modelName: 'sales_products',
  });
  return sales_products;
};