import React, {useEffect} from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import {connect} from "react-redux";
import {fetchOrders} from "../../store/order/order.utils";
import PreLoader from "../../components/pre-loader/pre-loader.component";

import "./account.style.sass"

const Item = ({item}) => (
    <div className="col-6 col-md-4 col-lg-3">
        <div className="w-100 overflow-hidden ordered-items-img-cont">
            <img className="ordered-items-img" src={item.picture0} alt=""/>
        </div>
        <div className="my-3 w-100 text-truncate">
            <p className="text-dark font-weight-bold">{item.name}</p>
            <p className="w-100 text-truncate text-muted small">
                {item.description}
            </p>
        </div>
    </div>
);

const Orders = props => {

    const {isFetching, fetchingSuccess, order, user} = props;

    useEffect(() => {
        props.fetchOrders({user_id: user.uid})
    }, []);

    return (
        <div>
            <Header/>
            <div className="container-sm px-3 px-lg-5">
                <div className="px-lg-5 py-5">
                    <div>
                        <h1 className="section-title">Your Orders</h1>
                    </div>
                    <div className="row py-5">
                        {
                            isFetching &&
                            <div className="preloading-home overflow-hidden-y pt-5">
                                <PreLoader/>
                            </div>
                        }
                        {
                            fetchingSuccess &&
                            order.map(e => e.ordered_items.map(i => <Item key={i.id} item={i}/>))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetching: state.order.isFetching,
        fetchingSuccess: state.order.fetchingSuccess,
        fetchingError: state.order.fetchingError,
        order: state.order.order,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: credentials => dispatch(fetchOrders(credentials))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);