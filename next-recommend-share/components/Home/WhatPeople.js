import React from 'react'
import { Col, Container, Row} from "react-bootstrap"
import Link from "next/link"
import SimpleImageSlider from "react-simple-image-slider";
import { Carousel } from 'react-responsive-carousel';

export default function WhatPeople(props){
    const images = [
        { url: require("../../images/dashboard/slider_img_1.jpg") },
        { url: require("../../images/dashboard/slider_img_2.jpg") },
        { url: require("../../images/dashboard/slider_img_3.jpg") },
        { url: require("../../images/dashboard/slider_img_4.jpg") },
        { url: require("../../images/dashboard/slider_img_5.jpg") },
        { url: require("../../images/dashboard/slider_img_6.jpg") },
        { url: require("../../images/dashboard/slider_img_7.jpg") },
        { url: require("../../images/dashboard/slider_img_8.jpg") },
        { url: require("../../images/dashboard/slider_img_9.jpg") },
        { url: require("../../images/dashboard/slider_img_10.png") },
        { url: require("../../images/dashboard/slider_img_11.png") },
        { url: require("../../images/dashboard/slider_img_12.png") },
        { url: require("../../images/dashboard/slider_img_13.png") },
        { url: require("../../images/dashboard/slider_img_14.png") },
        { url: require("../../images/dashboard/slider_img_15.png") },
        { url: require("../../images/dashboard/slider_img_16.png") },
    ];


    return (
        <>
            <Container>
                <div className="see-what-people-slider mb-3">
                    <div className="owl-carousel owl-theme people-slider owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <Carousel showThumbs={false}>
                                    {images.map((image)=>                         
                                    <div className="owl-item" key={"img"+image.url}>
                                        <Row>
                                            <Col md={4}>                                             
                                                <Link href="">
                                                    <img src={`${image.url}`} />                
                                                </Link>                                            
                                            </Col>
                                        </Row>                                                    
                                    </div>     
                                    )}
                                </Carousel>
                            </div>
                        </div>                   
                    </div>
                </div>

            </Container>
        </>
    )
}
