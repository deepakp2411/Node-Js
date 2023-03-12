// events 
const EventEmitter = require('events')

const customEmmitter = new EventEmitter()

customEmmitter.on('response', () => {
    console.log("data recieved")
})
customEmmitter.on('response', (name,age) => {
    console.log(`some other logic here: ${name} and my age is: ${age}`)
})

customEmmitter.emit('response')
customEmmitter.emit('response',"deepak",22)