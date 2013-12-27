import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap"

export const JoinCommunity = (props) => {
    return (
        <section className="join-community-box mt-5">
            <Container>
                <Row>
                    <Col lg="6" className="mb-4 mb-lg-0">
                        <div className="garry-lewis">
                            <h3 className="garry-lewis-heading">My Story</h3>
                            <div className="garry-lewis-text">
                                “I lost everything I’d worked for due to dishonest and deceitful
                                people, and a legal system that just doesn’t work”
                            </div>
                            <div className="garry-lewis-light">
                                Recommended Tradespeople Founder and Tradesperson
                                <br />
                                <span>Garry Lewis</span>
                            </div>
                            <div className="garry-lewis-image">
                                <img src="/images/garry-lewis.png" alt />
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="join-facebook-box">
                            <div className="join-community-heading">
                                TO JOIN THIS NEW COMMUNITY SIMPLY FOLLOW US ON FACEBOOK
                            </div>
                            <div className="join-icon-box">
                                <a href="https://www.facebook.com/recommendedtradespeople/">
                                    <i className="fab fa-facebook-square" aria-hidden="true" />
                                </a>
                                <span>
                                    <i className="fas fa-thumbs-up" aria-hidden="true" />
                                    Like 10K
                                </span>
                            </div>
                            <a
                                href="https://www.facebook.com/recommendedtradespeople/"
                                className="join-community-btn"
                            >
                                JOIN US ON FACEBOOK
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(JoinCommunity)