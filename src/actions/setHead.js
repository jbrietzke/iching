const setHead = (newHead) => {
    return {
        type: 'SET_HEAD',
        payload: newHead
    }
}

export default setHead