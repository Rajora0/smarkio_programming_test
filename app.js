// import modules
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Database = require('./createData')
const { text } = require('body-parser')

const app = express()


// body-parser config
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Set views app
app.use(express.static('public'))

app.engine('handlebars', handlebars({
    defaultLayout:'main',
}))
app.set('view engine', 'handlebars')

// routers

/* app.get('/', (req, res) => {
    res.render('index')
})
 */



app.post('/', (req, res) => {
    
    // catch form
    Database.create({
        phrase: req.body.phrase})
        .then(() => {
        console.log(req.body.phrase)})
        .catch((err) => {
        console.log(err)})
        res.render('index')
})

app.get('/', (req, res) => {
 
    Database.findAll().then(data => {
        res.render('index',{Data: data})

    })
})

app.listen(8080)