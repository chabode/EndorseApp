const {Shop, Seleb, SelebShop} = require('../models')
const rupiah = require('../helpers/rupiah')

class ShopController{
  static show(req,res){
    Shop.findAll()
    .then(data=> {
      res.render('shop',{data})
    })
    .catch(error=> {
      res.send(error)
    })
  }
  static showSeleb(req,res){

  }

  static addEndorsementForm(req,res){
    let shop;
    Shop.findAll({
      where:{
        id : req.params.shop_id
      },
      include:[{model : Seleb}]
    })
    .then((data)=>{
      shop = data
      // console.log(shop)
      return Seleb.findAll()
      })
      .then((data)=>{
        // console.log(data)
        res.render('addEndorsement',{data,shop,rupiah})
      })
      .catch((err)=>{
        res.send(err)
      })
  }
  static addEndorsement(req,res){
    // res.send(req.params.seleb_id)
    SelebShop.create({
      SelebId : req.params.seleb_id,
      ShopId : req.params.shop_id
    })
    .then((data)=>{
      res.redirect('/Shop')
    })
    .catch((err)=>{
      res.send(err)
    })
  }
  static listSeleb(req,res){
    let listShop;
    let listSeleb;
    Shop.findAll({
      where:{
        id : req.params.shop_id
      },
      include:[{model:Seleb}]
    })
    .then((data)=>{
      listShop = data
      return Seleb.findAll()
    })
    .then((data)=>{
      listSeleb = data
      // res.send(listShop)
      res.render('partner', {listShop,listSeleb,rupiah})
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}

module.exports = ShopController