import React from "react";
import "materialize-css/dist/css/materialize.min.css";

import Header from "./components/Header";
import Book from "./components/Book";

export default function App() {
  return (
    <div className="center-align">
      <Header />
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col m10 offset-m1">
            <Book bookName="maths" />
          </div>
        </div>
      </div>
    </div>
  );
}
