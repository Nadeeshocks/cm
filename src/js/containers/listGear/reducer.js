
const getGear_reducer = (state = {} , action) => {

    switch(action.type){
        case 'getGears' :
            return action.payload
        case 'delGear' : 
            return action.payload
        default:
            return state
    }
}

export default getGear_reducer