import React from 'react'
import Comments from './Comments';
import { Link } from 'react-router-dom';

const Single = (props) => {
  const { posts, match, addCommentsToDatabase, removeCommentAction, comments } = props;
  

  const singlePost = posts.filter( post => post.id === match.params.id);

  if (props.loading === true) {
    return(
      <div className='loader'>...Loading</div>
    );
  } else if (singlePost[0]) {
    return(
    <div className='single-photo'>
      <figure className='figure'>
      <img className='photo' src={singlePost[0].imageLink} alt={singlePost.description}/>
      <figcaption><p>{singlePost[0].description}<Link style={{float: 'right'}} to='/'>Back</Link></p></figcaption>
      </figure>
      <Comments postID={singlePost[0].id} comments={comments[match.params.id]} addCommentsToDatabase={addCommentsToDatabase}  removeCommentAction={removeCommentAction}/>
    </div>
    )
  } else {
    return <h1><span style={{color:'red'}}>404</span> - No posts found!</h1>;
  }
}

export default Single
