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
        console.log('login error');
        draft.authError = 'Login failed'
        break;

      case ACTIONS.LOGIN_SUCCESS:
        console.log('login success');
        draft.authError = null;
        break;

      case ACTIONS.SIGN_OUT:
        console.log('logout success');
        break;
        
      case ACTIONS.REGISTRATION_SUCCESS:
        console.log('registration success');
        draft.authError = false;
        break;
        
      case ACTIONS.REGISTRATION_ERROR:
        console.log(action.payload.message);
        draft.authError = action.payload.message;
        break;

      default:
        return state;
        break;

    }
  });
}