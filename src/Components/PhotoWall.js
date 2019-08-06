import React, { Component } from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'


class PhotoWall extends Component {

  loopThroughPosts = (posts) => ( posts.sort((x,y) => y.id -x.id ).map( (post) => <Photo key={post.id} post={post} handleRemovePhoto={this.props.handleRemovePhoto}/>));

  render() {
    const { posts } = this.props;
    
    return (
      <div>
        <Link className='addIcon'  to='/addphoto'></Link>
        <div className='photoGrid'>
          { posts && this.loopThroughPosts(posts) }
        </div>
      </div>
      
    )
  }
}

Photo.propTypes = {
  post: propTypes.object.isRequired,
  handleRemovePhoto: propTypes.func.isRequired
}


export default PhotoWall;
