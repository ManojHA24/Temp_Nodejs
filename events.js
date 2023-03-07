const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,num)=> {
    console.log(`data recieved`)
    console.log(name, `:`,num)
})

customEmitter.on('response', (name,num)=> {
    console.log(`Some other logic here`)
    console.log(name, `:`,num)
})

customEmitter.emit('response','manoj',34)