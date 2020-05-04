import React from "react";

export const Subscribe = () => {
  return(
      <div id="newsletter" className="subscribe-section py-4 my-0">
          <div className="container-lg">
              <div className="row">
                  <div className="col-md-12">
                      <div className="newsletter text-center">
                          <p className="text-center">Sign Up for the <strong className="font-weight-bolder">NEWSLETTER</strong></p>
                          <form>
                              <input className="input" type="email" placeholder="Enter Your Email"/>
                              <button className="newsletter-btn">
                                  <i className="fa fa-envelope"/> Subscribe
                              </button>
                          </form>
                          <ul className="newsletter-follow navbar-nav">
                              <li>
                                  <a target="_blank" href="/"><i className="fa fa-facebook"/></a>
                              </li>
                              <li>
                                  <a target="_blank" href="/"><i className="fa fa-twitter"/></a>
                              </li>
                              <li>
                                  <a target="_blank" href="/"><i className="fa fa-instagram"/></a>
                              </li>
                              <li>
                                  <a target="_blank" href="/"><i className="fa fa-pinterest"/></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};