import React from 'react'
import Link from "next/link"
import { connect } from 'react-redux'
import {
    Row,
    Col,
    Container,
    Img,
    Image,
} from "react-bootstrap"
import { Carousel } from 'react-responsive-carousel';

export const HowDoes = (props) => {

    return (
        <Container>
            <div className="how-does">
                <div className="how-does-header">How Recommend &amp; Share works</div>
                <div className="row align-items-center">
                    <Col lg={ 8 }>
                        <div className="see-what-people-slider howitworks-slider-box mb-3">
                            <div className="owl-carousel owl-theme howitworks-slider owl-loaded owl-drag">
                                <Carousel
                                    centerMode={ false }
                                    showStatus={ false }
                                    showThumbs={ false }
                                    showStatus={ false }
                                    autoPlay={ true }
                                    infiniteLoop={ true }
                                    interval={ 4000 }
                                >
                                    <div className="item">
                                        <img
                                            src="/banner/howitworks1_03.png"
                                            alt="First slide"
                                        />
                                        <div className="howitworks-slider-btn">
                                            <div className="for-consumers">
                                                <div className="for-btn">
                                                    <Link href="/register"><a style={ { fontSize: 14 } }>
                                                        Consumers Click here to join the community
                                                    </a></Link>
                                                </div>
                                            </div>
                                            <div className="for-businesses">
                                                <div className="for-btn">
                                                    <Link  href="/register?type=tradesperson"><a style={ { fontSize: 14 } }>
                                                        Businesses Click here to join the community
                                                    </a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/banner/howitworks2_03.png"
                                            alt="First slide"
                                        />
                                        <div className="count-step mt-3">
                                            <span>2</span> <small>Create your FREE profile</small>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/banner/howitworks3_03.png"
                                            alt="First slide"
                                        />
                                        <div className="count-step mt-3">
                                            <span>3</span> <small>Confirm your identity</small>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img
                                            src="/banner/howitworks4_03.png"
                                            alt="First slide"
                                        />
                                        <div className="count-step mt-3">
                                            <span>4</span> <small>Start sending and receiving recommendations</small>
                                        </div>

                                    </div>

                                </Carousel>
                            </div>
                        </div>
                        {/* <div className="owl-nav">
                            <button type="button" role="presentation" className="owl-prev">
                                <span aria-label="Previous">‹</span>
                            </button>
                            <button type="button" role="presentation" className="owl-next">
                                <span aria-label="Next">›</span>
                            </button>
                        </div>
                        <div className="owl-dots">
                            <button role="button" className="owl-dot">
                                <span />
                            </button>
                            <button role="button" className="owl-dot">
                                <span />
                            </button>
                            <button role="button" className="owl-dot active">
                                <span />
                            </button>
                            <button role="button" className="owl-dot">
                                <span />
                            </button>
                        </div> */}

                        <Row mt={ 3 }>
                            <Col md={ 12 } className="text-center" style={ { color: "#3C3C3C" } }>
                                <h4>REMEMBER!</h4>
                                <p>
                                    This platform is{ " " }
                                    <b>
                                        <u>FREE</u>
                                    </b>{ " " }
                                    for everybody to use and always will be.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={ 4 }>
                        <div className="garry-lewis">
                            <div className="garry-lewis-text">
                                Creating a better and safer environment for businesses and consumers
                            </div>
                            <div className="garry-lewis-light">
                                Founder and Tradesman
                                <br />
                                <span>Garry Lewis</span>
                            </div>
                            <div className="garry-lewis-image">
                                <img src="/banner/garry-lewis.png" />
                            </div>
                        </div>
                    </Col>
                </div>
            </div>

        </Container >
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HowDoes)
