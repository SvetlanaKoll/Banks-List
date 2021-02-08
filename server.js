const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./server/bankRoutes.js')
const dotenv = require('dotenv');
dotenv.config({ path: './server/config.env' });
const PORT = process.env.PORT || 4000;
const app = express();


const DB = process.env.DATABASE;
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true  });
const connection = mongoose.connection;

connection.once('open', function () {
  console.log("MongoDB database connection established successfully");

  app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
  });
})


