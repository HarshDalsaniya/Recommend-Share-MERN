import React from 'react'
import {
    Container, Section,
} from 'react-bootstrap';
import AboutBlog from './AboutBlog';

function About(props) {
    return (
        <div className="login-body">
            <section className="swipe garry-brick" style={{background:`url(${props.bannerbackgoudimg}) left bottom repeat-x`}} >           
                <div className="container" style={{background:"url("+require('../../images/banner/garry-brick.png')+") right bottom no-repeat"}}>
                    <div className="twelve columns alpha tcenter" style={{marginTop: "5rem"}}>
                        <p className="h1">My Vision</p>
                    </div>
                    <div className="six columns offset-by-one ">
                        <div className="contained">
                            <p className="quotey tcenter">
                                <span className="qstart"  style={{background:"url("+require('../../images/banner/garry-quote-start.png')+") center center no-repeat"}}/>
                                I want to create a NEW environment where consumers and tradespeople feel
                                safe, valued and appreciated to provide reassurance before making a
                                commitment to each other.
                                <span className="qend" style={{background:"url("+require('../../images/banner/garry-quote-end.png')+") center center no-repeat"}}/>
                            </p>
                            <p className="shallow tcenter mob-tleft">
                                <a
                                    href="https://www.garrylewis.tv"
                                    className="blank-link button yellow nocaps"
                                    target="_blank"
                                >
                                    Visit www.garrylewis.tv
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <AboutBlog/>
        </div>
    )
}

export default About
