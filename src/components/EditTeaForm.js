import React from 'react';
import TemplateForm from './TemplateForm'
import PropTypes from 'prop-types';

export default function EditTeaForm (props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(event) {
    event.preventDefault();
    props.onEditTea({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      color: event.target.color.value,
      imageUrl: event.target.imageUrl.value,
      description: event.target.description.value,
      id: tea.id,
      stock: tea.stock
    });
  }

  return (
    
    <TemplateForm 
      formSubmissionHandler={handleEditTeaFormSubmission} 
      buttonText="Update Tea"
      tea = {tea}
      editing = {true}
    />
  );
}

EditTeaForm.propTypes = {
  onEditTea: PropTypes.func,
  tea: PropTypes.object
};
