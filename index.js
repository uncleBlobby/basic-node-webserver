const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 3000
const pages = ["/404.html", "/about.html", "/contact-me.html", "/index.html"];

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
    if (!validateURL(req.url, pages))
    {
        req.url = "/404.html";
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

function validateURL(url, pages)
{
    for(let i = 0; i < pages.length; i++)
    {
        if(url == pages[i])
        {
            return true;
        }
    }

    return false;
}