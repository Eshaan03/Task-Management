const mongoose = require("mongoose");
const conn = async () =>{
    try{
        const response = await mongoose.connect("");
        if(response){
            console.log("Connected to DB");
        }
    }
    catch(error){
        console.log(error);
    }
};
conn();