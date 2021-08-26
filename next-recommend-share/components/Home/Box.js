import React from 'react'
import Link from "next/link"
import { connect } from 'react-redux'
import {
    Carousel,
    Row,
    Col,
    Container,
} from "react-bootstrap"

export const Box = (props) => {
    return (
        <>
        <Container>
            <Row>
                <Col lg={ 6 }>
                    <div className="for-consumers for-box">
                        <Container>
                            <Row pb={ 3 }>
                                <Col md={ 6 }>
                                    <img
                                        src={require("../../images/dashboard/hero-community-equal-relationship.svg")}
                                        
                                    />
                                </Col>
                                <Col md={ 6 } className="d-flex flex-column justify-content-between ps-md-0">
                                    <div>
                                        <h3 className="for-heading">FOR Consumers</h3>
                                        <p className="for-text">
                                            Reputations matter. Join Recommend &amp; Share, the community
                                            where consumers and businesses look out for each other.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="for-btn">
                                        <Link href="/register"><a>
                                            CONSUMERS
                                            <br />
                                            Click here to Join the community
                                        </a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={ 6 } className="mt-4 mt-lg-0">
                    <div className="for-businesses for-box">
                        <Container>
                            <Row pb={ 3 }>
                                <Col md={ 6 } className="d-flex">
                                    <img src={require("../../images/dashboard/hero-community-environment.svg")}  />
                                </Col>
                                <Col md={ 6 } className="d-flex flex-column justify-content-between ps-md-0" >
                                    <div>
                                        <h3 className="for-heading">FOR BUSINESSES</h3>
                                        <p className="for-text">
                                            With Recommend &amp; Share, businesses provide consumers with a
                                            guarantee of transparency and accountability, building a
                                            community of reassurance.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="for-btn">
                                        <Link href="/register?type=tradesperson"><a>
                                            BUSINESSES
                                            <br />
                                            Click here to Join the community
                                        </a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Col>

            </Row>
            <h3 className="community-heading text-center mt-4 mt-md-5">
                &nbsp;See what people are saying!
            </h3>


        </Container>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Box)
