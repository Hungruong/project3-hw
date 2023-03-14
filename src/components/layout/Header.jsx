import React from 'react';
import './Header.css';
import CARD_DATA from '../../../server/cards.js'

const Header = () => {
  const header = "Guess the Country of tourist attractions"
  const headerArr = header.split(' ')

  return (
    <div>
      <header>
         <h1 data-text="Country Guess">
          <span className="glitch1" data-text="Country Guess" aria-hidden></span>
          <span className="glitch2" data-text="Country Guess" aria-hidden></span>
          Capital City Guess
        </h1>
      </header>
        <div className="smoke" >
          <ul>
          {
              headerArr.map((char) => (
              <li key={char}> {char}</li>
            ))
          }
          </ul>
      
      </div>
      <h4 className="info">{`There are ${CARD_DATA.length} cards in total`}</h4>
    </div>
  );
};

export default Header;