const { Users } = require ('../models');
const { Op } = require('sequelize');

module.exports = {
    // CREATE - cadastrar novo usuário

    async createUser (req, res){
        try{
            const {nome, cpf, email, senha, tipo_usuario } = req.body;
            if (!['admin', 'user', 'dev'].includes(tipo_usuario)){
                return res.status(400).json ({
                message: 'Tipo de usuario inválido.'})
            }
            const emailExistente = await Users.findOne({where: {email}})
            if (emailExistente){
                return res.status(400).json ({
                message: 'Email já cadastrado.'})
            }
            await Users.create ({nome, cpf, email, senha, tipo_usuario });
            return res.status(201);            
        }catch(error){
            return res.status(500).json ({
                message: 'Erro ao criar usuario',
                error: error.message
            })
        }
    }
}