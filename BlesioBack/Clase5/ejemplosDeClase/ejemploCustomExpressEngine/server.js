const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.static('public'))
app.set('views', './views')

app.engine('pinky', async (filepath, options, callback) => {
    try {
        const content = await fs.promises.readFile(filepath, 'utf-8')
        let rendered = content.toString()
        for (const key in options) {
            if(typeof options.key == 'string')
           rendered = rendered.replace(`{{${key}}}`, options.contenido)           
        }

        return callback(null, rendered);

    } catch (error) {
        return callback(error)
    }


})


app.get('/', (req, res) => {
    const options = { contenido: 'cosas para mostrar', otracosa: 'Otra Cosaaaaa' }
    // res.sendFile('index.pinky', {root: './views' })
    res.render('index.pinky', options) 
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Conectado al puerto  ${server.address().port}`)
})
 