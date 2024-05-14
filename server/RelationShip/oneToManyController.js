import AuthorModel from "../../model/authorModel.js";
import BookModel from "../../model/bookModel.js";

const createAuthorWithBooks = async (req, res) => {
    try {
      // Create author
      const author = await AuthorModel.create(req.body.author);
  
      // Create books and push references to author's books array
      const books = [];
      for (const bookData of req.body.books) {
        const book = await BookModel.create({
          title: bookData.title,
          pages: bookData.pages,
          author: author._id
        });
        books.push(book);
        // Push reference to author's books array
        author.books.push(book._id);
      }
  
      // Save author with updated books array
      await author.save();
  
      res.status(201).json({ author, books });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const getAuthorWithBooks = async (req, res) => {
    try {
      const author = await AuthorModel.findById(req.params.authorId).populate('books');
      if (!author) {
        return res.status(404).json({ message: 'Author not found' });
      }
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export{
    createAuthorWithBooks,
    getAuthorWithBooks
  }