/* Expressões e opradores

-Expressions
-Operators
    Binary
    Unary
    Ternary

*/
let number = 1

console.log(number + 1)//Binario porque eu preciso de dois valores para que o operador (no caso +) esteja entre eles

console.log(--number)//Unario preciso de uma so elemento e coloco o incremento (++ operador) na frente dele

console.log(false ? 'alo': 'nada')//Ternario usa tres valores pra que se defina alguma coisa no final das contas



/*(function(){
    console.log('alo')
})() */ // No JS é facultativo o uso da virgula no final das expressões, mas no caso dessa função auto executavel, senão tiver a virgula no final da expressão ocorrerá um erro.