import {AMHARIC, ENGLISH} from "./translations";

const LocalizationTypes = {
    CHANGE_TO_ENGLISH: "CHANGE_TO_ENGLISH",
    CHANGE_TO_AMHARIC: "CHANGE_TO_AMHARIC"
};

const ChangeToEnglishRequest = () => {
    return {
        type: LocalizationTypes.CHANGE_TO_ENGLISH
    };
};

const ChangeToAmharicRequest = () => {
    return {
        type: LocalizationTypes.CHANGE_TO_AMHARIC
    };
};

export const changeToEnglish = () => dispatch => {
    dispatch(ChangeToEnglishRequest());
};

export const changeToAmharic = () => dispatch => {
    dispatch(ChangeToAmharicRequest());
};

export const localizationReducers = (state = {chosenLanguage: ENGLISH, isEnglish: true}, action) => {
    switch (action.type) {
        case LocalizationTypes.CHANGE_TO_ENGLISH:
            return {
                ...state,
                chosenLanguage: ENGLISH,
                isEnglish: true
            };
        case LocalizationTypes.CHANGE_TO_AMHARIC:
            return {
                ...state,
                chosenLanguage: AMHARIC,
                isEnglish: false
            };
        default:
            return state;
    }
};