import React, { useState } from 'react';

function Button(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderStyle = isHovered ? '4px solid red' : 'none';

  return (
    <button
      style={{
        borderLeft: borderStyle,
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'transparent',
        border:'0px'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.icon && <img src={props.icon} style={{width:"35%",height:"35%", marginRight: '10px' }} alt='truck'/>}
      <span style={{fontWeight:"bold",fontSize:"20px"}}>{props.text}</span>
    </button>
  );
}

export default Button;