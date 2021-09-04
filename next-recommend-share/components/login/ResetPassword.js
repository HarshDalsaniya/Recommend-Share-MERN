import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"
import Link from "next/link"
import Fields from '../Form-Fields/Fields';
import { forgotPasswordUser } from '../../redux/auth/action';
import { formFieldValidation } from "../../services/formValidation"
import{ToastifyNotification , Toastify} from "../../helper/notification"

export default function ResetPassword(props){

    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    // const { message } = reState.authUser;
    const dispatch = useDispatch();
  
    // console.log(message)

    // useEffect(() => {
    //     if(props.message == "User Data")
    //     
    //    console.log("success")
    // }, [props.message,toast])
    // console.log(dispatch(forgotPasswordAction()))
    const [_useremail, setUserEmail] = useState("");
    const [submitted, setSubmitted] = useState(false)
    
    const onForgotPassword = (e) => {
        e.preventDefault()
        setSubmitted(true)
        if (_useremail !== '') {           
             dispatch(forgotPasswordUser(_useremail))  
             
            props.error == 'Invalid email' ?
              ToastifyNotification({   
                type:'error',              
                message :'Opps...Given email is wrong ...!!',
                position:"top-right",
                hideProgressBar:'false',
                closeOnClick: 'true',
                pauseOnHover: 'true',
                draggable: 'true',
                progress: '',
            }): ToastifyNotification({   
                type:'info',              
                message :'Chech your Email',
                position:"top-right",
                hideProgressBar:'false',
                closeOnClick: 'true',
                pauseOnHover: 'true',
                draggable: 'true',
                progress: '',
            }) 
          
        }
    }   
   
   return (
        <>
        {/* {flesh!="" ? <ToastContainer /> : null} */}
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
                                            <Link href="/login">
                                            <a  className="button clear fleft">
                                                ‹ Login
                                            </a>
                                            </Link>
                                            <button type="submit">
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
<<<<<<< HEAD
}
=======
}

const mapStateToProps = ({ authUser }) => {
    const { loding, message, error } = authUser
    return { loding, message, error };
}

const mapDispatchToProps = {
    // forgotPasswordAction: forgotPasswordUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
>>>>>>> c2022c46bdfb3a050fb14687fe1add02d7601339
