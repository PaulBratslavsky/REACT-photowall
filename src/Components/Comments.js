import React, { Component } from 'react';

class Comments extends Component {

  state = {
    comment: ''
  }

  handleInputChange = (e) => this.setState({[e.target.name]: e.target.value});

  handleAddComment = (e) => {
    e.preventDefault();

    if ( this.state.comment !== '' || this.state.comment > 0 ) {
      this.props.addCommentsToDatabase(this.props.postID, this.state.comment);
      
      this.setState({comment: ''});
    } else {
      console.log('input cant be blank');
    }
    
  }

  displayComments = (comments) => {
    if (!comments) {
      return []; 
    } else {
      return comments.map( (comment, index ) => <div key={index}><p>{comment}</p></div>);
      
    }
  }

  render() {

    const { comments } = this.props;

    return (
      <div className='comment'>
        <h2>Hello from Comments</h2>
        <form className='comment-form' onSubmit={this.handleAddComment}>
          <input onChange={this.handleInputChange} value={this.state.comment} name='comment' type='text' placeholder='leave a comment...'/>
          <input type='submit' hidden/>
        </form>
        {this.displayComments(comments)}
      </div>
    )
  }
}

export default Comments;
