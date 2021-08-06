import React from 'react'
import { connect } from 'react-redux'

export const ErrorPage = (props) => {
    return (
      <div className="error_page">
          <h2>Invalid Request</h2>
      </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage)
