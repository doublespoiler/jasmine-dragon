import React from 'react';
import PropTypes from 'prop-types';

export default function TemplateForm(props){
  let formTitle = "New Tea";
  let teaToEdit = [];
  if(props.editing){
    teaToEdit = props.tea;
    formTitle = "Edit" + props.tea.name;
  }
  return(
    <form onSubmit={props.formSubmissionHandler} className="form">
      <h1>{formTitle}</h1>
      <input
        type="text"
        name="name"
        placeHolder="Tea Name"
        defaultValue={teaToEdit.name || ''} />
      <input
        type="text"
        name="origin"
        placeHolder="Tea Origin"
        defaultValue={teaToEdit.origin || ''} />
      <input
        type="number"
        name="price"
        step="0.01"
        defaultValue={teaToEdit.price || ''} />
      <select name="color" defaultValue={teaToEdit.color || "Red"}>
        <option value="Black">Black</option>
        <option value="Green">Green</option>
        <option value="Red">Red</option>
        <option value="White">White</option>
        <option value="Dark">Dark/Fermented</option>
        <option value="Herbal">Herbal</option>
        <option value="Oolong">Oolong</option>
      </select>
      <input
        type="text"
        name="description"
        placeHolder="Tea Description"
        defaultValue={teaToEdit.description || ''} />
      <input 
        type="text"
        name="imageUrl"
        placeHolder="image URL"
        defaultValue={teaToEdit.imageUrl || ''} />
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

TemplateForm.propTypes = {
  formSubmissionhandler: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool
}