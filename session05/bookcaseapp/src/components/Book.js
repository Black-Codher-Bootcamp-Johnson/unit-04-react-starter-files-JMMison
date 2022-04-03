import React from "react";

const Book = (props) => {
  return (
    <div>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} />

      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors}</h3>

      <p>
        {props.book.saleInfo.retailPrice
          ? "£" + props.book.saleInfo.retailPrice.amount
          : "price not defined"}{" "}
      </p>
      <p>{props.book.volumeInfo.subtitle}</p>
      <p>{props.book.volumeInfo.description}</p>
      <button onClick={() => props.addBook(props.book.volumeInfo.title)}>
        Click here
      </button>
    </div>
  );
};
export default Book;

//Book.propTypes = {

//book: PropTypes.shape({
// volumeInfo: PropTypes.shape({
//   title: PropTypes.string.isRequired,
//authors: PropTypes.array.isRequired,
//description: PropTypes.string,
// price: PropTypes.number.isRequired
//}),

//saleInfo: PropTypes.shape({
//retailPrice: PropTypes.shape({
// amount: PropTypes.number.isRequired
//})
//})
//}

//)
//};
