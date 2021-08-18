const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (err) => console.log("your error:", err));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.listen(8800, () => {
  console.log("server is running on 8800");
});
