import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MonogDB')
})
.catch((err) => {
    console.log(err)
})

const app = express();

app.use(express.json()); //Allows json as input of backend

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// API route
app.use("api/user", userRoutes);
app.use("/api/auth", authRoutes)
