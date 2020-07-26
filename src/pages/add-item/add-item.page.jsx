import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import AddItem from '../../components/add-item/add-item.component';

const AddItemPage = props => {

    const {isLoggedIn, isAnonymous} = props;

    if (!isLoggedIn || isAnonymous) {
        return <Redirect to="/login"/>
    } else {
        return <AddItem/>;
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isAnonymous: state.auth.isAnonymous,
    };
};

export default connect(mapStateToProps)(AddItemPage);