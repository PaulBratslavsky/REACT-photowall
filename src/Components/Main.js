import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import { posts } from '../data';


class Main extends Component {

  state = {
    posts: []
  }

  componentWillMount() {
    this.setState({ posts: posts })
  }

  handleRemovePhoto = (postID) => {
    const filtered = this.state.posts.filter( post => post.id !== postID );
    this.setState({posts: filtered});
  } 

  handleAddPhoto = () => {
    console.log('Add photo clicked');
  }
  
  render() {

    const { posts } = this.state;
    return (
      <div>
        <Title />
        <PhotoWall posts={posts} handleRemovePhoto={this.handleRemovePhoto}/>
      </div>
    )
  }
  
}

export default Main;
