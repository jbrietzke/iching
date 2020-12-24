import { createStore, combineReducers } from 'redux';
import count from '../reducers/count'
import score from '../reducers/score'
import coinFaces from '../reducers/coinFaces'

const rootReducer = combineReducers({count, score, coinFaces});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore