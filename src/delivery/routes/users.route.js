const express = require('express');
const router = express.Router();

const UsersRoute = (usersController) => {
    const {createUsers, listUsers, getUsers, updateUsers, deleteUsersData} = usersController()
    router.post('/', createUsers);
    router.get('/', listUsers);
    router.get('/:id', getUsers);
    router.put('/:id', updateUsers);
    router.delete('/:id', deleteUsersData);
    return router;
}

module.exports = UsersRoute;