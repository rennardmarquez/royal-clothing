const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/user"));

app.listen(5000, () => {
  console.log("server running at port 5000");
});
