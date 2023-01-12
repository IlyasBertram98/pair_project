const homeRouter = require("express").Router();
const HomeController = require("../controllers/homeController/homeController");

homeRouter.get("/", HomeController.showHome);

module.exports = homeRouter;
