"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodOrder.belongsTo(models.Order)
      FoodOrder.belongsTo(models.Food)
    }
  }

  FoodOrder.init(
    {
      OrderId: DataTypes.INTEGER,
      FoodId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "FoodOrder",
    }
  );
  return FoodOrder;
};
