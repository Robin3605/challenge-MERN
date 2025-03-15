import { pricestsModel } from "../models/specialPrice.model.js";

class PricesDao {

    async getAll(){
      return await pricestsModel.find();
    }
    
    async getOne( query ){
      return await pricestsModel.findOne(query);
    }
  
    async create(data) {
      return await pricestsModel.create(data);
    }
  
    async update(id, data){
      return await pricestsModel.findByIdAndUpdate(id, data, { new: true });
    }
    
    async remove(id){
      return await pricestsModel.findByIdAndDelete(id);
    }
  
  }
  
  export const pricesDao = new PricesDao(); // Exportamos la instancia de la clase PricesDao();