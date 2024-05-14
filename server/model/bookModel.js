import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  // Reference to Author collection
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
});

const BookModel= mongoose.model('Book', bookSchema);
export default BookModel;