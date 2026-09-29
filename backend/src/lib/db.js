import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB = async()=>{
    try{
        const {MONGO_URL} = ENV;
        if(!MONGO_URL) throw new Error("MONGO_URL is not set");

        const conn = await mongoose.connect(ENV.MONGO_URL)
        console.log("MONGODB CONNECTED:",conn.connection.host)
    }catch(err){
        console.log("Error connection to MONGODB",err)
        process.exit(1) // 1 status code means fail, 0 means success
    }
}