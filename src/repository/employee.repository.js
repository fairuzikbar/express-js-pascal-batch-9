//Repo ini terhubung ke RDBMS, NoSQL, microservices
//Repo ini urusan query dll
const employeeDb = [];
const EmployeeRepository = () => {
    const create = (payload) => {
        employeeDb.push(payload);
        return payload;
    }

    const list = () => employeeDb;

    const getById = (id) => {
        const employee = employeeDb.find((e) => e.id === id);
        return employee;
    }

    // kalo mau pake ID
    const update = (payload, id) => {
        const idx = isIdExist(id);
        if(idx !== -1){
            let employee = employeeDb[idx];
            employee.firstName = payload.firstName;
            employee.lastName = payload.lastName;
            employee.dob = payload.dob;
            employee.pob = payload.pob;
            employee.address = payload.address;
            return employee;
        }
        return `Employee with value ID ${id} not found`
    }

    // kalo mau tanpa id
    // const update = (payload) => {
    //     const id = isIdExist(employee);
    //     if(id !== -1){
    //         let employee = employeeDb[id];
    //         employee.firstName = payload.firstName;
    //         employee.lastName = payload.lastName;
    //         employee.dob = payload.dob;
    //         employee.pob = payload.pob;
    //         employee.address = payload.address;
    //         return employee;
    //     }
    //     return `Employee with value ID ${id} not found`
    // }

    function isIdExist(id){
        return employeeDb.findIndex((e) => e.id === id)
    }

    const deleted = (id) => {
        const employee = employeeDb.findIndex((e) => e.id === id);
        employeeDb.splice(employee, 1);
        return { message: `Delete id ${id} success`};
    }

    return {
        create, list, getById, update, deleted
    }
}

module.exports = EmployeeRepository;