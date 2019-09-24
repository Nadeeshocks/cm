import producer from 'immer'

const intialState = {
    gears : null
}

export default ( state = intialState, action) => {
    return producer( state, draft => {
        switch(action.type)
        {
            case "LISTING GEARS":
                draft.gears = action.payload;
                break;
        }

    })
}
