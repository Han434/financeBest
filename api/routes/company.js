import express from 'express'
import dotenv from 'dotenv'
import Company from '../models/company.js';
dotenv.config();
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const company = await Company.find();
        res.json(company);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const company = new Company({
        name: req.body.name,
        age: req.body.age
    });
    try {
        const newCompany = await company.save();
        rres.status(201).json(newCompany);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;