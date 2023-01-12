const AdminController = require("../controllers/admin/admin");
const UserProfiles = require("../controllers/user/profile");
const userRouter = require("express").Router();

userRouter.get('/profile', UserProfiles.showProfiles)
userRouter.get('/profile/edit', UserProfiles.showEditProfiles)
userRouter.post('/profile/edit', UserProfiles.postEditProfile)

module.exports = userRouter