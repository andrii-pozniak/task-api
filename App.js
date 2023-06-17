const express = require("express");
const cors = require("cors");
const taskRouter = require("./routes/api/tasks");
const categoryRouter = require("./routes/api/categories");
const authRouter = require("./routes/api/users");

//n7doqVRSiB4MVl8E

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", authRouter);


app.use("/tasks", taskRouter);

app.use("/categories", categoryRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

module.exports = app;
