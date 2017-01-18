'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Stories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING

      },
      city: {
        type: Sequalize.STRING
      },
      perspective: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING

      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Stories');
  }

};

};

