const mongoose = require("mongoose");

<<<<<<< HEAD
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server:${data.connection.host}`);
    }).catch((err)=>{
        console.log(err)
=======
const connectDatabase =( )=>{
  mongoose.connect(process.env.DB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
        }).then((data) => {
      console.log(`Mongodb connected with server:${data.connection.host}`);
>>>>>>> 1b3db2fdb7225fce44196cc35761d484cce60553
    })
}

module.exports = connectDatabase