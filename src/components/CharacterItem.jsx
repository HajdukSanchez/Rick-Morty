import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterItem.scss';

const CharacterItem = ({ character }) => {
  return (
    <div className='Character'>
      <div className='Character-inner'>
        <div className='Character__front'>
          <img src={character.image} alt={`Character: ${character.name}`} className='Character__image' />
        </div>
        <div className='Character__back'>
          <h1 className='Character__name'>{character.name}</h1>
          <h3 className='Character__status'>
            <span>{character.status} </span>-<span> {character.species}</span>
          </h3>
          <h2 className='Character__gender'>{character.gender}</h2>
          <p className='Character__box'>
            <h4 className='title'>Origin:</h4>
            <Link to={`/origin/${character.id}`}>
              <h4 className='Character__origin'>{character.origin.name}</h4>
            </Link>
          </p>
          <p className='Character__box'>
            <h4 className='title'>Last location:</h4>
            <Link to={`/location/${character.id}`}>
              <h4 className='Character__location'>{character.location.name}</h4>
            </Link>
          </p>
          <Link to={`/character/information/${character.id}`}>
            <button type='button' className='btn btn--more'>
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
