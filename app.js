const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");

const indexRouter = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
