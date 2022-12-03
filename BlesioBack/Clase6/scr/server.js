const express = require('express')
const {Server: IOServer}= require('http')

const {Server: IOServer} = require('socket.io')

const app = express()
const httpServer = new httpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('OK')
})

io.on('connection', socket=>{
    //connection se ejectuta por primera vez que abra una nueva conexion.
    console.log('Usuario conectado '+socket.id )


    //Se imprimira solo la primera vez que se ha abierto la conexion.
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')

    socket.on('msg-client', deta =>{
        console.log(`(server) recibi: ${deta}`)
    })

io.socket.emit('mi mensaje', 'esto lo recibi de todo el mundo')

// setInterval(() => {socket.emit('hearbeat', 'estoy vivo)'),3000}

})

const server = httpServer.listen(8080, ()=>{
    console.log(`servidor coenctado en puerto ${server.addres().port}`)
})