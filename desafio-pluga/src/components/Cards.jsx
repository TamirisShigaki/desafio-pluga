import PropTypes from 'prop-types';
import '../styles/Cards.css';

function Cards({ name, color, icon, link, open }) {
  return (
    <div className="card-container">
      <button data-testid="card-btn-open" className="card-button" type="button" onClick={open}>
      <div className="card">

      <div className="card-img" style={{ backgroundColor: `${color}` }}>
        <img src={icon} alt={name}/>
      </div>

      <div className="card-link">
        <a className="card-name"href={link} target='_blank' rel="noreferrer">{ name }</a>
      </div>

      </div>
      </button>
    </div>
  );
}

Cards.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    open: PropTypes.func,
}.isRequired;

export default Cards;
