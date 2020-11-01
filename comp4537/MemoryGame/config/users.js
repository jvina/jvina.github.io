const sql = require("./db.js");

// constructor
const User = function(user) {
    this.name = user.name;
    this.score = user.score;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        console.log(newUser)
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM users ORDER BY score * 1 DESC LIMIT 5", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("users: ", res);
        result(null, res);
    });
};

module.exports = User;