const indexRouter = require("express").Router();
const adminRouter = require("./adminRoutes");
const registerAndLoginRouter = require("./registerAndLoginRouter");

indexRouter.use(registerAndLoginRouter);
indexRouter.use('/admin', adminRouter);
module.exports = indexRouter;
