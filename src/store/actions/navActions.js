export const changeSubCategoryAction = ({type, sub_cat}) => dispatch => {
    dispatch(change({type, sub_cat}))
};

const change = ({type, sub_cat}) => {
    return {
        type: type,
        sub_cat
    }
};