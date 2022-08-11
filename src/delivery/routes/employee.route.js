const express = require('express');
const router = express.Router();

const EmployeeRoute = (employeeController) => {
    const {createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployeeData, searchEmployee} = employeeController()
    router.post('/', createEmployee);
    router.get('/', listEmployee);
    router.get('/:id', getEmployee);
    router.put('/', updateEmployee);
    router.delete('/:id', deleteEmployeeData);
    router.get('/', searchEmployee);
    return router;
}

module.exports = EmployeeRoute;