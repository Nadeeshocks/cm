// import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
  loading: false,
  errorMessage: '',
  stories : [],
  gear: []
};

export default (state = initialState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case "FILTERED_GEAR":
        draft.gear = action.payload;
        break;
      case "NEW_ARRIVALS":
        draft.gear = action.payload;
      case "STORIES":
        draft.stories = action.payload;
      default:
        break;
    }
  });
}
