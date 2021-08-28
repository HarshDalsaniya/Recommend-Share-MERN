import React from 'react'

export default function Faq(props){
    return (
        <div className="box grey">
            <h3>Q. { props.question }</h3>
            <div className="faq-answer">
                <p className="shallow">
                    { props.answer }
                </p>
            </div>
        </div>
    )
}
