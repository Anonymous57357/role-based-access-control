const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    // Check if user role exists and is allowed
    if (!allowedRoles.includes(req.user.role)) {
      console.log("The User Object:", req.user.role);
      console.log("Allowed Roles:", allowedRoles);

      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = { authorizeRoles };
