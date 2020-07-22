import React, {Fragment, useEffect, useState} from "react";
import Header from "../header/header";
import PreLoader from "../preLoader/preLoader";
import Dialog from "@material-ui/core/Dialog/Dialog";
import {editItem, getItemDetail} from "../../store/item/item.utils";
import {connect} from "react-redux";
import Footer from "../footer/footer";
import {Link} from "react-router-dom";

const sub_category = [
    {category: "HOME_FURNITURE", sub_category: "Living room", value: "livingRoom"},
    {category: "HOME_FURNITURE", sub_category: "Bed room", value: "bedRoom"},
    {category: "HOME_FURNITURE", sub_category: "Dinning room/kitchen", value: "kitchen"},
    {category: "COMMERCIAL_FURNITURE", sub_category: "Office", value: "office"},
    {category: "FINISHING_MATERIALS", sub_category: "Decorations", value: "decorations"},
    {category: "FINISHING_MATERIALS", sub_category: "Finishing materials", value: "finishingMaterials"},
    {category: "OTHER", sub_category: "other", value: "other"},
];

const EditItem = props => {

    const {
        isGettingItemDetail, gettingItemDetailDone, gettingItemDetailError,
        itemDetail, isEditing, editingDone, editingError
    } = props;

    const [selected_category, setSelected_category] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        !gettingItemDetailDone && props.getItemDetail({id: props.match.params.id});
        if (gettingItemDetailDone) {
            setName(itemDetail.name);
            setPrice(itemDetail.price);
            setQuantity(itemDetail.quantity ? itemDetail.quantity : 0);
            setCategory(itemDetail.category);
            setSubCategory(itemDetail.sub_category);
            setDescription(itemDetail.description);
            setSelected_category(itemDetail.category)
        }
    }, [gettingItemDetailDone]);

    const handleSubmit = e => {
        e.preventDefault();
        props.editItem({
            name, price, quantity, category, subCategory, description, itemId: itemDetail.id
        })
    };

    if (editingDone) {
        window.location.href = `/account/myitem/${props.match.params.id}`
    }
    return (
        <Fragment>
            {isEditing &&
            <Dialog open={true}>
                <div className="w-100 px-5 py-3 text-center overflow-hidden" color="red">
                    <PreLoader/>
                </div>
            </Dialog>}
            <Header/>
            <div className="container-lg">
                <div className="my-5">
                    <h3>Edit Item</h3>
                </div>
                {isGettingItemDetail && <div className="preloading-store">
                    <div className="text-center">
                        <PreLoader/>
                    </div>
                </div>}
                {gettingItemDetailDone &&
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Edit name</p>
                            <input className="form-control" type="text"
                                   defaultValue={itemDetail.name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Edit price</p>
                            <input className="form-control" type="number"
                                   defaultValue={itemDetail.price} onChange={e => setPrice(e.target.value)}/>
                        </div>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Increase or Decrease Quantity</p>
                            <input className="form-control" type="number"
                                   defaultValue={itemDetail.quantity} onChange={e => setQuantity(e.target.value)}/>
                        </div>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Change Category</p>
                            <select className="w-100 form-control" name="category" id="category"
                                    defaultValue={itemDetail.category}
                                    onChange={e => {
                                        setCategory(e.target.value);
                                        let sub_cat = "";
                                        for (let i = 0; i < sub_category.length; i++) {
                                            if (sub_category[i].category === e.target.value) {
                                                sub_cat = sub_category[i].value;
                                                setSubCategory(sub_cat);
                                                return
                                            }
                                        }
                                    }}>
                                <option value="HOME_FURNITURE">Home furniture</option>
                                <option value="COMMERCIAL_FURNITURE">Commercial furniture</option>
                                <option value="FINISHING_MATERIALS">Finishing materials</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Change Sub-Category</p>
                            <select className="w-100 form-control" name="sub_category" id="sub_category"
                                    defaultValue={itemDetail.sub_category}
                                    onChange={e => setSubCategory(e.target.value)}>
                                {sub_category.map(cat => {
                                    if (cat.category === category)
                                        return <option value={cat.value} key={cat.sub_category}>
                                            {cat.sub_category}</option>
                                })}
                            </select>
                        </div>
                        <div className="my-4">
                            <p className="font-16 font-weight-bold mb-0">Change Description</p>
                            <textarea className="w-100 form-control" name="" id="" cols="30" rows="10"
                                      defaultValue={itemDetail.description}
                                      onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className="my-5 row px-3">
                            <div className="my-2 border border-light-custom col-sm-3">
                                <img className="w-100" src={itemDetail.picture0} alt=""/></div>
                            <div className="my-2 border border-light-custom col-sm-3">
                                <img className="w-100" src={itemDetail.picture1} alt=""/></div>
                            <div className="my-2 border border-light-custom col-sm-3">
                                <img className="w-100" src={itemDetail.picture2} alt=""/></div>
                            <div className="my-2 border border-light-custom col-sm-3">
                                <img className="w-100" src={itemDetail.picture3} alt=""/></div>
                        </div>
                        <div className="my-5 btn-group">
                            <button className="mr-2 btn btn-success">Edit</button>
                            <button className="mr-2 btn bg-red btn-danger">Delete</button>
                            <Link to="/account/myitems" className="mr-2 btn btn-secondary">Cancel</Link>
                        </div>
                    </form>
                </div>
                }
                {gettingItemDetailError && <div className="w-100 text-center text-danger py-3 font-14">
                    Unknown error, Please refresh the page!
                </div>}
            </div>
            <Footer/>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
        user: state.auth.user,
        isGettingItemDetail: state.item.isGettingItemDetail,
        gettingItemDetailDone: state.item.gettingItemDetailDone,
        gettingItemDetailError: state.item.gettingItemDetailError,
        itemDetail: state.item.itemDetail,
        isEditing: state.item.isEditing,
        editingDone: state.item.editingDone,
        editingError: state.item.editingError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItemDetail: credentials => dispatch(getItemDetail(credentials)),
        editItem: credentials => dispatch(editItem(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);