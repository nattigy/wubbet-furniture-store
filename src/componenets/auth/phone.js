import React, {Component} from "react";
import fbConfig from "../../firebase/firebase";

export class Phone extends Component{
    setRecaptcha = () => {
        window.recaptchaVerifier = new fbConfig.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': function(response) {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                this.onSignInSubmit();
            }
        });
    };

    onSignInSubmit = e => {
        e.preventDefault();
        this.setRecaptcha();
        var phoneNumber = "+251946625264";
        var appVerifier = window.recaptchaVerifier;
        fbConfig.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;

                var code = prompt("enter");
                confirmationResult.confirm(code).then(function (result) {
                    // User signed in successfully.
                    var user = result.user;
                    // ...
                    console.log("signed in")
                }).catch(function (error) {
                    // User couldn't sign in (bad verification code?)
                    // ...
                });
            }).catch(function (error) {
            // Error; SMS not sent
            // ...
        });
    };

    render() {
        return(
            <div>
                <form onSubmit={this.onSignInSubmit}>
                    <div id="recaptcha-container"/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}