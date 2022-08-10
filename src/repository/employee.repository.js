//Repo ini terhubung ke RDBMS, NoSQL, microservices
let employeeDb = []
const DbQuery = require("../config/db.query");
const EmployeeDto = require("../model/dto/employee.dto");
const employee = require("../model/employee");

//Repo ini urusan query dll
const EmployeeRepository = (db) => {
    const create = async (payload) => {
       try {
        const result = await db.query(
            DbQuery().INSERT_BIODATA,
            [
                payload.firstName,
                payload.lastName,
                payload.dob,
                payload.pob,
                payload.address,
                payload.maritalStatus
            ]);
            return EmployeeDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async () => {
        try {
            const result = await db.query(DbQuery().SELECT_BIODATA_LIST);
            const employees = [];
            for(let i = 0; i < result.rows.length; i++){
                employees.push(EmployeeDto(result, i))
            }
            return employees
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_BIODATA_ID,[id]);
            return EmployeeDto(result);
        } catch (error) {
            return err.message
        }
    }

    const getSearch = async () => {
        try {
            const searchLike = `%${searchQuery}%`
            const result = await db.query(DbQuery().SEARCH_BIODATA,[searchLike]);
            return EmployeeDto(result)
        } catch (error) {
            return err.message
        }
    }

    // kalo mau pake ID
    // const update = (payload, id) => {
    //     const idx = isIdExist(id);
    //     if(idx !== -1){
    //         let employee = employeeDb[idx];
    //         employee.firstName = payload.firstName;
    //         employee.lastName = payload.lastName;
    //         employee.dob = payload.dob;
    //         employee.pob = payload.pob;
    //         employee.address = payload.address;
    //         return employee;
    //     }
    //     return `Employee with value ID ${id} not found`
    // }

    // kalo mau tanpa id
    const update = async (payload) => {
        try {
            const result = await db.query(DbQuery().UPDATE_BIODATA,[
                payload.firstName, payload.lastName, payload.dob, payload.pob, payload.address, payload.marital_status, payload.id
            ])
            return EmployeeDto(result);
        } catch (error) {
            return error.message;
        }
    }

    const deleted = async (id) => {
        try {
            await db.query(DbQuery().DELETE_BIODATA,[id])
            return { message : `Delete ID ${id} berhasil`}
        } catch (error) {
            return error.message;
        }
    }

    return {
        create, list, getById, update, deleted, getSearch
    }
}

module.exports = EmployeeRepository;