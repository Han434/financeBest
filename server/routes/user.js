import express from 'express'
import dotenv from 'dotenv'
import User from '../models/user.js';
dotenv.config();
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName: res.body.firstName,
            lastName: res.body.lastName,
            emailAddress: res.body.emailAddress,
            password: hashedPassword,
            dateOfBirth: res.body.dateOfBirth
        });
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        }
        catch (err) {
            res.status(400).json({ message: err.message });
        }
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});

export default router;