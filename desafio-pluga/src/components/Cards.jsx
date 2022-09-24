import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Cards.css';

function Cards({name, color, icon, link }) {
  return (
    <div className="card-container">
      <div className="card">
      <div className="card-img" style={{ backgroundColor: `${color}` }}>
        <img src={icon} alt={name}/>
      </div>
      <div className="card-link">
        <a className="card-name"href={link} target='_blank' rel="noreferrer">{ name }</a>
      </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
}.isRequired;

export default Cards;
