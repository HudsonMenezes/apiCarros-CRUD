const mysql = require('mysql') // chamando o mysql

const connection = mysql.createConnection({
  // pegando as informacoes do arquivo env com as informacoes do usuário para conectar ao banco
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

connection.connect(error => {
  if (error) throw error
  console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
})

module.exports = connection
