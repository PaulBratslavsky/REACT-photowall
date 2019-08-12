import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        id: Number(new Date()).toString(),
        description: this.state.getDescription,
        imageLink: this.state.getLink
      }
      console.log('Form Submitted',newPhoto);

      this.props.addPostToDatabase(newPhoto);
      this.props.history.push('/'); 
    } else {
      console.log('Form Not Submitted');
    }
  }

  render() {
    const { getLink, getDescription } = this.state;
    return (
      <div className='form'>
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.handleInputChange} type='text' placeholder='paste link here...' name='getLink' value={getLink}/>

          <input onChange={this.handleInputChange} type='text' placeholder='type description here...' name='getDescription' value={getDescription}/>

          <button>Add Photo</button>
          <Link style={{float: 'right', fontSize: '1.6rem', padding: '1rem 0 1rem 1rem'}} to='/' >Cancel</Link>

        </form>
      </div>
    )
  }
}

export default AddPhoto;
