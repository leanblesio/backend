const { conectar } = require("./server3.js");

async function main(){
    try {
        const sv = await conectar(8080)
        console.log(`Puerto conectado: ${sv.address().port}`)
    } catch (error) {
        console.log(`Algo no salio bien... ${error}`)
    }


}
main()