import React from 'react'
import { connect } from 'react-redux'
import Link from "next/link"
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel';


export const BannerSection = (props) => {
    return (
        <section className="bringing-back">
            <Container>
                <div className="row align-items-center">
                    <Col>
                        <h1 className="bringing-back-heading my-5">
                            THE NEW COMMUNITY
                            <span className="banner-heading-span">A fresh start, a new beginning</span>
                        </h1>
                    </Col>
                </div>
            </Container>
        </section>
    )
}
export const Founder_Banner = (props) => {
    return (
        <section className="pt-5">
            <Container>
                <Row>
                    <Col md={ 12 }>
                        <div className="founder-box garry-lewis">
                            <Row>
                                <Col md={ 2 }>
                                    <div>
                                        <img src="/images/garry-lewis.png"  />
                                    </div>
                                </Col>
                                <Col md={ 10 }>
                                    <h3 className="garry-lewis-heading">
                                        Founder and Tradesperson Garry Lewis:
                                    </h3>
                                    <div className="garry-lewis-text">
                                        “Helping to provide consumers with peace of mind and reassurance when
                                        engaging and committing to a tradesperson”
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const Content = (props) => {
    return (
        <section className="py-3 py-md-5">
            <Container>
                <div className="rogue-traders-box">
                    <Row>
                        <Col md={ 12 }>
                            <h3 className="all-blue-heading">Rogue Traders</h3>
                            <p className="all-gray-text">
                                Rogue Traders cost UK homeowners in excess of £2 billion a year in
                                botched jobs, having a devastating impact on the economy, but more
                                importantly people’s lives.
                                <br />
                                <br /> I believe we need to be able to expose rogue traders in order to
                                warn other consumers and make it
                                <strong>DIFFICULT</strong> for them to operate.
                            </p>
                        </Col>
                        <Col md={ 12 } mt={ 4 }>
                            <h3 className="all-blue-heading">The Problem</h3>
                            <p className="all-gray-text">
                                The current process just doesn’t work anymore because everybody has to
                                put their TRUST in one another from the outset, but this TRUST is being
                                abused by dishonest consumers, tradespeople, and sub contractors.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export const VimeoVideo = (props) => {
    return (
        <ReactPlayer url={ `${props.url}${props.appId}`} 
            height={ `${props.height}`}
            width={ `${props.width}` }            
            config={ {
                vimeo: {
                    playerOptions: {
                        title: true,
                        portrait: true,
                        byline: true,
                        responsive:true,
                        maxheight:680,

                    }
                }
            } }
        />
    )
}

export const TheSolution = (props) => {
    return (
        <section className="py-3 py-md-5">
            <Container>
                <div className="rogue-traders-box">
                    <Row>
                        <Col md={ 12 }>
                            <h3 className="all-blue-heading">The solution</h3>
                            <p className="all-gray-text">
                                I’ve created a<strong>NEW</strong> environment where both consumers
                                and tradespeople now have an
                                <strong>EQUAL</strong> relationship and make a
                                <strong>COMMITMENT </strong> to one another to help ensure a
                                <strong>POSITIVE</strong> outcome for
                                <strong>BOTH</strong> parties.
                                <br />
                                <br /> Rogue Traders and Rogue Customers will
                                <strong>NOT</strong> want to use this platform.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export const GrateNews = (props) => {
    return (
        <section className="great-news-box py-3 py-5 text-center">
            <Container>
                <h3 className="all-blue-heading">GREAT NEWS!</h3>
                <div className="great-news-logo-box">
                    <Link href="/">
                        <img src={ `${props.logo}` } alt />
                    </Link>
                </div>
                <div className="the-new-environment-img">
                    <img src={ `${props.banner}` } alt />
                </div>
                <div className="w-md-75 m-auto border-bottom border-2">
                    <p className="all-gray-text">
                        <strong>NOT for profit,</strong>
                        <strong>FREE</strong> for everybody to use, and
                        <strong> ALWAYS</strong> will be.
                    </p>
                    <h4 className="all-blue-heading my-2">
                        making it
                        <strong>DIFFICULT</strong> for Rogue Traders and Rogue Customers to
                        operate.
                    </h4>
                    <div className="text-start my-5">
                        <h4 className="all-blue-heading">
                            <strong>NOW BOTH PARTIES…</strong>
                        </h4>
                        <ul className="now-both-list all-gray-text">
                            <li>
                                ...are <strong>EQUAL</strong>
                            </li>
                            <li>
                                ...have a <strong>VOICE</strong>
                            </li>
                            <li>
                                ...make a <strong>COMMITMENT</strong>
                            </li>
                            <li>
                                ...seek <strong>RECOMMENDATIONS</strong>
                            </li>
                            <li>
                                ...agree to share their <strong>EXPERIENCES</strong>
                            </li>
                        </ul>
                        <h4 className="all-blue-heading">
                            <strong>We then SHARE those experiences.</strong>
                        </h4>
                    </div>
                </div>
                <div className="blue-bg-btn text-center my-3 my-md-5">
                    <a href="/">Create your free community profile today!</a>
                </div>
                <p className="all-gray-text">
                    <em>Together we can and will make a difference.</em>
                </p>
            </Container>
        </section>
    )
}

export const WhatPeopleSlider = (props) => {

    return (
        <>
            <section className="see-what-people py-3 py-5">
                <Container>
                    <h3 class="community-heading text-center">&nbsp;See what people are saying!</h3>
                    <div className="see-what-people-slider mb-3">
                        <div className="owl-carousel owl-theme people-slider owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <Carousel
                                    centerMode={ false }
                                    showStatus={ false }
                                    showThumbs={ false }
                                    showStatus={ false }
                                >
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image1}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image2}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image3}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image4}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image5}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image6}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image7}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image8}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image9}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image10}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image11}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image12}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image13}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image14}` } />
                                        </Col>
                                    </Row>
                                    <Row className="item">
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image15}` } />
                                        </Col>
                                        <Col md={ 6 } className="images">
                                            <img src={ `${props.image16}` } />
                                        </Col>
                                    </Row>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="blue-bg-btn text-center">
                        <Link href="https://www.facebook.com/recommendedtradespeople/?ref=page_internal">
                            take a look at our Facebook page
                        </Link>
                    </div>
                </Container>
            </section>
        </>
    )
}
export default connect(null, null)(BannerSection, Founder_Banner, Content, VimeoVideo, TheSolution, GrateNews, WhatPeopleSlider)
