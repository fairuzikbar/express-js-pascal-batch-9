const express = require('express');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeService = require('../../service/employee.service');
const employeeRouter = require('./employee.route');
const router = express.Router();
const db = require('../../config/db');
const EmployeeController = require('../controller/employee.controller');

const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}

router.use('/employee', employeeService, employeeRouter(EmployeeController));

module.exports = router;