const app = require("./app");

const dotemv= require("dotenv");


//config

dotemv.config({path:"backend/config/config.env"})
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
  