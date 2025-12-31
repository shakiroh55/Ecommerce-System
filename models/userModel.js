const connPool = require('../connect.js');
const sqlObject = require('../models/sql.js');

const registerUser = (data) => {
    const { fullname, email, password, role } = data;
    return connPool.query(sqlObject.register, [fullname, email, password, role]);
};

const findUserByEmail = (email) => {
    return connPool.query(sqlObject.findUserByEmail, [email]);
};

module.exports = { registerUser, findUserByEmail };
