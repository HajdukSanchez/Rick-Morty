import React from 'react';
import '../styles/components/CharacterList.scss';

const CharactersList = ({ children }) => {
  return <div className='CharacterList'>{children}</div>;
};

export default CharactersList;
