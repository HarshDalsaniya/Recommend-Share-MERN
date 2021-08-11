import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Faq } from '../components/FAQ/Faq'

export const faq = (props) => {

    const reState = useSelector(state => state);
    const { error } = reState;
    const dispatch = useDispatch();
    const [faq_questions , setFaq_Questions] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:4000/api/business/faq_question`)
      .then((res) => {
        const result = [];
        res.data.data.map((value)=>{

            result.push({ id:value.id, question:value.question, answer:value.answer})
        })
        setFaq_Questions(result)
        console.log(result)
      })  
        
    }, [setFaq_Questions])


    return (
            <section className="content">
                <div className="container" style={{marginTop: "5rem"}}>
                    <div className="twelve columns alpha">
                        <div className="contained">
                            <h1>Consumers &amp; Tradespeople</h1>
                            {console.log(typeof faq_questions)}
                            { faq_questions.map((faq_question) => (
                                <Faq
                                    key={"id_"+faq_question.id}
                                    question={ faq_question.question }
                                    answer={ faq_question.answer }
                                />
                            ))}
                        </div>
                        <p className="tcenter small">
                            Have a question? <a href="/contact-us.html">Contact us</a> for help.
                        </p>
                    </div>
                </div>
            </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(faq)
