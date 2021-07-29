import React from 'react'
import { connect } from 'react-redux'
import { Container,
    Row,
    Col,
    Form,
Label } from "react-bootstrap"

export const Field = (props) => {
    return (
        <div className="contact-us">
            <section className="content">
                <div className="container">
                    <div className="eight columns alpha offset-by-two">
                        {/* // ContentBlock ID: contact-us // */ }
                        <h1>Contact Us</h1>
                        <p>Please use the form below to get in touch.</p>
                        <div className="box white">
                            <div className="contained shallow">

                                <Form method="post" action>
                                    <div className="contained shallow">
                                        <div className="form_row  text">
                                        
                                            <Form.Label htmlFor="enquiry_name" className="required">
                                                Name
                                            </Form.Label>
                                            <div className="field_container">
                                                <input
                                                    type="text"
                                                    id="enquiry_name"
                                                    name="enquiry[name]"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contained shallow">
                                        <div className="form col alpha">
                                            <div className="form_row  text">
                                                <label htmlFor="enquiry_email" className="required">
                                                    Email
                                                </label>
                                                <div className="field_container">
                                                    <input
                                                        type="email"
                                                        id="enquiry_email"
                                                        name="enquiry[email]"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form col">
                                            <div className="form_row  text">
                                                <label htmlFor="enquiry_telephone" className="required">
                                                    Telephone
                                                </label>
                                                <div className="field_container">
                                                    <input
                                                        type="text"
                                                        id="enquiry_telephone"
                                                        name="enquiry[telephone]"
                                                        required="required"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contained shallow">
                                        <div className="form_row  text">
                                            <label htmlFor="enquiry_company">Company/Business</label>
                                            <div className="field_container">
                                                <input
                                                    type="text"
                                                    id="enquiry_company"
                                                    name="enquiry[company]"
                                                />
                                            </div>
                                        </div>
                                        <div className="form_row  text">
                                            <label htmlFor="enquiry_body" className="required">
                                                Message
                                            </label>
                                            <div className="field_container">
                                                <textarea
                                                    id="enquiry_body"
                                                    name="enquiry[body]"
                                                    required="required"
                                                    defaultValue={ "" }
                                                />
                                            </div>
                                        </div>
                                        <div className="form_row confirm-email text">
                                            <label htmlFor="enquiry_confirm_email_address">
                                                Confirm Email Address
                                            </label>
                                            <div className="field_container">
                                                <input
                                                    type="email"
                                                    id="enquiry_confirm_email_address"
                                                    name="enquiry[confirm_email_address]"
                                                    className="confirm-email"
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="hidden"
                                            id="enquiry__token"
                                            name="enquiry[_token]"
                                            defaultValue="X1RQW3H2gdg89H9GG8QX6qCowHS-qcDosT5hBd7tF6M"
                                        />
                                    </div>
                                    <div className="buttons">
                                        <button type="submit">Send</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
