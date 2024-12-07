const express = require("express");

const userRouter = express.Router();

const { admin, manager, user } = require("../controllers/userController");
const { authorizeRoles } = require("../middlewares/roleMiddleware");
const { verifyToken } = require("../middlewares/authMiddleware");

userRouter.get("/admin", verifyToken, authorizeRoles("admin"), admin);
userRouter.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  manager
);
userRouter.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  user
);

module.exports = userRouter;
