// Esse arquivo e o responsável por todo o controle da API

const CarroService = require('../services/CarroService') //enxerga o arquivo

module.exports = {
  // cria a função para buscar todos os carros
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] }

    let carros = await CarroService.buscarTodos()

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
        placa: carros[i].placa
      })
    }
    res.json(json)
  },

  buscarUm: async (req, res) => {
    let json = { error: '', result: {} }

    let codigo = req.params.codigo
    let carro = await CarroService.buscarUm(codigo)

    if (carro) {
      json.result = carro
    }

    res.json(json)
  }
}
