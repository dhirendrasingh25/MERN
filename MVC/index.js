const express = require('express')
const fs= require('fs')
const morgan= require('morgan')

const data=JSON.parse(fs.readFileSync('data.json','utf-8'))

const server = express();

// MVC Controller  Model View Controller
const createProduct=((req,res)=>{
    console.log(req.body);
    data.products.push(req.body);
    res.status(201).json(req.body)
})

const getAllProducts=((req,res)=>{
    res.json(data)
})

const updateProduct=(req,res)=>{
    const id=req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({type:'PUT'})
}





//MiddleWares

server.use(express.json()) // bodyParser
server.use(morgan('default')) // Documentation

//REST API EndPoint

server.post('/products',createProduct)

server.get('/products/:id',(req,res)=>{ 
    const id= +req.params.id;
    const product=data.products.find((p)=> {p.id===id})
    res.json(product)
})

//update
server.put('/prducts/:id',updateProduct)

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