const express = require ('express');
const app = express();
const PORT = 3000;

app.get ('/', (req, res) => {
    res.send ('Hello World')
})
app.get ('/oi', (req, res) => {
    res.send ('oi')
})

app.listen (PORT, ()=> {
    console.log (`App rodando na porta ${PORT}`)
})