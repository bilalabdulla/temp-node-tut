const http = require('http')

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('welcome to home page')
}
if(req.url === '/about'){
    res.end('here is our history')
}
res.end(`
<h1>oops</h1>
<p>we cant find the page </p>
<a href="/">back home </a>
`)
})

server.listen(5001)