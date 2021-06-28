// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

//connecting database
//esto ya estaba en index y no cal
//const DB_NAME = 'lab-express-drones'
//mongoose.connect(`mongodb://localhost/${dbName}`)

//require database config

require('../db/index.js');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


 Drone.insertMany( drones)
    .then((result) => {
    console.log(`drone added`);
     mongoose.connection.close();
})
 .catch((err) => console.log(err));



   