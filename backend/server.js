const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./bankRoutes.js')
const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());
app.use(router);

mongoose.connect('mongodb+srv://svetlana1:svetlana1@cluster0.trjrq.mongodb.net/banks?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})


app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});