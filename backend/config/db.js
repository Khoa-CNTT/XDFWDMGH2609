import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tranvanlong4072003:04072003@cluster0.etaxeed.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}