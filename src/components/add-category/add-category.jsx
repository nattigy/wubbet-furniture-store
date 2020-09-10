import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {addCategory, addSubCategory} from "../../store/add-cat/add-cat.utils";
import PreLoader from "../pre-loader/pre-loader.component";
import {Redirect} from "react-router-dom";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const AddCategory = props => {

    const {isLoggedIn, isAnonymous} = props;

    const [subCatName, setSubCatName] = useState("");
    const [catName, setCatName] = useState("");
    const [parent, setParent] = useState("HOME_FURNITURE");
    const [subCatImage, setSubCatImage] = useState([]);
    const [catImage, setCatImage] = useState(null);

    const handleAddSubCategory = e => {
        e.preventDefault();
        const form = document.forms['add-sub-category'];
        const formData = new FormData(form);
        const newSubCat = {
            name: formData.get("name"),
            link: formData.get("link"),
            id: formData.get("id"),
            parent: formData.get("parent"),
            images: subCatImage,
        };
        props.addSubCat(newSubCat);
    };

    const handleAddCategory = e => {
        e.preventDefault();
        const form = document.forms['add-category'];
        const formData = new FormData(form);
        const newSubCat = {
            name: formData.get("name"),
            link: formData.get("link"),
            id: formData.get("id"),
            description: formData.get("description"),
            image: catImage,
        };
        props.addCat(newSubCat);
    };

    if (isLoggedIn === undefined) {
        return (
            <div className="preloading-home overflow-hidden-y">
                <PreLoader/>
            </div>
        );
    } else if (!isLoggedIn || isAnonymous) {
        return <Redirect to="/login"/>
    } else {
        return (
            <Fragment>
                <Header/>
                <div className="p-5">
                    <div className="mb-5">
                        <form onSubmit={handleAddSubCategory} name="add-sub-category">
                            <h4>Add sub-category</h4>
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Sub-category Name</p>
                                <input className="form-control"
                                       name="name" type="text"
                                       onChange={e => setSubCatName(e.target.value)}
                                       required
                                />
                            </div>
                            <input className="form-control" name="id"
                                   value={subCatName.replaceAll(" ", "_").toUpperCase()}
                                   type="hidden"
                            />
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Main Category</p>
                                <select className="form-control"
                                        name="parent" id=""
                                        defaultValue="HOME_FURNITURE"
                                        onChange={e => setParent(e.target.value)}
                                        required
                                >
                                    <option value="HOME_FURNITURE">HOME_FURNITURE</option>
                                    <option value="COMMERCIAL_FURNITURE">COMMERCIAL_FURNITURE</option>
                                    <option value="FINISHING_AND_DECORATIONS">FINISHING_AND_DECORATIONS</option>
                                </select>
                            </div>
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Sub-category Link</p>
                                <input className="form-control"
                                       type="text" name="link"
                                       required
                                       value={`/${parent}/${subCatName.replaceAll(" ", "-").toLowerCase()}`}
                                />
                            </div>
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Sub-category Image</p>
                                <input className="form-control"
                                       name="subCatImage1" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                                <input className="form-control"
                                       name="subCatImage2" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                                <input className="form-control"
                                       name="subCatImage3" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                                <input className="form-control"
                                       name="subCatImage4" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                                <input className="form-control"
                                       name="subCatImage5" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                                <input className="form-control"
                                       name="subCatImage6" type="file"
                                       required
                                       onChange={e => {
                                           let temp = subCatImage;
                                           temp.push(e.target.files[0]);
                                           setSubCatImage(temp)
                                       }}
                                />
                            </div>
                            <div className="mb-3 mt-2">
                                <button type="submit" className="btn btn-success">Add</button>
                            </div>
                        </form>
                    </div>
                    <div className="mb-5">
                        <h4>Add category</h4>
                        <form onSubmit={handleAddCategory} name="add-category">
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Category Name</p>
                                <input className="form-control"
                                       name="name" type="text"
                                       onChange={e => setCatName(e.target.value)}
                                       required
                                />
                            </div>
                            <input className="form-control" name="id"
                                   value={catName.replaceAll(" ", "_").toUpperCase()}
                                   type="hidden"
                            />
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Category Link</p>
                                <input className="form-control"
                                       name="link" type="text"
                                       value={`/${catName.replaceAll(" ", "-").toLowerCase()}`}
                                       required
                                />
                            </div>
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Category Description</p>
                                <textarea className="form-control" required name="description"/>
                            </div>
                            <div className="mb-3 mt-2">
                                <p className="mb-1">Category Image</p>
                                <input className="form-control"
                                       name="image" type="file"
                                       onChange={e => setCatImage(e.target.files[0])}
                                       required
                                />
                            </div>
                            <div className="mb-3 mt-2">
                                <button className="btn btn-success">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addCat: credentials => dispatch(addCategory(credentials)),
        addSubCat: credentials => dispatch(addSubCategory(credentials)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
