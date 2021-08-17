import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { UserCard } from '../../components/TradePeople/TradepeopleView'

export const tradespeopleDetails = (props) => {
    return (
       <section className="login-body" style={ { marginTop: "5rem" } }>
           <Container>
               <div className="contained shallow">
                   <div className="six columns alpha">
                        <h2>Trade Profile</h2>
                   </div>
                   <div className="six columns tright">
                       <div className="contained semi-shallow">
                           <div className="share-box-new right">
                                <span class="sharethis-inline-share-title">Share this:</span>
                                <div
                                    className="sharethis-inline-share-buttons st-right  st-inline-share-buttons st-animated"
                                    id="st-1"
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


           </Container>
       </section>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(tradespeopleDetails)
