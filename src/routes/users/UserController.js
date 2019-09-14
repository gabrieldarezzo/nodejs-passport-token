const User = require('./../../schema/user');
const jwt = require('jwt-simple');
const JwtConfigs = require('./../../config');

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },
    async store(req, res) {
        try {
            let user = new User(req.body);
            
            await user.hashPassword(user.password, (err, encPassword) => {
                user.password = encPassword;
            });
            
            const userResult = await user.save();
            return res.json({
                status: true,
                user : userResult,
            });
        } catch (err) {
            return res.json({
                status: false,
                user : err,
            });
        }
        
    },
    async destroy(req, res) {
        try {
            const id = req.params.id;
            const userResult = await User.findByIdAndRemove(id);

            return res.json({
                status: true,
                user : userResult,
            });
        } catch (err) {
            return res.json({
                status: false,
                user : err,
            });
        }        
    },
    async token(req, res) {
        let { username, password } = req.body
        User
            .findOne({ username })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        status: false,
                        token: ''
                    })
                }
                
                user.validatePassword(password, (err, result) => {
                    if (!result || err) {
                        return res.status(404).json({
                            status: false,
                            token: ''
                        })
                    }
    
                    let token = jwt.encode({ id: user._id }, JwtConfigs.secretOrKey)
    
                    return res.status(200).json({
                        status: true,
                        token
                    })
                })
            })
            .catch((error) => {
                return res.status(500).json({
                    status: false,
                    error
                })
            })
    },

    
    /*
    async token(req, res) {
        try {

            let { username, password } = req.body;
            const userModel = await User.findOne({ username });
            
            if(!userModel) {
                return res
                    .status(404)
                    .json({
                        status: false,
                        token: '',
                    });
            }

            await userModel.validatePassword(userModel.password, password, (err, result) => {
                if(!result || err) {
                    return res
                        .status(404)
                        .json({
                            status: false,
                            token: '',
                        });
                }

                let token = jwt.encode({ id: userModel._id }, JwtConfigs.secretOrKey);

                return res.json({
                    status: true,
                    token,
                });

            });

        
        } catch (err) {
            return res
            .status(500)
            .json({
                status: false,
                token: '',
            });
        }    
    },
    */
    
};