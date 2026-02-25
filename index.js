const express = require ('express');
const app = express();
const PORT = 3000;

app.get ('/', (req, res) => {
    res.send ('Hello World')
})

app.get ('/oi', (req, res) => {
    res.send ('oi')
})

// são os ultimos !!!!!
app.use((req, res, next) => {
    res.status(404).send("Rota não encontrada.")
})

app.listen (PORT, ()=> {
    console.log (`App rodando na porta ${PORT}`)
})

//https://github.com/EricoBorgonove/UNN_ADS_4P_BACK