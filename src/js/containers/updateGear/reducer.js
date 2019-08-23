
const getGear_reducer = (state = {}, action) => {

    switch(action.type){
        case 'GetGear':
            return action.payload
        case 'updateGear':
            return action.payload
        case 'Error':
            return action.payload
        default:
            return state;
    }
}

export default getGear_reducer;
