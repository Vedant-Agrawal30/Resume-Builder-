import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on("connected",()=>{console.log("DB connected....");
        })

        let mongodbURI = process.env.MONGODB_URI;
       
        const projectName = 'resume-builder';
        if(!mongodbURI) {
            throw new Error("MONGODB_URI env not set");
            
        }

        if(mongodbURI.endsWith('/')) {
            mongodbURI = mongodbURI.slice(0,-1);
        }

        await mongoose.connect(`${mongodbURI}/${projectName}`)

    } catch (error) {
        console.error("Error aa raa h : ",error);
        
    }
}

export default connectDB;