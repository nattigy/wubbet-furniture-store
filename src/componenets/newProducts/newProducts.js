import React from "react";
import SingleProduct from "../singleProductView/singleProduct";

export const NewProducts = () => {
    return (
        <div className="section">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title d-inline-block">New Products</h3>
                            <div className="section-nav d-inline-block float-right">
                                <ul className="nav nav-tabs d-inline-block border-bottom-0 section-tab-nav"
                                    role="tablist">
                                    <li className="d-inline-block mr-3 ">
                                        <a className="nav-link-custom active" data-toggle="tab" href="#tab1"
                                           aria-controls="tab1" aria-selected="false">Laptops</a></li>
                                    <li className="d-inline-block mr-3">
                                        <a className="" data-toggle="tab" href="#tab2"
                                           aria-controls="tab2" aria-selected="false">Smartphones</a></li>
                                    <li className="d-inline-block mr-3">
                                        <a className="" data-toggle="tab" href="#tab3"
                                           aria-controls="tab3" aria-selected="false">Cameras</a></li>
                                    <li className="d-inline-block mr-3">
                                        <a className="" data-toggle="tab" href="#tab4"
                                           aria-controls="tab4" aria-selected="false">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="row">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab1" role="tabpanel"
                                     aria-labelledby="tab1-tab">
                                    <div className="products-slick horizontal-scroll">
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab2" role="tabpanel"
                                     aria-labelledby="tab2-tab">
                                    <div className="products-slick horizontal-scroll">
                                        <SingleProduct/>
                                        <SingleProduct/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab3" role="tabpanel"
                                     aria-labelledby="tab3-tab">
                                    <div className="products-slick horizontal-scroll">
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab4" role="tabpanel"
                                     aria-labelledby="tab4-tab">
                                    <div className="products-slick horizontal-scroll">
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                        <SingleProduct/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};