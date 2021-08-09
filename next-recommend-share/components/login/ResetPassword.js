import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"

import Fields from '../Form-Fields/Fields';
import { forgotPasswordUser } from '../../redux/auth/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formFieldValidation } from "../../services/formValidation"


export const ResetPassword = (props) => {

    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const dispatch = useDispatch();
    // console.log(props)

    // useEffect(() => {
    //     if(props.message == "User Data")
    //     toast("Wow so easy!");
    //    console.log("success")
    // }, [props.message,toast])
    // console.log(dispatch(forgotPasswordAction()))
    const [_useremail, setUserEmail] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const [flesh, setFlesh] = useState()

    const onForgotPassword = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (_useremail !== '') {
            dispatch(forgotPasswordUser(_useremail))
        }
    }
    
   return (
        <>
        {/* {flesh!="" ? <ToastContainer /> : null} */}
             
            <section className="content login-body">
                <Container>
                    <div className="six columns alpha offset-by-three">
                        <div className="contained resetpassword-heading">
                            <h1>Reset Password</h1>
                            <div className="contained">
                                <p>Enter your email address to request a new password.</p>
                                <div className="box white">
                                    <form className="forgot" onSubmit={ onForgotPassword }>
                                        <div className="form-content resetpassword-field">
                                            <Fields
                                                field="email"
                                                fieldLabel="Email Address"
                                                fieldName="_useremail"
                                                fieldValue={ null }
                                                fieldAction={ setUserEmail }
                                                fieldValidation={ [submitted, _useremail, formFieldValidation(error,"email",_useremail)] }
                                            />
                                        </div>
                                        <div className="buttons">
                                            <a href="/login" className="button clear fleft">
                                                ‹ Login
                                            </a>
                                            <button type="submit"  onClick={()=>{setFlesh(toast("Check your Email!"))}}>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

const mapStateToProps = ({ authUser }) => {
    const { loding, message, userEmail, error } = authUser
    return { loding, message, userEmail, error };
}

const mapDispatchToProps = {
    forgotPasswordAction: forgotPasswordUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
