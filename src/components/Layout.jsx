import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
