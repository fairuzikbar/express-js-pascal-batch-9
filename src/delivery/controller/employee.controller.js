//Controller ini eksekutornya
const EmployeeService = require('../../service/employee.service')
const EmployeeRepository = require('../../repository/employee.repository')
const Response = require('../../utils/response')

const EmployeeController = () => {
    const employeeService = EmployeeService(EmployeeRepository())
    const createEmployee = (req, res) => {
        const payload = req.body;
        const newEmployee = employeeService.registerEmployee(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee))
    }

    const listEmployee = (req,res) => {
        const employees = employeeService.findAllEmployee();
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
    }

    const getEmployee = (req,res) => {
        const id = req.params.id;
        const employee = employeeService.findAllEmployee(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    //Kalo mau pake id
    const updateEmployee = (req, res) => {
        const id = req.params.id;
        const payload = req.body;
        const upEmployee = employeeService.editEmployee(payload, +id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', upEmployee))
    }

    //Kalo mau tanpa id
    // const updateEmployee = (req, res) => {
    //     const payload = req.body;
    //     const upEmployee = employeeService.editEmployee(payload);
    //     res.json(Response().successMessage(res.statusCode, 'SUCCESS', upEmployee))
    // }

    const deleteEmployeeData = (req,res) => {
        const id = req.params.id;
        const employee = employeeService.deleteEmployee(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    return {
        createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployeeData
    }
}

module.exports = EmployeeController;