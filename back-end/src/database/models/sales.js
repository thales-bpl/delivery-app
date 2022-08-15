'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // sale.belongsTo(models.User, {
      //   foreignKey: 'user_id',
      //   as: 'user',
      // });
    }
  }

  sale.init({
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9, 2),
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    status: DataTypes.STRING,
    sale_date: { type: DataTypes.DATE, defaultValue: Date.now() },
  }, {
    timestamps: false,
    sequelize,
    modelName: 'sale',
  });

  return sale;
};