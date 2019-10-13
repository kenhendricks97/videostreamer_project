import streams from '../apis/streams'; //axios 
import history from '../history'

import {
    SIGN_IN,
    SIGN_OUT, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from './types';



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
export const createStream = formValues => async (dispatch, getState) => {
    //need user id to see who created stream
    const {userId} = getState().auth;
    //add id of user as well
    const response = await streams.post('/streams', {...formValues, userId}) //making post request through axios

    //dispatch action of type create stream
    dispatch({type: CREATE_STREAM,  payload: response.data});

    //do programmatic navigation to
    //get the user back to the root route - home page of all streams
    history.push('/');
};

//FETCHING LIST OF STREAMS action creator
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data });
};

//FETCHING 1 STREAM action creator - need to pass in id for stream you want to fetch
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`); //backticks used

    dispatch({type: FETCH_STREAM, payload: response.data });
};

//editing a stream action creator - need to pass in id and the formValues you want to submit as an edit
export const editStream = (id,formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues); //have to pass in the edits

    dispatch({type: EDIT_STREAM, payload: response.data });
};

//deleting action creator - need to pass in id, no response needed
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`); //have to pass in the id

    dispatch({type: DELETE_STREAM, payload: id });
};