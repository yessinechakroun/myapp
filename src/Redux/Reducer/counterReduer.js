const initial = {
    counter: 0,

}
const counterReducer = (state = initial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : state.counter,
            }
        case 'LOGOUT':
            return {
                ...initial
            }

        default:
            return state;
    }
}
export default counterReducer