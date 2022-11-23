const express = require('express')


const servidor = express()

servidor.get('/saludo', (peticion, respuesta) => {
    respuesta.end('Bienvenido usuario')
})
servidor.get('/despedida', (peticion, respuesta) => {
    respuesta.end('Hasta luego usuario')
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const ServidorConectado = servidor.listen(puerto, (err) => {
            if (err) reject(err) //console.log('algo salio mal' +err)       
            else resolve(ServidorConectado) //console.log(`conectado al puerto 8080 ${ServidorConectado.address().port}`)


        })
    })
}

module.exports = {
    conectar
}