import React, {useState} from 'react'
import './ButtonMode.css'
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
