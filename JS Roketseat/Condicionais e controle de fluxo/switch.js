// switch

function cauculate (number1, operator, number2) {
    let result = 0
    switch (operator) {
        case '+':
            //códogo
            result = number1 + number2            
            break
        case '-':
            //códogo 
            result = number1 - number2           
            break
        case '*':
            //códogo 
            result = number1 * number2         
            break
        case '/':
            //código 
            result = number1 / number2         
            break
        default:
            console.log('não implementado')
            break
}
    return result
}
console.log(cauculate(20 % 5))