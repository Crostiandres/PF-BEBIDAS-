const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone:{
        type: DataTypes.STRING,
      },
      ubicacion:{
        type: DataTypes.STRING,
      },
      record:{
        type: DataTypes.ARRAY(DataTypes.INTEGER)
      }
    }
  );
};