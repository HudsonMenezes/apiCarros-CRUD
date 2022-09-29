const express = require('express')
const router = express.Router()

const CarroController = require('./controllers/CarroController') //para enxergar o arquivo criado

router.get('/carros', CarroController.buscarTodos) // criando endpoint /carros

module.exports = router
