// Iteration #1

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const mongoose = require("../db/index.js");

const DroneModel = require("../models/Drone.model.js");
DroneModel.deleteMany()
  .then((res) => {
    console.log("Se ha limpiado la BD");
  })
  .catch((err) => {
    console.log(err);
  });

DroneModel.create(drones)
  .then((res) => {
    console.log("insertados los datos");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
