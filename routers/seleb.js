const express = require('express')
const router = express.Router()

const SelebController = require('../controllers/selebController')
function checkSession(req,res,next){
    if(req.session.userId) next()
    else res.send(`Not Authorized`)
}

router.get('/', SelebController.show)
router.get('/add', checkSession, SelebController.addForm)
router.post('/add', SelebController.add)
router.get('/:id/edit', checkSession, SelebController.editForm)
router.post('/:id/edit', SelebController.edit)
router.get('/:id/delete', checkSession, SelebController.delete)
router.get('/:seleb_id/collabs', checkSession, SelebController.collabs)


module.exports = router