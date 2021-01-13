import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const ExpandingCards = ({ cards }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleClick = (index) => setActiveCardIndex(index);

  return (
    <ExpandingCardsWrapper>
      {cards.map((card, index) => (
        <Card
          key={index}
          id={index}
          onClick={handleClick}
          isActive={index === activeCardIndex}
          title={card.title}
          description={card.description}
          url={card.url}
        />
      ))}
    </ExpandingCardsWrapper>
  );
};

const ExpandingCardsWrapper = styled.div`
  display: flex;
  width: 90vw;

  @media (max-width: 480px) {
    width: 100vw;

    >div: nth-last-of-type(1) {
      display: none;
    }
  }
`;

ExpandingCards.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default ExpandingCards;
