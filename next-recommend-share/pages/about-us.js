import React from 'react'

import About from '../components/About-Us/About'

export default function bout_us(props){

    return (
        <React.StrictMode>
            <React.Fragment>
                    <About
                        bannerbackgoudimg={require("../images/banner/garry-brick-bg.png")}
                        bannerbackgoundimg2={require("../images/banner/garry-brick.png")}
                        bannerbackgoundimg2={require("../images/banner/garry-quote-end.png")}
                        bannerbackgoundimg2={require("../images/banner/garry-quote-start.png")}
                    />
            </React.Fragment>
        </React.StrictMode>
    )
}
