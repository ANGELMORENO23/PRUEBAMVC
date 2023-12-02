const usercontrollers = {
    login: function (req, res) {
        res.render("login", { title: "login" });
    },
    register: function (req, res) {
        res.render("register", { title: "register" });
    },
};

module.exports = usercontrollers;
