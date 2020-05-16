import fbConfig from "../../firebase/firebase";

export const NEW_PRODUCT_SEARCH_REQUEST = "NEW_PRODUCT_SEARCH_REQUEST";
export const NEW_PRODUCT_SEARCH_SUCCESS = "NEW_PRODUCT_SEARCH_SUCCESS";
export const NEW_PRODUCT_SEARCH_ERROR = "NEW_PRODUCT_SEARCH_ERROR";

export const SEARCH_ITEM_REQUEST = "SEARCH_ITEM_REQUEST";
export const SEARCH_ITEM_SUCCESS = "SEARCH_ITEM_SUCCESS";
export const SEARCH_ITEM_ERROR = "SEARCH_ITEM_ERROR";

const newProductSearchRequest = () => {
    return {
        type: NEW_PRODUCT_SEARCH_REQUEST,
    };
};

const newProductSearchSuccess = items => {
    return {
        type: NEW_PRODUCT_SEARCH_SUCCESS,
        items
    };
};

const newProductSearchError = errorMessage => {
    return {
        type: NEW_PRODUCT_SEARCH_ERROR,
        errorMessage
    };
};

const searchItemRequest = () => {
    return {
        type: SEARCH_ITEM_REQUEST
    };
};

const searchItemSuccess = searchItems => {
    return {
        type: SEARCH_ITEM_SUCCESS,
        searchItems
    };
};

const searchItemError = error => {
    return {
        type: SEARCH_ITEM_ERROR,
        error
    };
};

// export const searchByUserId = uid => dispatch => {
//     dispatch(requestSearch());
//     fbConfig.firestore()
//         .doc("tutors/" + uid)
//         .get()
//         .then(newUser => dispatch(tutorProfile(newUser.data())))
//         .catch(error => dispatch(searchError(error)));
// };

// export const searchByAField = (fieldPath, value) => dispatch => {
//     let tutors = [];
//     dispatch(requestSearch());
//     fbConfig.firestore().collection("tutors")
//         .where(fieldPath.toString().trim(), "array-contains", value.toString().trim())
//         .get()
//         .then(snapshot => {
//             snapshot.forEach(doc => {
//                 const data = doc.data();
//                 tutors.push(data)
//             });
//             dispatch(receiveSearch(tutors))
//         })
//         .catch(error => dispatch(searchError(error)));
// };

export const searchNewProducts = ({category}) => dispatch => {
    let items = [];
    dispatch(newProductSearchRequest());
    fbConfig.firestore().collection(category)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                items.push(data)
            });
            dispatch(newProductSearchSuccess(items))
        })
        .catch(error => dispatch(newProductSearchError(error)));
};

export const searchItem = ({category, name}) => dispatch => {
    dispatch(searchItemRequest());
    let items = [];
    fbConfig.firestore().collection(category)
        .where("name", "array-contains", name)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                items.push(data)
            });
            dispatch(searchItemSuccess(items))
        })
        .catch(error => dispatch(searchItemError(error)));
};

// export const searchFilter = (fieldPath, rate, value) => dispatch => {
//     let tutors = [];
//     dispatch(requestSearch());
//     console.log(fieldPath, rate, value);
//     fbConfig.firestore().collection("tutors")
//         .where(fieldPath, "array-contains", value)
//         .get()
//         .then(snapshot => {
//             snapshot.forEach(doc => {
//                 const data = doc.data();
//                 if (data.price <= rate)
//                     tutors.push(data)
//             });
//             dispatch(receiveSearch(tutors))
//         })
//         .catch(error => dispatch(searchError(error)));
// };

