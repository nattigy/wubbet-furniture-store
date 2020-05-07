import React from "react";

const Filter = () => {
  return(
      <div id="aside" className="col-lg-3">
          <div className="aside">
              <h3 className="aside-title">Categories</h3>
              <div className="checkbox-filter pl-3">

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-1"/>
                      <label htmlFor="category-1">
                          <span></span>
                          Laptops
                          <small>(120)</small>
                      </label>
                  </div>

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-2"/>
                      <label htmlFor="category-2">
                          <span></span>
                          Smartphones
                          <small>(740)</small>
                      </label>
                  </div>

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-3"/>
                      <label htmlFor="category-3">
                          <span></span>
                          Cameras
                          <small>(1450)</small>
                      </label>
                  </div>

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-4"/>
                      <label htmlFor="category-4">
                          <span></span>
                          Accessories
                          <small>(578)</small>
                      </label>
                  </div>

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-5"/>
                      <label htmlFor="category-5">
                          <span></span>
                          Laptops
                          <small>(120)</small>
                      </label>
                  </div>

                  <div className="input-checkbox">
                      <input type="checkbox" id="category-6"/>
                      <label htmlFor="category-6">
                          <span></span>
                          Smartphones
                          <small>(740)</small>
                      </label>
                  </div>
              </div>
          </div>

          {/*<div className="aside">*/}
          {/*    <h3 className="aside-title">Price</h3>*/}
          {/*    <div className="price-filter">*/}
          {/*        <div id="price-slider">*/}
          {/*            <div className="noUi-base">*/}
          {/*                <div className="noUi-origin" style={{left: "0%"}}>*/}
          {/*                    <div className="noUi-handle noUi-handle-lower" data-handle="0"*/}
          {/*                         tabIndex="0" role="slider" aria-orientation="horizontal"*/}
          {/*                         aria-valuemin="0.0" aria-valuemax="49.4" aria-valuenow="0.0"*/}
          {/*                         aria-valuetext="1.00" style={{zIndex: "5"}}></div>*/}
          {/*                </div>*/}
          {/*                <div className="noUi-connect" style={{left: "0%", right: "50.6012%"}}></div>*/}
          {/*                <div className="noUi-origin" style={{left: "49.3988%"}}>*/}
          {/*                    <div className="noUi-handle noUi-handle-upper" data-handle="1"*/}
          {/*                         tabIndex="0" role="slider" aria-orientation="horizontal"*/}
          {/*                         aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="49.4"*/}
          {/*                         aria-valuetext="494.00" style={{zIndex: 6}}></div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*        <div className="input-number price-min position-relative">*/}
          {/*            <input id="price-min" type="number"/>*/}
          {/*            <span className="qty-up">+</span>*/}
          {/*            <span className="qty-down">-</span>*/}
          {/*        </div>*/}
          {/*        <span>-</span>*/}
          {/*        <div className="input-number price-max">*/}
          {/*            <input id="price-max" type="number"/>*/}
          {/*            <span className="qty-up">+</span>*/}
          {/*            <span className="qty-down">-</span>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <div className="aside">
              <h3 className="aside-title">Brand</h3>
              <div className="checkbox-filter pl-3">
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-1"/>
                      <label htmlFor="brand-1">
                          <span></span>
                          SAMSUNG
                          <small>(578)</small>
                      </label>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-2"/>
                      <label htmlFor="brand-2">
                          <span></span>
                          LG
                          <small>(125)</small>
                      </label>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-3"/>
                      <label htmlFor="brand-3">
                          <span></span>
                          SONY
                          <small>(755)</small>
                      </label>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-4"/>
                      <label htmlFor="brand-4">
                          <span></span>
                          SAMSUNG
                          <small>(578)</small>
                      </label>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-5"/>
                      <label htmlFor="brand-5">
                          <span></span>
                          LG
                          <small>(125)</small>
                      </label>
                  </div>
                  <div className="input-checkbox">
                      <input type="checkbox" id="brand-6"/>
                      <label htmlFor="brand-6">
                          <span></span>
                          SONY
                          <small>(755)</small>
                      </label>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Filter;