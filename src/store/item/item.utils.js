import fbConfig from "../../firebase/firebase";
import {
  addItemError,
  addItemRequest,
  addItemSuccess,
  editMyItemsError,
  editMyItemsRequest,
  editMyItemsSuccess,
  fetchMyItemsError,
  fetchMyItemsRequest,
  fetchMyItemsSuccess,
  getItemDetailError,
  getItemDetailRequest,
  getItemDetailSuccess,
} from "./item.actions";

const create_name_array = (name) => {
  return name.split(" ");
};

export const addItem = ({
  name,
  ownerName,
  owners_phone_number,
  shop_address,
  price,
  description,
  size,
  sub_category,
  images,
  uid,
  quantity,
}) => (dispatch) => {
  dispatch(addItemRequest());

  const name_array = create_name_array(name.toLowerCase());
  name_array.push(name.toLowerCase());

  fbConfig
    .firestore()
    .collection("items")
    .add({
      name_array,
      price,
      description,
      name: name.toLowerCase(),
      size,
      ownerName,
      owners_phone_number,
      shop_address,
      sub_category,
      quantity,
      owner: uid,
      images: [],
    })
    .then((item) => {
      const promises = [];
      let urlList = [];
      images.forEach((file, index) => {
        const uploadTask = fbConfig
          .storage()
          .ref()
          .child(`item_pictures/${sub_category}/${item.id}/image${index}`)
          .put(file);

        promises.push(uploadTask);

        uploadTask.on(
          fbConfig.storage.TaskEvent.STATE_CHANGED,
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (snapshot.state === fbConfig.storage.TaskState.RUNNING) {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            urlList.push(downloadURL);
            if (urlList.length === images.length) {
              fbConfig
                .firestore()
                .collection("items")
                .doc(item.id)
                .update({
                  images: urlList,
                })
                .then(() => dispatch(addItemSuccess()))
                .catch((err) => dispatch(addItemError(err)));
            }
          }
        );
      });

      Promise.all(promises)
        .then(() => console.log("All files uploaded"))
        .catch((err) => console.log(err.code));
    })
    .catch((error) => dispatch(addItemError(error)));
};

export const fetchMyItems = ({ uid }) => (dispatch) => {
  dispatch(fetchMyItemsRequest());
  let items = [];
  fbConfig
    .firestore()
    .collection("items")
    .where("owner", "==", uid)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        items.push(data);
      });
      dispatch(fetchMyItemsSuccess(items));
    })
    .catch((error) => dispatch(fetchMyItemsError(error.message)));
};

export const editItem = ({
  itemId,
  name,
  price,
  description,
  subCategory,
  quantity,
}) => (dispatch) => {
  dispatch(editMyItemsRequest());
  const name_array = create_name_array(name.toLowerCase());
  fbConfig
    .firestore()
    .collection("items")
    .doc(itemId)
    .update({
      name: name.toLowerCase(),
      price,
      description,
      sub_category: subCategory,
      name_array,
      quantity,
    })
    .then(() => dispatch(editMyItemsSuccess()))
    .catch((error) => dispatch(editMyItemsError(error)));
};

export const getItemDetail = ({ id }) => (dispatch) => {
  dispatch(getItemDetailRequest());
  fbConfig
    .firestore()
    .collection("items")
    .doc(id)
    .get()
    .then((snapShot) => {
      let data = snapShot.data();
      data.id = id;
      dispatch(getItemDetailSuccess(data));
    })
    .catch((error) => dispatch(getItemDetailError(error.message)));
};
