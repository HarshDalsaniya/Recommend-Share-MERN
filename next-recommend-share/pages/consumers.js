import React from 'react'
import { connect } from 'react-redux'
import { 
    BannerSection, 
    Founder_Banner,
    Content,VimeoVideo,
    TheSolution,
    GrateNews,
    WhatPeopleSlider
} from '../components/Consumer/BannerSection'

export const consumers = (props) => {
    return (
        <div className="the-new-community">
            <BannerSection />
            <Founder_Banner/>
            <Content/>
            <VimeoVideo
                //the propblem
                url = 'https://player.vimeo.com/video/568464147?app_id='
                appId = '122963'

            />
            <TheSolution/>            
            <VimeoVideo
                //the solution
                url = 'https://player.vimeo.com/video/568469269?app_id='
                appId = '122963'
            />
            <GrateNews
                logo = '/logo/logo-on-light.svg'
                banner = '/banner/Screenshot+2021-06-09+at+22.45.43.png'
            />
            <WhatPeopleSlider
                image1='/dashboard/slider_img_1.jpg'
                image2='/dashboard/slider_img_2.jpg'
                image3='/dashboard/slider_img_3.jpg'
                image4='/dashboard/slider_img_4.jpg'
                image5='/dashboard/slider_img_5.jpg'
                image6='/dashboard/slider_img_6.jpg'
                image7='/dashboard/slider_img_7.jpg'
                image8='/dashboard/slider_img_8.jpg'
                image9='/dashboard/slider_img_9.jpg'
                image10='/dashboard/slider_img_10.png'
                image11='/dashboard/slider_img_11.png'
                image12='/dashboard/slider_img_12.png'
                image13='/dashboard/slider_img_13.png'
                image14='/dashboard/slider_img_14.png'
                image15='/dashboard/slider_img_15.png'
                image16='/dashboard/slider_img_16.png'
                
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(consumers)
