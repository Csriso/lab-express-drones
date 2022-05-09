const express = require("express");
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((response) => {
      res.render("drones/list.hbs", {
        drones: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;

  DroneModel.create(req.body)
    .then((response) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      res.redirect(`/drones/create`);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  DroneModel.findById(id)
    .then((response) => {
      res.render("drones/update-form.hbs", { drones: response });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  const { id } = req.params;
  DroneModel.findByIdAndUpdate(id, req.body)
    .then((response) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      res.redirect(`/drones/${id}/edit`);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  DroneModel.findByIdAndDelete(id)
    .then((response) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      res.redirect("/drones");
    });
});

module.exports = router;
