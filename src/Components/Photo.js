import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
  const { removePostFromDatabase, post, comments } = props;

  const commentCount = comments[post.id];


  return (
    <figure className='figure'>
      <Link to={`/single/${post.id}`}><img className='photo' src={post.imageLink} alt={post.description}/></Link>
      <figcaption><p>{post.description}</p></figcaption>
      <div className='button-container'>
        <button onClick={ () => removePostFromDatabase(post.id) } className='remove-button'>Remove</button>
        <Link className='button' to={`/single/${post.id}`}><div className='comment-count'>
          <div className='speech-bubble'>

          </div>{ commentCount && commentCount.length }</div></Link>
      </div>
    </figure>
  )
}

export default Photo
