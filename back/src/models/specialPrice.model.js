import mongoose from "mongoose";

const priceCollection = "preciosEspecialesRamirez24";

const specialPriceSchema = new mongoose.Schema({
  userId: String, // ID del usuario con precio especial
  productId: String, // ID del producto
  specialPrice: Number, // Precio especial para el usuario
}, {
  timestamps: true
});



export const pricestsModel = mongoose.model(priceCollection, specialPriceSchema);