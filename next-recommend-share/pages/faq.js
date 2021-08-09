import React from 'react'
import { connect } from 'react-redux'
import { Faq } from '../components/FAQ/Faq'

export const faq = (props) => {
    const data = [
        {
            question: "Q. Why should I use Recommend &amp; Share?",
            answer: "Recommend &amp; Share helps to provide consumers and tradespeoplewith peace of mind and reassurance before making a commitment to each other when embarking on any home improvements and maintenance."
        },
        {
            question: "Q. What does Recommend &amp; Share do?",
            answer: "Recommend &amp; Share is a self-regulated environment, which worksby providing both consumers and tradespeople with a voice to share their experiences with each other, and provide each other withrecommendations for everybody to see."
        },
        {
            question: "Q. What are the benefits of sharing recommendations?",
            answer: " Providing and sharing recommendations helps to highlight genuine consumers and tradespeople to create a better and safer environment for everybody."
        },
        {
            question: "Q. Do I have to provide a recommendation at the end of the job?",
            answer: "Yes, you must provide a positive or negative recommendation at the end of the job, based upon your experience."
        },
        {
            question: "Q. What are the benefits of positive recommendations?",
            answer: "A positive recommendation is provided based upon having had a great experience, giving both parties the recognition they deserve and allowing them to stand out for everybody to see."
        },
        {
            question: "Q. What are the disadvantages of negative recommendations?",
            answer: " A negative recommendation is provided, based upon having had a bad experience, making people and businesses accountable for their actions and making it difficult for them to operate."
        },
        {
            question: "Q. Can a negative recommendation be changed into a positive one?",
            answer: " Yes, a negative recommendation can be changed, but only by the person or tradesperson who provided it."
        },
        {
            question: "Q. How do I know recommendations are genuine?",
            answer: "Recommend &amp; Share validates all accounts using a mobile phone/SMS verification system. This makes it harder for rogues to open fake accounts for the sole purpose of recommending themselves. Only validated accounts can leave a recommendation on our website."
        },
        {
            question: "Q. Does the tradesperson or customer need to have a profile on Recommend &amp; Share?",
            answer: "  Both parties need to have a Recommend &amp; Share profile before making a commitment as you would not be able to leave any recommendations after the event."
        },
        {
            question: "Q. Can consumers &amp; tradespeople invite each other?",
            answer: "Yes, both consumers and tradespeople have the option to invite each other to create a profile."
        },
        {
            question: "Q. Can I contact my tradesperson direct?",
            answer: "   Yes, Recommend &amp; Share helps you find genuine tradespeople and shows you how to get in touch. After that, you're free to communicate with them directly."
        },
        {
            question: "Q. When the job is complete, whom do I pay?",
            answer: "When the job has been completed, the tradesperson will send you an invoice and you pay them direct."
        },
        {
            question: " Q. I have had a bad experience with a tradesperson/customer, can I leave a negative recommendation?",
            answer: " If the customer or tradesperson doesn't have a Recommend &amp; Share profile, then unfortunately you will not be able to leave a negative recommendation."
        },
        {
            question: "Q. Is there a cost to use Recommend &amp; Share?",
            answer: "No, this platform is FREE for both consumers and tradespeople to use"
        },
        {
            question: "Q. How will Recommend &amp; Share make money?",
            answer: "Recommend &amp; Share will generate its revenue through affiliate schemes."
        },
        {
            question: "Q. Can a tradesperson share their Trade Profile?",
            answer: "Yes, a tradesperson can share their Trade Profile to various social channels/SMS/Email by clicking on the blue link called 'View My Trade Profile' found in 'Your Trade Dashboard'. You can then see and use the share features from this page."
        }
    ]
    var key=0;
    return (
            <section className="content">
                <div className="container">
                    <div className="twelve columns alpha">
                        <div className="contained">
                            <h1>Consumers &amp; Tradespeople</h1>
                            { data.map((row) => (
                                <Faq
                                    key={"qa_"+key++}
                                    question={ row.question }
                                    answer={ row.answer }
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
