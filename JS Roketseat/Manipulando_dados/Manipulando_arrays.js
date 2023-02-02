//Manipulando Arrays

let techs = ['html', 'css', 'js']


techs.push("nodeJs") // adicionar um item no fim

techs.unshift("sql")// adicionar no começo

//techs.pop()// remover do fim 

//techs.shift()// remover do começo

//console.log(techs.slice(1,3))// pegar somente alguns elementos do array
//techs.splice(1,1)// remover um ou mais itens em qualquer posição do array
let index = techs.indexOf('nodeJs')// encontar a posição de um elemento no array
techs.splice(index, 1)


console.log(techs)