'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ecobin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ecobin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    nombre: DataTypes.STRING,
    dias_alarma: DataTypes.INTEGER.UNSIGNED,
    ubicacion_id: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Ecobin',
    tableName: 'ecobin'
  });
  return Ecobin;
};