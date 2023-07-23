const mongoose=require('mongoose')
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String , required: true },
    description: { type: String },
    price: { type: Number, min:[0,'invalid'] },
    discountPercentage: { type: Number ,min:[0,'wrong discount'],max:[50,'wrong discount'] },
    rating: { type: Number , min:[0,'wrong rating'],max:[5,'wrong rating']},
    brand: { type: String , required: true},
    category: { type: String, required: true },
    thumbnail: { type: String , required: true},
    images: { type: [String] }
  });
  
exports.Product = mongoose.model('Product', productSchema)