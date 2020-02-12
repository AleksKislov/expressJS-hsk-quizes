const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))



app.get(('/'), (req, res) => {
    res.render('index', {
        title: 'HSK1',
        card1: 'clicked'
        
    })
})

app.get('/hsk1', (req, res) => {
    res.render('index', {
        title: 'HSK1',
        card1: 'clicked'    
    })
})

app.get('/hsk2', (req, res) => {
    res.render('index', {
        title: 'HSK2',
        card2: 'clicked'
    })
})

app.get('/hsk3', (req, res) => {
    res.render('index', {
        title: 'HSK3',
        card3: 'clicked'
    })
})

app.get('/hsk4', (req, res) => {
    res.render('index', {
        title: 'HSK4',
        card4: 'clicked'
    })
})

app.get('/hsk5', (req, res) => {
    res.render('index', {
        title: 'HSK5',
        card5: 'clicked'
    })
})

app.get('/hsk6', (req, res) => {
    res.render('index', {
        title: 'HSK6',
        card6: 'clicked'
    })
})

app.listen(port, () => {
    console.log('working')
})