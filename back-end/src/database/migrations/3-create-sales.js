'use strict';

// TO-DO: total_price precisa ser tipo DECIMAL (atualmente está vindo como INT)
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'users',
        }
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'users',
        }
      },
      total_price: {
        type: Sequelize.DECIMAL(9, 2),
      },
      delivery_address: {
        type: Sequelize.STRING
      },
      delivery_number: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      sale_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Sales');
  }
};