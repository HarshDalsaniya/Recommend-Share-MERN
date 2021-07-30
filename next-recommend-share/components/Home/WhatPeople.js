import React from 'react'
import {
    Carousel,
    Row,
    Col,
    Container,
    Img,
    Image,
} from "react-bootstrap"
import { connect } from 'react-redux'
import SimpleImageSlider from "react-simple-image-slider";

export const WhatPeople = (props) => {
    const images = [
        { url: "/dashboard/slider_img_1.jpg" },
        { url: "/dashboard/slider_img_2.jpg" },
        { url: "/dashboard/slider_img_3.jpg" },
        { url: "/dashboard/slider_img_4.jpg" },
        { url: "/dashboard/slider_img_5.jpg" },
        { url: "/dashboard/slider_img_6.jpg" },
        { url: "/dashboard/slider_img_7.jpg" },
        { url: "/dashboard/slider_img_8.jpg" },
        { url: "/dashboard/slider_img_9.jpg" },
        { url: "/dashboard/slider_img_10.png" },
        { url: "/dashboard/slider_img_11.png" },
        { url: "/dashboard/slider_img_12.png" },
        { url: "/dashboard/slider_img_13.png" },
        { url: "/dashboard/slider_img_14.png" },
        { url: "/dashboard/slider_img_15.png" },
        { url: "/dashboard/slider_img_16.png" },
    ];


    return (
        <>
            <Container>
                <div className="see-what-people-slider mb-3">
                    <div className="owl-carousel owl-theme people-slider owl-loaded owl-drag">
                        <SimpleImageSlider
                          
                            width={ 452 }
                            height={ 80 }
                            images={ images }
                            showNavs
                            slideDuration
                            navSize={ 25 }
                            navStyle={ 3 }
                            bgColor={ `backgroundColor:#000000` }
                        />

                    </div>
                </div>

            </Container>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(WhatPeople)
