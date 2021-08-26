import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Row } from 'react-bootstrap'
import { connect, useSelector,useDispatch } from 'react-redux'
import {TradesPeople_Profile_Details} from '../../../../redux/treadspeople/action'
import { UserCard } from '../../../../components/TradePeople/TradepeopleView'


export const recommend = (props) => {
    const { query } = useRouter();
    const slug = query.tradepeopleName 
    const dispatch = useDispatch();
    const reState = useSelector(state => state);
    const { error,tradespeopleData } = reState.tradePeople;   
    const [tradeData , setTradeData] = useState([])  
    const [recommendCheckBox, setRecommendCheckBox] = useState(true) 
   
  
    useEffect(() => {
        dispatch(TradesPeople_Profile_Details(slug))
        
         setTradeData(typeof tradespeopleData != 'undefined' ? tradespeopleData : null )
     
    }, [setTradeData,tradespeopleData.length!=0])

    return (
        <>
        <section className="content login-body" style={ { marginTop: "5rem" } }>
            <Container>
                <p className="h2">
                    <Link href={'/tradespeople/'+ tradeData.slug }>
                    <a className="back black">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true" /> Back to
                        Profile
                    </a>
                    </Link>
                </p>
                <div className="contained shallow">
                    <div className="box white">
                        <UserCard  
                            title_href={'/tradespeople/' + slug}                      
                            title={`${tradeData.name}`}
                            details={ [
                                {
                                    option: 'Trade',
                                    value: tradeData.tradename,
                                }, {
                                    option: 'Post Code',
                                    value: tradeData.address_postcode,
                                }, {
                                    option: 'Email Address : ',
                                    value: tradeData.email,
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

                            </div> :
                            <div className="box white">
                                <div className="contained shallow">
                                    <form>
                                        <div className="form_row yes-no choice">
                                            <label className="required">Would you recommend?</label>
                                            <div className="field_container">
                                                <div className="expanded-list-wrapper yes-no">
                                                    <ul className="expanded-list" style={{marginBottom:'1rem' , marginLeft:'0.5rem'}}>
                                                        <li className="expanded-list-row">
                                                            <div className={ recommendCheckBox == true ? "_checkbox _radio on " : "_checkbox _radio" }>
                                                                <input
                                                                    type="radio"
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


                                        </div>
                                    </form>

                                </div>

                            </div>
                        }



                    </div>
                </div>


            </Container>

        </section>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(recommend)
