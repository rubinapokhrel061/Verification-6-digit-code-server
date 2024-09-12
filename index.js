const express = require("express");
const app = express();
const cors = require("cors");
const cron = require("node-cron");
const verificationRoute = require("./routes/verificationRoute");
const port = 3000;

app.use(express.json());
app.use(cors());

// Schedule task to run every second
cron.schedule("* * * * * *", () => {
  console.log("Task running every second");
});

app.use("/", verificationRoute);
app.get("/", (req, res) => {
  res.send("sucess");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
