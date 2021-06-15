import React from 'react';

import Search from '../components/Search';
import FavoritesList from '../components/FavoritesList';

const Home = () => {
  return (
    <div className='Home'>
      <Search />
      <FavoritesList></FavoritesList>
    </div>
  );
};

export default Home;
