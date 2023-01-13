const userRouter = require("express").Router();

const UserProfiles = require("../../controllers/user/profile");
const UserController = require("../../controllers/userController/userController");

userRouter.get("/", UserController.getUserPage);

userRouter.get('/profile', UserProfiles.showProfiles)
userRouter.get('/profile/edit', UserProfiles.showEditProfiles)
userRouter.post('/profile/edit', UserProfiles.postEditProfile)

userRouter.get("/foods/:id/add", UserController.getFoodPage);

userRouter.post("/foods/:id/add", UserController.postFoodPage);
userRouter.get("/history", UserController.getHistoryPage);
userRouter.get("/logout", UserController.getLogoutPage);

module.exports = userRouter;
