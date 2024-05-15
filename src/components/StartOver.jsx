import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import { BsArrowCounterclockwise } from "react-icons/bs";
const StartOver = () => {
  const startOver = () => {
    window.location.reload(false);
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  };

  return (
    <button className="start-over-btn" onClick={startOver}>
      start over <BsArrowCounterclockwise className="icon" size={18} />
    </button>
  );
};
export default StartOver;
