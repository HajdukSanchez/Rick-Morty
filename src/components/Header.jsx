import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='Header'>
      <h1>Rick and Morty</h1>
      <button type='button' className='' onClick={handleClick}>
        {darkMode ? <i className='far fa-moon'></i> : <i className='far fa-sun'></i>}
      </button>
    </div>
  );
};

export default Header;
