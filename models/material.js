'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Material.belongsToMany(models.CentroReciclaje,{
        through: 'TipoProcesamiento',
        foreignKey: 'material_id',
        as: 'centros'
      });
      models.Material.belongsToMany(models.InformacionReutilizacion,{
        through: 'TipoInformacion',
        foreignKey: 'material_id',
        as: 'informaciones'
      });
    }
  };
  Material.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'material'
  });
  return Material;
};