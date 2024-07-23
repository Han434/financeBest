import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

const router = express.Router();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

const getUsers = async () => {
    const query = "select * from user";
    const [rows] = await pool.query(query);
    return rows;
};

const getUserById = async (id) => {
    const query = `select * from user where userId = ?`;
    const [rows] = await pool.query(query, [id]);
    return rows[0];
};

router.get('/', async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

export default router;