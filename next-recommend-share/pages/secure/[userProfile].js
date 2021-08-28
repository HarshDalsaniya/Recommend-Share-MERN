import React from 'react'

import { useRouter } from 'next/router';
import { Container , Row } from 'react-bootstrap'
import Link from 'next/link'
import { ColorBox, UserCard } from '../../components/TradePeople/TradepeopleView'


export default function userProfile(props){
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
                         
                         title='A J Service'
                         details={ [
                             {
                                 option : 'Trade :',
                                 value : 'Traditional Craftsman',
                             }, {
                                  option :'Post Code : ',
                                  value : 'CR0 4LP',
                             }, {
                                 option : 'Telephone : ',
                                 value :  '020 8686 3643',
                             }, {
                                 option : 'Email Address : ',
                                 value :  'richardsmail@artworkcs.plus.com',
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
                                 value:'no'
                             },
                             {
                                 title:'Public liability insurance:',
                                 value:'no'
                             },
                         ]
                         }

                         
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
