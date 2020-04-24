const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('trust proxy',1)
app.use(express.urlencoded({extended:true}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

const router = require('./routers')
app.use('/', router)

app.listen(port,()=>{
  console.log(`this app listening on ${port}`);
})

