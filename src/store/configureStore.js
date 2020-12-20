import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer'

const rootReducer = combineReducers({ count: countReducer });

const configureStore = () => {
    return createStore(countReducer);
}

export default configureStore