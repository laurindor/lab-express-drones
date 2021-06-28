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

// Iteration #3: Add a new drone
router.post('/drones/create', (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body
  .then (() => res.redirect("/drones"))
  .catch(err=> console.log(err))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
