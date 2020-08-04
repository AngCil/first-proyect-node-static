const express =  require('express');
const app = express()
const path = require('path')


const indexRoute = require('./routes/index.js')

//Configuraciones
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')



//middlewares


//Rutas de mi servidor
app.use(indexRoute)

//static files
app.use(express.static(path.join(__dirname, '/views')))

//Listening Server
app.listen(app.get('port'), ()=>{
    console.log('Server Working on localhost:', app.get('port'))
})