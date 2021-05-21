import producer from 'immer'

const initState = {
    status : null
}

const addGear_reducer = (state = initState, action) => {
    return producer( state, draft => {
        switch (action.type) {
            case 'CREATE_GEAR_SUCCESS':
                draft.status = true
                break; 
            case 'CREATE_GEAR_ERROR':
                draft.status = false
                break; 
        }
    })
        
};

export default addGear_reducer;