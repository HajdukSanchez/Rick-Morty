import React from 'react';
import useCharacters from '../hooks/useCharacters'; // Custom Hook to get data

import Search from '../components/Search';
import FavoritesList from '../components/FavoritesList';
import CharactersList from '../components/CharactersList';
import CharacterItem from '../components/CharacterItem';

const API = 'https://rickandmortyapi.com/api/character/'; // API URL with Data

const Home = () => {
  const characters = useCharacters(API);

  return (
    <div className='Home'>
      <Search />
      <FavoritesList></FavoritesList>
      <CharactersList>
        {characters.map((character) => (
          <CharacterItem character={character} key={character.id} />
        ))}
      </CharactersList>
    </div>
  );
};

export default Home;
