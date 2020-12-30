const initialState = {
    score: 0
};

const score = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SCORE':
            return {
                ...state,
                score: state.score + action.payload
            };
    default:
        return state;
    }
}

export default score