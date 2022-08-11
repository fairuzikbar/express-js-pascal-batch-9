const Routes = require('../../config/app.routes')
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/employee.controller')

const EmployeeRoute = () => {
    router.post('/', EmployeeController().createEmployee);
    router.get('/', EmployeeController().listEmployee);
    router.get('/:id', EmployeeController().getEmployee);
    router.put('/', EmployeeController().updateEmployee);
    router.delete('/:id', EmployeeController().deleteEmployeeData);
    router.get('/', EmployeeController().searchEmployee);
}

module.exports = EmployeeRoute;