//Manipulando elementos pelo atributo

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))
//element.value = 'Outro valor'
header.removeAttribute('id')
header.removeAttribute('class')

