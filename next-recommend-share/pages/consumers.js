import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
    BannerSection,
    Founder_Banner,
    Content, VimeoVideo,
    TheSolution,
    GrateNews,
    WhatPeopleSlider
} from '../components/Consumer/BannerSection'

export const consumers = (props) => {
    return (
        <div className="the-new-community">
            <BannerSection />
            <Founder_Banner />
            <Content />
            <section>
                <Container>
                    <div className="consumers-youtube-videos">
                        <div className="videos-box" className="problemvideo">
                            <VimeoVideo
                                height='680px'
                                width='100%'
                                //the propblem
                                url='https://player.vimeo.com/video/568464147?app_id='
                                appId='122963'
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <TheSolution />
            <section>
                <Container>
                    <div className="consumers-youtube-videos">
                        <div className="videos-box">
                            <VimeoVideo
                                height='680px'
                                width='100%'
                                    //the solution
                                url='https://player.vimeo.com/video/568469269?app_id='
                                appId='122963'
                            />
                        </div>
                    </div>
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
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(consumers)
