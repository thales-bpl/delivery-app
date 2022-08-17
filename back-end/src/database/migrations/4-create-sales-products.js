'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'sale_id',
        references: {
          key: 'id',
          model: 'sales'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'product_id',
        references: {
          key: 'id',
          model: 'sales'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      }/* ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } */
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
};