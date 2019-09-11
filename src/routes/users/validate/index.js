const validationResult = require('express-validator/check').validationResult;

module.exports = (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.mapped()
        });
    }

    return next();

};