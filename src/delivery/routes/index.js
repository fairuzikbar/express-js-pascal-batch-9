const express = require('express');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeService = require('../../service/employee.service');
const EmployeeRoute = require('./employee.route');
const router = express.Router();

const employeeService = (req, res) => {
    EmployeeService(EmployeeRepository(db))
}

router.use('/employee', employeeService, EmployeeRoute);

module.exports = router