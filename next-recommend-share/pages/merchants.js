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
import { VimeoVideo } from '../components/Consumer/BannerSection'
import { BannerSection, Founder_Banner,GrateNews,WhatPeopleSlider } from '../components/Consumer/BannerSection'
import { MerchantsView, ProblemPluging,CharitiesSupport,CharitiesPlateform } from '../components/Merchants/MerchantsView'

export const merchants = (props) => {
    return (
        <>
            <BannerSection />
            <Founder_Banner />
            <MerchantsView />
            <ProblemPluging />
            <section className="youtube-videos-box">
                <Container>
                    <Row className="flex-column-reverse flex-md-row align-items-center">
                        <Col md={ 6 } className="the-problem">
                            <div className="videos-box">
                                <VimeoVideo
                                    //the propblem
                                    url='https://player.vimeo.com/video/568464147?app_id='
                                    appId='122963'
                                />
                            </div>
                        </Col>
                        <Col md={ 6 } className="the-problem">
                            <div className="video-text-box">
                                <div className="video-heading">The problem</div>
                                <div className="video-text">
                                    Why the current process just doesn’t work anymore.{ " " }
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" mt-3 mt-md-4 align-items-center">
                        <Col md={ 6 } className="the-solution">
                            <div className="video-text-box">
                                <div className="video-heading">my solution</div>
                                <h4>CONSUMERS &amp; TRADESPEOPLE CONFIDENCE</h4>
                                <div className="video-text">
                                    I’ve created a NEW environment that is designed to help provide both
                                    consumers and tradespeople with confidence when engaging with each other.
                                </div>
                            </div>
                        </Col>
                        <Col md={ 6 } className="the-problem">
                            <div className="videos-box" style={{height:'auto',width:'auto'}}>
                                <VimeoVideo
                                    height=''
                                    width=''
                                    //the solution
                                    url='https://player.vimeo.com/video/568469269?app_id='
                                    appId='122963'                                    
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <GrateNews
                logo={require('../images/logo/logo-on-light.svg')}
                banner={require('../images/banner/Screenshot+2021-06-09+at+22.45.43.png')}
            />
            <WhatPeopleSlider
                image1={require('../images/dashboard/slider_img_1.jpg')}
                image2={require('../images/dashboard/slider_img_2.jpg')}
                image3={require('../images/dashboard/slider_img_3.jpg')}
                image4={require('../images/dashboard/slider_img_4.jpg')}
                image5={require('../images/dashboard/slider_img_5.jpg')}
                image6={require('../images/dashboard/slider_img_6.jpg')}
                image7={require('../images/dashboard/slider_img_7.jpg')}
                image8={require('../images/dashboard/slider_img_8.jpg')}
                image9={require('../images/dashboard/slider_img_9.jpg')}
                image10={require('../images/dashboard/slider_img_10.png')}
                image11={require('../images/dashboard/slider_img_11.png')}
                image12={require('../images/dashboard/slider_img_12.png')}
                image13={require('../images/dashboard/slider_img_13.png')}
                image14={require('../images/dashboard/slider_img_14.png')}
                image15={require('../images/dashboard/slider_img_15.png')}
                image16={require('../images/dashboard/slider_img_16.png')}

            />
            <CharitiesSupport
                image={require('../images/images/electrical-logo.png')}
            />
            <CharitiesPlateform
                 image1={require('../images/images/construction.png')}
                 image2={require('../images/images/electrical.png')}
                 image3={require('../images/images/band-of-builders.png')}
            />


        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(merchants)
