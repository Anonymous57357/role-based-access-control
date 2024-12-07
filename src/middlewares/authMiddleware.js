const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  // Ensure the Authorization header exists and starts with "Bearer"
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1]; // Extract the token part after "Bearer"
  }

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode; // Attach decoded user information to the request
    console.log(decode);

    next(); // Move to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: `ERROR: ${error.message}` });
  }
};

module.exports = { verifyToken };
