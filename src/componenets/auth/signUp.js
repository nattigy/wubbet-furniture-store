import React from 'react'
import logo from "../../assets/img/purelogo.png";
import {CopyRight} from "../footer/copyRight";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="">
            <div className="container-sm max-width">
                <div className="my-5 mx-auto" style={{width: "200px"}}>
                    <Link to="/">
                        <img src={logo} className="mx-auto  w-100" style={{height: "50px"}} alt=""/>
                    </Link>
                </div>
                <div className="my-3 sign-up-container">
                    <h1>Sign Up</h1>
                    <form>
                        <div className="my-3">
                            <label className="" htmlFor="name">Your Name</label><br/>
                            <input className="w-100 form-control" type="text" id="name"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="email">Email</label><br/>
                            <input className="w-100 form-control" type="text" id="email"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="password">Password</label><br/>
                            <input className="w-100 form-control" type="text" id="password"/>
                        </div>
                        <div className="my-3">
                            <label className="" htmlFor="re-password">Re-enter Password</label><br/>
                            <input className="w-100 form-control" type="text" id="re-password"/>
                        </div>
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
};

export default SignUp;