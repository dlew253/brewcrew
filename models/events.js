const bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    info: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  events.associate = function(models) {
      models.events.belongsToMany(models.user, {through: "userEvent"});
      models.events.hasOne(models.brewery);
    };
  return events;
};