import React, {useEffect, useState} from 'react'
import logo from "../../assets/img/purelogo.png";
import {CopyRight} from "../footer/copyRight";
import {Link, Redirect} from "react-router-dom";
import {registerUser, registerUserWithPhone} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";
import fbConfig from "../../firebase/firebase";

const SignUp = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const {signUpError, isAuthenticated, errorMessage, isSigningUp} = props;

    let appVerifier;

    useEffect(() => {
        appVerifier = new fbConfig.auth.RecaptchaVerifier('recaptcha-container').render();
    }, []);

    const signUp = e => {
        e.preventDefault();
        setUpRecaptcha();
        // props.signUp({name, email, password});
        // props.signUpWithPhoneNumber({phoneNumber, appVerifier, password});
        var phoneNumber = "+251946625264";
        var appVerifier = window.recaptchaVerifier;
        fbConfig.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch(function (error) {
            // Error; SMS not sent
            // ...
        });
    };

    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new fbConfig.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                signUp();
            }
        });
    };

    if (isAuthenticated) {
        return <Redirect to="/"/>;
    } else {
        return (
            <div className="">
                <div className="container-sm max-width">
                    <div className="my-5 mx-auto" style={{width: "200px"}}>
                        <Link to="/">
                            <img src={logo} className="mx-auto  w-100" style={{height: "50px"}} alt=""/>
                        </Link>
                    </div>
                    <div className="my-3 sign-up-container position-relative">
                        {isSigningUp &&
                        <div className="position-absolute sign-in-progress">
                            <div className="preloading">
                                <PreLoader/>
                            </div>
                        </div>
                        }
                        <h1>Sign Up</h1>
                        <form onSubmit={signUp}>
                            <div className="my-3">
                                <label className="" htmlFor="name">Your Name</label><br/>
                                <input onChange={e => setName(e.target.value)} className="w-100 form-control"
                                       type="text" id="name"/>
                            </div>
                            {/*<div className="my-3">*/}
                            {/*    <label className="" htmlFor="email">Email</label><br/>*/}
                            {/*    <input onChange={e => setEmail(e.target.value)} className="w-100 form-control"*/}
                            {/*           type="email" id="email"/>*/}
                            {/*</div>*/}
                            <div className="my-3">
                                <label className="" htmlFor="email">Phone Number</label><br/>
                                <input onChange={e => setPhoneNumber(e.target.value)} className="w-100 form-control"
                                       type="number" id="phonenumber"/>
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

                        <div>
                            <form onSubmit={() => {

                            }}>
                                <label htmlFor="verification">Enter Verification Code</label>
                                <input id="verification" type="number"/>
                                <button>Submit</button>
                            </form>
                        </div>

                        <p>
                            By creating an account, you agree to Wubbet's
                            <Link className="text-muted" to="/terms_and_conditions"> Conditions of Use</Link> and
                            <Link className="text-muted" to="/privacy_policy"> Privacy Notice</Link>.
                        </p>

                        <p className="text-center">Already have an account? <Link
                            className="btn mt-2 btn-secondary d-block w-100" to="/login">Sign-In</Link></p>
                    </div>
                </div>
                <CopyRight/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        signUpError: state.auth.signUpError,
        isSigningUp: state.auth.isSigningUp,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: credentials => dispatch(registerUser(credentials)),
        signUpWithPhoneNumber: credentials => dispatch(registerUserWithPhone(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);