import React, {Fragment, useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import PreLoader from "../preLoader/preLoader";
import Dialog from "@material-ui/core/Dialog";
import {connect} from "react-redux";
import {addItem} from "../../store/actions/itemActions";
import {Redirect} from "react-router-dom";

const sub_category = [
    {category: "HOME_FURNITURE", sub_category: "Living room", value: "livingRoom"},
    {category: "HOME_FURNITURE", sub_category: "Bed room", value: "bedRoom"},
    {category: "HOME_FURNITURE", sub_category: "Dinning room/kitchen", value: "kitchen"},
    {category: "COMMERCIAL_FURNITURE", sub_category: "Office", value: "office"},
    {category: "FINISHING_MATERIALS", sub_category: "Decorations", value: "decorations"},
    {category: "FINISHING_MATERIALS", sub_category: "Finishing materials", value: "finishingMaterials"},
    {category: "Other", sub_category: "other", value: "other"},
];

const AddItem = props => {

    const [frontPic, setFrontPic] = useState("");
    const [leftSidePic, setLeftSidePic] = useState("");
    const [rightSidePic, setRightSidePic] = useState("");
    const [backPic, setBackPic] = useState("");
    const [selected_category, setSelected_category] = useState("HOME_FURNITURE");

    const {isAdding, addingError, addingSuccess, errorMessage, isAuthenticated, isLoggedIn, isAnonymous, user} = props;

    const handleSubmit = e => {
        e.preventDefault();
        const form = document.forms["addItemForm"];
        props.addItem({
            name: new FormData(form).get("name"),
            price: new FormData(form).get("price"),
            category: new FormData(form).get("category"),
            quantity: new FormData(form).get("quantity"),
            sub_category: new FormData(form).get("sub_category"),
            description: new FormData(form).get("description"),
            frontPic: new FormData(form).get("frontPic"),
            leftSidePic: new FormData(form).get("leftSidePic"),
            rightSidePic: new FormData(form).get("rightSidePic"),
            backPic: new FormData(form).get("backPic"),
            uid: user ? user.uid : "0",
        });
    };

    if (!isAuthenticated) {
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
                {isAdding &&
                <Dialog open={true}>
                    <div className="w-100 px-5 py-3 text-center overflow-hidden" color="red">
                        <PreLoader/>
                    </div>
                </Dialog>
                }
                <Header/>
                <div className="container-lg">
                    <div className="my-3">
                        <h4>Add Item</h4>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} name="addItemForm">
                            <div className="my-3">
                                <label className="" htmlFor="name">Product Name</label><br/>
                                <input className="w-100 form-control" required
                                       type="text" id="name" name="name"/>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="price">Price</label><br/>
                                <input className="w-100 form-control" required
                                       type="number" id="price" name="price"/>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="quantity">Add Quantity</label><br/>
                                <input className="w-100 form-control" type="number" name="quantity" required
                                       id="quantity"/>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="category">Choose Category</label><br/>
                                <select className="w-100 form-control" name="category" id="category" required
                                        onChange={e => setSelected_category(e.target.value)}>
                                    <option value="HOME_FURNITURE">Home furniture</option>
                                    <option value="COMMERCIAL_FURNITURE">Commercial furniture</option>
                                    <option value="FINISHING_MATERIALS">Finishing materials</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="category">Choose Sub-Category</label><br/>
                                <select className="w-100 form-control" name="sub_category" id="sub_category" required>
                                    {sub_category.map(cat => {
                                        if (cat.category === selected_category)
                                            return <option value={cat.value} key={cat.sub_category}>
                                                {cat.sub_category}</option>
                                    })}
                                </select>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="description">Description</label><br/>
                                <textarea className="w-100 form-control" name="description" id="description" required
                                          cols="30" rows="5"/>
                            </div>
                            <div className="my-3">
                                <h6 className="mt-5">Add Pictures</h6>
                                <div className="w-100 my-5">
                                    <div className="image-preview">
                                        <img src={frontPic} alt="" className="w-100"/>
                                    </div>
                                    <label className="pt-2" htmlFor="frontPic">Picture 1</label><br/>
                                    <input onChange={e => e.target.files[0] &&
                                        setFrontPic(URL.createObjectURL(e.target.files[0]))}
                                           className="w-100 form-control" type="file" name="frontPic" id="frontPic"
                                           required/>
                                </div>

                                <div className="w-100 my-5">
                                    <div className="image-preview">
                                        <img src={leftSidePic} alt="" className="w-100"/>
                                    </div>
                                    <label className="" htmlFor="leftSidePic">Picture 2</label><br/>
                                    <input onChange={e => e.target.files[0] &&
                                        setLeftSidePic(URL.createObjectURL(e.target.files[0]))}
                                           className="w-100 form-control" type="file" name="leftSidePic"
                                           id="leftSidePic"
                                           required/>
                                </div>

                                <div className="w-100 my-5">
                                    <div className="image-preview">
                                        <img src={rightSidePic} alt="" className="w-100"/>
                                    </div>
                                    <label className="" htmlFor="rightSidePic">Picture 3</label><br/>
                                    <input onChange={e => e.target.files[0] &&
                                        setRightSidePic(URL.createObjectURL(e.target.files[0]))}
                                           className="w-100 form-control" type="file" name="rightSidePic" required
                                           id="rightSidePic"/>
                                </div>

                                <div className="w-100 my-5">
                                    <div className="image-preview">
                                        <img src={backPic} alt="" className="w-100"/>
                                    </div>
                                    <label className="" htmlFor="backPic">Picture 4</label><br/>
                                    <input onChange={e => e.target.files[0] &&
                                        setBackPic(URL.createObjectURL(e.target.files[0]))} required
                                           className="w-100 form-control" type="file" name="backPic" id="backPic"/>
                                </div>

                            </div>
                            {addingSuccess &&
                            <div className="py-3">
                                <p className="text-success text-center">Successfully added</p>
                            </div>
                            }
                            {addingError &&
                            <div className="py-3">
                                <p className="text-danger text-center">{errorMessage}</p>
                            </div>
                            }
                            <div className="my-4">
                                <button type="submit" className="btn bg-red btn-danger">Add Item</button>
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
        isAdding: state.item.isAdding,
        addingError: state.item.addingError,
        addingSuccess: state.item.addingSuccess,
        errorMessage: state.item.errorMessage,
        isAuthenticated: state.auth.isAuthenticated,
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: credentials => dispatch(addItem(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);