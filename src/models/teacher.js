'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Rating, {
        foreignKey: 'id_Teacher',
        sourceKey: 'id',
        as: 'TeacherRating'
      })
    }
  };
  Teacher.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    photo: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    dregree: DataTypes.STRING,
    cetificate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};