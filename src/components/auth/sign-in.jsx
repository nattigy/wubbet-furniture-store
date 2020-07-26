import React, {useEffect, useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import PreLoader from "../pre-loader/pre-loader.component";
import {closeAuth, openAuth} from "../../store/ui/hide-header-and-footer";

import {loginUser} from "../../store/auth/auth.utils";

const SignIn = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginError, errorMessage, isLoggingIn, isAnonymous} = props;

    useEffect(() => {
        props.openAuth();
        return () => props.closeAuth()
    });

    const signIn = e => {
        e.preventDefault();
        props.signIn({email, password})
    };

    if (isLoggingIn && !isAnonymous) {
        return <Redirect to="/"/>;
    } else {
        return (
            <div className="">
                <div className="container-sm max-width mb-5 pb-5">
                    <div className="my-3 sign-up-container position-relative">
                        {isLoggingIn &&
                        <div className="position-absolute sign-in-progress">
                            <div className="preloading">
                                <PreLoader/>
                            </div>
                        </div>
                        }
                        <h3 className="title">Sign In</h3>
                        <form onSubmit={signIn}>
                            <div className="my-3">
                                <label className="" htmlFor="email">Email</label><br/>
                                <input onChange={e => setEmail(e.target.value)} className="w-100 form-control"
                                       type="email" id="email"/>
                            </div>
                            <div className="my-3">
                                <label className="" htmlFor="password">Password</label><br/>
                                <input onChange={e => setPassword(e.target.value)} className="w-100 form-control"
                                       type="password" id="password"/>
                            </div>
                            {loginError &&
                            <p className="text-danger text-center">{errorMessage.message}</p>
                            }
                            <div className="my-3">
                                <button type="submit" className="w-100 btn bg-red btn-danger">Sign In</button>
                            </div>
                        </form>

                        <p className="font-14">
                            By continuing an account, you agree to Wubbet's
                            <Link className="text-muted" to="/terms_and_conditions"> Conditions of Use</Link> and
                            <Link className="text-muted" to="/privacy_policy"> Privacy Notice</Link>.
                        </p>

                    </div>

                    <div className="text-center font-14" style={{maxWidth: "400px", margin: "20px auto"}}>
                        <p>New to Wubbet?</p>
                        <Link to="/register" className="w-100 btn btn-secondary">Create Account</Link>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        loginError: state.auth.loginError,
        isLoggingIn: state.auth.isLoggingIn,
        isAnonymous: state.auth.isAnonymous,
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(loginUser(credentials)),
        openAuth: () => dispatch(openAuth()),
        closeAuth: () => dispatch(closeAuth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);