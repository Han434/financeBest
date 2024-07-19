require('dotenv').config(); 

const express = require('express');
const routes = require('./routes/router');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 9000;

mongoose.connect(mongoString);

const database = mongoose.connection;
const app = express();

const UserSchema = new mongoose.Schema({
    userName: {
        required: true,
        type: String
    },
    userAge: {
        required: true,
        type: Number
    }
});

const UserModel = mongoose.model("user", UserSchema);

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
});

app.get("/getUsers", async (req, res) => {
    const userData = await UserModel.find();
    //res.send("Hello");
    res.json(userData);
});

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})