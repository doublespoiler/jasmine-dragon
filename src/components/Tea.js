import React from 'react';
import PropTypes from 'prop-types';

export default function Tea(props){
  
  return(
    <div className="tea--card">
      <div className="tea--card--details" onClick={() => props.whenTeaClicked(props.id)}>
        <img src={props.imageUrl} className="tea--card--thumb" alt="tea thumb" />
        <h3 className="tea--card--text">{props.name} - {props.origin} - stock: {props.stock}</h3>
      </div>
      {/* <button className="tea--card--button" onClick={() => props.whenTeaSold(props.id)}>Sell Cup</button> */}
    </div>
  )
}

Tea.propTypes={
  id: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  imageUrl: PropTypes.string,
  onTeaClicked: PropTypes.func,
  stock: PropTypes.number
}