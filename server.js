const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors(), express.urlencoded({extended: true}), express.json());
// server config
require("./server/config/mongoose.config")

//require the routes 
require("./server/routes/product.routes")(app)


app.listen(8000, () => console.log(">>>Server Running<<"));