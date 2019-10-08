import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types' //import actions - payloads have data or id or both - see actions

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            //create new object, taking current records and adding in - ...state
            //call map keys, take list of streams from api - ..._.mapKeys
            //use keys as id from the streams themselves 
            return {...state,..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM: //every time we get this action - single stream
            // we take the state object and take all the properties (...state)
            // and add to new object and then add add keyvalue pair through payload
            return{...state, [action.payload.id]: action.payload};

        case CREATE_STREAM: //getting back single stream
            return{...state, [action.payload.id]: action.payload};

        case EDIT_STREAM: //single stream
            return{...state, [action.payload.id]: action.payload};

        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}