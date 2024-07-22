import express from 'express'
import dotenv from 'dotenv'
import userRoute from "./routes/user.js"
import companyRoute from "./routes/company.js"
import mongoose from 'mongoose'
dotenv.config();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});
db.once('open', (error) => {
    console.log('Connected to Database');
});

app.use(express.json());
app.use("/user", userRoute);
app.use("/company", companyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});