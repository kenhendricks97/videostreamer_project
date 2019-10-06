import streams from '../apis/streams'; //axios 
import {SIGN_IN,SIGN_OUT} from './types';



//action creator 
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

//action creator - flips boolean flag of sign inout
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


//action creator for api create stream, aynsc uses redux thunk
export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues) //making post request through axios
};

