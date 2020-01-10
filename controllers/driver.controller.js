const Driver = require("../models/driver.model");

// TODO: Retrieve and return all drivers from the database.
exports.findAll = (req, res) => {
  Driver.find()
    .then(drivers => {
      //TODO: Add deliveries to driver objects
      res.send(drivers);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving drivers."
      });
    });
};

// TODO: Find a single driver with a driver_id
exports.findOne = (req, res) => {
  Driver.findOne({ driver_id: req.params.driver_id })
    .then(driver => {
      if (!driver) {
        return res.status(404).send({
          message: "Driver not found with id " + req.params.driver_id
        });
      }

      //TODO: Add deliveries to driver objects
      res.send(driver);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Driver not found with id " + req.params.driver_id
        });
      }
      return res.status(500).send({
        message: "Error retrieving driver with id " + req.params.driver_id
      });
    });
};

// TODO: Find a single driver with a driver_id and check in
exports.findOneAndCheckin = (req, res) => {
  res.status(500).send("Not implemented");
};