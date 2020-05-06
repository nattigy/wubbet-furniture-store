import {SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS, TUTOR_SEARCH_SUCCESS} from "./../actions/searchActions";

export default (
    state = {
        isSearchDone: false,
        searchTutorError: false,
        error: {},
        tutors: [],
    },
    action
) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isSearching: true,
                isSearchDone: false,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isSearching: false,
                isSearchDone: true,
                tutors: action.tutors,
            };
        case SEARCH_ERROR:
            return {
                ...state,
                isSearching: false,
                error: action.error,
                tutorProfile: {},
                searchTutorError: true,
            };
        case TUTOR_SEARCH_SUCCESS:
            return {
                ...state,
                isSearching: false,
                isSearchDone: true,
                tutorProfile: action.tutor
            };
        default:
            return state;
    }
};