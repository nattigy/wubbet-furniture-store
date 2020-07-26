import React, {useEffect, useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import PreLoader from "../pre-loader/pre-loader.component";
import {closeAuth, openAuth} from "../../store/ui/hide-header-and-footer";

import {registerUser} from "../../store/auth/auth.utils";

const SignUp = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const {signUpError, isLoggedIn, errorMessage, isSigningUp, isAnonymous} = props;

    useEffect(() => {
        props.openAuth();
        return () => props.closeAuth()
    });

    const signUp = e => {
        e.preventDefault();
        props.signUp({name, email, password});
    };

    if (isLoggedIn && !isAnonymous) {
        return <Redirect to="/"/>;
    } else {
        return (
            <div className="">
                <div className="container-sm max-width mb-5 pb-5">
                    <div className="my-3 sign-up-container position-relative">
                        {isSigningUp &&
                        <div className="position-absolute sign-in-progress">
                            <div className="preloading">
                                <PreLoader/>
                            </div>
                        </div>
                        }
                        <h3 className="title">Sign Up</h3>
                        <form onSubmit={signUp}>
                            <div className="my-3">
                                <label className="" htmlFor="name">Your Name</label><br/>
                                <input onChange={e => setName(e.target.value)} className="w-100 form-control"
                                       type="text" id="name"/>
                            </div>
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
                            <div className="my-3">
                                <label className="" htmlFor="re-password">Re-enter Password</label><br/>
                                <input onChange={e => setPasswordMatch(e.target.value === password)}
                                       className="w-100 form-control" type="password" id="re-password"/>
                            </div>
                            {signUpError &&
                            <p className="text-danger text-center">{errorMessage}</p>
                            }
                            {!passwordMatch &&
                            <p className="text-danger text-center">Password doesn't match</p>
                            }
                            <div id="recaptcha-container"/>
                            <div className="my-3">
                                <button type="submit" className="w-100 btn bg-red btn-danger">Sign Up</button>
                            </div>
                        </form>

                        <p className="font-14">
                            By creating an account, you agree to Wubbet's
                            <Link className="text-muted" to="/terms_and_conditions"> Conditions of Use</Link> and
                            <Link className="text-muted" to="/privacy_policy"> Privacy Notice</Link>.
                        </p>

                        <p className="text-center font-14">Already have an account? <Link
                            className="btn mt-2 btn-secondary d-block w-100" to="/login">Sign-In</Link></p>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isSigningUp: state.auth.isSigningUp,
        isAnonymous: state.auth.isAnonymous,
        signUpError: state.auth.signUpError,
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: credentials => dispatch(registerUser(credentials)),
        openAuth: () => dispatch(openAuth()),
        closeAuth: () => dispatch(closeAuth()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);