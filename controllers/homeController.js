const {User} = require('../models')

class HomeController{
  static home(req,res){
    let isUser = req.session.userId
   res.render('home',{isUser})
  }

  static loginPage(req,res){
    res.render('loginpage')
  }

  static login(req,res){
    User.findOne({
      where: {user: req.body.user}
    })
    .then(user=> {
      if(!user){
        res.send(`Username dengan ${req.body.user} tidak ada`)
      } else {
        if(user.password === req.body.password){
          req.session.userId = user.id
          res.redirect('/Seleb')
        } else {
          res.send(`Username dan Password incorrect`)
        }
      }
    })
  }

  static logout(req,res){
    req.session.destroy(()=>{
      res.redirect('/')
    })
  }
}

module.exports = HomeController