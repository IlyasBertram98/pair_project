const AdminController = require("../controllers/admin/admin");
const adminRouter = require("express").Router();


adminRouter.get('/', AdminController.showFood)
adminRouter.get('/logout', AdminController.getLogoutPage)
adminRouter.get('/:id', AdminController.destroy)



module.exports = adminRouter