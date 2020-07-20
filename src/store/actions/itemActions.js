import fbConfig from "../../firebase/firebase";

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const GET_ITEM_DETAIL_REQUEST = "GET_ITEM_DETAIL_REQUEST";
export const GET_ITEM_DETAIL_SUCCESS = "GET_ITEM_DETAIL_SUCCESS";
export const GET_ITEM_DETAIL_ERROR = "GET_ITEM_DETAIL_ERROR";

export const FETCH_MY_ITEM_REQUEST = "FETCH_MY_ITEM_REQUEST";
export const FETCH_MY_ITEM_SUCCESS = "FETCH_MY_ITEM_SUCCESS";
export const FETCH_MY_ITEM_ERROR = "FETCH_MY_ITEM_ERROR";

export const EDIT_MY_ITEM_REQUEST = "EDIT_MY_ITEM_REQUEST";
export const EDIT_MY_ITEM_SUCCESS = "EDIT_MY_ITEM_SUCCESS";
export const EDIT_MY_ITEM_ERROR = "EDIT_MY_ITEM_ERROR";

const addItemRequest = () => {
    return {
        type: ADD_ITEM_REQUEST
    };
};

const addItemSuccess = () => {
    return {
        type: ADD_ITEM_SUCCESS,
    };
};

const addItemError = error => {
    return {
        type: ADD_ITEM_FAILURE,
        error
    };
};

const getItemDetailRequest = () => {
    return {
        type: GET_ITEM_DETAIL_REQUEST
    }
};

const getItemDetailSuccess = item => {
    return {
        type: GET_ITEM_DETAIL_SUCCESS,
        item
    }
};

const getItemDetailError = error => {
    return {
        type: GET_ITEM_DETAIL_ERROR,
        error
    }
};

const fetchMyItemsRequest = () => {
    return {
        type: FETCH_MY_ITEM_REQUEST
    }
};

const fetchMyItemsSuccess = myItems => {
    return {
        type: FETCH_MY_ITEM_SUCCESS,
        myItems
    }
};

const fetchMyItemsError = error => {
    return {
        type: FETCH_MY_ITEM_ERROR,
        error
    }
};

const editMyItemsRequest = () => {
    return {
        type: EDIT_MY_ITEM_REQUEST
    }
};

const editMyItemsSuccess = myItems => {
    return {
        type: EDIT_MY_ITEM_SUCCESS,
        myItems
    }
};

const editMyItemsError = error => {
    return {
        type: EDIT_MY_ITEM_ERROR,
        error
    }
};

const create_name_array = name => {
    return name.split(" ");
};

const create_cat_name_combo = (category, name) => {
    let name_array = name.split(" ");
    let cat_name_combo = [];
    name_array.map(name => {
        cat_name_combo.push(name.toLowerCase() + "_" + category)
    });
    return cat_name_combo;
};

export const addItem = ({
                            category, name, price, description, sub_category,
                            frontPic, leftSidePic, rightSidePic, backPic, uid, quantity
                        }) => dispatch => {
    const picture0 = "";
    const picture1 = "";
    const picture2 = "";
    const picture3 = "";
    dispatch(addItemRequest());
    const name_array = create_name_array(name).toLowerCase();
    const cat_name_combo = create_cat_name_combo(category, name);
    fbConfig.firestore().collection("items").add({
        category, name_array, price, description, name: name.toLowerCase(),
        cat_name_combo, sub_category, picture0, picture1, picture2, picture3, quantity,
        owner: uid
    })
        .then(item => uploadPicture([frontPic, leftSidePic, rightSidePic, backPic],
            item.id, dispatch, category, sub_category))
        .catch(error => dispatch(addItemError(error)))
};

const uploadPicture = (pictures, itemId, dispatch, category, sub_category) => {
    let urlArray = [];
    pictures.map((picture, i) => {
        const pictureName = "picture" + i;
        fbConfig.storage()
            .ref(`item_pictures/${category}/${sub_category}/${itemId}/${pictureName}`)
            .put(picture)
            .on("state_changed",
                null,
                error => dispatch(addItemError(error)),
                () => {
                    fbConfig.storage()
                        .ref("item_pictures")
                        .child(`${category}/${sub_category}/${itemId}/${pictureName}`)
                        .getDownloadURL()
                        .then(url => {
                            urlArray.push(url);
                            if (urlArray.length === 4) {
                                updateURL(urlArray, itemId, dispatch)
                            }
                        })
                }
            );
    });
};

const updateURL = (urls, itemId, dispatch) => {
    fbConfig.firestore().collection("items").doc(itemId)
        .update({
            picture0: urls[0],
            picture1: urls[1],
            picture2: urls[2],
            picture3: urls[3],
        })
        .then(() => dispatch(addItemSuccess()))
        .catch(error => dispatch(addItemError(error)))
};

export const fetchMyItems = ({uid}) => dispatch => {
    dispatch(fetchMyItemsRequest());
    let items = [];
    fbConfig.firestore().collection('items')
        .where("owner", "==", uid)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                items.push(data)
            });
            dispatch(fetchMyItemsSuccess(items))
        })
        .catch(error => dispatch(fetchMyItemsError(error.message)))
};

export const editItem = ({itemId, category, name, price, description, subCategory, quantity}) => dispatch => {
    dispatch(editMyItemsRequest());
    const name_array = create_name_array(name);
    const cat_name_combo = create_cat_name_combo(category, name);
    fbConfig.firestore().collection("items").doc(itemId)
        .update({
            category, name, price, description, sub_category: subCategory, name_array, quantity, cat_name_combo
        })
        .then(() => dispatch(editMyItemsSuccess()))
        .catch(error => dispatch(editMyItemsError(error)))
};

export const getItemDetail = ({id}) => dispatch => {
    dispatch(getItemDetailRequest());
    fbConfig.firestore().collection('items').doc(id)
        .get()
        .then(snapShot => {
            let data = snapShot.data();
            data.id = id;
            dispatch(getItemDetailSuccess(data))
        })
        .catch(error => dispatch(getItemDetailError(error.message)))
};
