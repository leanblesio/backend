const express = require('express')
const {randomUUID} = require('crypto')


const cosas = []
let num = 0
//-----------------------------------//
//---------controlador get----------//
//-----------------------------------//

function  controladorGetRoot(req, res){
    res.send('todo bien')
}
function  controladorGetBienvenida(req, res){
    res.json({mensaje: 'Bienvenida'})
}
function  controladorGetDespedida(req, res){
    res.send('despedida')
}
function  controladorGetCosas(req, res){
  // const query =  Object.fromEntries(req.url.split('?')[1].split('&').map(par => par.split('=')))   
    console.log(req.query)
    res.json(cosas.filter(({edad}) => edad >= (req.query.min ?? 0) &&  edad <= (req.query.max ?? 10000)))
}
function  controladorGetCosasSegunId({params:{id}}, res){
    const buscado = cosas.find(c => c.id === id)
    if(!buscado){
      res.status(404) 
      res.json({mensaje: `no se encontró cosas con el ID ${id}`}) 
    }
    else{
        res.json(buscado)
    }
  }

 function  controladorPutCosasSegunId({body, params:{id}}, res){
    const indiceBuscado = cosas.findIndex(c => c.id === id)
    if(!indiceBuscado == -1){
      res.status(404) 
      res.json({mensaje: `no se encontró cosas con el ID ${id}`}) 
    }
    else{
      cosas[indiceBuscado] = body
        res.json(body)
    }
  } 

  function  controladorPatchCosasSegunId({body, params:{id}}, res){
    const indiceBuscado = cosas.findIndex(c => c.id === id)
    if(!indiceBuscado == -1){
      res.status(404) 
      res.json({mensaje: `no se encontró cosas con el ID ${id}`}) 
    }
    else{
      cosas[indiceBuscado] = { ...cosas[indiceBuscado], ...body}
        res.json(cosas[indiceBuscado])
    }
  } 

  function  controladorDeleteCosasSegunId({ params:{id}}, res){
    const indiceBuscado = cosas.findIndex(c => c.id === id)
    if(!indiceBuscado == -1){
      res.status(404) 
      res.json({mensaje: `no se encontró cosas con el ID ${id}`}) 
    }
    else{
      const borrados =  cosas.splice(indiceBuscado, 1)
      // res.sendStatus(204)
      res.json(borrados[0])
    }
  } 
//-----------------------------------//
//---------controlador post----------//
//-----------------------------------//
function  controladorPostCosas(req, res){
    console.log(req)
    const CosaNueva = req.body
    CosaNueva.id = randomUUID()
    cosas.push(CosaNueva) 
    res.status(201)
    res.json(CosaNueva)
}


const app = express()


//----------------------//
//-----milddleWARE------//

//cada vez que llega 1 peticion, va a revisar lo que hay
// desp del renglon en blanco y si es formato JSON
//lo va a parsear y lo va a guardar en el body.
app.use(express.json())  


app.use(express.urlencoded({extended: true})) //para enviar formulario por el body


//Web Server
app.get('/', controladorGetRoot)
app.get('/bienvenida', controladorGetBienvenida)
app.get('/despedida', controladorGetDespedida)

//Api Rest
app.get('/api/cosas', controladorGetCosas)
app.get('/api/cosas/:id', controladorGetCosasSegunId)
app.post('/api/cosas', controladorPostCosas) //lo pensamos como carpeta EJ: carpeta cosas.  //en este caso estariamos agregando algo a la carpeta cosas.
app.put('/api/cosas/:id', controladorPutCosasSegunId)      
app.patch('/api/cosas/:id', controladorPatchCosasSegunId)         
app.delete('/api/cosas/:id', controladorDeleteCosasSegunId)    



const server = app.listen(8080)