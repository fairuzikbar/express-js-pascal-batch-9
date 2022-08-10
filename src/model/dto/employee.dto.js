const Employee = require("../employee")

//DTO => Data Transfer Object
const EmployeeDto = (result, index = 0) => {
    return Employee (
        result.rows[index].id,
        result.rows[index].first_name,
        result.rows[index].last_name,
        result.rows[index].dob,
        result.rows[index].pob,
        result.rows[index].address,
        result.rows[index].marital_status
    )
}

module.exports = EmployeeDto