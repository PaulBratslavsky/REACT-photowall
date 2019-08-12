import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
  const { removePostAction, post } = props;
  console.log('props', props);


  const currentComments = props.comments.filter( comment => comment.postID === post.id);
  console.log(currentComments.length, "OH BABY");

  return (
    <figure className='figure'>
      <Link to={`/single/${post.id}`}><img className='photo' src={post.imageLink} alt={post.description}/></Link>
      <figcaption><p>{post.description}</p></figcaption>
      <div className='button-container'>
        <button onClick={ () => removePostAction(post.id) } className='remove-button'>Remove</button>
        <Link className='button' to={`/single/${post.id}`}><div className='comment-count'>
          <div className='speech-bubble'>

          </div>
        {currentComments.length}</div></Link>
      </div>
    </figure>
  )
}

export default Photo
