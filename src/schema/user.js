const mongoose = require('mongoose');
const bcrypt = require('bcrypt-node');

const User = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
});

User.methods.hashPassword = (password, cb)  => {
    return bcrypt.hash(password, bcrypt.genSaltSync(8), null, cb);
};


module.exports = mongoose.model('User', User);