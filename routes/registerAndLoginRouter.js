const registerAndLoginRouter = require("express").Router();

const LoginController = require("../controllers/registerAndLogin/login");
const RegisterController = require("../controllers/registerAndLogin/register");

registerAndLoginRouter.get("/login", LoginController.getLoginPage);
registerAndLoginRouter.post("/login", LoginController.login);

registerAndLoginRouter.get("/register", RegisterController.getRegisterPage);
registerAndLoginRouter.post("/register", RegisterController.register);

module.exports = registerAndLoginRouter;
