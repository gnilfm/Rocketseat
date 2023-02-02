/*
function() construtor

*expressao new
*criar um novo objeto
this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + " esta andando"
    }
}
const nil = new Person("Nil")
const sil = new Person('Sil')
console.log(nil.walk())
console.log(sil.walk())