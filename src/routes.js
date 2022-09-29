const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController') //para enxergar o arquivo criado

router.get('/carros', CarroController.buscarTodos) // criando endpoint /carros
router.get('/carro/:codigo', CarroController.buscarUm) // criando novo endpoint
router.post('/carro', CarroController.inserir)
router.put('/carro/:codigo', CarroController.alterar)

module.exports = router
