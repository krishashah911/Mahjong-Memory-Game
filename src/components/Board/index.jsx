import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import "./styles.css";

export default function Board({
  disabled,
  dimension,
  cards,
  flipped,
  solved,
  handleClick
}) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          solved={solved.includes(card.id)}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClick: PropTypes.func.isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired
};
