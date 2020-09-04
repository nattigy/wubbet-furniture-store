import fbConfig from "../../firebase/firebase";

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
    fbConfig.storage().ref(`/cat_images/${formData.parent}/${formData.name}/${formData.image.name}`)
        .put(formData.image)
        .on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                console.log(err)
            }, () => {
                fbConfig.storage().ref('cat_images')
                    .child(`/${formData.parent}/${formData.name}/${formData.image.name}`)
                    .getDownloadURL()
                    .then(url => {
                        formData.image = url;
                        fbConfig.firestore().collection("categories")
                            .doc(formData.parent)
                            .update({
                                subCategory: fbConfig.firestore.FieldValue.arrayUnion(formData)
                            })
                            .then(e => console.log("succ" + e))
                            .catch(e => console.log("error" + e))
                    })
            })
};