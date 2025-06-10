import bcrypt from "bcrypt"

import User from "../models/user.model.js"

import generateToken from "../lib/jwt.js"

export const signup = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).json({ message: "All fields are required" })
        
            
        if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters" })
        
        const isUser = await User.findOne({ email })

        if (isUser) return res.status(400).json({ message: "Email already exist" })
        
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = await User.insertOne({
            email,
            password: hashedPassword,    
        })
        console.log("testing")

        generateToken(user._id, res)

        res.status(201).json({
            _id: user._id,
            email: user.email,
        })
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).json({ message: "All fields are required" })

        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "Invalid credentials" })

        const isPassword = bcrypt.compare(password, user.password)

        if (!isPassword) return res.status(400).json({ message: "Invalid credentials" })
        
        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            email: user.email,
        })
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie('jwt', "")

        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({ message: "Internal server error" })
    }
}