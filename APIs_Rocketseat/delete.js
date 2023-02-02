// Dar o start na aplicação com o express
// Objetivo ao digitar localhost:3000 sera aberto o app que esta sendo programado

//chamar o modulo express com require que sera guaradado na const express
const express = require('express')

//const app  inicializa o express(com prenteses) e o express() inicializado esta sendo guardado naconst app
const app = express()

//para inicializar o  express coloca app. e o metodo que vai ser usado nocaso o metodo listem(que fica ouvindo o navegador e quando entrar na porta 3000 vai abir a aplcação) ficar ouvindo uma porta para acessar o navegador costuma ser chamado de server

app.listen('3000')

//middleware 
//e a ponte entre as requisições
//express.json() para iniciar o json que e um metodo que esta dentro do express e pra pegar o json nao usa o express inicializado usa o da const
app.use(express.json())

//delete 
//o delete ser recebe algum nome id indentificador para apager alguma informação no codigo, quando passamos uma variavel pela rota chamamos de params('/:identificador')

app.route('/:identificador').delete( (req, res) => {   
    res.send(req.params.identificador)
})