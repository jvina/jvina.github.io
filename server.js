let http = require('http');
let url = require('url');

let date = new Date();
let current_hour = date.getHours();
let current_min = date.getMinutes();
let ampm = current_hour >= 12 ? "pm" : "am";

if (current_hour > 12) {
    current_hour -= 12;
} else if (current_hour === 0) {
   current_hour = 12;
}

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    res.writeHead(200, {"Content-type":"text/html","Access-Control-Allow-Origin": "*"});
    res.end('Hello ' + q.query["name"] + ", the current server time is " + 
    current_hour + ":" + current_min + ampm);
}).listen(8888);