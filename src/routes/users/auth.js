const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./../../schema/user');
const JwtConfigs = require('./../../config');

module.exports = (passsport) => {
    passsport.use('token', new JwtStrategy(JwtConfigs, (payload, cb) => {
        User
            .findById(payload.id)
            .then((user) => {
                if(!user) {
                    return cb(null, false);
                }

                return cb(null, user);
            })
            .catch((error) => {
                console.log(error);
                return cb(null, false);
            });
    }));
};