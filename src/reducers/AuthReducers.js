const INITIAL_STATE = {
    IsSignedIn: null,
    UserId: null
}

export const AuthReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, IsSignedIn: true, UserId: action.payload };
        case "SIGN_OUT":
            return { ...state, IsSignedIn: false, UserId: null };
        default:
            return state;
    }
}