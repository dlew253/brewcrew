'use strict';
module.exports = (sequelize, DataTypes) => {
  const brewery = sequelize.define('brewery', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING
  }, {});
  brewery.associate = function(models) {
    models.brewery.belongsToMany(models.user, {through: "userBreweries"});
  };
  return brewery;
};