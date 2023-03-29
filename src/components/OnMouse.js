import React, { useState } from 'react';

const OnMouse = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={{ backgroundColor: hover ? 'lightblue' : 'white' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1>¡Hola! Pasa el cursor del mouse sobre mí.</h1>
    </div>
  );
}

export default OnMouse;