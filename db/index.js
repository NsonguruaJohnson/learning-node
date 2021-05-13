/**
 * 1. Creating a connection function for mongodb(mongoose)
 * 2. Start a local mongodb server connection
 * 
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONG0_URI } = process.env;

// Create the connection function

// Method 1 (Using then and catch)
// const connectDb = () =>{
//     mongoose.connect(MONG0_URI, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     })
//     .then(()=> {
//         console.log("MongoDb connected...");
//         // Seed data
//     })
//     .catch(err => {
//         console.error(err.message);

//         // Exit with failure
//         process.exit(1);
//     })
// }

// Method 2 (Using async/await) Async mongoose connection
const connectDb = async () => {
    try {
        await mongoose.connect(MONG0_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log("MongoDb connected...");

        // Seed data

    } catch (err) {
        console.error(err.message);

        // Exit with failure
        process.exit(1);
    }
}

module.exports = connectDb;
