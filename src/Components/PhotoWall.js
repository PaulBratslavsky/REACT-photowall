import React, { Component } from 'react';
import Photo from './Photo';

class PhotoWall extends Component {

  loopThroughPosts = (posts) => ( posts.map( (post) => <Photo key={post.id} post={post} handleRemovePhoto={this.props.handleRemovePhoto}/>));

  render() {
    const { posts } = this.props;
    
    return (
      <div className='photoGrid'>
        { posts && this.loopThroughPosts(posts) }
      </div>
    )
  }
}

export default PhotoWall;
