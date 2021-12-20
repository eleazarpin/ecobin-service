'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Ubicacion.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    nombre: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER.UNSIGNED,
    empresa_id: DataTypes.INTEGER.UNSIGNED,
    municipio_id: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Ubicacion',
    tableName: 'ubicacion'
  });
  return Ubicacion;
};