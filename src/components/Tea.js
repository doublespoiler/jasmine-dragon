import React from 'react';
import PropTypes from 'prop-types';

export default function Tea(props){
  return(
      <div className="tea--card" onClick={() => props.onTeaClicked(props.id)}>
        <img src="" className="tea--card--thumb" alt="tea thumb" />
        <h3 className="tea--card--text">Pu'er Tea (name) - Kungming Province(origin)</h3>
      </div>
  )
}

Tea.propTypes={
  id: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  onTeaClicked: PropTypes.func
}