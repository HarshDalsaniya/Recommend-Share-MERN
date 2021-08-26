import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import { UserCard } from '../../../components/TradePeople/TradepeopleView'


export const recommend = (props) => {
  
    return (
        <section className="content login-body" style={ { marginTop: "5rem" } }>
            <Container>
                <p className="h2">
                    <Link href="/tradespeople/a-j-services">
                    <a className="back black">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true" /> Back to
                        Profile
                    </a>
                    </Link>
                </p>
                <div className="contained shallow">
                    <div className="box white">
                        <UserCard
                            title='A J Service'
                            details={ [
                                {
                                    option : 'Trade',
                                    value : 'otherTrades',
                                }, {
                                     option :'Post Code',
                                     value : 'CM0 8UA',
                                }, {
                                    option : 'Email Address : ',
                                    value :  'andrew.snowdon1@btopenworld.com',
                                }

                            ] }

                            IconOption = {[
                                {
                                    title:'Date Joined:',
                                    value:'2020'
                                },
                                {
                                    title:'Managed account:',
                                    value:'yes'
                                },
                                {
                                    title:'Identify confirmed:',
                                    value:'yes'
                                },
                                {
                                    title:'Federation members:',
                                    value:'no'
                                },
                                {
                                    title:'VAT registered:',
                                    value:'yes'
                                },
                                {
                                    title:'Public liability insurance:',
                                    value:'yes'
                                },
                            ]
                            }


                        />
                    </div>
                </div>
                <div className="contained shallow">
                    <div className="twelve columns alpha">
                        <h2 className=" tcenter">Leave a Recommendation for A J Services</h2>
                        <div className="box white">

                            <div className="contained shallow">
                                <form>
                                    <div>
                                        <div className="form_row  text">
                                            <label htmlFor="feedback_text_recommendation" />
                                            <div className="field_container">
                                                <div className="displayText">
                                                    <p className="semi-shallow text-green">Leave a Positive Recommendation</p>
                                                </div>
                                            </div>
                                            <div className="form_row text">
                                                <div className="field_container">
                                                    <input
                                                        type="text"
                                                        name="feedback[title]"
                                                        placeholder="Title"
                                                      
                                                    />
                                                </div>
                                                <div className="form_row very-short text" style={ { marginTop: '2rem   ' } }>
                                                    <div className="field_container">
                                                        <textarea
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
                        </div>
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
