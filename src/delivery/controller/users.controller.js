//Controller ini eksekutornya
const Response = require('../../utils/response')

const UsersController = () => {
    const createUsers = async (req, res) => {
        try {
            const payload = req.body;
            const newUsers = await req.service.registerUsers(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUsers))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const listUsers = async (req,res) => {
        try {
            const keyword = req.query.username
            const users = await req.service.findAllUsers(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    const getUsers = async (req,res) => {
        try {
            const id = req.params.id;
            const users = await req.service.findUsersById(+id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', users));
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    //Kalo mau pake id
    const updateUsers = async (req, res) => {
        try {
            const id = req.params.id;
            const payload = req.body;
            const upUsers = await req.service.editUsers(payload, id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', upUsers))
        } catch (error) {
            res.json(Response().errorMessage('XX', 'gagal'))
        }
    }

    //Kalo mau tanpa id
    // const updateUsers = async (req, res) => {
    //     try {
    //         const payload = req.body;
    //         const upUsers = await req.service.editUsers(payload);
    //         res.json(Response().successMessage(res.statusCode, 'SUCCESS', upUsers))
    //     } catch (error) {
    //         res.json(Response().errorMessage('XX', 'gagal'))
    //     }
    // }

    const deleteUsersData = async (req,res) => {
        const id = req.params.id;
        const user = await req.service.deleteUsers(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
    }

    return {
        createUsers, listUsers, getUsers, updateUsers, deleteUsersData
    }
}

module.exports = UsersController;