import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from "react-bootstrap"

export const ThePower = (props) => {
    return (
        <Container>
            <section className="the-power">
                <Container>
                     {/* <div className="container">  */}
                    <Row>
                        <Col>
                            <h3 className="the-power-heading">The Power of a Community</h3>
                            <p className="the-power-text">
                                What can be achieved if we all come TOGETHER
                            </p>
                        </Col>
                    </Row>
                    <div className="row align-items-end">
                        <Col lg={5}>
                            <img
                                className="the-power-image"
                                src={`${props.powerImage}`} 
                                alt
                            />
                        </Col>
                        <Col lg={7}>
                            <p className="where-genuine mb-2">
                                This platform is{ " " }
                                <b>
                                    <u>NOT</u>
                                </b>{ " " }
                                for{ " " }
                                <b>
                                    <u>PROFIT</u>
                                </b>{ " " }
                                its{ " " }
                                <b>
                                    <u>FREE</u>
                                </b>{ " " }
                                for everybody to use and always will be
                            </p>
                            <div className="where-genuine">
                                Where Genuine consumers and businesses can stand out, be recognized,
                                valued, respected, and appreciated, and in turn, Dishonest consumers and
                                businesses are highlighted and made accountable for their actions.
                            </div>
                            <Row>
                                <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                                    <div className="the-power-icon-1">
                                        <div>
                                            <i className="fas fa-thumbs-up" aria-hidden="true" />
                                        </div>
                                        <h6>Rewarding Great Experiences</h6>
                                        <p>Provide a Positive recommendation</p>
                                    </div>
                                    <p className="the-power-icon-text">
                                        for the community to see, allowing genuine consumers and businesses to
                                        stand out and be recognised.
                                    </p>
                                </Col>
                                <Col md={6} className="text-center text-md-start">
                                    <div className="the-power-icon-2">
                                        <div>
                                            <i className="fas fa-thumbs-down" aria-hidden="true" />
                                        </div>
                                        <h6>Highlighting Bad Experiences</h6>
                                        <p>Provide a Negative recommendation</p>
                                    </div>
                                    <p className="the-power-icon-text">
                                        for the community to see, making it difficult for dishonest consumers
                                        and businesses to operate.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </div>

                     {/* </div>  */}
                </Container>
            </section>
         </Container>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ThePower)
