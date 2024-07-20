import express from 'express'
import dotenv from 'dotenv'
import userRoute from "./routes/user.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/user", userRoute);

// app.get("user", (res, req) => {
//     res.send("Hello World");
// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});