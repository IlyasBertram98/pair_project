'use strict';
const {
  Model
} = require('sequelize');
const dateFormat = require('../helper/formatting/dateFormatID');
const dateFormatForEdit = require('../helper/formatting/formatingDateForInput');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }

    dateFormat(){
      return dateFormat(this.dateOfBirth)
    }

    get dateFormatForEdit() {
      return dateFormatForEdit(this.dateOfBirth)
    }

  }
  Profile.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};