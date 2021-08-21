import React, { useState } from 'react'
import Link from "next/link"
import { connect, useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Row,

    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';
import { changeUserPassword } from '../../redux/auth/action';

export const EditPassword = (props) => {

    
    const birds = useSelector(state => state);
    const dispatch = useDispatch();


    const [_userCurrentPassword, setUserCurrentPassword] = useState("");
    const [_userNewPassword, setUserNewPassword] = useState("");
    const [_userReapeatPassword ,setUsrRepeatPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

       const onChnagePassword =(e)=>{
        e.preventDefault()
        // console.log("change password") 
        if(_userCurrentPassword !== ''|| _userNewPassword !== ''){
            const user = {
                currentPassword:_userCurrentPassword,
                newPassword:_userNewPassword,
                repeatNewPassword:_userReapeatPassword
            }
            dispatch(changeUserPassword(user))
        }
    }

    return (
        <section className="content login-body">
            <Container>
                <div className="contained">
                    <div className=" six columns alpha offset-by-three password-heading ">
                        <h1>Password</h1>
                        <p>You can edit your password below.</p>
                        <div className="box white">
                            <form onSubmit ={onChnagePassword}>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="Current password"
                                        fieldName="_userCurrentPassword"
                                        fieldValue={ _userCurrentPassword }
                                        fieldAction={ setUserCurrentPassword }
                                        fieldValidation={ submitted, _userCurrentPassword, { message: "Please Enter your UserName" } }
                                    />
                                    <label className="help">Enter your current password to continue</label>

                                </div>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="New password"
                                        fieldName="_userNewPassword"
                                        fieldValue={ _userNewPassword }
                                        fieldAction={ setUserNewPassword }
                                        fieldValidation={ submitted, _userNewPassword, { message: "Please Enter your UserName" } }
                                    />
                                    <label className="help">Must be at least 6 characters.</label>

                                </div>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="Repeat Password"
                                        fieldName="_userReapeatPassword"
                                        fieldValue={ _userReapeatPassword }
                                        fieldAction={ setUsrRepeatPassword }
                                        fieldValidation={ submitted, _userReapeatPassword, { message: "Please Enter your UserName" } }
                                    />
                                </div>

                                <div className="buttons">
                                    <Link href="/">
                                    <a  className="button clear small">
                                        Cancel
                                    </a>
                                    </Link>
                                    <button type="submit" className="button">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, currentUser, error } = authUser
    return {loding, currentUser, error };
}
const mapDispatchToProps = {
    changeUserPasswordAction:changeUserPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword)
