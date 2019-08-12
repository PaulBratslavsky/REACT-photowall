const initialState = [];

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'REMOVE_COMMENT':
      console.log(action.timestamp, 'from comment remove reducer');
      return state.filter( comment => comment.timestamp !== action.timestamp );

    case 'ADD_COMMENT':
      console.log('Add comment reducer', action.payload);
      return [...state, action.payload];

    default: 
    return state;
  }
  
}