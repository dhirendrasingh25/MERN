const express = require('express')
const fs= require('fs')
const morgan= require('morgan')

const data=JSON.parse(fs.readFileSync('data.json','utf-8'))

const server = express();

//MiddleWares

server.use(express.json()) // bodyParser
server.use(morgan('default')) // Documentation

//REST API EndPoint

server.get('/products',(req,res)=>{ 
    res.json(products)
})
server.get('/products/:id',(req,res)=>{ 
    const id= +req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    res.json(product)
})

// create api
server.post('/products',(req,res)=>{
    data.products.push(req.body);
    res.json(req.body)
})

//update
server.put('/prducts/:id',(req,res)=>{
    const id=req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({type:'PUT'})
})

server.patch('/prducts/:id',(req,res)=>{
    const id=req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({type:'patch'})
})

//delete
server.delete('/prducts/:id',(req,res)=>{
    const id=req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    products.splice(productIndex,1)
    res.status(201).json({type:'delete'})
})


server.listen(8080,()=>{
    console.log('server started');
})