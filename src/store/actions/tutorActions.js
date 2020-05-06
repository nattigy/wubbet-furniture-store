import fbConfig from "../../firebase/firebase";

export const TUTOR_SIGN_UP_REQUEST = "TUTOR_SIGN_UP_REQUEST";
export const TUTOR_SIGN_UP_SUCCESS = "TUTOR_SIGN_UP_SUCCESS";
export const TUTOR_SIGN_UP_FAILURE = "TUTOR_SIGN_UP_FAILURE";
export const TUTOR_ORDER_SUCCESS = "TUTOR_ORDER_SUCCESS";
export const TUTOR_ORDER_ERROR = "TUTOR_ORDER_ERROR";
export const TUTOR_ORDER_REQUEST = "TUTOR_ORDER_REQUEST";

const tutorRequestSignUp = () => {
    return {
        type: TUTOR_SIGN_UP_REQUEST
    };
};

const tutorReceiveSignUp = () => {
    return {
        type: TUTOR_SIGN_UP_SUCCESS,
    };
};

const tutorSignUpError = error => {
    return {
        type: TUTOR_SIGN_UP_FAILURE,
        error
    };
};

const orderRequest = () => {
    return {
        type: TUTOR_ORDER_REQUEST,
    };
};

const orderSuccess = () => {
    return {
        type: TUTOR_ORDER_SUCCESS,
    };
};

const orderError = error => {
    return {
        type: TUTOR_ORDER_ERROR,
        error
    };
};

function formatString(str) {
    return str
        .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
        .replace(/^[^ ]/g, match => (match.toUpperCase()));
}

const create_sub_grade = (gradelevels, subjects) => {
    let grade_combo = [];
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < gradelevels.length; j++) {
            grade_combo.push(`${subjects[i]}_${gradelevels[j]}`)
        }
    }
    return grade_combo;
};

const create_sub_grade_loc_combo = (locations, gradelevels, subjects) => {
    let sub_combo = {};
    let sub_grade = create_sub_grade(gradelevels, subjects);
    for (let i = 0; i < locations.length; i++) {
        sub_combo[locations[i]] = sub_grade
    }
    return sub_combo;
};

const create_sub_grade_combo = (gradelevels, subjects) => {
    let sub_combo = {};
    for (let i = 0; i < subjects.length; i++) {
        sub_combo[subjects[i]] = gradelevels
    }
    return sub_combo;
};

const create_sub_loc_combo = (locations, subjects) => {
    let sub_combo = {};
    for (let i = 0; i < subjects.length; i++) {
        sub_combo[subjects[i]] = locations
    }
    return sub_combo;
};

const create_grade_loc_combo = (locations, gradelevels) => {
    let sub_combo = {};
    for (let i = 0; i < locations.length; i++) {
        sub_combo[locations[i]] = gradelevels
    }
    return sub_combo;
};

export const registerTutor = (
    {
        email, phoneNumber,
        firstName, lastName, middleName,
        picture, collage, major, price,
        gradelevels, workingDays, locations,
        startTime, endTime, pitch,
        subjects, student, teacher, graduated,
        uid
    }) => dispatch => {
    dispatch(tutorRequestSignUp());
    const sub_grade_loc_combo = create_sub_grade_loc_combo(locations, gradelevels, subjects);
    const sub_grade_combo = create_sub_grade_combo(gradelevels, subjects);
    const sub_loc_combo = create_sub_loc_combo(locations, subjects);
    const grade_loc_combo = create_grade_loc_combo(locations, gradelevels);
    fbConfig.firestore().collection("tutors").doc(uid).set({
        email: email.toString().trim(), phoneNumber: phoneNumber.toString().trim(),
        firstName: formatString(firstName),
        middleName: formatString(middleName),
        lastName: formatString(lastName),
        subjects,
        gradelevels,
        sub_grade: sub_grade_combo,
        sub_loc: sub_loc_combo,
        grade_loc: grade_loc_combo,
        workingDays, locations,
        startTime, endTime,
        pitch,
        collage, major, price: price.toString().trim(),
        location_combo: sub_grade_loc_combo,
        rating: 1,
        student,
        teacher,
        graduated,
        hours_worked: 0,
        clients_worked_with: 0,
        currently_working: false,
        status: true,
    }).then(() => uploadPicture(picture, uid, dispatch))
        .catch(error => dispatch(tutorSignUpError(error)));
};

const uploadPicture = (picture, uid, dispatch) => {
    fbConfig.storage()
        .ref(`tutorsProfilePic/${picture.name}`)
        .put(picture)
        .on("state_changed",
            null,
            error => dispatch(tutorSignUpError(error)),
            () => {
                fbConfig.storage()
                    .ref("tutorsProfilePic")
                    .child(picture.name)
                    .getDownloadURL()
                    .then(url => updateURL(url, uid, dispatch))
            }
        )
};

const updateURL = (url, uid, dispatch) => {
    fbConfig.firestore().collection("tutors").doc(uid)
        .update({profilePic: url})
        .then(() =>
            fbConfig.firestore().collection("users").doc(uid)
                .update({profileUploaded: true})
                .then(() => dispatch(tutorReceiveSignUp()))
        )
};

export const orderTutor = form => dispatch => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSm69EdSzRIqxrPXYO7ntlZ4NDa08MrnakwN039CXMazz47pkJ/exec';
    dispatch(orderRequest());
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(res => dispatch(orderSuccess()))
        .catch(error => dispatch(orderError(error)));
    dispatch(orderSuccess())
};

