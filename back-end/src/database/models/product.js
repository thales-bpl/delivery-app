'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Product.hasMany(models.SalesProduct, {
      //   foreignKey: 'product_id',
      //   as: 'productId',
      // });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Product',
  });
  return Product;
};