// Dar o start na aplicação com o express
// Objetivo ao digitar localhost:3000 sera aberto o app que esta sendo programado

//chamar o modulo express com require que sera guaradado na const express
const express = require('express')

//const app  inicializa o express(com prenteses) e o express() inicializado esta sendo guardado naconst app
const app = express()

//para inicializar o  express coloca app. e o metodo que vai ser usado nocaso o metodo listem(que fica ouvindo o navegador e quando entrar na porta 3000 vai abir a aplcação) ficar ouvindo uma porta para acessar o navegador costuma ser chamado de server

app.listen('3000')

//metodo GET
//route e uma função do proprio express que trabalha com rotas, as rotas são o caminho que o site vai fazer, a rota no caso e '/' e chama o metodo .get() que vai ter req de requisição e res de resposta, depois na erow function passa o res,send e no caso a mensagem Hello
app.route('/').get( (req, res) => res.send('hello'))
app.route('/sobre').get( (req, res) => res.send('sobre'))