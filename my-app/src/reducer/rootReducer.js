const initstate = {
    counter: 0
}
const rootReducer = (state = initstate, action) => {
    if (action.type === 'MINUS') {
        return {
            counter: state.counter - 5
        }
    }
    else if (action.type === 'PLUS') {
        return {
            counter: state.counter + 5
        }
    }
    return state;
}
export default rootReducer;

