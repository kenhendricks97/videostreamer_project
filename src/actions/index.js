import streams from '../apis/streams'; //axios 
import {SIGN_IN,SIGN_OUT, CREATE_STREAM} from './types';



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

    //dispatch action of type create stream
    dispatch({type: CREATE_STREAM,  payload: response.data});
};

