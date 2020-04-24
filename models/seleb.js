'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  const rupiah = require('../helpers/rupiah')
  class Seleb extends Model{
    dataEndorsement(){
      let gender = this.gender
      let followers = rupiah(this.followers)
      let fee = rupiah(this.fee)
      return `${gender} - Followers : ${followers} - Fee : Rp. ${fee}`
    }
  }
  Seleb.init({
    name: {
      type: DataTypes.STRING,
       validate:{
         notEmpty:{
           msg : 'Name Required'
         }
       }
     },
    age: {
      type: DataTypes.INTEGER,
      validate:{
        min: {
          args : 0,
          msg : 'Age Required'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull : false,
       validate:{
         notNull:{
           msg : 'Gender Required'
         }
       }
     },
    followers: {
      type: DataTypes.INTEGER,
      validate:{
        min: 
        {
          args: 10000,
          msg : 'Followers Minimal 10k'
        },
      }
     },
    fee: {
      type: DataTypes.INTEGER
     }
  }, { sequelize });

  Seleb.beforeCreate((instance,options)=> {
    if(instance.fee == null || instance.fee == 0){
      instance.fee = instance.followers
    }
  })

  Seleb.associate = function(models) {
    // associations can be defined here
    Seleb.belongsToMany(models.Shop,{through:models.SelebShop})
  };
  return Seleb;
};