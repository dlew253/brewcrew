'use strict';
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "fix"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: 'thing'
        }
      }
    },
    firstname:  {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: 'thing'
        }
      }
    },  
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [1,99],
          msg: 'thing'
        }
      }
    },
  },{ 
    hooks: {
      beforeCreate: (pendingUser, options) => {
        if (pendingUser && pendingUser.password) {
          let hash = bcrypt.hashSync(pendingUser.password, 12);
          pendingUser.password = hash;
        }
      }
    }
    });
  user.associate = function(models) {
    models.user.belongsToMany(models.brewery, {through: "userBrewery"});
  };
  user.prototype.validPassword = function (passwordTyped) {
    return bcrypt.compareSync(passwordTyped, this.password);
  };
user.prototype.toJSON = function() {
  let userData = this.get();
  delete userData.password;
  return userData;
}
  return user;
};