'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cesto.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },

    vaciamiento: DataTypes.DATE,
    estado: DataTypes.TINYINT.UNSIGNED,
    volumen: DataTypes.TINYINT.UNSIGNED,
    ecobin_id: DataTypes.INTEGER.UNSIGNED,
    material_id: DataTypes.INTEGER.UNSIGNED
  }, {
    sequelize,
    modelName: 'Cesto',
    tableName: 'cesto'
  });
  return Cesto;
};