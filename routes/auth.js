const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    // Get the authorization header
    const authHeader = req.headers["authorization"];
    
    // Check if authHeader is present and properly formatted (e.g., "Bearer <token>")
    const token = authHeader && authHeader.split(" ")[1];

    // If no token is provided, return an error response
    if (!token) {
        return res.status(401).json({ message: "Authentication token required" });
    }

    // Verify the token
    jwt.verify(token, "tcmTM", (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }

        // Attach the user information to the request object
        req.user = user;

        // Call the next middleware function
        next();
    });
};

module.exports = { authenticateToken };
