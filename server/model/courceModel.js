import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema({
  title: String,
  studendts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const CourceModel = mongoose.model('Course', CoursesSchema);
export default CourceModel;







// const courseSchema = new mongoose.Schema({
//   title: String,
//   description: String,
// });

// const CourceModel = mongoose.model('Course', courseSchema);
// export default CourceModel;