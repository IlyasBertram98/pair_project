const indexRouter = require("express").Router();

const registerAndLoginRouter = require("./registerAndLoginRouter");
const homeRouter = require("./homeRouter");

indexRouter.use("/", homeRouter);
indexRouter.use(registerAndLoginRouter);

module.exports = indexRouter;
