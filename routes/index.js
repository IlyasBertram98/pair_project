const indexRouter = require("express").Router();
const registerAndLoginRouter = require("./registerAndLoginRouter");
const userRouter = require("./userRouter/userRouter");

indexRouter.use(registerAndLoginRouter);
indexRouter.use("/user", userRouter);

module.exports = indexRouter;
