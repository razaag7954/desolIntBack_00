const express = require('express')
const mongoose= require('mongoose')
var morgan = require('morgan')
require('dotenv').config()
const userRoutes= require('./routes/user.rotues')
const carRoutes= require('./routes/car.routes')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(userRoutes,carRoutes)
const port = process.env.PORT
mongoose.connect(
    `${process.env.MONGODB_URI}`, 
    {
      useNewUrlParser: true,
    }
  );
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
  app.listen(port, () => console.log(`app listening on port ${port}!`))
});


