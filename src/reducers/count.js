import { COUNTER_CHANGE } from '../constants';

const initialState = {
    count: 5
};

const count = (state = initialState, action) => {
    switch(action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                count: state.count + action.payload
            };
    default:
        return state;
    }
}

export default count