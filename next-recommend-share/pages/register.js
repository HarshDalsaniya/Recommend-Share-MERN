import React from 'react'
import Link from "next/link"
import { connect } from 'react-redux'
import { Container,
    Row,
    Col,
    Form,
    Button
    } from "react-bootstrap"
import Fields from '../components/Form-Fields/Fields';


export const register = (props) => {
    return (
        <React.Fragment>
        <Container fluid>
            <Row>
                <Col md="2">
                </Col>
                <Col md="8" className="mb-4">
                    <div className="box mx-auto ">
                            <h1>Create an Account</h1>
                            <div className="form-box">
                                <p className="form-text">Create your free customer account by filling in the form below.
    Are you a tradesperson? You can create a business listing for free, or continue to register and create your listing later.</p>
                                <form action="">
                                <Row>
                                    <Col>
                                        <h3>Your Details</h3>
                                        <Fields 
                                            field = "text"
                                            fieldLabel = "Full Name"
                                            fieldName = "name"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Email Address"
                                            fieldName = "email"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "numeric"
                                            fieldLabel = "Telephone"
                                            fieldName = "telephone"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "numeric"
                                            fieldLabel = "Mobile Telephone"
                                            fieldName = "mobile"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "select"
                                            fieldLabel = "Age Group"
                                            fieldName = "age_group"
                                            fieldOption = {["16-24","25-34","35-44","44-55","56-64","65+"]}
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Password"
                                            fieldName = "password"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Confirm Password"
                                            fieldName = "confirm_password"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                    </Col>
                                    <Col>
                                        <h3>Your Address</h3>
                                        <Fields 
                                            field = "inputGroupTextButton"
                                            fieldLabel = "Postcode"
                                            fieldName = "address_postcode"
                                            buttonValue = "LOOKUP"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Address Line 1"
                                            fieldName = "_username"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Address Line 2"
                                            fieldName = "_username"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "Town"
                                            fieldName = "_username"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                        <Fields 
                                            field = "email"
                                            fieldLabel = "County"
                                            fieldName = "_username"
                                            fieldValue = ""
                                            fieldAction = ""
                                        />
                                    </Col>
                                </Row>
                                <p className="tcenter small">Forgotten your password? <a className="form-link" href="/reset-password/">Request a new one</a>.</p>
                                <div className="buttons tcenter">
                                    <Button type="submit" className="light big" onClick={()=>{onSubmit()}}>Login Now</Button>
                                </div>
                                <input type="hidden" name="_target_path" value="/"></input>
                                </form>
                            </div>
                            <h1>Login with Facebook</h1>
                            <div className="form-box">
                            <p>You can use your facebook account to login.</p>
                            </div>
                        
                        <p className="tcenter small m-5">If you already have an account, please <Link href="/login"><a> login </a></Link>instead.</p>
                    </div>
                </Col>
                <Col md="2">
                </Col>
            </Row>
        </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(register)
