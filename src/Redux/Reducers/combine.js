import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
});