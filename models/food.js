'use strict';
const {
  Model
} = require('sequelize');

const formatIdCurrency = require("../helper/formatting/idrCurrency");

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.hasMany(models.FoodOrder)
    }

    getCurrency() {
      return formatIdCurrency(this.price)
    }
  }
  Food.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};