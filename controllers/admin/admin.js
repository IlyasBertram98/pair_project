const { Food } = require("../../models");

class AdminController {

    static showFood(req, res) {

        const { success } = req.query

        Food.findAll()
            .then(food => {
                res.render('admin/showFood', { food, success })
                // res.send(food)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static destroy(req, res) {
        const { id } = req.params

        //data temp
        const data = {}
        Food.findOne({ where: { id: id } })
            .then((food) => {
                data.food = food
                return Food.destroy({ where: { id: id } })
            })
            .then(() => {
                res.redirect(`/admin?success=${data.food.name}`)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getLogoutPage(req, res) {
        req.session.destroy();
        res.redirect("/");
      }

}

module.exports = AdminController