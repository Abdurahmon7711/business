import React from 'react';
 
const Signup = () => {
    return (
        <div>
            <div className="sign_up">
                <h5 className="sing_tite">Sign Up To Our Newsletter</h5>
                <p className="sing_data">Subscribe to our newsletter and get many <br/>
                interesting things every week </p>
                <div  >
                    <div className="form_div">
                    <input className="signup_input" type="text" placeholder="Type your email adress"></input>
                    <button className="signup_bnt" type="button" > Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

 
export default Signup;