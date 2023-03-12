const http = require('http')
const port = 5000

const server = http.createServer((req,res) => {
    if(req.url === '/') {

        res.end(`<h1>welcome to our home page</h1>`)
    }
    if(req.url === '/about') {
        res.end(`<h1>This is about page </h1>`)
    }
    res.end(`<h1>Oops</h1>`)
    // res.write()

})
server.listen(port)
