const express =  require('express');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); 
db.connection.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  

  // http://localhost:3001

  
/*
 * connection/db -> database connection setup
 * index.js /server.js -> entry point of application
 * routes -> all the endpoints definition
 * models -> mongoose schema defined
 * controller -> functions to interact with database
 */
