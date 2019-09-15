import {SIGN_IN,SIGN_OUT} from '../actions/types';

//initialize state of sign in - initial_state is constant object - do not chage - capitals
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

//when app first boots, reducer called 1 time to initial it,
//if the user is called with first value of undefined
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            //update and modify state
            return {...state,isSignedIn: true, userId:action.payload};
        case SIGN_OUT:
            //update and modify state
            return {...state,isSignedIn: false, userId:null};
        default:
            return state;
    }
};