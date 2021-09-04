import React,{useState} from "react"
import { connect, useSelector } from 'react-redux'
import { Container,
         Row,
         Col,
         Form,
         Button
        } from "react-bootstrap"
import { loginUser } from '../redux/auth/action';
import Fields from '../components/Form-Fields/Fields';
import Link from "next/link"
import { formFieldValidation } from "../services/formValidation"
import{ToastifyNotification , Toastify} from "../helper/notification"

export const login = (props) => {
    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const [_username, setUsername] = useState("");
    const [_password, setPassword] = useState("123456");
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        const user={
            email:_username,
            password:_password
        }
        // if(user.email!=""&&user.password!=""){
                props.login(user,"/")
                ToastifyNotification({   
                    // type:'success',              
                    message :'Login SuccessFully...!!',
                    position:"top-right",
                    hideProgressBar:'false',
                    closeOnClick: 'true',
                    pauseOnHover: 'true',
                    draggable: 'true',
                    progress: '',
                })
        // }
    }
    return (
        <div className="login-body" >
        <section className="content" style={{marginTop:"5rem"}}>
              <Toastify
                position="top-right "
                autoClose="2000"
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container>
                <div className="six columns alpha offset-by-three">
                    <div className="contained">
                    <h1>Login</h1>
                    <div className="box white">
                        <p className="form-text">Please use your account details to log in. If you do not have an account, why not <Link href="/register"><a >create one</a></Link>?</p>
                        {typeof error.verifyError!='undefined' && error.verifyError!=''?
                                    <div className="help-block mb-2" style={{color:'red'}}>{error.verifyError.currentPasswordnotvalid}</div>
                                :null}
                                <form onSubmit={onSubmit}>
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Your Email"
                                            fieldName = "_username"
                                            fieldValue = {_username}
                                            fieldAction = {setUsername}
                                            fieldValidation = {[submitted, _username, formFieldValidation(error,"email",_username)]}
                                        />
                                        <Fields 
                                            field = "password"
                                            fieldLabel = "Your Password"
                                            fieldName = "_password"
                                            fieldValue = {_password}
                                            fieldAction = {setPassword}
                                            fieldValidation = {[submitted, _password, formFieldValidation(error,"password",_password)]}
                                        />
                                        <p className="tcenter small">Forgotten your password? <Link href="/reset-password"><a className="form-link" >Request a new one</a></Link>.</p>
                                        <div className="buttons tcenter">
                                            <Button type="submit" className="light big">Login Now</Button>
                                        </div>
                                        <input type="hidden" name="_target_path" value="/"></input>
                                    </form>

                    </div>
                    </div>
                    <div className="contained">
                        <p className="h1">Login with Facebook</p>
                        <div className="box white">
                            <div className="contained shallow">
                                <p>You can use your facebook account to login.</p>
                                <p className="shallow tcenter">
                                {/* <fb:login-button
                                    data-size="large"
                                    data-button-type="continue_with"
                                    data-show-faces="false"
                                    data-auto-logout-link="false"
                                    data-use-continue-as="false"
                                    scope="public_profile,email"
                                    onlogin="checkLoginState();"
                                    login_text="
                                "
                                    className=" fb_iframe_widget fb_iframe_widget_fluid"
                                    fb-xfbml-state="rendered"
                                    fb-iframe-plugin-query="app_id=198284134178649&auto_logout_link=false&button_type=continue_with&container_width=0&locale=en_US&login_text=%0A%20%20%20%20%20%20%20%20%20%20&scope=public_profile%2Cemail&sdk=joey&show_faces=false&size=large&use_continue_as=false"
                                >
                                    <span style={{ verticalAlign: "bottom", width: 247, height: 40 }}>
                                    <iframe
                                        name="f2e48ee82cbca2c"
                                        width="1000px"
                                        height="1000px"
                                        data-testid="fb:login_button Facebook Social Plugin"
                                        title="fb:login_button Facebook Social Plugin"
                                        frameBorder={0}
                                        allowTransparency="true"
                                        allowFullScreen="true"
                                        scrolling="no"
                                        allow="encrypted-media"
                                        src="https://www.facebook.com/v3.0/plugins/login_button.php?app_id=198284134178649&auto_logout_link=false&button_type=continue_with&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3ad55b9003109%26domain%3Drecommendandshare.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Frecommendandshare.com%252Ffec9058e6f781%26relation%3Dparent.parent&container_width=0&locale=en_US&login_text=%0A%20%20%20%20%20%20%20%20%20%20&scope=public_profile%2Cemail&sdk=joey&show_faces=false&size=large&use_continue_as=false"
                                        style={{
                                        border: "none",
                                        visibility: "visible",
                                        width: 247,
                                        height: 40
                                        }}
                                        className
                                    />
                                    </span>
                                </fb:login-button> */}
                                <span id="fb_status" />
                                </p>
                            </div>
                            </div>
                            <p className="tcenter small">
                            Having trouble logging in? <a href="/contact-us.html">Contact us</a> for help.
                            </p>


                    </div>
                </div>
                {/* ***** */}
            
            </Container>
        </section>
     </div>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, currentUser, error } = authUser
    return {loding, currentUser, error};
}

const mapDispatchToProps = {
    login:loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
