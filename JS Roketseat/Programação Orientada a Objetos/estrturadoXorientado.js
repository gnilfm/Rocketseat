//estrturado

var valoHora = 50
var tempoEstimado = 20
var desconto = valoHora * tempoEstimado * (10/100)
var custoEstimado = valoHora * tempoEstimado - desconto 
console.log(custoEstimado)

//POO
const job = new Job()
job.valoHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)