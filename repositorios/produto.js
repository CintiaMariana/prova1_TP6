const { validar } = require('../validacoes/produto')

const produtos = [
    {
        nome: "Geladeira",
        preco: 4599.99,
        peso: 98.5,
        cor: "branca",
        marca: "Eletrolux",
        id: 1
    }
]
let ultimo_id = 1

const produtoRepositorio = () => {
    return {
        
        get: (id) => {
            const produtosFiltrados = produtos.filter(prod => prod.id == id)

            try{

            } catch(err){
                if(produtosFiltrados.length == 0){
                    throw new Error(JSON.stringify({
                        status: 404,
                        msg: ""
                    }))
            }
                if(prod.id =! id){
                    throw new Error(JSON.stringify({
                        status: 404,
                        msg: "ID não encontrada"
                    }))

                produtosFiltrados
                }
            
            } 
                return produtosFiltrados[0]
            }      

        }    
        }

        
        
    


module.exports = {
    produtoRepositorio
}