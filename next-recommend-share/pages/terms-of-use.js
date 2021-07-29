import React from 'react'
import { connect } from 'react-redux'
import { TermOfUse } from '../components/Information/TermOfUse'

export const terms_of_use = (props) => {
    return (
        <div>
            <TermOfUse/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(terms_of_use)
