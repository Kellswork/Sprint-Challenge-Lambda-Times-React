import React from 'react';
import Card from './Card';

const Cards = props => {
 const newCard = props.cards.map((card, index) => {
    return <Card key={index} card={card} />
  })
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {newCard}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;