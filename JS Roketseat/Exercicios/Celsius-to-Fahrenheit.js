/* 
crie uma função que receba uma string em celsius ou fahrenheit e faça a trensformação de uma unidade para outra
    C = (f - 32) * 5/9

    F = c * 9/5 + 32
 */

//transformDegree('50F')

function transformeDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitexists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitexists) {
        throw new Error("Grau não identificado")
    }

    //fluxo ideal, F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F" , ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alernativo C => F
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C" , ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    
    }

    return formula(updatedDegree) + degreeSign
}
try {
    console.log(transformeDegree('10C'))
    console.log(transformeDegree('50F'))
    transformeDegree('50Z')
    
} catch(error){
    console.log(error.message)
}