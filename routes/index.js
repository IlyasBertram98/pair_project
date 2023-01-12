const indexRouter = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");

indexRouter.get("/", (req, res) => {
  const { success } = req.query;
  res.render("registerAndLogin/login", { success });
});

indexRouter.post("/", (req, res) => {
  const { username, password, role } = req.body;
  console.log(username, password, role);

  User.findOne({
    where: {
      username,
    },
  })
    .then((user) => {
      console.log("ada");
      if (user) {
        const compare = bcrypt.compareSync(password, user.password);
        const compareRole = user.role === role;

        if (compare && compareRole) {
          req.session.userId = user.id;
          req.session.username = user.username;
          req.session.role = user.role;
          const message = "login success";
          console.log("mantap slah");
          res.redirect(`/?success=${message}`);
        } else {
          console.log("mantap slah");
          const message = "password or role is wrong";
          res.redirect(`/?success=${message}`);
        }
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

indexRouter.get("/register", (req, res) => {
  res.render("registerAndLogin/register");
});

indexRouter.post("/register", (req, res) => {
  const { username, password, role } = req.body;

  User.create({
    username,
    password,
    role,
  })
    .then((user) => {
      const message = `successfully register the data`;
      res.redirect(`/?success=${message}`);
    })
    .catch((e) => {
      res.send(e);
    });
});

module.exports = indexRouter;
