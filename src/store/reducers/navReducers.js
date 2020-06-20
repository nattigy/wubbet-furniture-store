export default (state = {}, action) => {
    switch (action.type) {
        case "LIVING_ROOM":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "BED_ROOM":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "KITCHEN":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "OFFICE":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "DECORATIONS":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "FINISHING_MATERIALS":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        case "OTHER":
            return {
                ...state,
                sub_category_nav: action.sub_cat
            };
        default:
            return state;
    }
};