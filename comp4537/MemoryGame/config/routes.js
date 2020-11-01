module.exports = app => {
    const users = require("./api.js");
    // create a new user
    app.post("/users", users.create);
    // retrieve all users
    app.get("/users", users.findAll);
};