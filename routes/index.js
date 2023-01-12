const indexRouter = require("express").Router();
const adminRouter = require("./adminRoutes");
const registerAndLoginRouter = require("./registerAndLoginRouter");
const userRouter = require("./userRoutes");

indexRouter.use(registerAndLoginRouter);
indexRouter.use('/admin', adminRouter);
indexRouter.use('/user', userRouter);
module.exports = indexRouter;
