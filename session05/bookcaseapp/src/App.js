import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bookList from "./models/books.json";
import Header from "./components/Header";
import "./components/App.css";
//import AboutUspage from './pages/AboutUspage';
//import BookcasePage from './pages/BookcasePage';
//import HomePage from "./pages/HomePage";
import Search from "./components/Search";
import BookList from "./components/BookList";
//import Book from './components/Book';
//import BookList from './components/BookList';
//import Home from './pages/Home';
//import bookData from "./models/books.json";

function App() {
  const [books, setBooks] = useState(bookList);
  const [keyword, setKeyword] = useState("");

  async function findBooks(keyword) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  

  console.log("hello");

  return (
    <Router>
      <Header />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        findBooks={findBooks}
        setBooks={setBooks}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <BookList books={books} addBook={addBook}></BookList>
            </>
          }
        />

        <Route
          path="/bookcase"
          element={
            <>
              <BookList books={books} addBook={addBook}></BookList>
            </>
          }
        />
      </Routes>
    </Router>
  );

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
  }
}
//<BookList add={addBook} books={books}></BookList>;

// return books.map(bookItem => <Book book={bookItem} id={bookItem.id}/>);

export default App;
