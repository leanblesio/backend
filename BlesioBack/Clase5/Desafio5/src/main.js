const express = require('express')
const { engine } = require('express-handlebars')

const productos = []

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', '../views')

app.get('/', (req, res) => {
    res.render('productos', { productos, hayProductos: productos.length > 0 });
});

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor esuchando al puerto Nº:  ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
