'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Teacher, {
        foreignKey: 'id_Teacher',
        targetKey: 'id',
        as: 'TeacherRating'
      })
      Rating.belongsTo(models.Student, {
        foreignKey: 'id_Student',
        targetKey: 'id',
        as: 'StudentRating'
      })
    }
  };
  Rating.init({
    id_Teacher: DataTypes.INTEGER,
    id_Student: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};