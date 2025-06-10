import express from "express"
import dotenv from "dotenv"

import authRoute from "./routes/auth.route.js"
import tasksRoute from "./routes/task.route.js"

import connectDB from "./lib/db.js"
import cookieParser from "cookie-parser"



dotenv.config()

const app = express()

const PORT = process.env.PORT || 5001



app.listen(PORT, () => {
    console.log(`online on http://localhost:${PORT}`)
    connectDB()
})

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/tasks', tasksRoute)
