import React from 'react'
import './ButtonMode.css'
import { useEffect, useState } from 'react'
const ButtonMode = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const buttonClass = `toggle-button ${active ? 'active' : ''}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
    </button>
  );
}

export default ButtonMode
