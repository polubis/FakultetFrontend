import * as actionsTypes from './ActionTypes';
import { updateObject } from '../../services/reduxHelper';

export const initialState = {
    loginResult: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGING_IN:
            return updateObject(state, {loginResult: action.loginResult})
            
        default:
            break;
    }
    return state;   
}
export default reducer;


