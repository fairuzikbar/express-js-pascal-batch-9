const express = require('express');
const EmployeeRoute = require('./routes/employee.route');
require('dotenv').config();

const Server = () => {
    const app = express();
    app.use(express.json()); //untuk convert dari json
    const run = () => {
        //Semua route ditaruh di sini
        EmployeeRoute(app)
    }

    app.listen(process.env.APP_PORT, () => {
        console.info(`App server running on port ${process.env.APP_PORT}`)
    })

    return {
        run
    }
}

module.exports = Server;