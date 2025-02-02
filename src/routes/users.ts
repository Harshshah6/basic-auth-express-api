import express from 'express';
import { User } from '@/models/schemas';

const router = express.Router();

// Create a new user
router.post('/', async (req, res):Promise<any> => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ name, email, password });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;