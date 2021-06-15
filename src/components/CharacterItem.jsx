import React from 'react';
import { Link } from 'react-router-dom';

const CharacterItem = ({ character }) => {
  return (
    <div className='Character'>
      <div className='Character-inner'>
        <div className='Character__front'>
          <img src={character.image} alt={`Character: ${character.name}`} className='Character__image' />
        </div>
        <div className='Character__back'>
          <h1 className='Character__name'>{character.name}</h1>
          <h3 className='Character__status'>{character.status}</h3>
          <h3 className='Character__specie'>{character.specie}</h3>
          <h2 className='Character__gender'>{character.gender}</h2>
          <h4 className='Character__origin'>{character.origin.name}</h4>
          <h3 className='Character__location'>{character.location.name}</h3>
          <h5 className='Character__date'>{character.created}</h5>
          <Link>
            <button type='button'>See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
