const router = require("express").Router();
const Workout = require("../models/workout.js");


module.exports = router;

router.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"../public/index.html"))
})

app.get("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


  app.get("/all", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data)
        res.json(data);
    }
});
});

