const registerAndLoginRouter = require("express").Router();

const LoginController = require("../controllers/registerAndLogin/login");
const RegisterController = require("../controllers/registerAndLogin/register");

registerAndLoginRouter.get("/", LoginController.getLoginPage);
registerAndLoginRouter.post("/", LoginController.login);

registerAndLoginRouter.get("/register", RegisterController.getRegisterPage);
registerAndLoginRouter.post("/register", RegisterController.register);

module.exports = registerAndLoginRouter;
