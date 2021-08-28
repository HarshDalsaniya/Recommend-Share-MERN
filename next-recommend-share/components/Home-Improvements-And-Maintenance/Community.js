import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import Link from "next/link"

export default function Community(props){
    return (
        <section className="py-5">
            <Container className="container">
                <div className="the-new-community">
                    <h3 className="community-heading">The NEW community</h3>
                    <Row>
                        <Col lg="4">
                            <div className="community-box1">
                                <div className="community-box1-text">
                                    Bringing Consumers, Tradespeople, and Merchants together, to share
                                    the same goals, vision, and passion for CHANGE!{" "}
                                </div>
                                <div className="community-box1-img mt-3">
                                    <img src={require("../../images/images/Jigsaw_image_300.png")} alt="Jigsaw" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="8">
                            <div className="community-box2">
                                <div className="community-color-box community-color-box1">
                                    <div className="community-color-link-box">
                                        <div className="color-box-labour">Consumers</div>
                                        <div className="color-box-link">
                                            <Link href="/consumers"><a>Read more</a></Link>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            Bring back consumer confidence, when embarking on any Home
                                            Improvements and maintenance.
                                        </li>
                                        <li>
                                            Provide peace of mind and reassurance when looking for, before
                                            engaging and committing to a tradesperson.
                                        </li>
                                    </ul>
                                </div>
                                <div className="community-color-box community-color-box2">
                                    <div className="community-color-link-box">
                                        <div className="color-box-labour">Tradespeople</div>
                                        <div className="color-box-link">
                                            <Link href="/tradespeople/tradepeoplehtml"><a>Read more</a></Link>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            Helping genuine tradespeople to stand out and be recognised
                                            from the rogue traders.
                                        </li>
                                        <li>
                                            Allow genuine tradespeople to be valued, respected and
                                            appreciated for the service they provide.
                                        </li>
                                    </ul>
                                </div>
                                <div className="community-color-box community-color-box3">
                                    <div className="community-color-link-box">
                                        <div className="color-box-labour">Merchants</div>
                                        <div className="color-box-link">
                                            <Link href="/merchants"><a>Read more</a></Link>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            Show your support for change, letting consumers and
                                            tradespeople know you care.
                                        </li>
                                        <li>
                                            Help turn the UK’s home improvement market from a negative
                                            environment into a positive one allowing the industry to grow
                                            again.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}