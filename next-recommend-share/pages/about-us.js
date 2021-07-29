import React from 'react'
import { connect } from 'react-redux'
import { About } from '../components/About-Us/About'

export const about_us = (props) => {

    return (
        <div>
           <About            
           bannerbackgoudimg="/banner/garry-brick-bg.png"
           bannerbackgoundimg2="/banner/garry-brick.png"
           bannerbackgoundimg2="/banner/garry-quote-end.png"
           bannerbackgoundimg2="/banner/garry-quote-start.png"
           />
         
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(about_us)
