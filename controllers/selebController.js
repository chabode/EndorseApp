const {Seleb, Shop, SelebShop} = require('../models')
const rupiah = require('../helpers/rupiah')

class SelebController{
  static show(req,res){
    Seleb.findAll({
      order: [['followers','desc']]
    })
    .then(data=> {
      res.render('seleb',{data, rupiah})
    })
    .catch(error=> {
      res.send(error)
    })
    
  }
  static addForm(req,res){
    res.render('addSeleb', {error : req.query.error})
  }
  static add(req,res){
    Seleb.create({
      name : req.body.name,
      age : Number(req.body.age),
      gender : req.body.gender,
      followers : Number(req.body.followers),
      fee: Number(req.body.fee)
    })
    .then(()=> {
      res.redirect('/Seleb')
    })
    .catch((err)=> {
      let error = []
      for (let i = 0; i < err.errors.length;i++){
        error.push(err.errors[i].message)
      }
      res.redirect(`/Seleb/add?error=${error.join(', ')}`)
      console.log(req.body.followers)
      // res.send(error)
    })

  }
  static editForm(req,res){
    Seleb.findByPk(Number(req.params.id))
    .then(data=> {
      res.render('editSeleb',{data, error:req.query.error})
    })
    .catch(error=> {
      res.send(error)
    })

  }
  static edit(req,res){
    Seleb.update({
      name : req.body.name,
      age : Number(req.body.age),
      gender : req.body.gender,
      followers : Number(req.body.followers),
      fee: Number(req.body.fee)
    },{
      where : {id : Number(req.params.id)}
    })
    .then(()=>{
      res.redirect('/Seleb')
    })
    .catch((err) => {
      let error = []
      for (let i = 0; i < err.errors.length;i++){
        error.push(err.errors[i].message)
      }
      res.redirect(`/Seleb/${req.params.id}/edit?error=${error.join(', ')}`)
    })
  }

  static delete(req,res){
    Seleb.destroy({
      where : {id: Number(req.params.id)}
    })
    .then(()=> {
      res.redirect('/Seleb')
    })
    .catch(error => {
      res.send(error)
    })
  }
  static collabs(req,res){
    let listShop;
    let listSeleb;
    Seleb.findAll({
      where:{
        id : req.params.seleb_id
      },
      include:[{model:Shop}]
    })
    .then((data)=>{
      listSeleb = data
      return Shop.findAll()
    })
    .then((data)=>{
      listShop = data
      // res.send(listSeleb)
      res.render('collabs', {listShop,listSeleb,rupiah})
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}

module.exports = SelebController