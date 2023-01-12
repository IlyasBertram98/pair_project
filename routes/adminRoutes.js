const AdminController = require("../controllers/admin/admin");
const adminRouter = require("express").Router();


adminRouter.get('/listFood', AdminController.showFood)
adminRouter.get('/listFood/:id', AdminController.destroy)

module.exports = adminRouter