// import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
  loading: false,
  errorMessage: '',
  gear: []
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case "FILTERED_GEAR":
        draft.gear = action.payload;
        break;
      default:
        break;
    }
  });
}
