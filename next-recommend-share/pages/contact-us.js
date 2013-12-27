import React from 'react'
import { connect } from 'react-redux'
import Fields from '../components/Form-Fields/Fields';
import { Container,
    Row,
    Col,
    Button
    } from "react-bootstrap"

export const contact_us = (props) => {
    const formField = [
        {
            field:"text",
            fieldLabel:"Name",
            fieldName:"name",
            fieldValue:"",
            fieldAction:""
        },
        {
            field:"email",
            fieldLabel:"Email",
            fieldName:"email",
            fieldValue:"",
            fieldAction:""
        },
        {
            field:"text",
            fieldLabel:"Telephone",
            fieldName:"telephone",
            fieldValue:"",
            fieldAction:""
        },
        {
            field:"text",
            fieldLabel:"Company/Business",
            fieldName:"company",
            fieldValue:"",
            fieldAction:""
        },
        {
            field:"textarea",
            fieldLabel:"Message",
            fieldName:"message",
            fieldValue:"",
            fieldAction:""
        }
    ]
    return (
        <section className="login-body pt-3">
            <Container>
                <div className="eight columns alpha offset-by-two">
                    {/* // ContentBlock ID: contact-us // */}
                    <h1>Contact Us</h1>
                    <p>Please use the form below to get in touch.</p>
                    <div className="box white">
                        <div className="contained shallow">
                            <form>
                                {formField.map((value)=>(
                                    <div className="contained shallow">
                                        {console.log(value.fieldName)}
                                        {value.fieldLabel=="Email" || value.fieldLabel=="Telephone"?
                                            <>
                                        
                                            {value.fieldLabel=="Email"?"<Row>":""}
                                                <Col>
                                                    <Fields 
                                                        field = {value.field}
                                                        fieldLabel = {value.fieldLabel}
                                                        fieldName = {value.fieldName}
                                                        fieldValue = {value.fieldValue}
                                                        fieldAction = {value.fieldAction}
                                                    />
                                                </Col>
                                            {value.fieldLabel=="Email"?"</Row>":""}
                                            </>:
                                            <>
                                                <Fields 
                                                    field = {value.field}
                                                    fieldLabel = {value.fieldLabel}
                                                    fieldName = {value.fieldName}
                                                    fieldValue = {value.fieldValue}
                                                    fieldAction = {value.fieldAction}
                                                />
                                            </>
                                        }
                                    </div>
                                ))}
                                <div className="buttons">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(contact_us)
