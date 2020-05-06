import fbConfig from "../../firebase/firebase";

export const SEARCH_REQUEST = "SEARCH_BY_SUBJECT";
export const SEARCH_SUCCESS = "SEARCH_BY_GRADE_LEVEL";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const TUTOR_SEARCH_SUCCESS = "TUTOR_SEARCH_SUCCESS";

const requestSearch = () => {
    return {
        type: SEARCH_REQUEST,
    };
};

const receiveSearch = tutors => {
    return {
        type: SEARCH_SUCCESS,
        tutors
    };
};

const tutorProfile = tutor => {
    return {
        type: TUTOR_SEARCH_SUCCESS,
        tutor
    };
};

const searchError = error => {
    return {
        type: SEARCH_ERROR,
        error
    };
};

export const searchByUserId = uid => dispatch => {
    dispatch(requestSearch());
    fbConfig.firestore()
        .doc("tutors/" + uid)
        .get()
        .then(newUser => dispatch(tutorProfile(newUser.data())))
        .catch(error => dispatch(searchError(error)));
};

export const searchByAField = (fieldPath, value) => dispatch => {
    let tutors = [];
    dispatch(requestSearch());
    fbConfig.firestore().collection("tutors")
        .where(fieldPath.toString().trim(), "array-contains", value.toString().trim())
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                tutors.push(data)
            });
            dispatch(receiveSearch(tutors))
        })
        .catch(error => dispatch(searchError(error)));
};

export const searchAll = () => dispatch => {
    let tutors = [];
    dispatch(requestSearch());
    fbConfig.firestore().collection("tutors")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                tutors.push(data)
            });
            dispatch(receiveSearch(tutors))
        })
        .catch(error => dispatch(searchError(error)));
};

export const searchFilter = (fieldPath, rate, value) => dispatch => {
    let tutors = [];
    dispatch(requestSearch());
    console.log(fieldPath, rate, value);
    fbConfig.firestore().collection("tutors")
        .where(fieldPath, "array-contains", value)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.price <= rate)
                    tutors.push(data)
            });
            dispatch(receiveSearch(tutors))
        })
        .catch(error => dispatch(searchError(error)));
};

