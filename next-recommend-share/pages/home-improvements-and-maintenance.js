import React from 'react'

import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"
import Community from '../components/Home-Improvements-And-Maintenance/Community'
import JoinCommunity from '../components/Home-Improvements-And-Maintenance/join-community'

export default function home_improvements_and_maintenance(props) {
    return (
        <React.StrictMode>
            <React.Fragment>
                <section className="bringing-back">
                    <Container>
                        <Row className="align-items-center">
                            <Col md="12">
                                <h1 className="bringing-back-heading">
                                    Giving Confidence To Consumers &amp; Tradespeople
                                </h1>
                                <span className="bringing-back-text">
                                    Helping to eliminate
                                    <span>ROGUE TRADERS &amp; ROGUE CUSTOMERS</span>
                                </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                                <div className="for-consumers for-box bringing-for-box">
                                    <Container>
                                        <Row className="pb-3 align-items-center">
                                            <Col md="3">
                                                <img src={require("../images/images/hero-community-equal-relationship.svg")} />
                                            </Col>
                                            <Col md="9" className="ps-md-0">
                                                <div>
                                                    <h3 className="for-heading">FOR ConsumerS</h3>
                                                    <p className="for-text">Peace of mind &amp; reassurance</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
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
                            <Col md="6">
                                <div className="for-businesses for-box bringing-for-box">
                                    <Container>
                                        <Row className="pb-3 align-items-center">
                                            <Col md="3" className="d-flex">
                                                <img src={require("../images/images/hero-community-environment.svg")} />
                                            </Col>
                                            <Col md="9" className="ps-md-0">
                                                <div>
                                                    <h3 className="for-heading">For Tradespeople</h3>
                                                    <p className="for-text">Stand out and be recognised</p>
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
                    </Container>
                </section>
                <Community />
                <JoinCommunity />
            </React.Fragment>
        </React.StrictMode>
    )
}