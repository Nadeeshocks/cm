import ACTIONS from './actionType';
import producer from 'immer';

const initialState = {
    loading : false,
    errorMessage :'' ,
    created :false
};

export default (state = initialState, action) => {
    return producer(state, draft => {
        switch (action.type) {
            case ACTIONS.REGISTRATION_REQUEST:
                draft.loading = true;
            break; 
            case ACTIONS.REGISTRATION_SUCCESS:
                draft.loading = false;
                draft.created = true;
            break;

             case REGISTRATION_ERROR:
                draft.errorMessage = action.payload.err;
            break;

            default:
                break;

        }
    });
}