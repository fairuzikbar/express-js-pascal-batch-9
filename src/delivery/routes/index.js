const express = require('express');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeService = require('../../service/employee.service');
const employeeRouter = require('./employee.route');
const router = express.Router();
const db = require('../../config/db');
const EmployeeController = require('../controller/employee.controller');

const UsersRepository = require('../../repository/users.repository');
const UsersService = require('../../service/users.service');
const usersRouter = require('./users.route');
const UsersController = require('../controller/users.controller');

const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}

const usersService = (req, res, next) => {
    req.service = UsersService(UsersRepository(db));
    next()
}

router.use('/employee', employeeService, employeeRouter(EmployeeController));

router.use('/user', usersService, usersRouter(UsersController));

module.exports = router;