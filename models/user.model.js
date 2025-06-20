import mongoose from "mongoose"

const Schema = mongoose.Schema

const UserModel = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true },
)

const User = mongoose.model('user', UserModel)

export default User