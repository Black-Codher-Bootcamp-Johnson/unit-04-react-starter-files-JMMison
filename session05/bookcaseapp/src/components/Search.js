import React from "react";
const Search = (props) => {
  const { keyword, setKeyword, findBooks, setBooks } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);

    //console.log(`Keyword: ${keyword}`);
    //setBooks(findBooks(keyword).items);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Search</label>
          <input
            type="text"
            name="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </p>

        <p>
          <input type="submit" value="submit"/>
        </p>
        <p style={{ color: "red" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      </form>
    </div>
  );
};

export default Search;
