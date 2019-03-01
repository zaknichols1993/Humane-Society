import authReducer from './authReducer';
import catReducer from './catReducer';
import dogReducer from './dogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    dog: dogReducer,
    cat: catReducer
});

export default rootReducer;