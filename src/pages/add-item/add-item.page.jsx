import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import AddItem from '../../components/add-item/add-item.component';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import PreLoader from "../../components/pre-loader/pre-loader.component";

const AddItemPage = props => {

    const {isLoggedIn, isAnonymous} = props;

    if (isLoggedIn === undefined) {
        return (
            <div className="preloading-home overflow-hidden-y">
                <PreLoader/>
            </div>
        );
    } else if (!isLoggedIn || isAnonymous) {
        return <Redirect to="/login"/>
    } else {
    return (
        <Fragment>
            <Header/>
            <AddItem/>
            <Footer/>
        </Fragment>
    );
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
    };
};

export default connect(mapStateToProps)(AddItemPage);