import fbConfig from "../../firebase/firebase";

export const NEW_PRODUCT_SEARCH_REQUEST = "NEW_PRODUCT_SEARCH_REQUEST";
export const NEW_PRODUCT_SEARCH_SUCCESS = "NEW_PRODUCT_SEARCH_SUCCESS";
export const NEW_PRODUCT_SEARCH_ERROR = "NEW_PRODUCT_SEARCH_ERROR";

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
    console.log("here: ", errorMessage);
    return {
        type: NEW_PRODUCT_SEARCH_ERROR,
        errorMessage
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

