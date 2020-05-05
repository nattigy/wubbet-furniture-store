import React, {Fragment} from "react";
import Header from "../header/header";
import {Footer} from "../footer/footer";

const WishList = () => {
  return(
      <Fragment>
          <Header/>
          <div>
              <h1>Wish list</h1>
          </div>
          <Footer/>
      </Fragment>
  );
};

export default WishList;