import React,{useState} from "react"
import { connect } from 'react-redux'
import { Container,
         Row,
         Col,
         Form,
         Button
         } from "react-bootstrap"
import { loginUser } from '../redux/auth/action';
import Fields from '../components/Form-Fields/Fields';
import Link from "next/link"

export const login = (props) => {
    const [_username, setUsername] = useState("");
    const [_password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const user={
            email:_username,
            password:_password
        }
        if(user.email!=""&&user.password!=""){
            props.login(user,"/")
        }
    }
    return (
        <div className="login-body pt-3">
            <Container fluid>
                <Row>
                    <Col md="4">
                    </Col>
                    <Col md="4" className="mb-4">
                        <div className="login-box mt-2">
                            <h1>Login</h1>
                            <div className="form-box">
                                <p className="form-text">Please use your account details to log in. If you do not have an account, why not <Link href="/register"><a >create one</a></Link>?</p>
                                <div className="form-content">
                                    <form onSubmit={onSubmit}>
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Your Email"
                                            fieldName = "_username"
                                            fieldValue = {_username}
                                            fieldAction = {setUsername}
                                        />
                                        <Fields 
                                            field = "password"
                                            fieldLabel = "Your Password"
                                            fieldName = "_password"
                                            fieldValue = {_password}
                                            fieldAction = {setPassword}
                                        />
                                        <p className="tcenter small">Forgotten your password? <a className="form-link" href="/reset-password/">Request a new one</a>.</p>
                                        <div className="buttons tcenter">
                                            <Button type="submit" className="light big">Login Now</Button>
                                        </div>
                                        <input type="hidden" name="_target_path" value="/"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="login-box mt-5 mb-5">
                            <h1>Login with Facebook</h1>
                            <div className="form-box">
                            <p>You can use your facebook account to login.</p>
                            </div>
                        </div>
                        <p className="tcenter small m-5">Having trouble logging in? <a href="/contact-us.html">Contact us</a> for help.</p>
                    </Col>
                    <Col md="4">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, currentUser } = authUser
    return {loding, currentUser};
}

const mapDispatchToProps = {
    login:loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
