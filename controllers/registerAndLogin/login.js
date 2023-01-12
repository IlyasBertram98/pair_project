const { User } = require("../../models");
const comparePassword = require("../../helper/auth/comparePassword");
const compareRole = require("../../helper/auth/compareRole");
const setSession = require("../../helper/auth/setSession");

class LoginController {
  static getLoginPage(req, res) {
    const { success, error } = req.query;
    res.render("registerAndLogin/login", { success, error });
  }

  static login(req, res) {
    const { username, password, role } = req.body;

    User.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (!user) return res.redirect(`/?error=username is incorrect`);
        const passwordMatched = comparePassword(password, user.password);
        const roleMatched = compareRole(role, user.role);

        if (passwordMatched && roleMatched) {
          setSession(req, user);
          res.redirect(`/?success=login success`);
        } else {
          res.redirect(`/?error=password or role is incorrect`);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LoginController;
