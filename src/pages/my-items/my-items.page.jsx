import React, {useEffect} from "react";
import {connect} from "react-redux";

import SingleItem from "../../components/my-items/my-item.component";
import PathIndicator from "../../components/path-indicator/path-indicator.component";
import PreLoader from "../../components/pre-loader/pre-loader.component";

import {fetchMyItems} from "../../store/item/item.utils";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const MyItems = props => {

    const {isFetchingMyItems, myItems, fetchingMyItemsError, fetchingMyItemsDone, user} = props;

    useEffect(() => {
        props.fetchMyItems({uid: user.uid})
    }, []);

    return (
        <div>
            <Header/>
            <PathIndicator path={[
                {currentPath: false, pathName: "HOME", pathLink: "/"},
                {currentPath: false, pathName: "ACCOUNT", pathLink: "/"},
                {currentPath: true, pathName: "MY ITEMS", pathLink: props.match.path},
            ]}/>
            <div className="container-lg">
                <div className="row text-center">
                    {
                        isFetchingMyItems ? (
                            <div className="preloading-cart overflow-hidden-y">
                                <PreLoader/>
                            </div>
                        ) : (
                            myItems.length === 0 &&
                            <div className="text-center py-5 w-100">
                                <h5 className="font-14">You haven't uploaded any items yet!</h5>
                            </div>
                        )
                    }
                    {
                        fetchingMyItemsDone && myItems.map(item => <SingleItem key={item.id} item={item}/>)
                    }
                    {
                        fetchingMyItemsError &&
                        <div className="text-center py-5">
                            <h5 className="font-14">Error happened</h5>
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        myItems: state.item.myItems,
        user: state.auth.user,
        isFetchingMyItems: state.item.isFetchingMyItems,
        fetchingMyItemsDone: state.item.fetchingMyItemsDone,
        fetchingMyItemsError: state.item.fetchingMyItemsError,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMyItems: credentials => dispatch(fetchMyItems(credentials)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyItems);