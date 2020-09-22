import fbConfig from "../../firebase/firebase";
import {addSubCatError, addSubCatRequest} from "./add-cat.actions";

export const addCategory = formData => dispatch => {
    fbConfig.storage().ref(`/cat_images/${formData.id}/${formData.image.name}`)
        .put(formData.image)
        .on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                fbConfig.storage().ref('cat_images')
                    .child(`/${formData.id}/${formData.image.name}`)
                    .getDownloadURL()
                    .then(url => {
                        fbConfig.firestore().collection("categories")
                            .doc(formData.id)
                            .set({
                                name: formData.name,
                                link: formData.link,
                                id: formData.id,
                                description: formData.description,
                                image: url
                            })
                            .then(e => console.log("succ" + e))
                            .catch(e => console.log("error" + e))
                    })
            })
};

export const addSubCategory = formData => dispatch => {
    dispatch(addSubCatRequest());
    const promises = [];
    let urlList = [];
    formData.images.forEach((file, index) => {
        const uploadTask = fbConfig.storage().ref()
            .child(`/cat_images/${formData.parent}/${formData.name}/image${index}`)
            .put(file);

        promises.push(uploadTask);

        uploadTask.on(
            fbConfig.storage.TaskEvent.STATE_CHANGED,
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (snapshot.state === fbConfig.storage.TaskState.RUNNING) {
                    console.log(`Progress: ${progress}%`);
                }
            },
            error => console.log(error.code),
            async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                urlList.push(downloadURL);
                if (urlList.length === formData.images.length) {
                    formData.images = urlList;
                    fbConfig.firestore().collection("categories")
                        .doc(formData.parent)
                        .update({
                            subCategory: fbConfig.firestore.FieldValue.arrayUnion(formData)
                        })
                        .then(() => dispatch(console.log("succ")))
                        .catch(err => dispatch(addSubCatError(err)))
                }
            }
        );
    });

    Promise.all(promises)
        .then(() => console.log("All images uploaded"))
        .catch(err => console.log(err.code));
};