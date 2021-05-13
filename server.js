/**
 * 1. Creating express server
 * 2. Connect to mongodb
 * 3. Initialize express
 * 4. Initialize express middleware
 * 5. create a simple get request route(optional)
 * 6. Inject route
 * 7. Listen to the app connection
 */

// Import express package and databse connection into the application
const express = require('express'); 
const connectDb = require('./db');
require('dotenv').config(); // Allows us to use the environment variables in .env
const {PORT} = process.env; // Destructuring

// Connect to db
connectDb();

// Initialize express
const app = express();

// Initialize express middleware
app.use(express.json({extended: false}))

// Create a basic express route
app.get('/', (req,res) => res.json({ message: "Welcome to learning node"}));

// PORT
const port = process.env.PORT || PORT;

// Listen to connection
app.listen(port, () => console.log(`app running on ${port}`));