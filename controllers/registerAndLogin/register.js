const { User } = require("../../models");

class RegisterController {
  static getRegisterPage(req, res) {
    const { errorRegister } = req.query;
    const arrErr = errorRegister ? errorRegister.split(",") : [];
    res.render("registerAndLogin/register", { arrErr });
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
        if (e.name === "SequelizeValidationError") {
          const message = e.errors.map((err) => err.message);
          res.redirect(`/register?errorRegister=${message}`);
        } else {
          res.send(e);
        }
      });
  }
}

module.exports = RegisterController;
