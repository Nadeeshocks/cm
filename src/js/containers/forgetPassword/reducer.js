import producer from 'immer'

const currentState = {
    forgetPasswordStatus : {}
}

export default ( state = currentState ,action) => {

    return producer( state , draft  => {
        switch(action.type){
            case "forgetpassword":
                draft.forgetPasswordStatus = action.payload;
                break;
        }
    })
}