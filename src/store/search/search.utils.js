import fbConfig from "../../firebase/firebase";
import {
    newProductSearchError,
    newProductSearchRequest,
    newProductSearchSuccess,
    searchItemError,
    searchItemRequest,
    searchItemSuccess
} from "./search.actions";

export const searchNewProducts = ({category}) => dispatch => {
    let items = [];
    dispatch(newProductSearchRequest());
    fbConfig.firestore().collection("items")
        .where("category", "==", category)
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