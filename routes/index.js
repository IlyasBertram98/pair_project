const indexRouter = require("express").Router();
const adminRouter = require("./adminRoutes");
const registerAndLoginRouter = require("./registerAndLoginRouter");
const userRouter = require("./userRouter/userRouter");

indexRouter.use(registerAndLoginRouter);

const user = (req, res, next) => {
        if (req.session.user) {
            if (req.session.user.role === 'user') {
                console.log(req.session.user);
                next()
            }
        }
}

const admin = (req, res, next) => {
    if (req.session.user) {
        if (req.session.user.role === 'admin') {
            console.log(req.session.user);
            next() 
            
        }
    }
}

indexRouter.use("/admin", admin, adminRouter);
indexRouter.use("/user", user, userRouter);


module.exports = indexRouter;
