import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';
import { Container , Row } from 'react-bootstrap'
import { connect, useSelector,useDispatch } from 'react-redux'
import { ColorBox, UserCard } from '../../components/TradePeople/TradepeopleView'
import {TradesPeople_Profile_Details} from '../../redux/treadspeople/action'

export default function tradespeopleDetails(props){
    const { query } = useRouter();
    const slug = query.tradeProfile 
    const dispatch = useDispatch();
    const reState = useSelector(state => state);
    const { error,tradespeopleData } = reState.tradePeople;   
    const [tradeData , setTradeData] = useState([]);  
    console.log(tradeData   )
    
    useEffect(() => {
        dispatch(TradesPeople_Profile_Details(slug))
        
         setTradeData(typeof tradespeopleData != 'undefined' ? tradespeopleData : null )
     
    }, [setTradeData,tradespeopleData.length!=0])


    return (
        <React.StrictMode>
       <section className="login-body" style={ { marginTop: "5rem" } }>
           <Container>
               <div className="contained shallow">
                   <div className="six columns alpha">
                        <h2>Trade Profile</h2>
                   </div>
                   <div className="six columns tright">
                       <div className="contained semi-shallow">
                           <div className="share-box-new right">
                                <span className="sharethis-inline-share-title">Share this:</span>
                                <div
                                    className="sharethis-inline-share-buttons st-right  st-inline-share-buttons st-animated"
                                    >
                                    <div
                                        className="st-btn st-first st-remove-label"
                                        data-network="facebook"
                                        style={{ display: "inline-block" }}
                                    >
                                        <img
                                         alt="facebook sharing button"
                                        src="https://platform-cdn.sharethis.com/img/facebook.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#4267B2',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                    <div
                                        className="st-btn st-remove-label"
                                        data-network="twitter"
                                        style={{ display: "inline-block" }}
                                    >
                                        <img
                                        alt="twitter sharing button"
                                        src="https://platform-cdn.sharethis.com/img/twitter.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#55acee',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                    <div
                                        className="st-btn st-remove-label"
                                        data-network="sms"
                                        style={{ display: "inline-block" }}
                                    >
                                        <img
                                        alt="sms sharing button"
                                        src="https://platform-cdn.sharethis.com/img/sms.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#ffbd00',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                    <div
                                        className="st-btn st-remove-label"
                                        data-network="email"
                                        style={{ display: "inline-block" }}
                                    >
                                        <img
                                        alt="email sharing button"
                                        src="https://platform-cdn.sharethis.com/img/email.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#7d7d7d',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                    <div
                                        className="st-btn st-remove-label"
                                        data-network="whatsapp"
                                        style={{ display: "none" }}
                                    >
                                        <img
                                        alt="whatsapp sharing button"
                                        src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#95D03A',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                    <div
                                        className="st-btn st-last st-remove-label"
                                        data-network="sharethis"
                                        style={{ display: "inline-block" }}
                                    >
                                        <img
                                        alt="sharethis sharing button"
                                        src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                                        style={{
                                            padding: '8px',
                                            backgroundColor: '#95D03A',
                                            borderRadius: '50%'
                                        }}
                                        />
                                    </div>
                                </div>
                           </div>   

                       </div>
                   </div>                                  
               </div>
               <div className="contained shallow">
                        <div className="box white">
                         <UserCard 
                            title_href={'/tradespeople/' + slug}
                            title={`${tradeData.name}`}
                            details={ [
                                {
                                    option : 'Trade :',
                                    value : tradeData.tradename,
                                }, {
                                     option :'Post Code : ',
                                     value : tradeData.address_postcode,
                                }, {
                                    option : 'Telephone : ',
                                    value :  tradeData.telephone,
                                }, {
                                    option : 'Email Address : ',
                                    value : tradeData.email ,
                                }

                            ] }

                            IconOption = {[
                                {
                                    title:'Date Joined:',
                                    value: typeof tradeData.established != 'undefined' ? tradeData.established.slice(0,4) : ''
                                },
                                {
                                    title:'Managed account:',
                                    value:'yes'
                                },
                                {
                                    title:'Identify confirmed:',
                                    value: tradeData.verified
                                },
                                {
                                    title:'Federation members:',
                                    value: tradeData.federationvalue
                                },
                                {
                                    title:'VAT registered:',
                                    value : tradeData.vat_registered
                                },
                                {
                                    title:'Public liability insurance:',
                                    value: tradeData.insured
                                },
                            ]}                           
                            
                            />

                        </div>
                    </div>
                    <div className="contained shallow mob-not-shallow">
                        <h2>Activity Overview</h2>
                        <div className="box white">
                            <div className="contained semi-shallow">
                                <Row>
                                    <div className="six columns alpha">
                                         <h2>Received</h2>
                                    </div>
                                    <div className="six columns not-mobile">
                                        <h2>Given</h2>
                                    </div>                                    
                                </Row>
                                <Row>
                                    <div className="three columns alpha">
                                        <ColorBox 
                                            color = 'green'
                                            value = '0'
                                            caption = 'Positive Recommendations'
                                        />
                                    </div>
                                    <div className="three columns">
                                        <ColorBox 
                                                color = 'red'
                                                value = '0'
                                                caption = 'Nagative Recommendations'
                                            />

                                    </div>
                                    <div className="three columns not-desktop mobile-tall-top">
                                        <h2>Given</h2>
                                    </div>
                                    <div className="three columns">
                                        <ColorBox 
                                                color = 'green'
                                                value = '0'
                                                caption = 'Positive Recommendations'
                                            />
                                    </div>
                                    <div className="three columns">
                                        <ColorBox 
                                                color = 'red'
                                                value = '0'
                                                caption = 'Nagative Recommendations'
                                            />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className="contained shallow mob-not-shallow">
                        <div className="box white">
                            <div className="contained shallow tcenter">
                                <p className="semi-shallow">
                                    Want to recommend this tradesperson, or warn others? Share your opinion with
                                    the community.
                                    </p>

                                 <p className="shallow">
                                    <Link href="/secure/tradespeople/1st-cs/recommend">
                                    <a className="button">
                                        Leave a Recommendation
                                    </a>
                                    </Link>
                                </p>  

                            </div>

                        </div>

                    </div>
           </Container>
       </section>
       </React.StrictMode>
    )
}