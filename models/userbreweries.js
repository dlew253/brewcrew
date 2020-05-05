'use strict';
module.exports = (sequelize, DataTypes) => {
  const userbreweries = sequelize.define('userbreweries', {
    userId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER
  }, {});
  userbreweries.associate = function(models) {
    // associations can be defined here
  };
  return userbreweries;
};