/*
# Scope (scopo)
    *Escopo determina a visibilidade de uma variavel no JS

# Block Statement (declaração de bloco)
````JS
// Vamos iniciar um bloco
{
    //aqui dentro é um bloco e posso colocar qualquer codigo
} // aqui fechamos o bloco
````
O bloco tambem criara um novo escopo. chamamos de `Block scoped`
*/
// var é global e tambem local
// hoisting (elevar)

console.log('>existe x antes do bloco',x)
{
  var  x = 0
    
}
console.log('>existe x depois do bloco',x)