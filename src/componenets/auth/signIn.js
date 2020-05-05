import React from 'react'
import logo from "../../assets/img/purelogo.png";
import {CopyRight} from "../footer/copyRight";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="">
            <div className="container-sm max-width">
                <div className="my-5 mx-auto" style={{width: "200px"}}>
                    <Link to="/">
                        <img src={logo} className="mx-auto w-100" style={{height: "50px"}} alt=""/>
                    </Link>
                </div>
                <div className="my-3 sign-up-container">
                    <h1>Sign In</h1>
                    <form>
                        <div className="my-3">
                            <label className="" htmlFor="email">Email</label><br/>
                            <input className="w-100 form-control" type="email"
                                   id="email"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="password">Password</label><br/>
                            <input className="w-100 form-control" type="password"
                                   id="password"/>
                        </div>
                        <div className="my-3">
                            <button type="submit" className="w-100 btn bg-red btn-danger">Sign In</button>
                        </div>
                    </form>

                    <p>
                        By continuing an account, you agree to Amazon's
                        <a className="text-muted" href="/"> Conditions of Use</a> and
                        <a className="text-muted" href="/"> Privacy Notice</a>.
                    </p>

                </div>

                <div className="text-center" style={{maxWidth: "400px", margin: "20px auto"}}>
                    <p>New to Wubbet?</p>
                    <Link to="/register" className="w-100 btn btn-secondary">Create Account</Link>
                </div>
            </div>
            <CopyRight/>
        </div>
    );
};

export default SignIn;