const app = require("./app");

<<<<<<< HEAD
const dotenv = require("dotenv");
const connectDatabase =require("./config/database");

//config
dotenv.config({path:"backend/config/config.env"});

// Connecting to database
connectDatabase();


app.listen(process.env.PORT,()=>{

   console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
=======
const dotemv= require("dotenv");


//config

dotemv.config({path:"backend/config/config.env"})
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
  
>>>>>>> 23d0edf2063d28596ecbf8e93876ad9c0d4988d3
