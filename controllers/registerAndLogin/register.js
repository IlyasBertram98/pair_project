const { User } = require("../../models");

class RegisterController {
  static getRegisterPage(req, res) {
    res.render("registerAndLogin/register");
  }

  static register(req, res) {
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
  }
}

module.exports = RegisterController;
