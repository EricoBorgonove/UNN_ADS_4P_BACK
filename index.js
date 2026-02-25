require('dotenv').config()

const express = require ('express');
const path = require('path');
const app = express();
//const PORT = 3000;

app.get ('/mussum', (req, res) => {
    res.sendFile(path.resolve('algo.html'))
})

app.get ('/', (req, res) => {
    res.send ('Hello World')
})

app.get ('/oi', (req, res) => {
    res.send ('oi')
})

// são os ultimos !!!!!
app.use((req, res, next) => {
    //res.status(404).send("Rota não encontrada.")
    res.status(404).sendFile(path.resolve('erro404.html'))
})

//app.listen (PORT, ()=> {
    app.listen (process.env.PORT, ()=> {
    console.log (`App rodando na porta ${process.env.PORT}`)
})

//https://github.com/EricoBorgonove/UNN_ADS_4P_BACK