import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const StudentModel = mongoose.model('Student', StudentSchema);
export default StudentModel;


// import mongoose from "mongoose";
// const studentSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const StudentModel = mongoose.model('Student', studentSchema);
// export default StudentModel;