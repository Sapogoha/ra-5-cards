import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  if (!props) {
    return null;
  }
  return (
    <div className="card">
      {props.img && (
        <img src={props.img} className="card-img-top" alt="some animals" />
      )}
      <div className="card-body">{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
};

Card.defaultProps = {
  img: null,
};

export default Card;
