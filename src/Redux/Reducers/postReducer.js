import { posts } from './../../data';


const initialState = posts;

export const postReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'REMOVE_POST':
      return state.filter( post => post.id !== action.postID );

    case 'ADD_POST':
      return [...state, action.post];

    default: 
    return state;
  }
  
}