const jwt = require ('jsonwebtoken');
const { Users } =  require('../models');
require('dotenv').config();

//module.exports = login
module.exports = {
    async login (req, res){
        try {
            const { email, senha } = req.body;

            if (!email || !senha){
                return res.status(400).json({
                  message: 'Email e senha são obrigatórios',
                });
            }
            const user = await Users.findOne({
                where: {email}
            });
            if (!user){
                return res.status(401).json({
                  message: 'Email ou senha inválidos',
                });
            }
            const senhaValida = await user.validarSenha(senha);
            if (!senhaValida){
                return res.status(401).json({
                  message: 'Email ou senha inválidos',
                });
            }
            
            const token = jwt.sign(
                {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    tipo_usuario: user.tipo_usuario
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
                }
            );
            return res.status(200).json({
                message: 'Login realizado com sucesso',
                token,
                user:{
                    id:user.id,
                    tipo_usuario: user.tipo_usuario
                }
            });


        } catch (error) {
            return res.status(500).json({
                message: 'Pane no sistema, alguem me disconfigurou (2026,sam)',
                error: error.message
            });
        }
    }
}