import React from 'react'
import Comments from './Comments';
import { Link } from 'react-router-dom';
const Single = (props) => {
  const { posts, match, addCommentAction, removeCommentAction, comments } = props;
  const singlePost = posts.filter( post => post.id === match.params.id);

  console.log(singlePost, props, 'from single')
  return (
    <div className='single-photo'>
      <figure className='figure'>
      <img className='photo' src={singlePost[0].imageLink} alt={singlePost.description}/>
      <figcaption><p>{singlePost[0].description}<Link style={{float: 'right'}} to='/'>Back</Link></p></figcaption>
    </figure>
    <Comments postID={singlePost[0].id} comments={comments} addCommentAction={addCommentAction}  removeCommentAction={removeCommentAction}/>
  
    
    </div>
  )
}

export default Single
