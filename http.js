const http = require('http')
const server = http.createServer((req,res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to app.js')
    }
    if(req.url === '/about'){
        res.end('Welcome to about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page<s/P>
        <a href="/">back home</a>
    `)
})

server.listen(5000)