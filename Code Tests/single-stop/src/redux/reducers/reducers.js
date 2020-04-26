import { ADD_COMMENT_SUCCESS } from '../constants'

const initialState = {
  data: null,
  change: null,
};

export default function(state = initialState, action) {
  switch (action.type) {

    case ADD_COMMENT_SUCCESS: {
      return {
        change: true,
        data: action.payload,
      };
    }
    
    default:
      return state;
  }
}
