import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Card({
  handleClick,
  disabled,
  id,
  type,
  flipped,
  height,
  width,
  solved
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          alt=""
          style={{ width, height }}
          className={flipped ? "front" : "back"}
          src={
            flipped || solved
              ? require(`../../assets/img/${type}.png`)
              : require("../../assets/img/back.png")
          }
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  solved: PropTypes.bool.isRequired
};
