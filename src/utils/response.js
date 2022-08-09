const Response = () => {
    const succesMessage = (code, msg, data) => ({
        code: code,
        msg: msg,
        data: data
    });

    const errorMessage = (code, msg) => ({
        code: code,
        msg: msg
    });

    return {
        succesMessage, errorMessage
    }
}

module.exports = Response;