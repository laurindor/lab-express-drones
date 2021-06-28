const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

  // Iteration #2: List the drones
router.get('/', (req, res, next) => { //wat is "next"??
  Drone.find()
  .then(allDrones => 
    res.render ('drones/list', {allDrones}))
    .catch(err=> console.log(err))
});

// Iteration #3: Add a new drone
router.get('/create', (req, res, next) => {
  res.render("drones/create-form")
});

// Iteration #3: Add a new drone SOMETHING IS WRONG IT DOESN'T UPDATE THE DATABASE
router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  .then (() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});


  // Iteration #4: Update the drone
  router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id
    
    Drone.findById(id)
      .then(droneFound => res.render("./drones/update-form" , droneFound))
      .catch(err=> console.log(err))
  });


  // Iteration #4: Update the drone
  router.post('/:id/edit', (req, res, next) => {
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

 // Iteration #5: Delete the drone
  router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id
  const {name, propellers, maxSpeed} = req.body

  Drone.findByIdAndDelete(id, {name, propellers, maxSpeed})
  .then(() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

module.exports = router;
