import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import TemplateForm from './TemplateForm';

export default function NewTeaForm(props){
  function handleNewTeaFormSubmission(event){
    event.preventDefault();
    props.onNewTeaCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      color: event.target.color.value,
      imageUrl: event.target.imageUrl.value,
      description: event.target.description.value,
      id: v4(),
      stock: 130
    });
  }

  return(
    <TemplateForm
      formSubmissionHandler={handleNewTeaFormSubmission}
      buttonText="Add Tea" 
      editing = {false}
    />
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func
}