import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGODB CONNECTED:",conn.connection.host)
    }catch(err){
        console.log("Error connection to MONGODB",err)
        process.exit(1) // 1 status code means fail, 0 means success
    }
}