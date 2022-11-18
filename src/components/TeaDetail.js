import React from 'react';
import PropTypes from 'prop-types';

export default function TeaDetail(props){
  const{ tea, onClickingDelete, onClickingEdit, onClickingSell } = props;
  return(
    <div className="tea--detail">
      <h1 className="tea--detail--title">Tea Details</h1>
      <img src={props.tea.imageUrl} className="tea--detail--image" alt={tea.name}/>
      <h3 className="tea--detail--line">{tea.name} - {tea.origin} - {tea.color} - {tea.price}</h3>
      <p className="tea--detail--description">{tea.description}</p>
      <p className="tea--detail--stock">{tea.stock} oz.</p>
      <button onClick={() => onClickingSell(tea.id)}>Sell a Cup</button>
      <button onClick={onClickingEdit}>Edit Tea</button>
      <button onClick={() => onClickingDelete(tea.id)}>Remove Tea</button>
    </div>
  )
}

TeaDetail.propTypes = {
  tea: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickSell: PropTypes.func
}