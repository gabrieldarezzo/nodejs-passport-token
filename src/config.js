const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = {
    secretOrKey: 'U8$##u28318u8da',
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
};