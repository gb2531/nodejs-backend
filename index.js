const express = require('express');
const app = express();
const mongoose = require("mongoose");

//Database connection
mongoose.connect("mongodb+srv://devuser:devuser@cluster0.l26prkt.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }).then((res) => {
  console.log('connection is successful');
  app.listen(3000);
}).catch((err) => {
  console.log("There is an error")
})


