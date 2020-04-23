const express = require('express')
const router = express.Router()

const ShopController = require('../controllers/shopController')

function checkSession(req,res,next){
    if(req.session.userId) next()
    else res.send(`Not Authorized`)
}

router.get('/', ShopController.show)
router.get('/', ShopController.showSeleb)
router.get('/:shop_id/add', checkSession, ShopController.addEndorsementForm)
router.post('/:shop_id/add/:seleb_id', checkSession, ShopController.addEndorsement)
router.get('/:shop_id/list', checkSession, ShopController.listSeleb)

module.exports = router