import React, {Fragment} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";
import DescriptionAndDetails from "./descriptionAndDetails";
import ProductDescription from "./productDescription";
import ProductImages from "./productImages";

const ProductDetail = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container-lg py-3">
                <h4>Product Detail</h4>
            </div>
            <div className="">
                <div className="container-lg">
                    <div className="row">
                        <ProductImages/>
                        <ProductDescription/>
                        <DescriptionAndDetails/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default ProductDetail;