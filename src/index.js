import ReactDOM from "react-dom";
import React from "react";
import mockApi from "./mockApi";

/*
We're building GOOD READS DOT COM

The designer has prepared this mock of the page:

https://drive.google.com/file/d/12jKvWafkRhlpUVWpQDVWzWM3r9pfAaN2/view?usp=sharing

The backend developer has prepared an api endpoint for you:

GET /books

Our frontend team suggests using axios, which is preloaded here for you.

Requirements:

 * implement the mock - render a table listing all 12 books on goodreads dot com
 * display the book's rating next to each book
 * by default, the table should be sorted by rating
 * if the user clicks on the "books" header, the table should then be sorted by title
 * clicking back on rating, the table should be sorted by rating

*/
const App = () => {
  return <h1>GOOD READS BITCH</h1>;
};

mockApi();

ReactDOM.render(<App />, document.getElementById("root"));
