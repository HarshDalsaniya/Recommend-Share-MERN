import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap"

export const Banner = (props) => {
    console.log(props)
    return (
        <div className="site">
            <section className="building-trust" style={ { background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage}) 0% 0% no-repeat padding-box` } }>
                <div className="container py-0 py-md-5">
                    <div className="row align-items-center justify-content-center">
                        <Col lg={6} xl={5} className="text-center">
                            <h1 className="building-heading">
                                Building trust
                                <br />
                                between
                                <br />
                                <span>
                                    BusinessES and
                                    <br />
                                    ConsumerS
                                </span>
                            </h1>
                            <p className="building-text">
                                Welcome to the Recommend and Share community:
                                <br />
                                Much more than just a transaction.
                            </p>
                        </Col>
                    </div>
                    <div className="home-banner-btn-wrap">
                        <div className="for-consumers">
                            <div className="for-btn">
                                <a href="/register">
                                    CONSUMERS
                                    <br />
                                    Click here to Join the community
                                </a>
                            </div>
                        </div>
                        <div className="for-businesses">
                            <div className="for-btn">
                                <a href="/register?type=tradesperson">
                                    BUSINESSES
                                    <br />
                                    Click here to Join the community
                                </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
