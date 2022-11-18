import React from 'react';
import PropTypes from 'prop-types';

export default function TemplateForm(props){
  return(
    <form onSubmit={props.formSubmissionHandler} className="form">
      {props.editing ? <h1>Edit {props.tea.name}</h1> : <h1>New Tea</h1>}
      <input
        type="text"
        name="name"
        placeHolder="Tea Name" />
      <input
        type="text"
        name="origin"
        placeHolder="Tea Origin" />
      <input
        type="number"
        name="price"
        step="0.01" />
      <input
        type="text"
        name="color"
        placeHolder="Tea Color" />
      <input
        type="text"
        name="description"
        placeHolder="Tea Description" />
      <input 
        type="text"
        name="imageUrl"
        placeHolder="image URL" />
      <button type="submit">{props.buttonText}</button>
    </form>
  )
}

TemplateForm.propTypes = {
  formSubmissionhandler: PropTypes.func,
  buttonText: PropTypes.string,
  editing: PropTypes.bool
}