require('dotenv').config()

const mongoose=require('mongoose')
const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//console.log('env',process.env.DB_PASSWORD)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://dhirendrashersingh:9004122231@cluster0.n5bguae.mongodb.net/Shop')
  console.log('db COnnected');
}






//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

server.listen(process.env.PORT, () => {
  console.log('server started');
});
