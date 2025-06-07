import express from "express"
import dotenv from "dotenv"

import tasksRoute from "./routes/task.route.js"
import connectDB from "./lib/db.js"



dotenv.config()

const app = express()

const PORT = process.env.PORT || 5001



app.listen(PORT, () => {
    console.log(`online on http://localhost:${PORT}`)
    connectDB()
})

app.use(express.json())

app.use('/api/tasks', tasksRoute)
