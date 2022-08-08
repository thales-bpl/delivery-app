'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Sale, {
        foreignKey: 'user_id',
        as: 'sales',
      });
        
      // User.hasMany(models.Sale, {
      //   foreignKey: 'seller_id',
      //   as: 'sellerId',
      // });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    sequelize,
    modelName: 'User',
  });
  return User;
};