const exp = require("constants");
const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const contactRouter = require("./routers/contact");

app.set("view engine", "ejs");

// app.use(morgan());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ContactRouter
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.json({
    message: " server is running",
  });
});

const port = process.env.PORT || 7878;
// connect mongoose
mongoose
  .connect(
    "mongodb+srv://shunnoIT_project1:cN8qroPsviiskJcy@cluster0.5rnuhbi.mongodb.net/uy"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
