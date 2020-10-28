// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const Workout = require("../models/Workout");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the workouts or create one
  app.get("/api/workouts", function(req, res) {
    Workout.find().then((data)=>{
      res.json(data)
    }).catch(err=>{
      res.status(404).json(err);
    });
  });

  app.post("/api/workouts", function(req,res){
    Workout.create({})
    .then(data=>res.json(data))
    .catch((err)=>{res.status(404).json(err);});
  });

  app.put("/api/workouts/:id",({body,params},res)=>{
    Workout.findByIdAndUpdate(
      {_id:params.id},
      {$push:{exercises:body}},
      {new:true, runValidators:true}
    )
    .then(data=>{res.json(data);})
    .catch(err=>{res.status(400).json(err);})
  });

  //based on api.js we need this api route
  app.get("/api/workouts/range", function(req,res){
    Workout.find()
    .then(data=>{res.json(data);})
    .catch(err=>{res.status(400).json(err);});
  });

  app.post("/api/workouts/range",function(req,res){
    Workout.create({})
    .then(data=>{res.json(data);})
    .catch(err=>{res.status(400).json(err);});
  });

};

