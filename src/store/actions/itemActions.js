import fbConfig from "../../firebase/firebase";

export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE";

export const ADD_TO_WISH_LIST_REQUEST = "ADD_TO_WISH_LIST_REQUEST";
export const ADD_TO_WISH_LIST_SUCCESS = "ADD_TO_WISH_LIST_SUCCESS";
export const ADD_TO_WISH_LIST_FAILURE = "ADD_TO_WISH_LIST_FAILURE";

export const FETCH_ITEM_FROM_CART_REQUEST = "FETCH_ITEM_FROM_CART_REQUEST";
export const FETCH_ITEM_FROM_CART_SUCCESS = "FETCH_ITEM_FROM_CART_SUCCESS";
export const FETCH_ITEM_FROM_CART_ERROR = "FETCH_ITEM_FROM_CART_ERROR";

export const FETCH_ITEM_FROM_WISH_LIST_REQUEST = "FETCH_ITEM_FROM_WISH_LIST_REQUEST";
export const FETCH_ITEM_FROM_WISH_LIST_SUCCESS = "FETCH_ITEM_FROM_WISH_LIST_SUCCESS";
export const FETCH_ITEM_FROM_WISH_LIST_ERROR = "FETCH_ITEM_FROM_WISH_LIST_ERROR";

export const REMOVE_FROM_CART_REQUEST = "REMOVE_FROM_CART_REQUEST";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const REMOVE_FROM_CART_ERROR = "REMOVE_FROM_CART_ERROR";

export const REMOVE_FROM_WISH_LIST_REQUEST = "REMOVE_FROM_WISH_LIST_REQUEST";
export const REMOVE_FROM_WISH_LIST_SUCCESS = "REMOVE_FROM_WISH_LIST_SUCCESS";
export const REMOVE_FROM_WISH_LIST_ERROR = "REMOVE_FROM_WISH_LIST_ERROR";

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

const addItemToCartRequest = () => {
    return {
        type: ADD_TO_CART_REQUEST
    };
};

const addItemToCartSuccess = () => {
    return {
        type: ADD_TO_CART_SUCCESS,
    };
};

const addItemToCartError = error => {
    return {
        type: ADD_TO_CART_FAILURE,
        error
    };
};

const addItemToWishListRequest = () => {
    return {
        type: ADD_TO_WISH_LIST_REQUEST
    };
};

const addItemToWishListSuccess = () => {
    return {
        type: ADD_TO_WISH_LIST_SUCCESS,
    };
};

const addItemToWishListError = error => {
    return {
        type: ADD_TO_WISH_LIST_FAILURE,
        error
    };
};

const fetchFromCartRequest = () => {
    return {
        type: FETCH_ITEM_FROM_CART_REQUEST,
    };
};

const fetchFromCartSuccess = cartItems => {
    return {
        type: FETCH_ITEM_FROM_CART_SUCCESS,
        cartItems
    };
};

const fetchFromCartError = error => {
    return {
        type: FETCH_ITEM_FROM_CART_ERROR,
        error
    };
};

const fetchFromWishListRequest = () => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_REQUEST,
    };
};

const fetchFromWishListSuccess = cartItems => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_SUCCESS,
        cartItems
    };
};

const fetchFromWishListError = error => {
    return {
        type: FETCH_ITEM_FROM_WISH_LIST_ERROR,
        error
    };
};

const removeFromCartRequest = () => {
    return {
        type: REMOVE_FROM_CART_REQUEST
    };
};

const removeFromCartSuccess = () => {
    return {
        type: REMOVE_FROM_CART_SUCCESS,
    };
};

const removeFromCartError = error => {
    return {
        type: REMOVE_FROM_CART_ERROR,
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
        cat_name_combo.push(name + "_" + category)
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
    const name_array = create_name_array(name);
    const cat_name_combo = create_cat_name_combo(category, name);
    fbConfig.firestore().collection("items").add({
        category, name_array, price, description, name,
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

export const addItemToCart = ({userId, itemId, itemPrice, type}) => dispatch => {
    let list;
    switch (type) {
        case "ADD_TO_CART":
            dispatch(addItemToCartRequest());
            list = "cartList";
            break;
        case "ADD_TO_WISH_LIST":
            dispatch(addItemToWishListRequest());
            list = "wishList";
            break;
        default:
            list = "cartList"
    }
    fbConfig.firestore().collection("users").doc(userId).update({
        [list]: fbConfig.firestore.FieldValue.arrayUnion(itemId),
        totalPriceOfCart: fbConfig.firestore.FieldValue.increment(list === "cartList" ? itemPrice : 0)
    })
        .then(() => {
            list === "cartList" ? dispatch(addItemToCartSuccess()) : dispatch(addItemToWishListSuccess())
        })
        .catch(error => dispatch(list === "cartList" ? addItemToCartError(error) :
            dispatch(addItemToWishListError(error))));
};

export const fetchFromCart = ({uid, type}) => dispatch => {
    dispatch(fetchFromCartRequest());
    let items = [];
    fbConfig.firestore().collection("users").doc(uid)
        .get()
        .then(snapShot => {
            let cartItems;
            switch (type) {
                case "WISH_LIST":
                    cartItems = snapShot.data().wishList;
                    break;
                case "CART_LIST":
                    cartItems = snapShot.data().cartList;
                    break;
                default:
                    cartItems = snapShot.data().cartList;
            }
            if (cartItems.length === 0) {
                dispatch(fetchFromCartSuccess(items));
                return
            }
            for (let i = 0; i < cartItems.length; i++) {
                fbConfig.firestore().collection("items").doc(cartItems[i])
                    .get()
                    .then(snapshot => {
                        if (snapshot.exists) {
                            let data = snapshot.data();
                            data.id = snapshot.id;
                            items.push(data);
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromCartSuccess(items));
                            }
                        } else {
                            if (i + 1 === cartItems.length) {
                                dispatch(fetchFromCartSuccess(items));
                            }
                        }
                    })
                    .catch(error => fetchFromCartError(error))
            }
        }).catch(error => dispatch(fetchFromCartError(error)));
};

export const deleteFromCart = ({userId, itemId}) => dispatch => {
    dispatch(removeFromCartRequest());
    fbConfig.firestore().collection('users').doc(userId)
        .update({
            cartList: fbConfig.firestore.FieldValue.arrayRemove(itemId)
        })
        .then(() => dispatch(removeFromCartSuccess()))
        .catch(error => dispatch(removeFromCartError(error.message)))
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
