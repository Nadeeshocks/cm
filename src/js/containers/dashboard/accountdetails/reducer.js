
import producer from 'immer';

const intialState = {
    status : null,
    users : null,
    userUpdateStatus : null
}

const user_reducer = ( state = intialState , action) => {
    
    return producer(state, draft => {
        switch(action.type)
        {
            case 'USERDATA':
                draft.users = action.payload
                break;
            case 'CHANGEPASSWORDSTATUS':
                draft.status = action.payload
                break;
            case 'UPDATEUSERSTATUS':
                draft.userUpdateStatus = action.payload
                break;
            default:
                return state;
        }
    });
}

export default user_reducer;