const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: new Date(Date.now()),
  exercises: [
    {
      type: String,
      name: String,
      duration: Integer,
      distance: Integer,
      weight: Integer,
      reps: Integer,
      sets: Integer,
    }
  ]
})


  toJSON: {
    // include any virtual properties when data is requested
    virtuals: true
  }



// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
