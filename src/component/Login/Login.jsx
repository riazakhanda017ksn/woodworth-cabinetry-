import React from "react";
import "./Login.scss";
import ClassicCharcol from '../../img/2.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      {/* <div className="login-banner"></div> */}
      <div className="padding">
        <div className="log-clip-path-img">
       
        <div className="container">
        <div className="row ">
           <div className="col-lg-12">
            <div className="login-form">
              <h3>Wlink System</h3>
              <h2>Log in</h2>
              <form action="">
                <p>Email Address</p>
                <input type="email" placeholder="Email"/> <br />
                <p>Password</p>
                <input type="password" placeholder="Password"/> <br />
                <button>Log in</button> <br />
                <Link to={'/'}>
                Became a Dealer
                </Link>
              </form>
            </div>
           </div>
      

        </div>
        </div>
      </div>
    
      </div>
    </div>
  );
};

export default Login;
