
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>Welcome to home page</h1>');
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>Welcome to about page</h1>');
    res.end()
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write('<h1>The page you are looking for does not exist !</h1>');
    res.end()
  }
});

server.listen(5000)
