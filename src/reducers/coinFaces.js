const headImg = require('../assets/heads.jpg')
const tailImg = require('../assets/tails.jpg')

const initialState = {
    head: headImg,
    tail: tailImg,
    facesArr: [headImg, tailImg, headImg],
    score: 0,
    flips: 0,
    max_flips: 6
};

const setFacesArr = (state) => {
    console.log(state)
    const facesArr = []
    for(var x = 0; x < 3; x++){
        const result = Math.round(Math.random())
        const face = result ? headImg : tailImg
        facesArr.push(face)
    }
    return facesArr
}

const setScore = (state) => {
    let score = state.score
    state.facesArr.forEach((item, index) => {
        console.log(item)
        score += item == state.head ? 3 : 2
    })
    console.log(state)
    return score
}

const coinFaces = (state = initialState, action) => {
    switch(action.type) {
        case 'FLIP_FACES':
            return {
                ...state,
                facesArr: setFacesArr(state),
                flips: state.flips + 1
            };
        case 'SET_HEAD':
            return {
                ...state,
                head: action.payload
            }
        case 'SET_TAIL':
            return {
                ...state,
                tail: action.payload
            }
        case 'SET_SCORE':
            return {
                ...state,
                score: setScore(state)
            }
    default:
        return state;
    }
}

export default coinFaces