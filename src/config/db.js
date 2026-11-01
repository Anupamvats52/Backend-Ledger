const mongoose= require("mongoose");


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Server connected to DB");
    })
    .catch((err)=>{
        console.log("Error in Connection",err.message);
        process.exit(1)    // Close the server
    })
}


module.exports= connectToDB