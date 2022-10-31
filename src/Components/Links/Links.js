import React from "react";
import "./Links.css";

function Links() {
  const buttonData = [
    {
      id: "link__twitter",
      link: "https://twitter.com/aza_jenny25",
      text: "Twitter Link",
    },
    {
      id: "btn__zuri",
      link: "https://training.zuri.team",
      text: "Zuri Team",
    },
    {
      id: "books",
      link: "http://books.zuri.team",
      text: "Zuri Books",
    },
    {
      id: "book__python",
      link: "https://books.zuri.team/python-for-beginners",
      text: "Python Books",
    },
    {
      id: "pitch",
      link: "https://background.zuri.team",
      text: "Background Check for Coders",
    },
    {
      id: "book__design",
      link: "https://books.zuri.team/design-rules",
      text: "Design Books",
    },
  ];

  const button = buttonData.map((btn) => {
    return (
      <a
        key={btn.id}
        href={btn.link}
        target="_blank"
        rel="noopener noreferrer"
        id={btn.id}
        className="button-links"
      >
        {btn.text}
      </a>
    );
  });

  return <>{button}</>;
}

export default Links;
