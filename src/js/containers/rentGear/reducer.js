// import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
  loading: false,
  errorMessage: ''
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      default:
        break;

    }
  });
}
