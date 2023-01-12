const indexRouter = require("express").Router();
const registerAndLoginRouter = require("./registerAndLoginRouter");

indexRouter.use(registerAndLoginRouter);

module.exports = indexRouter;
