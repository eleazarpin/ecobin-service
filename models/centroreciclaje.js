'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CentroReciclaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CentroReciclaje.hasMany(models.HorarioApertura,{
        foreignKey: 'centro_id',
        as: 'horarios'
      });
      models.CentroReciclaje.belongsToMany(models.Material,{
        through: 'TipoProcesamiento',
        foreignKey: 'centro_id',
        as: 'materiales'
      });
      models.CentroReciclaje.hasMany(models.TipoProcesamiento,{
        foreignKey: 'centro_id',
        as: 'tipo_procesamiento'
      });
      // define association here
    }
  };
  CentroReciclaje.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },

    nombre: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.INTEGER.UNSIGNED,
    municipio_id: DataTypes.INTEGER.UNSIGNED,

    lat: DataTypes.DECIMAL(10,6),
    lng: DataTypes.DECIMAL(10,6),
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CentroReciclaje',
    tableName: 'centro_reciclaje'
  });
  return CentroReciclaje;
};