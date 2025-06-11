import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        
        if (!token) return res.status(401).json({ message: "No Token Provided" })
        
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        req.user = decoded

        next()
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

export default authMiddleware