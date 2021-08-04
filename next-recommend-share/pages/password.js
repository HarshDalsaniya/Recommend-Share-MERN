import React from 'react'
import { connect } from 'react-redux'
import EditPassword  from '../components/Profile/EditPassword'


export const password = (props) => {
    return (
      <EditPassword/>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(password)
