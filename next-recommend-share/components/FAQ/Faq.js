import React from 'react'
import { connect } from 'react-redux'

export const Faq = (props) => {
    return (
        <div className="box grey">
            <h3>${ props.question }</h3>
            <div className="faq-answer">
                <p className="shallow">
                    ${ props.answer }
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Faq)
