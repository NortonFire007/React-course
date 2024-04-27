import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../../redux/slices/bookSlice';
import createBookWithId from '../../utils/createBookWithId';
import booksData from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
  const [title, setTilte] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })));
      setTilte('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const randomInd = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomInd];
    dispatch(addBook(createBookWithId(randomBook)));
  };

  const handleAddRandomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:4000/random-book');
      if (res.data && res.data.title && res.data.author) {
        dispatch(addBook(createBookWithId(res.data)));
      }
    } catch (error) {
      console.log('Error fetching random book', error);
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTilte(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random Book
        </button>
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  );
};

export default BookForm;
