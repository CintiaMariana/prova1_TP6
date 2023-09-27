const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const Router = require('express').Router()

Router.get('/produto/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.get(id)

    res.send(produto)
})

Router.post('/produto/', (req, res) => {
    const produto_cadastrado = req.body

    res.send(produto_cadastrado)

})

Router.delete('/produto/:id', (req,res)=> {
    const {id} = req.params

    res.destroy(produto.id)

})

module.exports = Router