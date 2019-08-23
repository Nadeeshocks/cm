import producer from 'immer'

const intialState = {
    gears : []
}

export default ( state = intialState, action) => {
    return producer( state, draft => {
        switch(action.type)
        {
            case "RENTAL GEARS":
                draft.gears = action.payload;
        }

    })
}