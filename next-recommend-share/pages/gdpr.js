import React from 'react'
import { connect } from 'react-redux'
import { Gdpr } from '../components/Information/Gdpr'

export const gdpr = (props) => {
    return (
        <div className="login-body">
            <Gdpr/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(gdpr)
