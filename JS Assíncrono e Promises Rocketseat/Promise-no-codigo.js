/*
Promise
A promrssa de que algo irq acontecer
podera dar cetto ou errado
mas ira acontecer

*/
let aceitar = true

console.log('Pedir Uber')
const promessa = new Promise((resolve, 
reject) => {

    if (aceitar) {
        return  resolve('Pedido aceito')
    }
    return reject('Pedido negado')
})
console.log('Aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Finalizado'))