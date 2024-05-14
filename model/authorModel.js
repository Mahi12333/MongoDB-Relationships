import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
  name: String,
  // Array of book references
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const AuthorModel = mongoose.model('Author', authorSchema);
export default AuthorModel;
