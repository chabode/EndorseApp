const express = require('express')
const router = express.Router()

const ChartController = require('../controllers/chartController')

router.get('/', ChartController.show)
router.get('/Seleb', ChartController.showAllSeleb)
router.get('/Shop', ChartController.showAllShop)


module.exports = router