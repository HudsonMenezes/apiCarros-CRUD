require('dotenv').config({ path: 'variaveis.env' }) // lê o caminho (path) para que esse arquivo seja visto dentro do servidor
const express = require('express') // cria uma constante para chamar o express
const cors = require('cors') // cria constante para chamar o cors - permite acesso a recursos para que a gente trabalhe com API, se não tiver, pode dar erro.
const bodyParser = require('body-parser') // módulo para converter o body da requisição para varios outros formatos

const routes = require('./routes') // mostra para o servidor onde estão as rotas do projeto

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({ extended: false }))

server.use('/api', routes) // vai fazer com que os endereços das rotas tenham esse prefixo /api

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})
