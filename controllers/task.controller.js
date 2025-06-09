import Task from "../models/task.model.js"

export const getAllTasks = async (req, res) => {
    try {
        const data = await Task.find()
        if (!data) return res.status(400).json({ message: "No tasks!" })
        res.status(200).json(data)
    } catch (error) {
        console.log("Error in getAllTasks controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}


export const newTask = async (req, res) => {
    const { title, description } = req.body
    try {
        if (!title) return res.status(400).json({ message: "Title is required!" })

        const task = await Task.insertOne({
            title,
            description,
        })

        res.status(201).json(task)
    } catch (error) {
        console.log("Error in newTask controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const editTask = async (req, res) => {
    const { _id } = req.params
    const { title, description } = req.body
    try {
        if (!title) return res.status(400).json({ message: "Title is required" })
        
        const result = await Task.findOneAndUpdate({ _id }, {
            title,
            description,
        })

        res.status(200).json({ message: "Task Updated!" })
    } catch (error) {
        console.log("Error in editTask controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const deleteTask = async (req, res) => {
    const { _id } = req.params
    try {
        
        await Task.findOneAndDelete({ _id })

        res.status(200).json({ message: "Task deleted!" })
    } catch (error) {
        console.log("Error in deletTask controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changeStatusTodo = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            status: "todo",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changeStatusTodo controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changeStatusProgress = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            status: "progress",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changeStatusProgress controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changeStatusDone = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            status: "done",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changeStatusDone controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changePriorityLow = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            priority: "low",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changePriorityLow controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changePriorityMedium = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            priority: "medium",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changePriorityMedium controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const changePriorityHigh = async (req, res) => {
    const { _id } = req.params
    try {
        await Task.findOneAndUpdate({ _id }, {
            priority: "high",
        })

        res.status(200).json({ message: "Updated!" })
    } catch (error) {
        console.log("Error in changePriorityHigh controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}