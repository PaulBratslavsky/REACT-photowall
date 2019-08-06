import React, { Component } from 'react';

class AddPhoto extends Component {
  state = {
    getLink: '',
    getDescription: ''
  }

  handleInputChange = (e) => (this.setState({ [e.target.name]: e.target.value }))

  isFormNotEmpty = (link, description) => ( ( link !== '' || link.length > 0 ) && ( description !== '' || description.length > 0 ) );


  onSubmitForm = (e) => {
    e.preventDefault();


    if ( this.isFormNotEmpty(this.state.getLink, this.state.getDescription) ) {
      const newPhoto = {
        id: Number(new Date()),
        description: this.state.getDescription,
        imageLink: this.state.getLink
      }
      console.log('Form Submitted',newPhoto);

      this.props.handleAddPhoto(newPhoto);
      this.props.history.push('/'); 
    } else {
      console.log('Form Not Submitted');
    }
  }

  render() {
    const { getLink, getDescription } = this.state;
    console.log(getLink, getDescription);
    return (
      <div className='form'>
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.handleInputChange} type='text' placeholder='paste link here...' name='getLink' value={getLink}/>

          <input onChange={this.handleInputChange} type='text' placeholder='type description here...' name='getDescription' value={getDescription}/>

          <button>Add Photo</button>

        </form>
      </div>
    )
  }
}

export default AddPhoto;
