import React, { useState } from "react";
import "./LessText.css";

function LessText({ text, defaultLength }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <p>
      {showAll ? text : text.substring(0, defaultLength) + "..."}
      <span
        onClick={() => setShowAll(!showAll)}
        className="read-toggle"
      >
        {showAll ? "read less" : "read more"}
      </span>
    </p>
  );
}

export default LessText;
