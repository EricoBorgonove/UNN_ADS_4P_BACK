const express = require('express');
const UsersController = require('../controllers/Users.controller');
const router = express.Router()

//Criar usuário
router.post('/', UsersController.createUser);
//Listar todos os usuários
router.get('/', UsersController.getAllUsers);
//Buscar um usuário
router.get('/:id', UsersController.getById);
//Atualizar um usuário
router.put('/:id', UsersController.updateUser);
//Excluir um usuário
router.delete('/:id', UsersController.deleteUser);

module.exports = router;