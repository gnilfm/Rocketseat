//1.declare uma variavel de nome weight
//let weight 
//2.que tipo de dado é a varavel acima
//undefined
//console.log(typeof weight)

/*
3.declare uma variavel e atribua valores para cada um dos dados
    *name: String
    *age: number (integer)
    *wieght: Number (float)
    *isSubscrubed (boolean)
*/
//let name = "universo"
//let age = 45
//let wieght = 76.8
//let isSubscrubed = true
/*
4. A variavel student abaixo é de qual tipo de dado?
//é um objeto vazio
4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3
4.2 mostre no console.log a seguinte mensagem:
<name> de idade <age> pesa <weight> kg.
atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto
*/ 
let student = {
 name: "universo",
 age: 45,
 weight: 76.8,
 isSubscrubed: true,
}
//console.log(`${student.name} de idadde ${student.age} pesa ${student.weight} e esta inscrito ${student.isSubscrubed}`)
/*
5. declare uma variavel do tipo array, de nome students e artibua a ela nenhum valor, ou seja somente array vazio.
*/
let students = []

/*
6. Reatribua valor para variavel acima, colocando denrto dela o objeto student da questao 4. (nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/
 students = [
     student     
    ]
//console.log(students)
/*
7. Coloque no console o valor da posição 0 do array acima
*/
console.log(students[0])
/*
8. crie um novo student e coloque na posção 1 do array
*/
const john = {
    name: 'john',
    age: 35,
    weight: 73.5,
    isSubscrubed: false
}

students = [
    student,
    john
]
console.log(students[1])
/*
9. Sem rodar o codigo responda qual e a resposta do codigo abaixo e porque? Apos sua resposta rode o codigo e veja se voce acertou
*/

var a = 1
console.log(a)