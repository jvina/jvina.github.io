let http = require('http');
let url = require('url');
let dt = require('./myModule');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    console.log(q.query);
    res.writeHead(200, {"Content-type":"text/html","Access-Control-Allow-Origin": "*"});
    res.end('Hello ' + q.query["name"] + ", the current server time is " + dt.myDateTime());
}).listen(process.env.PORT || 8888);