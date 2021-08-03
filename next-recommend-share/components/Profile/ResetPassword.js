import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"

export const ResetPassword = (props) => {
    return (
        <Container>
            <div className="contained">
                <div className=" six columns alpha offset-by-three ">
                    <h1>Password</h1>
                    <p>You can edit your password below.</p>
                    <div className="box white">
                        <form method="post" action noValidate>
                            <div id="user_password">
                                <div className="form_row text">
                                    <label htmlFor="user_password_old_password" className="required">
                                        Current Password
                                    </label>
                                    <div className="field_container">
                                        <input
                                            type="password"
                                            id="user_password_old_password"
                                            name="user_password[old_password]"
                                            required="required"
                                            className
                                        />
                                        <label className="help">
                                            Enter your current password to continue
                                        </label>
                                    </div>
                                </div>
                                <div className="form_row  text">
                                    <label htmlFor="user_password_password_first" className="required">
                                        New Password
                                    </label>
                                    <div className="field_container">
                                        <input
                                            type="password"
                                            id="user_password_password_first"
                                            name="user_password[password][first]"
                                            required="required"
                                        />
                                        <label className="help">Must be at least 6 characters.</label>
                                    </div>
                                </div>
                                <div className="form_row  text">
                                    <label htmlFor="user_password_password_second" className="required">
                                        Repeat Password
                                    </label>
                                    <div className="field_container">
                                        <input
                                            type="password"
                                            id="user_password_password_second"
                                            name="user_password[password][second]"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <input
                                    type="hidden"
                                    id="user_password__token"
                                    name="user_password[_token]"
                                    defaultValue="gBP3WBtkgij__5LKfvY7RpHzlVwHmc0Cj1AKyIx8rGY"
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
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
