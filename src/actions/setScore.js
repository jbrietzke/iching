const setScore = (score = 2) => {
    return {
        type: 'SET_SCORE',
        payload: score
    }
}

export default setScore