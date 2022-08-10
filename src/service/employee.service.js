// Usecase/ Service itu bussiness logic semacam nama ngga boleh kosong dll
// Mirip kayak validasi

const EmployeeService = (employeeRepository) => { //yg membungkus ini biasanya menggunakan PascalCase
    const { create, list, getById, update, deleted } = employeeRepository;

    //Kalo ngga ada kondisi bisa disimpelkan begini
    const registerEmployee = async (newEmployee) => {
        try {
            return await create(newEmployee)
        } catch (error) {
            return err.message
        }
    };

    const findAllEmployee = async () => {
        try {
            return await list()
        } catch (error) {
            return err.message
        }
    };

    const findEmployeeById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    const findEmployee = async (search) => {
        try {
           return await getSearch(search);        
        } catch (error) {
           return err.message
        }   
       }
    // const editEmployee = async (upEmployee, id) => {
    //     try {
    //         return await update(upEmployee, id); //Kalo mau pake id
    //     } catch (error) {
    //         return err.message
    //     }
    // }
    const editEmployee = async (upEmployee) => {
        try {
            return await update(upEmployee); //Kalo mau tanpa id
        } catch (error) {
            console.log(error);
        }       
    }

    const deleteEmployee = async (id) => {
        try {
            return await deleted(id)
        } catch (error) {
            console.log(error);
        }
    };

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
        registerEmployee, findAllEmployee, findEmployeeById, editEmployee, deleteEmployee, findEmployee
    }
}

module.exports = EmployeeService;