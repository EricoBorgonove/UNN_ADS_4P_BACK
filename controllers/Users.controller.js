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
    },
    //READ - Listar todos os usuários
    async getAllUsers (req, res){
        try {
           const users = await Users.findAll({
                attributes: {exclude: ['senha']}
           });
           return res.json(users);
        } catch (error) {
            return res.status(500).json ({
                message: 'Erro ao listar usuarios',
                error: error.message
            })
        }
    },
    //READ - Buscar um usuário
    async getById (req, res){
        try {
            const { id } = req.params; 
           const user = await Users.findByPk(id,{
                attributes: {exclude: ['senha']}
           });
           if (!user){
                return res.status(404).json({
                    message: 'Usuario não encontrado'
                })
           }
           return res.json(user);
        } catch (error) {
            return res.status(500).json ({
                message: 'Erro ao buscar usuario',
                error: error.message
            })
        }
    },
}