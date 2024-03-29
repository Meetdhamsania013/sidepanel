import React, { Component } from "react";

// Img Constants list
import { MAIN_LOGO_IMG } from "../../../constants/imgConsts";
// Text Constants list
import { COMMON_CONSTS } from "../../../constants/screenConsts";

class Login extends Component {
  handleFormSubmit(e) {
    e.preventDefault();
    this.props.history.push("/dashbord");
  }

  render() {
    return (
      <div id="wrapper">
        <div class="vertical-align-wrap">
          <div class="vertical-align-middle">
            <div class="login-box ">
              <div class="left">
                <div class="content">
                  <div class="header">
                    <div class="logo text-center">
						          <img src={ MAIN_LOGO_IMG } alt="Logo" />
                    </div>
                    <p class="lead">Login to your account</p>
                  </div>
                  <form
                    class="form-login-small"
                    onSubmit={e => this.handleFormSubmit(e)}
                  >
                    <div class="form-group">
                      <label for="signin-email" class="control-label sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control form_control"
                        id="signin-email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <label
                        for="signin-password"
                        class="control-label sr-only"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control form_control"
                        id="signin-password"
                        placeholder="Password"
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      LOGIN
                    </button>
                    <div class="bottom">
                      <span class="helper-text">
                        <i class="fa fa-lock" />{" "}
                        <a href="#">Forgot password?</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="right">
                <div class="overlay" />
                <div class="content text">
                  <h3 class="heading">
                    Objectively network visionary methodologies via
                    best-of-breed users. Phosfluorescently initiate go forward
                    leadership skills before an expanded array of infomediaries.
                    
                  </h3>
                </div>
              </div>
              <div class="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
