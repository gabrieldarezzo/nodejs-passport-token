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
    return bcrypt.hash(password, bcrypt.genSaltSync(7), null, cb);
};

User.methods.validatePassword = function(password, cb) {
    return bcrypt.compare(password, this.password, cb)
}

module.exports = mongoose.model('User', User);