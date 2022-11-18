import React from 'react';
import NewTeaForm from './NewTeaForm';
import TeaList from './TeaList';
import EditTeaForm from './EditTeaForm';
import TeaDetail from './TeaDetail';

class TeaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTeaList: [],
      selectedTea: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingTea = (id) => {
    const newMasterTeaList = this.state.masterTeaList.filter(tea => tea.id !== id);
    this.setState({
      masterTeaList: newMasterTeaList,
      selectedTea: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMasterTeaList = this.state.masterTeaList
      .filter(tea => tea.id !== this.state.selectedTea.id)
      .concat(teaToEdit);
    this.setState({
      masterTeaList: editedMasterTeaList,
      editing: false,
      selectedTea: null
    });
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMasterTeaList = this.state.masterTeaList.concat(newTea);
    this.setState({masterTeaList: newMasterTeaList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.masterTeaList.filter(tea => tea.id === id)[0];
    this.setState({selectedTea: selectedTea});
  }

  handleSellingTea = (id) => {
    let teaToEdit = this.state.masterTeaList.filter(tea => tea.id === id)[0];
    teaToEdit.stock--;
    const editedMasterTeaList = this.state.masterTeaList
      .filter(tea => tea.id !== id)
      .concat(teaToEdit);
    this.setState({
      masterTeaList: editedMasterTeaList
    });
    console.log("sold" + {teaToEdit})
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditTeaForm tea = {this.state.selectedTea} onEditTea = {this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
      tea={this.state.selectedTea} 
      onClickingDelete={this.handleDeletingTea}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Tea List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaCreation={this.handleAddingNewTeaToList}/>;
      buttonText = "Return to Tea List"; 
    } else {
      currentlyVisibleState = <TeaList 
        onTeaSelection={this.handleChangingSelectedTea}
        onTeaSold={this.handleSellingTea}
        teaList={this.state.masterTeaList} 
      />;
      buttonText = "Add Tea"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default TeaControl;



// import React from 'react';
// import TeaDetail from './TeaDetail';
// import TeaList from './TeaList';
// import NewTeaForm from './NewTeaForm';
// import EditTeaForm from './EditTeaForm';


// class PageControl extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       formVisibleOnPage: false,
//       masterTeaList: [],
//       selectedTea: null,
//       editing: false
//     }
//   }

//   handleButton = () => {
//     if(this.state.selectedTea != null){
//       this.setState({
//         formVisibleOnPage: false,
//         selectedTea: null,
//         editing: false
//       });
//     } else {
//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//       }));
//     }
//   }

//   handleEdit = () => {
//     console.log("edit reached");
//     this.setState({editing: true});
//   }

//   handleEditTea = (teaToEdit) => {
//     const editedMasterTeaList = this.state.masterTeaList
//       .filter(tea => tea.id !== this.state.selectedTea.id)
//       .concat(teaToEdit);
//     this.setState({
//       masterTeaList: editedMasterTeaList,
//       editing: false,
//       selectedTea: null
//     });
//   }

//   handleAddNewTea = (newTea) => {
//     const newMasterTeaList = this.state.masterTeaList.concat(newTea);
//     this.setState({masterTeaList: newMasterTeaList});
//     this.setState({formVisibleOnPage: false});
//   }

//   handleChangeTea = (id) => {
//     const selectedTea = this.state.masterTeaList.filter(tea => tea.id === id)[0];
//     this.SetState({selectedTea: selectedTea});
//   }

//   return(){
//     let currentVisibleState = null;
//     let buttonText = null;
//     if(this.state.editing){
//       currentVisibleState = <EditTeaForm tea={this.state.selectedTea} onEditTea={this.handleEditTea} />
//       buttonText = "Return to List";
//     } else if(this.state.selectedTea != null){
//       currentVisibleState = <TeaDetail
//         tea={this.state.selectedTea}
//         onClickDelete={this.handleDeleteTea}
//         onClickEdit={this.handleEditTea}
//       />
//       buttonText = "Return to List";
//     } else if (this.state.formVisibleOnPage){
//       currentVisibleState = <NewTeaForm onNewTeaCreation={this.HandleAddNewTea} />;
//       buttonText = "Return to List";
//     } else {
//       currentVisibleState = <TeaList
//         onTeaSelection={this.handleChangeTea}
//         teaList={this.state.masterTeaList}
//       />
//       buttonText="Add Tea";
//     }
//     <React.Fragment>
//       <main className="main">
//       <h1>PageControl</h1>
//       {currentVisibleState}
//       <button onClick={this.handleButton}>{buttonText}</button>
//     </main>
//     </React.Fragment>
    
//   }
// }

// export default PageControl;