import React from 'react'
import { connect } from 'react-redux'
import ResetPassword from '../components/Profile/ResetPassword'


export const password = (props) => {
    return (
      <ResetPassword/>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(password)
