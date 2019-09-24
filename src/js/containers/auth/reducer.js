import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
  authError: null,
  created: false
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {

      case ACTIONS.LOGIN_ERROR :
   
        draft.authError = 'Login failed'
        break;

      case ACTIONS.LOGIN_SUCCESS:
      
        draft.authError = null;
        break;

      case ACTIONS.SIGN_OUT:
      
        break;
        
      case ACTIONS.REGISTRATION_SUCCESS:
    
        draft.authError = false;
        break;
        
      case ACTIONS.REGISTRATION_ERROR:
    
        draft.authError = action.payload.message;
        break;

      default:
        return state;
        break;

    }
  });
}