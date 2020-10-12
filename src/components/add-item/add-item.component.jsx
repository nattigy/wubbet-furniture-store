import React, {Fragment, useState} from "react";
import {connect} from "react-redux";

import Dialog from "@material-ui/core/Dialog";

import PreLoader from "../pre-loader/pre-loader.component";

import {addItem} from "../../store/item/item.utils";

import "./addItem.style.sass"
import Categories from "../header/categories";

const AddItemComponent = props => {

    const [images, setImages] = useState("");
    const [sub_cat, setSub_cat] = useState([0]);

    const {isAdding, addingError, addingSuccess, errorMessage, user} = props;

    const handleSubmit = e => {
        e.preventDefault();
        const form = document.forms["addItemForm"];
        props.addItem({
            name: new FormData(form).get("name"),
            price: new FormData(form).get("price"),
            // category: new FormData(form).get("category"),
            quantity: new FormData(form).get("quantity"),
            size: new FormData(form).get("size"),
            sub_category: sub_cat,
            description: new FormData(form).get("description"),
            images: images,
            uid: user ? user.uid : "0",
        });
    };

    const onFileChange = e => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newFile = e.target.files[i];
            newFile["id"] = Math.random();
            setImages(prevState => [...prevState, newFile]);
        }
    };

    return (
        <Fragment>

            {
                isAdding &&
                <Dialog open={true}>
                    <div className="w-100 px-5 py-3 text-center overflow-hidden" color="red">
                        <PreLoader/>
                    </div>
                </Dialog>
            }

            <div className="container-lg">
                <div className="my-3">
                    <h4>Add Item</h4>
                </div>
                <div>
                    <form onSubmit={handleSubmit} name="addItemForm">
                        <div className="my-3">
                            <label className="" htmlFor="name">Product Name</label><br/>
                            <input className="w-100 form-control" required type="text" id="name" name="name"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="price">Price</label><br/>
                            <input className="w-100 form-control" required type="number" id="price" name="price"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="quantity">Add Quantity</label><br/>
                            <input className="w-100 form-control" type="number" name="quantity" required id="quantity"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="quantity">Add Size</label><br/>
                            <input className="w-100 form-control" type="text" name="size" required id="size"/>
                        </div>
                        {/*<div className="my-3">*/}
                        {/*    <label className="" htmlFor="category">Choose Category</label><br/>*/}
                        {/*    <select className="w-100 form-control" name="category" id="category" required*/}
                        {/*            onChange={e => setSelected_category(e.target.value)}*/}
                        {/*    >*/}
                        {/*        <option value="HOME_FURNITURE">Home furniture</option>*/}
                        {/*        <option value="COMMERCIAL_FURNITURE">Commercial furniture</option>*/}
                        {/*        <option value="FINISHING_AND_DECORATIONS">Finishing and Decorations</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        <div className="my-3">
                            <label className="" htmlFor="category">Choose Sub-Category</label><br/>
                            <select className="w-100 form-control"
                                    name="sub_category" id="sub_category"
                                    required
                                    multiple
                                // onChange={e => setSub_cat(prevState => [...prevState, e.target.value])}
                                    onChange={e => setSub_cat([...e.target.options].filter(({selected}) => selected).map(({value}) => value))}
                            >
                                {
                                    Categories.map(cat =>
                                        // cat.id === selected_category &&
                                        cat.subCategory.map(sub =>
                                            <option value={sub.value} key={sub.sub_category}>
                                                {sub.name}
                                            </option>
                                        )
                                    )
                                }
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="description">Description</label><br/>
                            <textarea className="w-100 form-control" name="description" id="description" required
                                      cols="30" rows="5"
                            />
                        </div>
                        <div className="my-3">
                            <h6 className="mt-5">Add Pictures</h6>
                            <div className="w-100 my-5">
                                {/*<div className="image-preview">*/}
                                {/*<img src={frontPic} alt="" className="w-100"/>*/}
                                {/*</div>*/}
                                <label className="pt-2" htmlFor="frontPic">Picture</label><br/>
                                <input className="w-100 form-control" type="file" name="image" id="image"
                                       required multiple onChange={onFileChange}
                                />
                            </div>
                        </div>

                        {
                            addingSuccess &&
                            <div className="py-3">
                                <p className="text-success text-center">Successfully added</p>
                            </div>
                        }
                        {
                            addingError &&
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
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        isAdding: state.item.isAdding,
        addingError: state.item.addingError,
        addingSuccess: state.item.addingSuccess,
        errorMessage: state.item.errorMessage,
        user: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: credentials => dispatch(addItem(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemComponent);