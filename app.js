const express = require("express");
const app = express();
const session = require("express-session");

const indexRouter = require("./routes/index");
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(indexRouter);
app.set("view engine", "ejs");

const { User, Order, FoodOrder, Food } = require("./models");

app.get("/test", (req, res) => {
  //query from User to FoodOrder
  User.findAll({
    include: {
      model: Order,
      include: {
        model: FoodOrder,
        include: {
          model: Food,
        },
      },
    },
  }).then((data) => {
    res.send(data);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
