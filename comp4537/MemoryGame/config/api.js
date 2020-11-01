const User = require("./users.js");

exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can't be empty"
        });
    } 
    // res.send(JSON.stringify({"status": 200, "error": null, "response": "added 1 row"}));
    
    // Create a User
    const user = new User({
        name: req.body.name,
        score: req.body.score
    });

    // Save user in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        else {
            console.log("data", data)
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};