
import React, { useState } from 'react';

function Square({ value, onSquareClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!value) {
      setIsClicked(true);
      onSquareClick();
    }
  };

  return (
    <button className={`square ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
