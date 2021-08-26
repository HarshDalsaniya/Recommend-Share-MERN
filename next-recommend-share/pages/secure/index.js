import React , { useEffect,useState }  from 'react'
import Link from "next/link"
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NegativeRecommendation, PositiveRecommendation, RecommendedTradesperson } from '../../components/Secure/SearchBox'

export const secure = (props) => {

    const [localstorageItem, setLocalStorageItem] = useState()
   const [profile, setProfile] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            setLocalStorageItem(JSON.parse(localStorage.getItem('Recommend_Share_current_user')));
            setProfile(localStorage.getItem("Recommend_Share_current_user") == null ? '' : JSON.parse(localStorage.getItem("Recommend_Share_current_user")).profile_Picture)
        }, 1000);
        return () => clearInterval(interval);   
    }, [setLocalStorageItem,setProfile])   
    return (
        <section className="content login-body">
            <Container>
                <div className="flashMessageofuser success" role="alert" style={{marginTop:"7rem"}}>
                    You are now logged in as {JSON.parse(localStorage.getItem('Recommend_Share_current_user')) == null ? '' :JSON.parse(localStorage.getItem('Recommend_Share_current_user')).name}.
                    </div>
                    {/* typeof localstorageItem != ('undefined' || null)? localstorageItem.name : '' */}
                <div className="profile-page" style={{marginTop:"1rem"}}>
                    <section className="profile-page-image">
                        <img src={require("../../images/images/consumer_login.jpg")} />
                    </section>
                    <section className="profile-text-box">
                        <div className="container">
                            <section className="profile-box">
                                <div className="recieved-box">
                                    <div className="row">
                                        <div className="col-md-6 mb-4 mb-md-0">
                                            <h3 className="recieved-heading">Recieved</h3>
                                            <div className="row">
                                                <div className="col-md-6 text-center mb-3 mb-md-0 text-md-start">
                                                    <Link href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity?type=recommendations">
                                                    <a>
                                                        <div className="recieved-number-1">0</div>
                                                        <div className="recieved-text">Positive Recommendation</div>
                                                    </a>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6 text-center text-md-start">
                                                    <Link href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity?type=warnings">
                                                    <a>
                                                        <div className="recieved-number-2">0</div>
                                                        <div className="recieved-text">Negative Recommendation</div>
                                                    </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="recieved-heading">Given</h3>
                                            <div className="row">
                                                <div className="col-md-6 text-center mb-3 mb-md-0 text-md-start">
                                                    <Link href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity/given?type=recommendations">
                                                    <a>
                                                        <div className="recieved-number-1">0</div>
                                                        <div className="recieved-text">Positive Recommendation</div>
                                                    </a>
                                                    </Link>
                                                </div>
                                                <div className="col-md-6 text-center text-md-start">
                                                    <Link href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity/given?type=warnings">
                                                    <a>
                                                        <div className="recieved-number-2">0</div>
                                                        <div className="recieved-text">Negative Recommendation</div>
                                                    </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="inviteCustomer">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="invite-box">
                                            <h3 className="invite-heading">Invite a Tradesperson</h3>
                                            <p className="invite-text">Invite a tradesperson and help us expand the Recommend &amp; Share community with tradespeople that consumers can rely on.</p>
                                            <form action="/secure/invite" className="d-block d-md-flex justify-content-between align-items-center" method="get">
                                                <input type="email" name="email"  placeholder="Tradesperson's Email" required />
                                                <button type="submit" >
                                                    Invite
                                                </button>
                                                <input type="hidden" name="type" defaultValue="tradesperson" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4 user-name-box">
                                        <div>
                                            <div className="user-icons">
                                                {typeof profile!='undefined' && profile!=null && profile!="" ?
                                                    <img src={`${process.env.IMAGE_PATH}/images/${profile}`} alt="profile" />
                                                :<i className="fas fa-user-circle" aria-hidden="true" />}
                                            </div>
                                            <div className="user-name">
                                                {/* {localstorageItem!="undefined" ? localstorageItem:""} */}
                                                {/* {console.log(typeof localstorageItem)} */}
                                                <div>Name: {typeof localstorageItem!="undefined" && localstorageItem!=null? localstorageItem.name:""}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="start-boxs">
                                <div className="row">
                                    <PositiveRecommendation />
                                    <NegativeRecommendation />
                                    <RecommendedTradesperson />
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </Container>
        </section>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(secure)
