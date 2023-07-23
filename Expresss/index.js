const express = require('express')
const fs= require('fs')
const morgan= require('morgan')

const index=JSON.parse(fs.readFileSync('data.json','utf-8'))

const server = express();

//MiddleWares

//server.use(express.json()) // bodyParser
// server.use(express.urlencoded())
// server.use(express.static('public'))
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname, new Date()); //GET ::1 localhost 2023-07-18T13:19:16.664Z
// })

// Third party MiddleWare
server.use(morgan('default')) // Documentation


 
const auth = ((req,res,next)=>{
    console.log(req.query);

    if(req.query.password==='123'){
        next();
    }else{
        res.sendStatus(401)
    }
})


server.use(auth)


// Web API EndPoint
server.get('/',auth,(req,res)=>{ // used Middleware 
    res.json({type:'GET'})
})
server.post('/',(req,res)=>{
    res.json({type:'POST'})
})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})


// server.get('/',(req,res)=>{
//     res.json(index.products)
//     //res.send('<h1>Hi bachhi </h1>')
//     //res.sendFile('/Users/sameersingh/Desktop/JAVASCRIPT/MEN/Expresss/index.html') // absolute path
// })







server.listen(8080,()=>{
    console.log('server started');
})