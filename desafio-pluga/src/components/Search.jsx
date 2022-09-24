import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Search.css'

function Search({ state, callback }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="BUSCAR FERRAMENTA"
        value={state}
        onChange={callback}
        />
    </div>
  );
}

Search.propTypes = {
    state: PropTypes.string,
    callback: PropTypes.func,
}.isRequired;

export default Search;