import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'; //named import and renamed formreducer
import authReducer from './authReducer';

export default combineReducers ( {
    auth: authReducer,
    form: formReducer //assign to key and coming from formReducer
});