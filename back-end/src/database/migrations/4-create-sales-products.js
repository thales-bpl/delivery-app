'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'sales'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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