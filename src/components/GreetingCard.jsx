import React, { useState } from 'react';

const GreetingCard = ({ title, message }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div
      className="border border-primary p-4 rounded-lg shadow-lg m-4 cursor-pointer text-primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseEnter}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {showMessage && <p className="text-lg">{message}</p>}
    </div>
  );
};

export default GreetingCard;