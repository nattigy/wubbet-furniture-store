import React, {Fragment, useState} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import {PreLoader} from "../preLoader/preLoader";
import Dialog from "@material-ui/core/Dialog";

const AddItem = () => {

    const [picture1, setPicture1] = useState("");
    const [picture2, setPicture2] = useState("");
    const [picture3, setPicture3] = useState("");
    const [picture4, setPicture4] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <Fragment>
            {loading &&
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
                    <form>
                        <div className="my-3">
                            <label className="" htmlFor="name">Product Name</label><br/>
                            <input className="w-100 form-control"
                                   type="text" id="name"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="price">Price</label><br/>
                            <input className="w-100 form-control"
                                   type="number" id="price"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="size">Add Size
                                <span className="small"> (you can choose multiple items)</span></label><br/>
                            <select className="w-100 form-control" name="" id="size" multiple>
                                <option value="" selected disabled>size</option>
                                <option value="">xsm</option>
                                <option value="">sm</option>
                                <option value="">md</option>
                                <option value="">lg</option>
                                <option value="">xl</option>
                                <option value="">xxl</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="color">Add Color
                                <span className="small"> (you can choose multiple items)</span></label><br/>
                            <select className="w-100 form-control" name="" id="color" multiple>
                                <option value="">Red</option>
                                <option value="">Blue</option>
                                <option value="">Yellow</option>
                                <option value="">Green</option>
                                <option value="">Blue Black</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="quantity">Add Quantity</label><br/>
                            <input className="w-100 form-control" type="number" id="quantity"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="category">Choose Category</label><br/>
                            <select className="w-100 form-control" name="" id="category">
                                <option value="" disabled selected>Category</option>
                                <option value="">Home furniture</option>
                                <option value="">Commercial furniture</option>
                                <option value="">Finishing materials</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="description">Description</label><br/>
                            <textarea className="w-100 form-control" name="" id="description" cols="30" rows="5"/>
                        </div>
                        <div className="my-3">
                            <p>Add Pictures</p>
                            <div className="w-50 mt-3">
                                <img src={picture1} alt="" className="w-100"/>
                                <label className="pt-2" htmlFor="picture1">Picture 1</label><br/>
                                <input onChange={e => e.target.files[0] &&
                                    setPicture1(URL.createObjectURL(e.target.files[0]))}
                                       className="w-100 form-control" type="file" id="picture1"/>
                            </div>

                            <div className="w-50 mt-3">
                                <img src={picture2} alt="" className="w-100"/>
                                <label className="" htmlFor="picture2">Picture 2</label><br/>
                                <input onChange={e => e.target.files[0] &&
                                    setPicture2(URL.createObjectURL(e.target.files[0]))}
                                       className="w-100 form-control" type="file" id="picture2"/>
                            </div>

                            <div className="w-50 mt-3">
                                <img src={picture3} alt="" className="w-100"/>
                                <label className="" htmlFor="picture3">Picture 3</label><br/>
                                <input onChange={e => e.target.files[0] &&
                                    setPicture3(URL.createObjectURL(e.target.files[0]))}
                                       className="w-100 form-control" type="file" id="picture3"/>
                            </div>

                            <div className="w-50 mt-3">
                                <img src={picture4} alt="" className="w-100"/>
                                <label className="" htmlFor="picture4">Picture 4</label><br/>
                                <input onChange={e => e.target.files[0] &&
                                    setPicture4(URL.createObjectURL(e.target.files[0]))}
                                       className="w-100 form-control" type="file" id="picture4"/>
                            </div>

                        </div>
                        <div className="my-4">
                            <button type="button" onClick={() => setLoading(true)} className="btn bg-red btn-danger">Add
                                Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
};

export default AddItem;