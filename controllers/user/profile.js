const { User, Profile } = require("../../models");

class UserProfiles {

    static showProfiles(req, res) {
        User.findOne({
                where: {
                    id: req.session.user.id
                },
                include: {
                    model: Profile
                }
            })
            .then(profile => {
                res.render('user/showUserProfiles', { profile })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static showEditProfiles(req, res) {

        Profile.findOne({
                where: {
                    UserId: req.session.user.id
                }
            })
            .then(profile => {
                res.render('user/showEditProfile', { profile })
            })
            .catch()
    }

    static postEditProfile(req, res) {
        const {name,address,dateOfBirth} = req.body

        Profile.findOne({
                where: {
                    UserId: req.session.user.id
                }
            })
            .then(profile => {

                return Profile.update({
                    name: name,
                    address: address,
                    dateOfBirth: dateOfBirth,
                    UserId: req.session.user.id
                }, {
                    where: {
                        id: profile.id
                    }
                })
            })
            .then(() => {
                res.redirect(`/user/profile`)
            })
            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = UserProfiles