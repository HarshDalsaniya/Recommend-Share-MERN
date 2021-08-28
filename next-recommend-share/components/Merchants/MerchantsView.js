import React from 'react'
import Link from "next/link"
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"


export const MerchantsView = (props) => {
    return (
        <div>
            <section className="py-3 py-md-5">
                <Container>
                    <div className="rogue-traders-box">
                        <Row>
                            <Col md={ 12 }>
                                <h3 className="all-blue-heading">now bringing merchants together?</h3>
                                <p className="all-gray-text">
                                    As part of my plan
                                    <strong>MERCHANTS</strong> are the key to turning the UK’s Home
                                    Improvement Market around and I’m now reaching out to
                                    merchants/suppliers and asking for them to simply show their support
                                    for what I’m trying to achieve to change our industry.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export const ProblemPluging = (props) => {
    return (
        <section>
            <div className="the-problems-box providing-box mt-3 mt-md-5">
                <Container>
                    <Row>
                        <Col md={ 6 }>
                            <h3 className="providing-box-heading">
                                The problems plaguing our industry
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 6 }>
                            <h6>CONSUMER CONFIDENCE</h6>
                            <p className="providing-box-text">
                                Consumer confidence is at an all time low when looking for a
                                tradesperson, which is having a devastating impact on the industry.
                                This is backed up by the statistics below:
                            </p>
                        </Col>
                        <Col md={ 6 }>
                            <p className="all-icons-color providing-box-text">
                                <i className="fas fa-coins" aria-hidden="true" /> Cowboy builders
                                cost the UK economy around £10 billion a year in lost revenue.
                            </p>
                            <p className="all-icons-color providing-box-text">
                                <i className="fas fa-hat-cowboy" aria-hidden="true" /> Rogue traders
                                cost UK homeowners in excess of £2 billion a year in botched jobs.
                            </p>
                        </Col>
                        <Col md={ 8 } mt={ 3 } mt-md={ 5 }>
                            <h6>HELP AND SUPPORT </h6>
                            <p className="providing-box-text">
                                The statistics below clearly show that things have got to change
                                before it really is to late. Tradespeople do need more help and
                                support and this is something that I’m currently working on.
                            </p>
                        </Col>
                    </Row>
                    <div className="heading-box">
                        <Row>
                            <Col md={ 3 }>
                                <p className="all-icons-color">
                                    <i className="fas fa-heartbeat" aria-hidden="true" />
                                </p>
                                <p className="providing-box-text">
                                    The construction industry has the highest rate of suicides than
                                    any other profession.
                                </p>
                            </Col>
                            <Col md={ 3 }>
                                <p className="all-icons-color">
                                    <i className="fas fa-chart-line" aria-hidden="true" />
                                </p>
                                <p className="providing-box-text">
                                    The number of failures within the UK’s construction sector
                                    increased by 73% in 2018.
                                </p>
                            </Col>
                            <Col md={ 3 }>
                                <p className="all-icons-color">
                                    <i className="fas fa-pound-sign" aria-hidden="true" />
                                </p>
                                <p className="providing-box-text">
                                    SMEs face £40 billion a year in unpaid invoices. Prompt payment is
                                    an ethical issue.
                                </p>
                            </Col>
                            <Col md={ 3 }>
                                <p className="all-icons-color">
                                    <i className="fas fa-sort-amount-down-alt" aria-hidden="true" />
                                </p>
                                <p className="providing-box-text">
                                    UK faces growing skilled tradespeople crisis as tradespeople are
                                    choosing other professions.
                                </p>
                            </Col>
                        </Row>
                        <Row mt={ 3 } mt-md={ 5 }>
                            <h2 className="providing-box-heading">
                                is this the merchants problem?
                            </h2>
                            <div className="this-affects-text-box">
                                All of these statistics are gradually getting worse and in the end
                                they can only have a negative impact on the merchants. We really do
                                need to address these issues before it becomes too late.
                            </div>
                        </Row>
                    </div>
                </Container>
            </div>
        </section>

    )
}


export const CharitiesSupport = (props) => {
    return (
        <section>
            <div className="this-affects-box">
                <Container>
                    <Row>
                        <Col md={ 6 }>
                            <h3 className="all-blue-heading">why should you show your support?</h3>
                            <ul className="all-gray-text list-sky-color">
                                <li>Promoting a better and safer environment.</li>
                                <li>Helping to make a difference.</li>
                                <li>Showing consumers and tradespeople you care.</li>
                                <li>Creating positive brand awareness.</li>
                                <li>Making rogue traders and rogue customers a thing of the past</li>
                                <li>Attract NEW customers.</li>
                                <li>The financial gains &amp; benefits of a NEW environment.</li>
                            </ul>
                        </Col>
                        <Col md={ 6 }>
                            <h3 className="all-blue-heading">Our electrical champions</h3>
                            <p className="all-gray-text">
                                I have recently launched Recommend &amp; Share, our partner platform, to the
                                electrical sector of merchants, and they’ve been kind enough to show their
                                support for what I’m trying to achieve in our industry.
                            </p>
                            <div className="our-electrical-logo-box">
                                <img src={ `${props.image}` } />
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </section>
    )
}

export const CharitiesPlateform = (props) => {
    return (
        <section>
            <div calassName="charities-box py-3 py-md-5">
                <Container>
                    <div className="charities-heading-box">
                        <h3 className="all-blue-heading">Charities supporting this platform</h3>
                        <p className="all-gray-text">
                            I have approached a number of charities and made them aware of my plans and
                            they have been kind enough to show their support.
                        </p>
                    </div>
                    <Row className="charities-image-box mt-3 mt-md-5">
                        <Col md={4}>
                            <img src={ `${props.image1}`}  />
                            <p className="all-gray-text">
                                The Lighthouse Construction Industry Charity is happy to be supporting
                                Garry Lewis and the Recommend &amp; Share platform, helping to create a
                                better and safer environment for everybody involved in this industry.
                            </p>
                        </Col>
                        <Col md={4}>
                            <img src={ `${props.image2}`} />
                            <p className="all-gray-text">
                                eic are proud to be supporting Garry Lewis and the Recommend &amp; Share
                                platform
                            </p>
                        </Col>
                        <Col md={4}>
                            <img src={ `${props.image3}`} />
                            <p className="all-gray-text">
                                Band of Builders supporting Garry Lewis and his plans to help change our
                                industry and create a better environment
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default (MerchantsView, ProblemPluging, CharitiesSupport,CharitiesPlateform)
