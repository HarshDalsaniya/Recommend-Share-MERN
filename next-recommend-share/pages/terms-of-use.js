import React from 'react'
import { connect } from 'react-redux'
import { TermOfUse } from '../components/Information/TermOfUse'

export const terms_of_use = (props) => {
    return (
        <div className="login-body">
            <TermOfUse/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(terms_of_use)
