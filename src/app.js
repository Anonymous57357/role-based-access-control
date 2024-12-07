const express = require("express");

const app = express();
const { connectDB } = require("./config/database");
const authRouter = require("./routes/authRoute");
const userRouter = require("./routes/userRoute");
const dotenv = require("dotenv").config();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/", userRouter);

const PORT = process.env.PORT || 3000;

connectDB()
  .then((data) => {
    console.log("database connection succesfull......");
    app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
  })
  .catch((err) => {
    console.error("database not connected");
  });
