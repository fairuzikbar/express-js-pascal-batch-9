//Controller ini eksekutornya
const EmployeeService = require('../../service/employee.service')
const EmployeeRepository = require('../../repository/employee.repository')
const Response = require('../../utils/response')
const db = require('../../config/db')

const EmployeeController = () => {
    const employeeService = EmployeeService(EmployeeRepository(db))
    const createEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await employeeService.registerEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listEmployee = async (req,res) => {
        try {
            const employees = await employeeService.findAllEmployee();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getEmployee = async (req,res) => {
        try {
            const id = req.params.id;
            const employee = await employeeService.findEmployeeById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const searchEmployee = async (req,res) => {
        try {
            const search = req.body;
            const employee = await employeeService.findEmployee(search);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    //Kalo mau pake id
    // const updateEmployee = (req, res) => {
    //     const id = req.params.id;
    //     const payload = req.body;
    //     const upEmployee = employeeService.editEmployee(payload, +id);
    //     res.json(Response().successMessage(res.statusCode, 'SUCCESS', upEmployee))
    // }

    //Kalo mau tanpa id
    const updateEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const upEmployee = await employeeService.editEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', upEmployee))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const deleteEmployeeData = async (req,res) => {
        const id = req.params.id;
        const employee = await employeeService.deleteEmployee(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    return {
        createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployeeData, searchEmployee
    }
}

module.exports = EmployeeController;