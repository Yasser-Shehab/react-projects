import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleDisplay = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleDisplay}>
          {isDisplayed ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isDisplayed && <p>{info}</p>}
    </article>
  );
};

export default Question;
