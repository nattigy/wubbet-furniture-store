import React, {Fragment, useRef, useState} from "react";
import {connect} from "react-redux";

import Dialog from "@material-ui/core/Dialog";

import PreLoader from "../pre-loader/pre-loader.component";

import {addItem} from "../../store/item/item.utils";

import "./addItem.style.sass"
import Categories from "../header/categories";

const permanentEmail = "wubbet@wubbet.com";
const permanentPassword = "wubbet@12";

const AddItemComponent = props => {

    const [images, setImages] = useState("");
    const [sub_cat, setSub_cat] = useState([0]);
    const [open, setOpen] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState(false);

    const {isAdding, addingError, addingSuccess, errorMessage, user} = props;

    const handleSubmit = e => {
        e.preventDefault();
        const form = document.forms["addItemForm"];
        props.addItem({
            name: new FormData(form).get("name"),
            price: new FormData(form).get("price"),
            quantity: new FormData(form).get("quantity"),
            size: new FormData(form).get("size"),
            sub_category: sub_cat,
            description: new FormData(form).get("description"),
            ownerName: new FormData(form).get("ownerName"),
            owners_phone_number: new FormData(form).get("owners_phone_number"),
            shop_address: new FormData(form).get("shop_address"),
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
            <Dialog open={true}>
                <div className="p-3">
                    <div className="py-2">
                        <label htmlFor="email">Email</label><br/>
                        <input className="form-control" type="email" id="email"
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="py-2">
                        <label htmlFor="password">Password</label><br/>
                        <input className="form-control" type="password" id="password"
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                    {
                        passwordError &&
                        <p className="text-danger text-center pt-2">
                            Your are not an Authorized user!
                        </p>
                    }
                    <div className="py-2 text-right w-100">
                        <button className="btn btn-outline-secondary mx-2" type="button"
                                onClick={() => {
                                    window.location.href = '/'
                                }}
                        >Cancel
                        </button>
                        <button className="btn btn-secondary" type="submit"
                                onClick={() => {
                                    if (email === permanentEmail && password === permanentPassword) {
                                        setOpen(false);
                                    } else {
                                        setPasswordError(true)
                                    }
                                }}
                        >Submit
                        </button>
                    </div>
                </div>
            </Dialog>
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
                            <input className="form-control" required type="text" id="name" name="name"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="price">Price</label><br/>
                            <input className="form-control" required type="number" id="price" name="price"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="quantity">Add Quantity</label><br/>
                            <input className="form-control" type="number" name="quantity" required id="quantity"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="quantity">Add Size</label><br/>
                            <input className="form-control" type="text" name="size" required id="size"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="category">Choose Sub-Category</label><br/>
                            <select className="form-control"
                                    name="sub_category" id="sub_category"
                                    required
                                    multiple
                                    onChange={e => setSub_cat([...e.target.options].filter(({selected}) => selected).map(({value}) => value))}
                            >
                                {
                                    Categories.map(cat =>
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
                            <textarea className="form-control" name="description" id="description" required
                                      cols="30" rows="5"
                            />
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="ownerName">Owner Name</label><br/>
                            <input type="text" className="form-control" required name="ownerName" id="ownerName"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="owners_phone_number">Owners Phone Number</label><br/>
                            <input type="number" className="form-control" required name="owners_phone_number" id="owners_phone_number"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="shop_address">Shop Address</label><br/>
                            <input type="text" className="form-control" required name="shop_address" id="shop_address"/>
                        </div>
                        <div className="my-3">
                            <h6 className="mt-5">Add Pictures</h6>
                            <div className="w-100 my-5">
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