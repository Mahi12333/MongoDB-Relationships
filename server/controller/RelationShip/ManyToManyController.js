import StudentModel from "../../model/studentModel.js";
import CourceModel from "../../model/courceModel.js";
// import StudentCourceModel from "../../model/studentcourceModel.js";


// const createStudentWithCourses = async (req, res) => {
//   try {
//     const student = await StudentModel.create(req.body.student);
//     console.log(req.body.courses)
//     // Enroll student in courses
//     for (const courseId of req.body.courses) {
//       const course = await CourceModel.findById(courseId);
//       if (course) {
//         student.courses.push(course._id);
//         course.studendts.push(student._id);
//         await course.save();
//       }
//     }
//     await student.save();

//     res.status(201).json({ student });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const createStudentWithCourses = async (req, res) => {
  try {
    // Create student
    const student = await StudentModel.create(req.body.student);

    // Initialize an array to hold the valid course IDs
    const validCourseIds = [];

    // Check each course ID in the request body
    for (const courseId of req.body.courses) {
      const course = await CourceModel.findById(courseId);
      if (course) {
        // If the course exists, add the student's ID to the course's students array
        course.studendts.push(student._id);
        await course.save();

        // Add the course ID to the validCourseIds array
        validCourseIds.push(course._id);
      } else {
        console.warn(`Course with ID ${courseId} not found. Skipping.`);
      }
    }

    // Add the valid course IDs to the student's courses array
    student.courses = validCourseIds;
    await student.save();

    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createCourseWithStudents = async (req, res) => {
  try {
    const course = await CourceModel.create(req.body.course);
    
    // Enroll students in the course
    for (const studentId of req.body.students) {
      const student = await StudentModel.findById(studentId);
      if (student) {
        course.studendts.push(student._id);
        student.courses.push(course._id);
        await student.save();
      }
    }
    await course.save();

    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getStudentWithCourses = async (req, res) => {
  try {
    const student = await StudentModel.findById(req.params.studentId).populate('courses');
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseWithStudents = async (req, res) => {
  try {
    const course = await CourceModel.findById(req.params.courseId).populate('students');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export{
  
    createStudentWithCourses,
    createCourseWithStudents,
    getStudentWithCourses,
    getCourseWithStudents
}