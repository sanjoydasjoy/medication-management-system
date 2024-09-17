const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    const { UserName, Email, Password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(Password, 10);
        const newUser = await User.create({
            UserName,
            Email,
            Password: hashedPassword
        });

        res.json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const user = await User.findOne({ where: { Email } });

        if (!user || !(await bcrypt.compare(Password, user.Password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ UserID: user.UserID }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
