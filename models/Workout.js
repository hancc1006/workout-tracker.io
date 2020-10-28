const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  day:{
      type:Date,
      default: Date.now()
  },
  exercise: [
      {
          type:{
              type:String,
              enum:['Resistance','Cardio'],
              trim: true,
              required: true
          },
          name:{
              type:String,
              trim: true,
              required:"Enter an exercise name"
          },
          distance:{
              type:Number,
              required:"Enter the distance in miles"
          },
          duration:{
            type:Number,
            required:true,
          },
          weight:{
              type:Number,
            //   required: function(){
            //       return this.weight? true:false
            //   }
          },
          sets:{
            type:Number,
            // required:function(){
            //     return this.sets? true:false
            // }
          },
          reps:{
              type:Number,
            //   required: function(){
            //       return this.reps? true:false
            //   }
          }
      }
  ],
  totalDuration:{
    type:Number,
    default:0
  },
  

});



WorkSchema.pre('save', function(next){
  this.totalDuration = this.totalDuration + exercise.duration;
  return this.totalDuration;
})

const Workout = mongoose.model("Workout", WorkSchema);

module.exports = Workout;