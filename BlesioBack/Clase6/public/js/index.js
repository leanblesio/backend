const socket = io() //apunta al localhost:8080

socket.on('mi mensaje ', deta =>{
    console.log('(cliente)'+ deta)

    socket.emit('msg-cliente', `(cliente) recibi: ${deta}`)
})

socket.on('heartbeart', () => {
    console.log('todo ok')
})

function saludar(){
    socket.emit('saludo', 'saludos desde el cliente!')
}

const botonSaludar = document.getElementById('botonSaludar')
botonSaludar.addEventListener('click', e=>{
    saludar()
})