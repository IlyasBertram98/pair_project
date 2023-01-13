const { Food, Order, User, FoodOrder } = require("../../models");
const convertToRupiah = require("../../helper/convertToRupiah");
const dateFormater = require("../../helper/dateFormatter");
const { Op } = require("sequelize");

class UserController {
  static getUserPage(req, res) {
    const { user } = req.session;
    const { sort, search, min, max } = req.query;
    if (!user) return res.redirect("/");
    const options = {};
    if (sort === "l") options.order = [["price", "ASC"]];
    if (sort === "h") options.order = [["price", "DESC"]];
    if (search) options.where = { name: { [Op.iLike]: `%${search}%` } };
    if (min) options.where = { price: { [Op.gte]: min } };
    if (max) options.where = { price: { [Op.lte]: max } };

    Food.findAll(options).then((foods) => {
      res.render("user/userHome", { username: user.username, foods });
    });
  }

  static getFoodPage(req, res) {
    const { id } = req.params;
    Food.findByPk(id).then((food) => {
      res.render("user/foodById", { food });
    });
  }

  static postFoodPage(req, res) {
    const { id } = req.params;
    const { quantity, address } = req.body;
    Food.findByPk(id)
      .then((food) => {
        if (req.session.user.cart.length === 0) {
          req.session.user.cart.push({ id: food.id });
        } else {
          req.session.user.cart = [];
        }
        return Order.create({
          UserId: req.session.user.id,
          totalPrice: food.price * quantity,
          address,
          quantity,
        });
      })
      .then((order) => {
        return FoodOrder.create({
          FoodId: req.session.user.cart[0].id,
          OrderId: order.id,
        });
      })
      .then(() => {
        res.redirect("/user/history");
      })
      .catch((err) => res.redirect("/user/history?inierror"));
  }

  static getHistoryPage(req, res) {
    const { user } = req.session;
    if (!user) return res.redirect("/");
    console.log(user.id, "ini user id");
    User.findByPk(user.id, {
      include: {
        model: Order,
        include: {
          model: FoodOrder,
          include: Food,
        },
      },
    }).then((users) => {
      // res.send(users);
      res.render("user/myHistory", {
        data: users,
        convertToRupiah,
        dateFormater,
      });
    });
  }

  static getLogoutPage(req, res) {
    req.session.destroy();
    res.redirect("/");
  }
}

module.exports = UserController;
