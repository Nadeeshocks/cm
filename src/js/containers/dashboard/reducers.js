
import producer from 'immer';

const intialState = {
    users : null,
    totalEarning : 0,
    monthlyAverage : 0,
    totalGears : 0,
    rentedGears : 0,
    avaliableGears : 0,
    InventryValue : 0
}

const user_reducer = ( state = intialState , action) => {
    return producer(state, draft => {
        switch(action.type)
        {
            case 'USERDATA':
                draft.users = action.payload
                break;
            case 'TOTAL_EARNING':
                draft.totalEarning = action.payload
                break;
            case 'MONTHLY_AVERAGE':
                draft.monthlyAverage = action.payload
                break;
            case 'TOTAL_GEARS':
                draft.totalGear = action.payload[0]
                draft.rentedGears = action.payload[1]
                draft.avaliableGears = action.payload[2]
                break;
            case 'INVENTRY_VALUE':
                draft.InventryValue = action.payload;
                break;
                
        }
    });
}

export default user_reducer;