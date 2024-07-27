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
        companyName: req.body.companyName,
        companyDescription: req.body.companyDescription,
        companyType: req.body.companyType
    });
    try {
        const newCompany = await company.save();
        res.status(201).json(newCompany);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;