const http = require("http");

const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  // console.log("user hit the sever")
  //   console.log(req.method)
  //   console.log(req.url)
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write(`<h1>Home Page hain ok bro chnaged.. </h1>`);
    res.write(homePage)
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page hain ok bro chnaged.. </h1>`);
    res.end();
  } else {
    res.writeHead(400, { "content-type": "text/html" });
    res.write(`<h1> Page not found.. </h1>`);
    res.end();
  }
});
server.listen(8000, () => {
  console.log("Server is running....");
});
