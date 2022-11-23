// const moment = require('moment')
// console.log('cambio')

// http.createServer(puerto, manejador/controlador)

// function controlador (peticion, respuesta){
// console.log(peticion)
// respuesta.end('Send - Enviar respeusta al cliente tipo texto') //enviar respuesta al cliente tipo texto.
// }

const http = require('http')

// const servidor = http.createServer(controlador)
const servidor = http.createServer((peticion, respuesta) => {
        console.log(peticion)
        respuesta.end('Send - Enviar respeusta al cliente tipo texto')
    }

)

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {

        const ServidorConectado = servidor.listen(puerto, (err) => {
            if (err) reject(err) //console.log('algo salio mal' +err)       
            else resolve(ServidorConectado.address().port) //console.log(`conectado al puerto 8080 ${ServidorConectado.address().port}`)


        })
    })
}

module.exports = {conectar}

async function main() {
    try {
        const serv = await conectar(8080)
        console.log(`Conectado al puerto ${serv.address().port}`)
    } catch (error) {
        console.log(`Algo salio mal: ` + error)
    }
}
//8080 puerto por defecto.    