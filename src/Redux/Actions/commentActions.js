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

