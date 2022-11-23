const { randomUUID } = require("crypto");
const express = require("express");
const app = express();
const fs = require('fs');
const { allowedNodeEnvironmentFlags } = require("process");


// const { Guardar } = require("../../Desafio2/main.js");
// const { main } = require("../../Desafio2/main.js");



class Productos{
    #productos
    #ruta
    constructor(ruta){
        this.#ruta = ruta;
        this.#productos = [];
    }
    async getProd(){
        this.#productos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
        return this.#productos;
    }    
    async getProdById(num){
        let del = this.#productos.map(el => el.id).indexOf(num)
        return this.#productos[del]

    }


}

    

const PORT = 8080

app.get('/productos', (pet, res) =>{

    // this.#productos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8')
    res.sendFile(__dirname + '/productos.txt')
})



app.get('/productoRandom', (pet, res)=>{

res.send('<h2>Producto al azar</h2>'+ ProdRandom())
})
 

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectador = app.listen(puerto, () => {
            resolve(servidorConectador)
        })
        servidorConectador.on("error", error => reject(error))
    })
}

async function ProdRandom(){
    prod3 = new Productos

const pr3 = await prod3.getProdById(1)
console.log(pr3)


}

module.exports = { conectar }