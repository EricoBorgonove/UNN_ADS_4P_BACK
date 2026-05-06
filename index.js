require('dotenv').config();
const express = require ('express');
const general = require('./routes/general.routes');
const usersRoutes = require('./routes/users.routes');
const app = express();
//const PORT = 3000;

app.use ('/general',general);
app.use ('/users',usersRoutes);

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