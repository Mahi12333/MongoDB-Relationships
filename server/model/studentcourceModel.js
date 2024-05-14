import mongoose from "mongoose";

const studentCourseSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }
});


const StudentCourceModel = mongoose.model('StudentCourse', studentCourseSchema);

export default StudentCourceModel;
