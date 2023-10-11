import React, { useState } from 'react';

const styles = {
  button: {
    borderRadius: '50px',
    padding: '10px',
    width: '100px',
    textAlign: 'center',
    border: '2px solid #CDDDA2',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

const AllMatchesButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? '#CDDDA2' : '#D7E4B4',
  };

  return (
    <div
      variant="contained"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      ALL MATCHES
    </div>
  );
};

export default AllMatchesButton;
