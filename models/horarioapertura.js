'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HorarioApertura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.HorarioApertura.belongsTo(models.CentroReciclaje,{
        foreignKey: 'centro_id',
        as: 'horarios'
      });
    }
  };
  HorarioApertura.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    dia_semana: DataTypes.TINYINT.UNSIGNED,
    hora_apertura: DataTypes.TIME,
    hora_cierre: DataTypes.TIME,
    centro_id: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'HorarioApertura',
    tableName: 'horario_apertura'
  });
  return HorarioApertura;
};