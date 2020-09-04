import AddCatTypes from "./add-cat.types";


const addCatReducers = (state = {searchItems: []}, action) => {
    switch (action.type) {
        case AddCatTypes.ADD_CATEGORY_REQUEST:
            return {
                ...state,
                isAddingCategory: true,
                addingCategoryDone: false,
                addingCategoryError: false
            };
        case AddCatTypes.ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                isAddingCategory: false,
                addingCategoryDone: true,
                addingCategoryError: false,
            };
        case AddCatTypes.ADD_CATEGORY_ERROR:
            return {
                ...state,
                isAddingCategory: false,
                addingCategoryDone: false,
                addingCategoryError: true,
            };
        case AddCatTypes.ADD_SUB_CATEGORY_REQUEST:
            return {
                ...state,
                isAddingSubCategory: true,
                addingSubCategoryDone: false,
                addingSubCategoryError: false
            };
        case AddCatTypes.ADD_SUB_CATEGORY_SUCCESS:
            return {
                ...state,
                isAddingSubCategory: false,
                addingSubCategoryDone: true,
                addingSubCategoryError: false,
            };
        case AddCatTypes.ADD_SUB_CATEGORY_ERROR:
            return {
                ...state,
                isAddingSubCategory: false,
                addingSubCategoryDone: false,
                addingSubCategoryError: true,
            };
        default:
            return state;
    }
};

export default addCatReducers;