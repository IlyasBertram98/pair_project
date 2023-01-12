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
        res.redirect(`/login?success=register success`);
      })
      .catch((e) => {
        res.send(e);
      });
  }
}

module.exports = RegisterController;
