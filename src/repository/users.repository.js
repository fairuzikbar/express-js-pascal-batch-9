//Repo ini terhubung ke RDBMS, NoSQL, microservices
const DbQuery = require("../config/db.query");
const UsersDto = require("../model/dto/users.dto");
const users = require("../model/users");
const { passwordUtil, passwordCompare } = require('../utils/password.util')

//Repo ini urusan query dll
const UsersRepository = (db) => {
    const create = async (payload) => {
       try {
        // const passHash = await bcrypt.hash(payload.password, 10)
        const password = await passwordUtil(payload.password)
        const result = await db.query(
            DbQuery().CREATE_USERS,
            [
                payload.username,
                payload.email,
                password
            ]);
            return UsersDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async (keyword) => {
        try {
            const users = [];
            if(keyword){
                const result = await db.query(DbQuery().SEARCH_USERS,[`%${keyword}%`]);
                for(let i = 0; i < result.rows.length; i++){
                users.push(UsersDto(result, i))
            }
            } else {
                const result = await db.query(DbQuery().SELECT_USERS_LIST);
                for(let i = 0; i < result.rows.length; i++){
                    users.push(UsersDto(result, i))
                }
            }
            return users
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_USERS_ID,[id]);
            return UsersDto(result);
        } catch (error) {
            return err.message
        }
    }

    // kalo mau pake ID
    const update = async (payload, id) => {
        try {
            // const passHash = await bcrypt.hash(payload.password, 10)
            const password = await passwordUtil(payload.password)
            const result = await db.query(DbQuery().UPDATE_USERS,[
                payload.username, payload.email, password, id
                ])
            return UsersDto(result); 
        } catch (error) {
            return error.message
        }
    }

    // kalo mau tanpa id
    // const update = async (payload) => {
    //     try {
    //         const result = await db.query(DbQuery().UPDATE_USERS,[
    //             payload.username, payload.email, payload.password, payload.id
    //         ])
    //         return UsersDto(result);
    //     } catch (error) {
    //         return error.message;
    //     }
    // }

    const deleted = async (id) => {
        try {
            await db.query(DbQuery().DELETE_USERS,[id])
            return { message : `Delete ID ${id} berhasil`}
        } catch (error) {
            return error.message;
        }
    }

    const getUserByUsernamePassword = async (username, password) => {
        try {
            const result = await db.query(DbQuery().SELECT_USER, [username]);
            const validPassword = await passwordCompare(password, result.rows[0].password);
            if(!validPassword){
                return null;
            }
            return await getById(result.rows[0].id)
        } catch (error) {
            return err.message
        }
    }

    return {
        create, list, getById, update, deleted, getUserByUsernamePassword
    }
}

module.exports = UsersRepository;