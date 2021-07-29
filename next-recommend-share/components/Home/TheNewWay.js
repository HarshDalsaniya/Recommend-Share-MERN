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
                            <h4 className="transparency-heading mt-4 mt-lg-3">Transparency</h4>
                            <p className="transparency-text">
                                Both parties are showing one another their intentions are genuine and
                                honourable from the outset.
                            </p>
                            <h4 className="transparency-heading">Commitment</h4>
                            <p className="transparency-text">
                                Both parties agree from the outset to seek and provide each other with
                                recommendations.
                            </p>
                            <h4 className="transparency-heading">Recognition</h4>
                            <p className="transparency-text">
                                Upon having had a great experience, leave a positive recommendation.
                            </p>
                            <h4 className="transparency-heading">Accountability</h4>
                            <p className="transparency-text">
                                Upon having had a bad experience, leave a negative recommendation.
                            </p>
                            <h4 className="transparency-heading">Reassurance</h4>
                            <p className="transparency-text">
                                Both parties will be able to check each other’s profile to see their
                                recommendation history before making a commitment.
                            </p>
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
