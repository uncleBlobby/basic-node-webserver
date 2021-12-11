const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    // redirect main URL to index page
    if (req.url == "/")
    {
        req.url = "/index.html";
    }
    // append html tag if missing from request
    if (req.url.substring(req.url.length - 5) != ".html"){
        req.url += ".html";
    }
    // read html file and dispatch to browser
    fs.readFile(__dirname + req.url, function(err, data) {

        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        //console.log(req.url);
        res.writeHead(200);
        res.end(data);
    })
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})