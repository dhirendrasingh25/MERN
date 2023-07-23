exports.createProduct=((req,res)=>{
    console.log(req.body);
    data.products.push(req.body);
    res.status(201).json(req.body)
}) // import via require