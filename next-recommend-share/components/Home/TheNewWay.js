import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap"

export const TheNewWay = (props) => {
    const Content = [
        {
            heading : "Transparency",
            description : " Both parties are showing one another their intentions are genuine and honourable from the outset."
        },
        {
            heading : "Commitment",
            description : "Both parties agree from the outset to seek and provide each other with recommendations."
        },        
        {
            heading : "Recognition",
            description : "Upon having had a great experience, leave a positive recommendation."
        },
        {
            heading : "Accountability",
            description : "Upon having had a bad experience, leave a negative recommendation."
        },
        {
            heading : "Reassurance",
            description : " Both parties will be able to check each other’s profile to see their recommendation history before making a commitment."
        }       

    ]
    return (    
        <Container>
            <div className="the-new-way">
                <Row className="gx-5">
                    <Col lg={6} className="new-way-box">
                        <h3 className="new-way-heading">
                            The NEW way for Consumers and Businesses to interact
                        </h3>
                        <p className="new-way-text">
                            Recommend &amp; Share form part of the process between the consumer and
                            tradesperson from start to finish, to help ensure a positive outcome for
                            both parties.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <div className="transparency-box">
                            {Content.map((values)=>
                                <>
                                <h4 className="transparency-heading mt-4 mt-lg-3">{values.heading}</h4>
                                <p className="transparency-text">{values.description}</p>                
                                </>
                            )}
                           
                        </div>
                    </Col>
                </Row>
            </div>


        </Container>
       
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TheNewWay)
