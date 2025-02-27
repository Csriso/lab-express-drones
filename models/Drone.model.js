// Iteration #1

const { model, Schema } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: String,
  },
  propellers: {
    type: Number,
  },
  maxSpeed: {
    type: Number,
  },
});

const DroneModel = model("Drone", droneSchema);

module.exports = DroneModel;
