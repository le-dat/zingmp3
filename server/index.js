require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const db = require("./config/db");
const router = require("./routers");

const port = process.env.PORT || 5000;
const app = express();

// connect database
db.connect();

// bodyPasser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// view url folder public ( images file )
app.use(express.static(path.join(__dirname, "public")));

// Page Home
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// router
router(app);

app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
