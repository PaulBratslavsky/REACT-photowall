export const addPostAction = (post) => {
  console.log('add post fired');
  return {
    type: 'ADD_POST',
    post
  }
}

export const removePostAction = (postID) => {
  console.log('action with post index ' + postID + ' was fired');
  return {
    type: 'REMOVE_POST',
    postID
  }
}

