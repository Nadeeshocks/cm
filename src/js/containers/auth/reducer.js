import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
  errorMessage: null,
  created: false
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case ACTIONS.LOGIN_ERROR :
        console.log('login error');
        draft.errorMessage = 'Login failed'
        break;

      case ACTIONS.LOGIN_SUCCESS:
        console.log('login success');
        draft.errorMessage = null;
        break;
      case ACTIONS.REGISTRATION_SUCCESS:
        draft.loading = false;
        draft.created = true;
        break;

      case ACTIONS.REGISTRATION_ERROR:
        draft.errorMessage = action.payload.err;
        break;

      default:
        return state;
        break;

    }
  });
}