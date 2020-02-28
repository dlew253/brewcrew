'use strict';
module.exports = (sequelize, DataTypes) => {
  const userBrewery = sequelize.define('userBrewery', {
    userId: DataTypes.INTEGER,
    breweryId: DataTypes.INTEGER
  }, {});
  userBrewery.associate = function(models) {
    
  };
  return userBrewery;
};