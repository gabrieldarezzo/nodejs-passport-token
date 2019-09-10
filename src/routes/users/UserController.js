const User = require('./../../schema/user');

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
    
};