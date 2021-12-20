'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pais', [{
      id: 1,
      nombre: "Argentina"

    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pais', null, {});
  }
};
