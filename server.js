const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
  });


// parse requests of content-type: application/json
app.use(bodyParser.json());

// pare requests fo content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Welcome to the memory game"});
});

require('./comp4537/MemoryGame/config/routes')(app);
// require('./api')(app);

app.listen(8888, () => {
    console.log("server is running on port 8888.")
})

