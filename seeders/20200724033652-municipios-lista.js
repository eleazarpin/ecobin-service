'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Municipio', [
      {nombre:"José C. Paz",provincia_id:6},
      {nombre:"La Matanza",provincia_id:6},
      {nombre:"Moreno",provincia_id:6},
      {nombre:"Tigre",provincia_id:6},
      {nombre:"La Plata",provincia_id:6},
      {nombre:"Merlo",provincia_id:6},
      {nombre:"Esteban Echeverría",provincia_id:6},
      {nombre:"San Miguel",provincia_id:6},
      {nombre:"Hurlingham",provincia_id:6},
      {nombre:"General Rodríguez",provincia_id:6},
      {nombre:"Morón",provincia_id:6},
      {nombre:"Ituzaingó",provincia_id:6},
      {nombre:"Tres de Febrero",provincia_id:6},
      {nombre:"Lanús",provincia_id:6},
      {nombre:"Lomas de Zamora",provincia_id:6},
      {nombre:"Florencio Varela",provincia_id:6},
      {nombre:"Quilmes",provincia_id:6},
      {nombre:"Avellaneda",provincia_id:6},
      {nombre:"San Isidro",provincia_id:6},
      {nombre:"General San Martín",provincia_id:6},
      {nombre:"Malvinas Argentinas",provincia_id:6},
      {nombre:"Ezeiza",provincia_id:6},
      {nombre:"Ciudad Autónoma de Buenos Aires",provincia_id:2}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Municipio', null, {});
  }
};
