import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root123@',
    database: 'financeBest'
}).promise()

const results = await pool.query("select * from user");
console.log(results);