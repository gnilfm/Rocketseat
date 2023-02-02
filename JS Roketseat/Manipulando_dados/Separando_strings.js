//Manipulando Strings e numeros

//Separe um texto que contem espaços, em um novo array onde cada texto e uma posição do array um um texto e onde eram espaços, coloque _

let phrase = "programar é muito bacana"
let myArray = phrase.split(" ")
let phrasewhihUnderscore = myArray.join('_')
console.log(phrasewhihUnderscore)
