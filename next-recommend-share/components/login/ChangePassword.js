import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,

    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';

export const ChangePassword = (props) => {

    const [_userNewPassword, setUserNewPassword] = useState("");
    const [_userConfirmPassword, setUserConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)

    return (
        <selection className="content">
        <Container>
            <div className="contained">
                <div className=" six columns alpha offset-by-three password-heading ">
                    <h1>Password</h1>
                    <p>You can edit your password below.</p>
                    <div className="box white">
                        <form method="post" action noValidate>                            
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
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
