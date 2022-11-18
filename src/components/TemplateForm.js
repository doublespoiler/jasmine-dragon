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
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Tea Name"
          defaultValue={teaToEdit.name || ''} />
        <br />
        <label htmlFor="origin">Origin: </label>
        <input
          type="text"
          name="origin"
          placeholder="Tea Origin"
          defaultValue={teaToEdit.origin || ''} />
        <br />
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          step="0.01"
          defaultValue={teaToEdit.price || ''} />
        <br />
        <label htmlFor="color">Color: </label>
        <select name="color" defaultValue={teaToEdit.color || "Red"}>
          <option value="Black">Black</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Dark">Dark/Fermented</option>
          <option value="Herbal">Herbal</option>
          <option value="Oolong">Oolong</option>
        </select>
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          placeholder="Tea Description"
          defaultValue={teaToEdit.description || ''} />
        <br />
        <label htmlFor="imageUrl">Image URL: </label>
        <input 
          type="text"
          name="imageUrl"
          placeholder="image URL"
          defaultValue={teaToEdit.imageUrl || ''} />
          <br />
        <button type="submit">{props.buttonText}</button>
      </form>
  )
}

TemplateForm.propTypes = {
  formSubmissionhandler: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool
}