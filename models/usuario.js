'use strict';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    async setPassword(value){
      let pass = await bcrypt.hash(value,8);
      this.setDataValue('clave', pass);
    }
  };
  Usuario.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    usuario: DataTypes.STRING,
    clave: {
      type: DataTypes.STRING,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    token: DataTypes.STRING,
    email: DataTypes.STRING,
    ubicacion_id: DataTypes.INTEGER.UNSIGNED,
    rol: DataTypes.TINYINT.UNSIGNED
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuario'
  });
  return Usuario;
};