//throw(disparado se der erro)

function sayMyName(name = '') {
    if (name === ''){
        //throw new Error("Nome é obrigatorio")
        throw 'nome é obrigatorio'
    }
    console.log(name)
}

//try(tentar um bloco de codigo)...catch(enta posso capturar esse erro na aplicação)
try{
    sayMyName('Nil')
}catch(e) {
    console.log(e)
}
console.log('Apos o try/cath')