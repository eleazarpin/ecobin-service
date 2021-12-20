'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InformacionReutilizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.InformacionReutilizacion.belongsToMany(models.Material,{
        through: 'TipoInformacion',
        foreignKey: 'info_id',
        as: 'materiales'
      });
      models.InformacionReutilizacion.hasMany(models.TipoInformacion,{
        foreignKey: 'info_id',
        as: 'tipo_informacion'
      });
    }
  };
  InformacionReutilizacion.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    dificultad: DataTypes.TINYINT.UNSIGNED
    // tipo_residuo_id: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'InformacionReutilizacion',
    tableName: 'informacion_reutilizacion'
  });
  return InformacionReutilizacion;
};