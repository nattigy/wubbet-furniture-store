import React, {useState} from 'react'
import logo from "../../assets/img/purelogo.png";
import {CopyRight} from "../footer/copyRight";
import {Link, Redirect} from "react-router-dom";
import {registerUser} from "../../store/actions/authActions";
import {connect} from "react-redux";
import {PreLoader} from "../preLoader/preLoader";

const SignUp = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const {signUpError, isAuthenticated, errorMessage, isSigningUp} = props;

    const signUp = e => {
        e.preventDefault();
        props.signUp({name, email, password})
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
                            <div className="my-3">
                                <button type="submit" className="w-100 btn bg-red btn-danger">Sign Up</button>
                            </div>
                        </form>

                        <p>
                            By creating an account, you agree to Wubbet's
                            <a className="text-muted" href="/"> Conditions of Use</a> and
                            <a className="text-muted" href="/"> Privacy Notice</a>.
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
        signUp: credentials => dispatch(registerUser(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);