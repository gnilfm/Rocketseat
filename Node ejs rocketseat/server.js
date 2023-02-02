const express = require('express');
const app = express();

//Aqui estamos falando para o express que o view engine e a ferramneta para rederizar o html com o EJS
app.set('view engine','ejs');

//criando a rota para rederizar o index
app.get('/', function(req, res) {
      const items = [
            {
            title: "D", 
            message: "esenvolver aplicações/serviços de forma fácil"
            },
            {
                  title: "E", 
                  message: "JS usa JavaScript para renderizar HTML"
            },
            {
                  title: "M", 
                  message: "uito fácil de usar"
            },
            {
                  title: "A", 
                  message: "morzinho"
            },
            {
                  title: "I", 
                  message: "nstall ejs"
            },
            {
                  title: "S", 
                  message: "intxe simples"
            }  
      ]; 

      const subtitle = "Uma linguagem de modelagem para criação de paginas HTML utilizando JS"
      res.render('pages/index',{
            qualitys: items,
            subtitle: subtitle,
      });
     });

app.get('/sobre', function(req, res) { 
        res.render('pages/about');
       });

//listen fica ouvindo a porta 8080 onde o servidor vai rodar o projeto
app.listen(8080);
console.log('Servidor funcionando porta 8080')
  