const express = require ('express')
const router = express.Router()

const user = require('../controllers/usuariosController.js')

router.get('/', user.index)
router.post('/cadastro', user.cadastro)
router.post('/login', user.login)

module.exports = router