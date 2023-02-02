//Estrutura de repetição 
//for in

let person = {
    name: 'Jhon',
    age: 30,
    wheight: 82.4
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}