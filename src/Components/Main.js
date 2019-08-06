import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import { posts } from '../data';
import propTypes from 'prop-types';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom';



class Main extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    this.setState({ posts: posts })
  }

  handleRemovePhoto = (postID) => {
    const updated = this.state.posts.filter( post => post.id !== postID );
    this.setState({posts: updated});
  } 

  handleAddPhoto = (newPhoto) => {
    const updated = this.state.posts.concat(newPhoto);
    this.setState({posts: updated});
  }
  
  render() {

    const { posts } = this.state;
    console.log(posts, 'HELO');
    return (
      <React.Fragment>
        <Title />
        <div>
          <Route exact path='/' render={ () => <PhotoWall posts={posts} handleRemovePhoto={this.handleRemovePhoto} /> } />

          <Route path='/addphoto' render= { ({history}) => <AddPhoto handleAddPhoto={this.handleAddPhoto} history={history} /> } />
        </div>
      </React.Fragment>
      
    )
  }
  
}

PhotoWall.propTypes = {
  posts: propTypes.array.isRequired,
  handleRemovePhoto: propTypes.func.isRequired
}

export default Main;
