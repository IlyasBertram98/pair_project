const registerAndLoginRouter = require("express").Router();

const LoginController = require("../controllers/registerAndLogin/login");
const RegisterController = require("../controllers/registerAndLogin/register");

registerAndLoginRouter.get("/", LoginController.getLoginPage);
registerAndLoginRouter.post("/", LoginController.login);

registerAndLoginRouter.get("/register", RegisterController.getRegisterPage);
registerAndLoginRouter.post("/register", RegisterController.register);


// Middleware session (untuk admin)
// registerAndLoginRouter.use((req, res, next) => {
//     if (req.session.user) {
//         next() 
//     } else {
//         const validation = 'Login failed ! please check your input.'
//         res.redirect(`/?failed=${validation}`)
//     } 
// })
//lanjut kalau berhasil



module.exports = registerAndLoginRouter;
