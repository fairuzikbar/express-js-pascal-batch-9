const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const UsersRoute = (usersController) => {
    const {createUsers, listUsers, getUsers, updateUsers, deleteUsersData} = usersController()
    router.post('/', authMiddleware, createUsers);
    router.get('/', authMiddleware, listUsers);
    router.get('/:id', authMiddleware, getUsers);
    router.put('/:id', authMiddleware, updateUsers);
    router.delete('/:id', authMiddleware, deleteUsersData);
    return router;
}

module.exports = UsersRoute;