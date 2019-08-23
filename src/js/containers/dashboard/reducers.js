
import producer from 'immer';

const intialState = {
    users : null,
}

const user_reducer = ( state = intialState , action) => {
    return producer(state, draft => {
        switch(action.type)
        {
            case 'USERDATA':
                draft.users = action.payload
                break;
        }
    });
}

export default user_reducer;