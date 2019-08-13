import { database } from './../../firebase';

export const addCommentsToDatabase = (postID, comment) => (dispatch) =>  {
  return database.ref(`comments/${postID}`).push(comment)
  .then( () => {
    dispatch(addCommentAction(postID, comment));
  })
  .catch( (error) => console.log(error) );
}

export const loadCommentsFromDatabase = () => (dispatch) => {
  return database.ref('comments').once('value')
  .then( (snapshot) => {
    console.log(snapshot)
    let comments = {};
    snapshot.forEach( child => {
      comments[child.key] = Object.values(child.val()) 
    })
    dispatch(loadCommentsAction(comments));
  })
  .catch( error => console.log(error) )
}

export const loadCommentsAction = (comments) => {
  return {
    type: 'LOAD_COMMENTS',
    comments
  }
} 

export const addCommentAction = (postID, comment) => {
  return {
    type: 'ADD_COMMENT',
    payload: {
      postID,
      comment,
    } 
  }
}

