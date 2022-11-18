import React from 'react';
import PropTypes from 'prop-types';

export default function TeaDetail(props){
  const{ tea, onClickingDelete, onClickingEdit, onClickingSell } = props;
  return(
    <div className="tea--detail">
      <h1 className="tea--detail--title">Tea Details</h1>
      <img src={props.tea.imageUrl} className="tea--detail--image" alt={tea.name}/>
      <h3 className="tea--detail--line">{tea.name} - {tea.origin} - {tea.color} - ${tea.price} - Stock: {tea.stock} oz.</h3>
      <button onClick={() => onClickingSell(tea.id)}>Sell Cup - {tea.stock} oz.</button>
      <button onClick={onClickingEdit}>Edit Tea</button>
      <button onClick={() => onClickingDelete(tea.id)}>Remove Tea</button>
      <p className="tea--detail--description">{tea.description}</p>
      <p className="tea--detail--stock"></p>
    </div>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func
}