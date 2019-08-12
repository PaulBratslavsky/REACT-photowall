import React from 'react';
import Photo from './Photo';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom'


const PhotoWall = (props) => {

  const loopThroughPosts = (posts) => ( posts.sort((x,y) => y.id -x.id ).map( (post) => <Photo {...props} key={post.id} post={post} />));

    const { posts } = props;
    
    return (
      <div>
        <Link className='addIcon'  to='/addphoto'></Link>
        <div className='photoGrid'>
          { posts && loopThroughPosts(posts) }
        </div>
      </div>
      
    )

}

Photo.propTypes = {
  post: propTypes.object.isRequired,
}


export default PhotoWall;
