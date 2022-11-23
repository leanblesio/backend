const fs = require('fs')

class Productos{
    #productos
    #ruta
    constructor(ruta){
        this.#ruta = ruta;
        this.#productos = [];
    }

    async Guardar(producto) {
        this.#productos.push(producto)
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#productos))
    }

    async getProd(){
        this.#productos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
        return this.#productos;
    }

    async getProdById(num){
        let del = this.#productos.map(el => el.id).indexOf(num)
        return this.#productos[del]

    }

    async deleteAll(){ 
        this.#productos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
        this.#productos.splice(0)
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#productos))
    }    

    async delProdById(num){
       let del = this.#productos.map(el => el.id).indexOf(num)
       this.#productos.splice(del, 1)
       return this.#productos
    }



}

async function main(){
    const rutaProductos = './productos.txt'
    await fs.promises.writeFile(rutaProductos, '[]')
    const prod1 = new Productos(rutaProductos)
    try {
        await prod1.Guardar({
            id: 1,
            nombre: 'Pizza'
        })
    
        await prod1.Guardar({
            id: 2,
            nombre: 'Empanada'
        })
        await prod1.Guardar({
            id: 3,
            nombre: 'Tarta'
        })
        await prod1.Guardar({
            id: 4,
            nombre: 'Calzon'
        })
    
    
        console.log(await prod1.getProd())
        console.log(await prod1.delProdById(2)); //elimino el producto ID.
        console.log(await prod1.getProdById(4)); //obtener producto por ID.
        console.log('_______________')
        await prod1.deleteAll(); //elimino todos los productos.-
        console.log(await prod1.getProd()) //muestro que se eliminaros.-
        
     
    } catch (error) {
        console.log(`Hubo un error ${error}`)
    }


   

    
    
    }

    

    
main()
exports = { main } 
