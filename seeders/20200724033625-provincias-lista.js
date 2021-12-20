'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Provincia', [
      {id:54,nombre:"Misiones",pais_id:1},
      {id:74,nombre:"San Luis",pais_id:1},
      {id:70,nombre:"San Juan",pais_id:1},
      {id:30,nombre:"Entre Ríos",pais_id:1},
      {id:78,nombre:"Santa Cruz",pais_id:1},
      {id:62,nombre:"Río Negro",pais_id:1},
      {id:26,nombre:"Chubut",pais_id:1},
      {id:14,nombre:"Córdoba",pais_id:1},
      {id:50,nombre:"Mendoza",pais_id:1},
      {id:46,nombre:"La Rioja",pais_id:1},
      {id:10,nombre:"Catamarca",pais_id:1},
      {id:42,nombre:"La Pampa",pais_id:1},
      {id:86,nombre:"Santiago del Estero",pais_id:1},
      {id:18,nombre:"Corrientes",pais_id:1},
      {id:82,nombre:"Santa Fe",pais_id:1},
      {id:90,nombre:"Tucumán",pais_id:1},
      {id:58,nombre:"Neuquén",pais_id:1},
      {id:66,nombre:"Salta",pais_id:1},
      {id:22,nombre:"Chaco",pais_id:1},
      {id:34,nombre:"Formosa",pais_id:1},
      {id:38,nombre:"Jujuy",pais_id:1},
      {id:2,nombre:"Ciudad Autónoma de Buenos Aires",pais_id:1},
      {id:6,nombre:"Buenos Aires",pais_id:1},
      {id:94,nombre:"Tierra del Fuego",pais_id:1}
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Provincia', null, {});
  }
};
