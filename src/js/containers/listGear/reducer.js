
import producer from 'immer'

const intialState = {
    gears : null,
    status : null
}

const getGear_reducer = (state = intialState , action) => {
    return producer(state,draft  => {
            switch(action.type){
                case 'getGears' :
                    draft.gears = action.payload
                    break;
                case 'delGear' : 
                    draft.status = action.payload
                    break;
            }
        }
    )    
}

export default getGear_reducer