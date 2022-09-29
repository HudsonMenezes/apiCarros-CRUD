// Esse arquivo e o responsável por todo o controle da API

const CarroService = require('../services/CarroService') //enxerga o arquivo

module.exports = {
  // cria a função
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] }

    let carros = await CarroService.buscarTodos()

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo
      })
    }
    res.json(json)
  }
}
