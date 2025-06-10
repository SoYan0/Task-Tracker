import jwt from "jsonwebtoken"

const generateToken = async (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
            expiresIn: "3h",
        })

        const isDevelopment = process.env.NODE_ENV === "development";

        res.cookie("jwt", token, {
            httpOnly: true,
            secure: !isDevelopment,
            sameSite: !isDevelopment ? "strict" : "lax",
            maxAge: 3 * 60 * 60 * 1000, // 3 hours
        })

        // next()
    } catch (error) {
        
    }
}

export default generateToken