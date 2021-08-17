import React , { useEffect,useState }  from 'react'
import { connect } from 'react-redux'
import { NegativeRecommendation, PositiveRecommendation, RecommendedTradesperson } from '../../components/Secure/SearchBox'

export const secure = (props) => {

    const [localstorageItem, setLocalStorageItem] = useState()
   
    useEffect(() => {
        
        const interval = setInterval(() => {
            setLocalStorageItem(JSON.parse(localStorage.getItem('Recommend_Share_current_user')));
        }, 1000);
        return () => clearInterval(interval);
    }, [setLocalStorageItem])   

    return (
        <section className="content">
            <div className="container">
                <div className="profile-page">
                    <section className="profile-page-image">
                        <img src="/images/consumer_login.jpg" />
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
                                                    <a href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity?type=recommendations" className>
                                                        <div className="recieved-number-1">0</div>
                                                        <div className="recieved-text">Positive Recommendation</div>
                                                    </a>
                                                </div>
                                                <div className="col-md-6 text-center text-md-start">
                                                    <a href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity?type=warnings" className>
                                                        <div className="recieved-number-2">0</div>
                                                        <div className="recieved-text">Negative Recommendation</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h3 className="recieved-heading">Given</h3>
                                            <div className="row">
                                                <div className="col-md-6 text-center mb-3 mb-md-0 text-md-start">
                                                    <a href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity/given?type=recommendations" className>
                                                        <div className="recieved-number-1">0</div>
                                                        <div className="recieved-text">Positive Recommendation</div>
                                                    </a>
                                                </div>
                                                <div className="col-md-6 text-center text-md-start">
                                                    <a href="/secure/customers/608-45de82f7502c3a8657e3b9923e26e8f8/activity/given?type=warnings" className>
                                                        <div className="recieved-number-2">0</div>
                                                        <div className="recieved-text">Negative Recommendation</div>
                                                    </a>
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
                                                <input type="email" name="email" id="customer-email" placeholder="Tradesperson's Email" required />
                                                <button type="submit" id="invite-btn">
                                                    Invite
                                                </button>
                                                <input type="hidden" name="type" defaultValue="tradesperson" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4 user-name-box">
                                        <div className>
                                            <div className="user-icons">
                                                <img src="https://recommendandshare.com/media/cache/avatar/uploads/customers/sam-avatar-1626495954.png" alt="sam" />
                                                <i className="fas fa-user-circle" aria-hidden="true" />
                                            </div>
                                            <div className="user-name">
                                                {/* {localstorageItem!="undefined" ? localstorageItem:""} */}
                                                <div>Name: {typeof localstorageItem!="undefined" ? localstorageItem.name:""}</div>
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
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(secure)
