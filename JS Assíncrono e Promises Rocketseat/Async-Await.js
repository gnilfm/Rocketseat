/*Async / Await
é uma maneira mais elegante de sec escrecver as promessas

*/const promessa = new Promise( function(resolve, reject) {
    return resolve('Ok')
})

async function start () {
   try {
    const result = await(promessa)
   console.log(result)
} catch (err) {
    console.log(err)
   } finally {
    console.log('Rodar sempre')
   }
}   
start()
/*
promessa
.then(function(response) {
    console.log(response)
})
.catch(function(error) {
    console.log(error)
})
.finally (function() {
    console.log('Sempre irei executar')
})

*/
