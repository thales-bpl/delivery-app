'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.Sale, {
        foreignKey: 'user_id',
        as: 'sales',
      });
        
      // user.hasMany(models.Sale, {
      //   foreignKey: 'seller_id',
      //   as: 'sellerId',
      // });
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'user',
  });
  return user;
};