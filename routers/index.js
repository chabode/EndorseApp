const express = require('express')
const router = express.Router()

const HomeController = require('../controllers/homeController')
const SelebRouter = require('../routers/seleb')
const ShopRouter = require('../routers/shop')
const ChartRouter = require('../routers/chart')

router.get('/', HomeController.home)
router.get('/login', HomeController.loginPage)
router.post('/login', HomeController.login)
router.get('/logout', HomeController.logout)
router.use('/Seleb', SelebRouter)
router.use('/Shop', ShopRouter)
router.use('/Chart', ChartRouter)


module.exports = router