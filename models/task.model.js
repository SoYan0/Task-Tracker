import mongoose  from "mongoose";

const Schema = mongoose.Schema

const TaskModel = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: "todo"
        },
    },
    { timestamps: true },
)

const Task = mongoose.model('task', TaskModel)

export default Task