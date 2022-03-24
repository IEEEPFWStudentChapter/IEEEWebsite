const users = require('../data').userDB;
const bcrypt = require('bcrypt');
module.exports = {
    login: async (req, res) => {
        console.log('Logging in...')
        try{
            let foundUser = users.find((data) => req.body.email === data.email);
            if (foundUser) {
        
                let submittedPass = req.body.password; 
                let storedPass = foundUser.password; 
        
                const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
                if (passwordMatch) {
                    res.json({
                        id: foundUser.id,
                        email: foundUser.email,
                        valid: true
                    });
                } else {
                    res.json({
                        id: foundUser.id,
                        email: foundUser.email,
                        valid: false
                    });
                }
            }
            else {
        
                let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
                await bcrypt.compare(req.body.password, fakePass);
        
                res.json({
                    id: null,
                    email: null,
                    valid: false
                });
            }
        } catch{
            res.json({
                id: null,
                email: null,
                valid: false
            });
        }
    },
    register: async (req, res) => {
        console.log('Running Register...')
        try{
            let foundUser = users.find((data) => req.body.email === data.email);
            if (!foundUser) {
                console.log('User Not Found');
                let hashPassword = await bcrypt.hash(req.body.password, 10);
                let newUser = {
                    id: Date.now(),
                    email: req.body.email,
                    password: hashPassword,
                };
                users.push(newUser);
                console.log('User list', users);
                console.log(newUser.id);
                res.json({
                    id: newUser.id,
                    email: newUser.email,
                    valid: true
                });
            } else {
                console.log('User found');
                res.json({ 
                    id: null,
                    email: null,
                    valid: false
                });
            }
        } catch(e){
            console.log(e)
            res.json({
                id: null,
                email: null,
                valid: false,
                error: e
            });
        }
    }
};