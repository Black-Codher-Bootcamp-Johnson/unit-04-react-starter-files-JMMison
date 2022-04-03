import React from "react";
import Book from "./Book";

const BookList = (props) => {
  const { books } = props;
  return props.books.map((book) => {
    return <Book book={book} addBook={props.addBook} />;
  });

  //const {books, addBook} = props;

  //const books=props.books;
  //const addBook=props.addBook;

  //return books.map(book => <Book onClick={() => addBook(book.volumeInfo.title)} key={book.id} book={book}/> );
};

export default BookList;
