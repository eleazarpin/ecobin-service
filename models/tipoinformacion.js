'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoInformacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.TipoInformacion.belongsTo(models.InformacionReutilizacion,{
        foreignKey: 'info_id',
        as: 'tipo_informacion'
      });
    }
  };
  TipoInformacion.init({
    info_id: {
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
    modelName: 'TipoInformacion',
    tableName: 'tipo_informacion'
  });
  return TipoInformacion;
};