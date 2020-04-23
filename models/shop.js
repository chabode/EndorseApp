'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Shop extends Model{}
  Shop.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, { sequelize });
  Shop.associate = function(models) {
    // associations can be defined here
    Shop.belongsToMany(models.Seleb,{through:models.SelebShop})
  };
  return Shop;
};