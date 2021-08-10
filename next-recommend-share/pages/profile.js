import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap"
import { ConnectFacebook, ProfileForm, ProfileImage, ProfileStatus, RemoveAC } from '../components/Profile/Profile'

export const profile = (props) => {
    return (
        <div className="login-body" style={{marginTop: "5.1rem"}}>
            <section className="content">
                <div className="container">
                    <div className="contained">
                        <div className="twelve columns alpha">
                            <h1>Your Account</h1>
                            <p>Your account details, profile image and identity status can be updated below.</p>
                            <div className="eight columns alpha">
                                <h2>Account Details</h2>
                                <div className="box white">
                                    <div className="row">
                                       <ProfileForm />
                                    </div>
                                </div>
                            </div>
                            <div className="four columns">
                                <ProfileStatus />
                                <ProfileImage />
                            </div>
                        </div>
                    </div>
                    <ConnectFacebook />
                    <RemoveAC />
                    <p className="tcenter">
                        Need help with your account? <a href="/contact-us.html">Contact us</a> for help.
                    </p>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(profile)
