const initialState = {};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'REMOVE_COMMENT':
      return state;
    case 'ADD_COMMENT':

      if (!state[action.payload.postID]) {
        return {...state, [action.payload.postID]: [action.payload.comment] };
      } else {
        return {...state, [action.payload.postID]: [ ...state[action.payload.postID], action.payload.comment ]}
      }
      
      case 'LOAD_COMMENTS':
        return action.comments;
    default: 
    return state;
  }
  
}