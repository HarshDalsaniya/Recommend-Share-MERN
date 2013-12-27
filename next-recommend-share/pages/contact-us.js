import React from 'react'
import { connect } from 'react-redux'
import { Field } from '../components/Formfield/Field'

export const contact_us = (props) => {
    return (
        <div>
            <Field></Field>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(contact_us)
