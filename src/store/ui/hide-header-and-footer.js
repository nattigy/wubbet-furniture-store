const openAuthPage = () => {
    return {
        type: "OPEN_AUTH_PAGE"
    };
};

const closeAuthPage = () => {
    return {
        type: "CLOSE_AUTH_PAGE"
    };
};

const pageReducers = (state = {isAuthPageOpen: false}, action) => {
    switch (action.type) {
        case "OPEN_AUTH_PAGE":
            return {
                ...state,
                isAuthPageOpen: true,
            };
        case "CLOSE_AUTH_PAGE":
            return {
                ...state,
                isAuthPageOpen: false,
            };
        default:
            return state;
    }
};

export const openAuth = () => dispatch => {
    dispatch(openAuthPage());
};

export const closeAuth = () => dispatch => {
    dispatch(closeAuthPage());
};

export default pageReducers;