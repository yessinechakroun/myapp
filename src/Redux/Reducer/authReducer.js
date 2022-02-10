const initial = {
    lang: 'fr',
    token: null,
    user: null,
}
const authReducer = (state = initial, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'LOGOUT':
            return {
                ...initial
            }

        default:
            return state;
    }
}
export default authReducer