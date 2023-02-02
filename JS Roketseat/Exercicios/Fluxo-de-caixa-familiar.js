/* Crie um projeto  que possuira 2 propriedades, ambas do tipo array:
*receitas 
*despasas
Agora crie uma função que ira caucular o total de receitas o despesas e ira mostrar uma mensagem se a familia esta com saldo negativo, seguido do valor do saldo

*/

let family = {
    incomes:[500, 3200, 250.43, 360.45],
    expenses:[5320.04, 128.45, 176.87, 1450.00]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if(itsOk) {
        balanceText = "Positivo"
    }

    console.log(`seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()