// Usecase/ Service itu bussiness logic semacam nama ngga boleh kosong dll
// Mirip kayak validasi

const EmployeeService = (employeeRepository) => { //yg membungkus ini biasanya menggunakan PascalCase
    const { create, list, getById } = employeeRepository;

    //Kalo ngga ada kondisi bisa disimpelkan begini
    const registerEmployee = (newEmployee) => create(newEmployee);
    const findAllEmployee = () => list();
    const findEmployeeById = (id) => getById(id);

    //Kalo ada kondisi yg mau dituliskan, di sini
    // const registerEmployee = (newEmployee) => {
    //     return create(newEmployee);
    // }

    // const findAllEmployee = () => {
    //     return list();
    // }

    // const findEmployeeById = (id) => {
    //     return getById(id)
    // }

    return {
        registerEmployee, findAllEmployee, findEmployeeById
    }
}

module.exports = EmployeeService;