import React from "react";
import "./Links.css";

function Links() {
  return (
    <>
      <a
        href="https://twitter.com/aza_jenny25"
        target="_blank"
        rel="noopener noreferrer"
        id="link__twitter"
        className="button-links"
      >
        Twitter Link
      </a>
      <a
        href="https://training.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
        id="btn__zuri"
        className="button-links"
      >
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
        id="books"
        className="button-links"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners"
        target="_blank"
        rel="noopener noreferrer"
        id="book__python"
        className="button-links"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        target="_blank"
        rel="noopener noreferrer"
        id="pitch"
        className="button-links"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        className="button-links"
      >
        Design Books
      </a>
    </>
  );
}

export default Links;
