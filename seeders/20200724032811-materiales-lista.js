'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Material', [
    {
        nombre: 'No Reciclable',
      },
      {
      nombre: 'Papel',
    },
      {
      nombre: 'Carton',
    },
      {
      nombre: 'Plastico',
    },
      {
      nombre: 'Metal',
    },
      {
      nombre: 'Vidrio',
    },
      {
      nombre: 'Organico',
    }
      
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Material', null, {});
  }
};
