'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoProcesamiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.TipoProcesamiento.belongsTo(models.CentroReciclaje,{
        foreignKey: 'centro_id',
        as: 'tipo_procesamiento'
      });
    }
  };
  TipoProcesamiento.init({
    centro_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    material_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    }

  }, {
    sequelize,
    modelName: 'TipoProcesamiento',
    tableName: 'tipo_procesamiento'
  });
  return TipoProcesamiento;
};