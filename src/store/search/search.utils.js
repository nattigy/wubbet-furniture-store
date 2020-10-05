import fbConfig from "../../firebase/firebase";
import {
    newProductSearchError,
    newProductSearchRequest,
    newProductSearchSuccess,
    searchAllCatError,
    searchAllCatRequest,
    searchAllCatSuccess,
    searchCatError,
    searchCatRequest,
    searchCatSuccess,
    searchItemError,
    searchItemRequest,
    searchItemSuccess
} from "./search.actions";

export const searchNewProducts = ({category}) => dispatch => {
    let items = [];
    dispatch(newProductSearchRequest());
    fbConfig.firestore().collection("items")
        // .where("category", "==", category)
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

export const searchItems = ({fieldPath, opStr, value}) => dispatch => {
    dispatch(searchItemRequest());
    let items = [];
    fbConfig.firestore().collection("items")
        .where(fieldPath, opStr, value)
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                items.push(data);
            });
            dispatch(searchItemSuccess(items))
        })
        .catch(error => dispatch(searchItemError(error)));
};

export const searchAllItems = () => dispatch => {
    dispatch(searchItemRequest());
    let items = [];
    fbConfig.firestore().collection("items")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                items.push(data)
            });
            dispatch(searchItemSuccess(items))
        })
        .catch(error => dispatch(searchItemError(error)));
};

export const applyFilter = ({filterList}) => dispatch => {
    dispatch(searchItemRequest());
    let items = [];
    fbConfig.firestore().collection("items")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                for (let i = 0; i < filterList.length; i++) {
                    if (data.sub_category === filterList[i]) {
                        items.push(data);
                        break;
                    }
                }
            });
            dispatch(searchItemSuccess(items))
        })
        .catch(error => dispatch(searchItemError(error)));
};

export const searchAllCategories = () => dispatch => {
    let categories = [];
    dispatch(searchAllCatRequest());
    fbConfig.firestore().collection("categories")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                let data = doc.data();
                data.id = doc.id;
                categories.push(data);
            });
            dispatch(searchAllCatSuccess(categories))
        })
        .catch(error => dispatch(searchAllCatError(error)))
};

export const searchCategory = ({category}) => dispatch => {
    console.log(category);
    dispatch(searchCatRequest());
    fbConfig.firestore().collection("categories")
        .doc(category)
        .get()
        .then(snapshot => {
            dispatch(searchCatSuccess(snapshot.data()))
        })
        .catch(error => dispatch(searchCatError(error)))
};