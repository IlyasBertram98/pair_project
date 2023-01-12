const userRouter = require("express").Router();

const UserController = require("../../controllers/userController/userController");

userRouter.get("/", UserController.getUserPage);
userRouter.get("/foods/:id/add", UserController.getFoodPage);

userRouter.post("/foods/:id/add", UserController.postFoodPage);
userRouter.get("/history", UserController.getHistoryPage);

userRouter.get("/logout", UserController.getLogoutPage);

module.exports = userRouter;
