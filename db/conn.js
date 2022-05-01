//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/complete_api',
  {
    useNewUrlParser: true,
  }
).then(()=>{
    console.log("Connection Successfull");
}).catch((error)=>{
    console.log(error);
})

