const http= require('http');
const fs= require('fs')

//const index=fs.readFileSync('index.html','utf-8')
const index=fs.readFileSync('data.json','utf-8')

const server = http.createServer((req,res)=>{

    console.log(req.url);

    switch(req.url){
        case'/': res.setHeader('Content-Type','application/json')
                res.end(index)
                break;
        case '/api': res.setHeader('Content-Type','text/html')
                res.end(index)
                break;
        default: res.writeHead(404,'NOT FOUND')
                res.end()
                
    }
    // console.log("Server started");
    // res.setHeader('Dummy','DummyValue')
    // res.setHeader('Content-Type','application/json') // read MDN docx
    // //res.setHeader('Content-Type','text/html')
    // // res.write('<h1>hello</h1>')
    // // res.write(JSON.stringify(data))
    // res.write(index)
    // res.end()
})

server.listen(8080)