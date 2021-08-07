import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,

    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';
import { resetPasswordUser } from '../../redux/auth/action';

export const ChangePassword = (props) => {

    const birds = useSelector(state => state);
    const dispatch = useDispatch();

    const [_userNewPassword, setUserNewPassword] = useState("");
    const [_userConfirmPassword, setUserConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

    const onResetPassword = (e)=>{
        e.preventDefault()
        console.log("forgot password")
        if(_userNewPassword !== ''){
            const user = {
                New_password:_userNewPassword,
                confirm_New_password:_userConfirmPassword
            }
            dispatch(resetPasswordUser(user))
        }
    }

    return (
        <div className="login-body">
        <selection className="content">
        <Container>
            <div className="contained">
                <div className=" six columns alpha offset-by-three password-heading ">
                    <h1>Password</h1>
                    <p>You can edit your password below.</p>
                    <div className="box white">
                        <form onSubmit ={onResetPassword}>                            
                            <div className="form-content">
                                <Fields
                                    field="password"
                                    fieldLabel="New password"
                                    fieldName="_userNewPassword"
                                    fieldValue={ null }
                                    fieldAction={ setUserNewPassword }
                                    fieldValidation={ submitted, _userNewPassword, { message: "Please Enter your UserName" } }
                                    
                                />
                                   
                                <label className="help">Enter New password.</label>

                            </div>
                            <div className="form-content">
                                <Fields
                                    field="password"
                                    fieldLabel="Repeat Password"
                                    fieldName="_userConfirmPassword"
                                    fieldValue={ null }
                                    fieldAction={ setUserConfirmPassword }
                                    fieldValidation={ submitted, _userConfirmPassword, { message: "Please Enter your UserName" } }
                                />
                                <label className="help">Enter Confirm New password.</label>

                            </div>

                            <div className="buttons mt-5  ">
                                <a href="/" className="button clear small ">
                                    Cancel
                                </a>
                                <button type="submit" className="button">
                                    Change
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Container>
    </selection>
    </div>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, userEmail, error } = authUser
    return {loding, userEmail, error };
}
const mapDispatchToProps = {
    resetPasswordUserAction:resetPasswordUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
