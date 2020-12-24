import { COUNTER_CHANGE } from '../constants';

const changeCount = (count = 1) => {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}

export default changeCount