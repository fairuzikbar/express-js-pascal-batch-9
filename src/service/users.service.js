const UsersService = (usersRepository) => { //yg membungkus ini biasanya menggunakan PascalCase
    const { create, list, getById, update, deleted, getUserByUsernamePassword } = usersRepository;

    //Kalo ngga ada kondisi bisa disimpelkan begini
    const registerUsers = async (newUsers) => {
        try {
            return await create(newUsers)
        } catch (error) {
            return err.message
        }
    };

    const findAllUsers = async (keyword) => {
        try {
            return await list(keyword)
        } catch (error) {
            return err.message
        }
    };

    const findUsersById = async (id) => {
     try {
        return await getById(id);        
     } catch (error) {
        return err.message
     }   
    }

    const editUsers = async (upEmployee, id) => {
        try {
            return await update(upEmployee, id); //Kalo mau pake id
        } catch (error) {
            return err.message
        }
    }

    // const editUsers = async (upUsers) => {
    //     try {
    //         return await update(upUsers); //Kalo mau tanpa id
    //     } catch (error) {
    //         console.log(error);
    //     }       
    // }

    const deleteUsers = async (id) => {
        try {
            return await deleted(id)
        } catch (error) {
            console.log(error);
        }
    };

    const findUserByUsernamePassword = async (username, password) => {
        try {
            return await getUserByUsernamePassword(username, password)
        } catch (error) {
            return err.message
        }
    }

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
        registerUsers, findAllUsers, findUsersById, editUsers, deleteUsers, findUserByUsernamePassword
    }
}

module.exports = UsersService;