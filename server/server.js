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

app.use("/api/company", companyRoute);
app.use("/api/user", userRoute);
app.use(express.static("build"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});