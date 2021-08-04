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

export const EditPassword = (props) => {

    const [_userCurrentPassword, setUserCurrentPassword] = useState("");
    const [_userNewPassword, setUserNewPassword] = useState("");
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
                                        fieldLabel="Current password"
                                        fieldName="_userCurrentPassword"
                                        fieldValue={ null }
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
                                        fieldValue={ null }
                                        fieldAction={ setUserNewPassword }
                                        fieldValidation={ submitted, _userNewPassword, { message: "Please Enter your UserName" } }
                                    />
                                    <label className="help">Must be at least 6 characters.</label>

                                </div>
                                <div className="form-content">
                                    <Fields
                                        field="password"
                                        fieldLabel="Repeat Password"
                                        fieldName="_userCurrentPassword"
                                        fieldValue={ null }
                                        fieldAction={ setUserCurrentPassword }
                                        fieldValidation={ submitted, _userCurrentPassword, { message: "Please Enter your UserName" } }
                                    />
                                </div>

                                <div className="buttons">
                                    <a href="/" className="button clear small">
                                        Cancel
                                    </a>
                                    <button type="submit" className="button">
                                        Save
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPassword)
