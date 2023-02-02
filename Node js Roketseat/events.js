//const {EventEmitter} = require('events')
//const ev = new EventEmitter()

//ev.on('saySometing', (message) => {
//console.log ('eu ouvi voce' , message)
//})

//ev.emit('saySometing' , 'Nil')
//ev.emit('saySometing' , 'Sil')
//ev.emit('saySometing' , 'Joao')

const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name) {
      this.name = name}

inherits(Character, EventEmitter)

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado`))

console.log('Oh e agora quem podera me defender')
chapolin.emit('help')