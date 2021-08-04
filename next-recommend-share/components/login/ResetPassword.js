import React,{useState} from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
  
    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';

export const ResetPassword = (props) => {
    const [_useremail, setUserEmail] = useState("");
    const [submitted, setSubmitted] = useState(false)
    
    return (
        <section className="content">
            <Container>
                <div className="six columns alpha offset-by-three">
                    <div className="contained resetpassword-heading">
                        <h1>Reset Password</h1>
                        <div className="contained">
                            <p>Enter your email address to request a new password.</p>
                            <div className="box white">
                                <form className="forgot">
                                    <div className="form-content resetpassword-field">
                                            <Fields 
                                                field = "email"
                                                fieldLabel = "Email Address"
                                                fieldName = "_useremail"
                                                fieldValue = {null}
                                                fieldAction = {setUserEmail}
                                                fieldValidation = {submitted, _useremail, {message:"Please Enter your UserName"}}
                                            />                                       
                                    </div>
                                    <div className="buttons">
                                        <a href="/login" className="button clear fleft">
                                            ‹ Login
                                        </a>
                                        <button type="submit" className>
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

    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
