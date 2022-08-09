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

    return {
        create, list, getById
    }
}

module.exports = EmployeeRepository;