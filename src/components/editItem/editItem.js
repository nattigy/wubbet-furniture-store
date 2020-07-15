import React, {Fragment, useEffect, useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {getItemDetail} from "../../store/actions/itemActions";
import {connect} from "react-redux";
import PreLoader from "../preLoader/preLoader";

const sub_category = [
    {category: "HOME_FURNITURE", sub_category: "Living room", value: "livingRoom"},
    {category: "HOME_FURNITURE", sub_category: "Bed room", value: "bedRoom"},
    {category: "HOME_FURNITURE", sub_category: "Dinning room/kitchen", value: "kitchen"},
    {category: "COMMERCIAL_FURNITURE", sub_category: "Office", value: "office"},
    {category: "FINISHING_MATERIALS", sub_category: "Decorations", value: "decorations"},
    {category: "FINISHING_MATERIALS", sub_category: "Finishing materials", value: "finishingMaterials"},
    {category: "Other", sub_category: "other", value: "other"},
];

const EditItem = props => {

    const {isGettingItemDetail, gettingItemDetailDone, gettingItemDetailError, itemDetail} = props;

    const [selected_category, setSelected_category] = useState(itemDetail && itemDetail.category);

    useEffect(() => {
        props.getItemDetail({id: props.match.params.id})
    }, []);

    return (
        <Fragment>
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
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Edit name</p>
                        <input className="form-control" type="text" value={itemDetail.name}/>
                    </div>
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Edit price</p>
                        <input className="form-control" type="number" value={itemDetail.price}/>
                    </div>
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Increase or Decrease Quantity</p>
                        <input className="form-control" type="number" value={itemDetail.quantity}/>
                    </div>
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Change Category</p>
                        <select className="w-100 form-control" name="category" id="category">
                            <option value="HOME_FURNITURE">Home furniture</option>
                            <option value="COMMERCIAL_FURNITURE">Commercial furniture</option>
                            <option value="FINISHING_MATERIALS">Finishing materials</option>
                            <option value="OTHER">Other</option>
                        </select>
                    </div>
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Change Sub-Category</p>
                        <select className="w-100 form-control" name="sub_category" id="sub_category" required>
                            {sub_category.map(cat => {
                                if (cat.category === itemDetail.category)
                                    return <option value={cat.value} key={cat.sub_category}>
                                        {cat.sub_category}</option>
                            })}
                        </select>
                    </div>
                    <div className="my-4">
                        <p className="font-16 font-weight-bold mb-0">Change Description</p>
                        <textarea className="w-100 form-control" name="" id="" cols="30" rows="10"
                                  value={itemDetail.description}/>
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
                        <button className="mr-2 btn btn-secondary">Cancel</button>
                    </div>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getItemDetail: credentials => dispatch(getItemDetail(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);