import mongoose from "mongoose";


const productCollection = "product";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String
}, {
  timestamps: true
});



export const productsModel = mongoose.model(productCollection, productSchema);
