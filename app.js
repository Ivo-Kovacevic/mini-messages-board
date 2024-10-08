const express = require("express");
require("dotenv").config();
const path = require("node:path");

const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require("./routes/indexRouter");

// CSS
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Parse form data to req.body
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(port, () => console.log(`Server is live at port ${port}`));
