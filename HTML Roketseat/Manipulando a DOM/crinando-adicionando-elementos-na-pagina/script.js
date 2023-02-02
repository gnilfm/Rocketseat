//criando e adicionando elementos com append e prepend

const div = document.createElement('div')
div.innerText = 'Ola devs!'

const body = document.querySelector('body')

body.prepend(div)
