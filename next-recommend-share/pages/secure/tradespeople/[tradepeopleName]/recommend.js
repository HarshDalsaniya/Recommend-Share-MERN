import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { UserCard } from '../../../../components/TradePeople/TradepeopleView'


export const recommend = (props) => {
    const { query } = useRouter();

    const Name = query.tradepeopleName   
    const [recommendCheckBox, setRecommendCheckBox] = useState(true)



    return (
        <section className="content login-body" style={ { marginTop: "5rem" } }>
            <Container>
                <p className="h2">
                    <Link href={'/tradespeople/'+Name}>
                    <a className="back black">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true" /> Back to
                        Profile
                    </a>
                    </Link>
                </p>
                <div className="contained shallow">
                    <div className="box white">
                        <UserCard
                            title={ query['tradepeopleName'] }
                            details={ [
                                {
                                    option: 'Trade',
                                    value: 'otherTrades',
                                }, {
                                    option: 'Post Code',
                                    value: 'CM0 8UA',
                                }, {
                                    option: 'Email Address : ',
                                    value: 'andrew.snowdon1@btopenworld.com',
                                }

                            ] }

                            IconOption={ [
                                {
                                    title: 'Date Joined:',
                                    value: '2020'
                                },
                                {
                                    title: 'Managed account:',
                                    value: 'yes'
                                },
                                {
                                    title: 'Identify confirmed:',
                                    value: 'yes'
                                },
                                {
                                    title: 'Federation members:',
                                    value: 'no'
                                },
                                {
                                    title: 'VAT registered:',
                                    value: 'yes'
                                },
                                {
                                    title: 'Public liability insurance:',
                                    value: 'yes'
                                },
                            ]
                            }


                        />
                    </div>
                </div>

                <div className="contained shallow">
                    <div className="twelve columns alpha">
                        <h2 className=" tcenter">Leave a Recommendation for A J Services</h2>

                        { query.action == 'recommend' ?
                            <div className="box white">

                                <div className="contained shallow">
                                    <form>
                                        <div>
                                            <div className="form_row  text">
                                                <label htmlFor="feedback_text_recommendation" />
                                                <div className="field_container">
                                                    <div id="feedback_text_recommendation" className="displayText">
                                                        <p className="semi-shallow text-green">Leave a Positive Recommendation</p>
                                                    </div>
                                                </div>
                                                <div className="form_row text">
                                                    <div className="field_container">
                                                        <input
                                                            type="text"
                                                            id="feedback_title"
                                                            name="feedback[title]"
                                                            placeholder="Title"

                                                        />
                                                    </div>
                                                    <div className="form_row very-short text" style={ { marginTop: '2rem   ' } }>
                                                        <div className="field_container">
                                                            <textarea
                                                                id="feedback_review"
                                                                name="feedback[review]"
                                                                required="required"
                                                                className="very-short"
                                                                placeholder="Say something about your experience with this tradesperson"
                                                                defaultValue={ "" }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons tcenter">
                                            <button type="submit" >
                                                Share
                                            </button>
                                        </div>

                                    </form>


                                </div>

                            </div> :
                            <div className="box white">
                                <div className="contained shallow">
                                    <form>
                                        <div className="form_row yes-no choice">
                                            <label className="required">Would you recommend?</label>
                                            <div className="field_container">
                                                <div className="expanded-list-wrapper yes-no">
                                                    <ul className="expanded-list" id="exp_list" style={{marginBottom:'1rem' , marginLeft:'0.5rem'}}>
                                                        <li className="expanded-list-row">
                                                            <div className={ recommendCheckBox == true ? "_checkbox _radio on " : "_checkbox _radio" }>
                                                                <input
                                                                    type="radio"
                                                                    id="invite_tradesperson_recommendation_0"
                                                                    name="invite_tradesperson_yes"
                                                                    required="required"
                                                                    value={ 1 }
                                                                    onClick={ () => setRecommendCheckBox(true) } className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: 1,
                                                                        position: "absolute",
                                                                        top: -1,
                                                                        right: -11
                                                                    } }
                                                                />
                                                            </div>
                                                            <label htmlFor="contact_services_0">
                                                                <i className="fa fa-check text-green" aria-hidden="true" />
                                                                Yes
                                                            </label>
                                                        </li>
                                                        <li className="expanded-list-row">
                                                            <div className={ recommendCheckBox == false ? "_checkbox _radio on" : "_checkbox _radio" }>
                                                                <input
                                                                    type="radio"
                                                                    id="invite_tradesperson_recommendation_1"
                                                                    name="invite_tradesperson[recommendation]"
                                                                    required="required"
                                                                    value={ 0 }
                                                                    className="_checkbox_input ready"
                                                                    onClick={ () => setRecommendCheckBox(false) }
                                                                    style={ {
                                                                        opacity: 0,
                                                                        position: "absolute",
                                                                        top: 0,

                                                                    } }
                                                                />
                                                            </div>
                                                            <label htmlFor="contact_services_0">
                                                                <i className="fa fa-times text-red" aria-hidden="true" />
                                                                No
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    <div className="form_row text">
                                                        <div className="field_container">
                                                            <input
                                                                type="text"
                                                                id="feedback_title"
                                                                name="feedback[title]"
                                                                placeholder="Title"

                                                            />
                                                        </div>
                                                        <div className="form_row very-short text" style={ { marginTop: '2rem   ' } }>
                                                            <div className="field_container">
                                                                <textarea
                                                                    id="feedback_review"
                                                                    name="feedback[review]"
                                                                    required="required"
                                                                    className="very-short"
                                                                    placeholder="Say something about your experience with this tradesperson"
                                                                    defaultValue={ "" }
                                                                />
                                                            </div>
                                                    </div>
                                                </div>
                                                </div>

                                            </div>


                                        </div>
                                    </form>

                                </div>

                            </div>
                        }



                    </div>
                </div>


            </Container>

        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(recommend)
