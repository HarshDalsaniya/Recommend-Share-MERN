import React from 'react'
import { connect } from 'react-redux'
import { Container,
         Row,
         Col } from "react-bootstrap"

export const Login = (props) => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md="3">
                    </Col>
                    <Col md="5">
                        <div className="login-box">
                            <h1>Login</h1>
                            <div className="form-box">
                                <p>Please use your account details to log in. If you do not have an account, why not <a href="/register">create one</a>?</p>
                                <form>
                                    <div>
                                        <lable>Your Email</lable>
                                        <div>
                                            <input type='text' name="_username"></input>
                                        </div>
                                    </div>
                                    <div>
                                        <lable>Your Password</lable>
                                        <div>
                                            <input type='text' name="_password"></input>
                                        </div>
                                    </div>
                                    <p Class="tcenter small">Forgotten your password? <a href="/reset-password/">Request a new one</a>.</p>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container">
                <div className="six columns alpha offset-by-three">
                    <div className="contained">
                        <h1>Login</h1>
                        <div className="box white">
                            <p>
                                Please use your account details to log in. If you do not have an
                                account, why not <a href="/register">create one</a>?
                            </p>
                            <form action="/login" method="post" className="login">
                                <div className="form_row">
                                    <label>Your Email</label>
                                    <div className="field_container">
                                        <input
                                            type="text"
                                            className="form-control first-field"
                                            id="inputUser"
                                            name="_username"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form_row">
                                    <label>Your Password</label>
                                    <div className="field_container">
                                        <input
                                            type="password"
                                            className="form-control last-field"
                                            id="inputPassword"
                                            name="_password"
                                            required
                                        />
                                    </div>
                                </div>
                                <p className="tcenter small">
                                    Forgotten your password?{ " " }
                                    <a href="/reset-password/">Request a new one</a>.
                                </p>
                                <div className="buttons tcenter">
                                    <button type="submit" className="light big">
                                        Login Now
                                    </button>
                                </div>
                                <input type="hidden" name="_target_path" defaultValue="/" />
                            </form>
                        </div>
                    </div>
                    <div className="contained">
                        <p className="h1">Login with Facebook</p>
                        <div className="box white">
                            <div className="contained shallow">
                                <p>You can use your facebook account to login.</p>
                                <p className="shallow tcenter">
                                    <fb:login-button
                                        data-size="large"
                                        data-button-type="continue_with"
                                        data-show-faces="false"
                                        data-auto-logout-link="false"
                                        data-use-continue-as="false"
                                        scope="public_profile,email"
                                        onlogin="checkLoginState();"
                                        login_text="
    "
                                        className=" fb_iframe_widget"
                                        fb-xfbml-state="rendered"
                                        fb-iframe-plugin-query="app_id=198284134178649&auto_logout_link=false&button_type=continue_with&container_width=0&locale=en_US&login_text=%0A%20%20%20%20%20%20%20%20%20%20&scope=public_profile%2Cemail&sdk=joey&show_faces=false&size=large&use_continue_as=false"
                                    > 
                                        <span style={ { verticalAlign: "bottom", width: 247, height: 40 } }>
                                            <iframe
                                                name="f2ec2d41b1a4c44"
                                                width="1000px"
                                                height="1000px"
                                                data-testid="fb:login_button Facebook Social Plugin"
                                                title="fb:login_button Facebook Social Plugin"
                                                frameBorder={ 0 }
                                                scrolling="no"
                                                allow="encrypted-media"
                                                src="https://www.facebook.com/v3.0/plugins/login_button.php?app_id=198284134178649&auto_logout_link=false&button_type=continue_with&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df9d486dcf25748%26domain%3Drecommendandshare.com%26origin%3Dhttps%253A%252F%252Frecommendandshare.com%252Ff2a9b6540a0c654%26relation%3Dparent.parent&container_width=0&locale=en_US&login_text=%0A%20%20%20%20%20%20%20%20%20%20&scope=public_profile%2Cemail&sdk=joey&show_faces=false&size=large&use_continue_as=false"
                                                style={ {
                                                    border: "none",
                                                    visibility: "visible",
                                                    width: 247,
                                                    height: 40
                                                } }
                                            />
                                        </span>
                                     </fb:login-button> 
                                    <span id="fb_status" />
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="tcenter small">
                        Having trouble logging in? <a href="/contact-us.html">Contact us</a> for
                        help.
                    </p>
                </div>
            </div> */}

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
