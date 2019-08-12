import { database } from './../../firebase';

export const removePostFromDatabase = (postID) => (dispatch) => {
   return database.ref(`posts/${postID}`).remove()
   .then( () => {
     dispatch(removePostAction(postID));
   })
   .catch( error => console.log(error));
} 

export const getPostFromDatabase = () => (dispatch) => {

  return database.ref('posts').once('value')
  .then( (snapshot) => {
    let posts = [];
    snapshot.forEach( (child) => {
      posts.push(child.val());
    });
    dispatch(loadPost(posts));
  })
}

export const addPostToDatabase = (post) => (dispatch) =>  {
  return database.ref('posts').update({[post.id]: post})
  .then( () => {
    dispatch(addPostAction(post));
  })
  .catch( (error) => console.log(error) );
}

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

export const loadPost = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}
