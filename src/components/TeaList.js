import React from 'react';
import Tea from './Tea';
import PropTypes from 'prop-types';

export default function TeaList(props){
  return(
    <div className="tea--list">
      {props.teaList.sort().map((tea)=>
        <Tea
          whenTeaClicked={props.onTeaSelection}
          whenTeaSold={props.onTeaSold}
          name={tea.name}
          origin={tea.origin}
          color={tea.color}
          imageUrl={tea.imageUrl}
          stock={tea.stock}
          price={tea.price}
          id={tea.id}
          key={tea.id}
        />
      )}
    </div>
  );
}

TeaList.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
};