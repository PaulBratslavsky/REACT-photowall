import { database } from './../../firebase';

export const addCommentsToDatabase = (postID, comment) => (dispatch) =>  {
  return database.ref('comments').update({[postID]: comment})
  .then( () => {
    dispatch(addCommentAction(postID, comment));
  })
  .catch( (error) => console.log(error) );
}


export const addCommentAction = (postID, comment) => {
  console.log('add comment fired');
  return {
    type: 'ADD_COMMENT',
    payload: {
      postID,
      comment,
      timestamp: new Date()
    } 
  }
}

export const removeCommentAction = (timestamp) => {
  console.log('action with post index ' + timestamp + ' was fired');
  return {
    type: 'REMOVE_COMMENT',
    timestamp
  }
}

