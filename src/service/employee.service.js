// Usecase/ Service itu bussiness logic semacam nama ngga boleh kosong dll
// Mirip kayak validasi

const EmployeeService = (employeeRepository) => { //yg membungkus ini biasanya menggunakan PascalCase
    const { create, list, getById, update, deleted } = employeeRepository;

    //Kalo ngga ada kondisi bisa disimpelkan begini
    const registerEmployee = (newEmployee) => create(newEmployee);
    const findAllEmployee = () => list();
    const findEmployeeById = (id) => getById(id);
    const editEmployee = (upEmployee, id) => update(upEmployee, id); //Kalo mau pake id
    // const editEmployee = (upEmployee, id) => update(upEmployee, id); //Kalo mau tanpa id
    const deleteEmployee = (id) => deleted(id);

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
        registerEmployee, findAllEmployee, findEmployeeById, editEmployee, deleteEmployee
    }
}

module.exports = EmployeeService;