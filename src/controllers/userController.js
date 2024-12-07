const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const admin = async (req, res, next) => {
  try {
    res.status(200).json({ message: "admin" });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const manager = async (req, res, next) => {
  try {
    res.status(200).json({ message: "manager" });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

const user = async (req, res, next) => {
  try {
    res.status(200).json({ message: "user" });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = { admin, manager, user };
