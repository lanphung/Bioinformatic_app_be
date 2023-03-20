const userModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

class userController {
    findUser(req, res) {
        const userBody = req.body;
        const user = userModel.findOne({ email: String(userBody.email) });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        //   const isPasswordValid = await bcrypt.compare(password, user.password);
        const isPasswordValid = String(user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });

        res.json({ token });
    }

    register(req, res) {
        const userBody = req.body;
        console.log(userBody);
        const newUserData = new userModel({
            email: String(userBody?.email),
            password: String(userBody?.password),
            access: String(userBody?.access),
        });
        newUserData
            .save()
            .then((user) => {
                console.log('Added new user to database:', user);
                res.status(201).json({
                    message: 'user added successfully',
                    user,
                });
            })
            .catch((err) => {
                console.error('Error adding user to database:', err);
                res.status(500).json({ error: 'Failed to add user' });
            });
    }
}

module.exports = new userController();
