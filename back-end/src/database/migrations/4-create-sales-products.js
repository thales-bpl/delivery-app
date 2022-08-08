'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SalesProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'Sales'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          key: 'id',
          model: 'Sales'
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
    await queryInterface.dropTable('SalesProducts');
  }
};