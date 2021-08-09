import React from 'react'
import { connect } from 'react-redux'

export const secure = (props) => {
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
                                                <div>Name: sam</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="start-boxs">
                                <div className="row">
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="start-box positive-box">
                                            <div className="power-heading">
                                                <i className="fas fa-thumbs-up" aria-hidden="true" />
                                                <h3>Leave a Positive Recommendation</h3>
                                            </div>
                                            <p className="start-text">If you've had a great experience with a tradesperson, you can leave them a positive recommendation here.</p>
                                            <form action="/tradespeople" className="dashboard-form shallow" method="get">
                                                <div className="start-customer-name">
                                                    <i className="fas fa-search" aria-hidden="true" />
                                                    <input type="text" name="search_filter[name]" placeholder="Business Name" />
                                                </div>
                                                <div className="start-btn">
                                                    <button type="submit">Start</button>
                                                    <input type="hidden" name="action" defaultValue="recommend" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="start-box negative-box">
                                            <div className="power-heading">
                                                <i className="fas fa-thumbs-down" aria-hidden="true" />
                                                <h3>Leave a Negative Recommendation</h3>
                                            </div>
                                            <p className="start-text">If your experience with a tradesperson left something to be desired, you can leave them a negative recommendation here.</p>
                                            <form action="/tradespeople" className="dashboard-form shallow" method="get">
                                                <div className="start-customer-name">
                                                    <i className="fas fa-search" aria-hidden="true" />
                                                    <input type="text" name="search_filter[name]" placeholder="Business Name" />
                                                </div>
                                                <div className="start-btn">
                                                    <button type="submit">Start</button>
                                                    <input type="hidden" name="action" defaultValue="warn" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3 mb-lg-0">
                                        <div className="start-box">
                                            <div className="search-box power-heading">
                                                <img src="/assets/images/search-icon.png" />
                                                <h3>Search a Recommended Tradesperson</h3>
                                            </div>
                                            <p className="start-text">If you're looking for a specific tradesperson in the Recommend &amp; Share community, you can search for them here.</p>
                                            <form action="/tradespeople" className="dashboard-form shallow" method="get">
                                                <div className="start-customer-name">
                                                    <i className="fas fa-search" aria-hidden="true" />
                                                    <input type="text" name="search_filter[name]" placeholder="Business Name" />
                                                </div>
                                                <div className="start-customer-name">
                                                    <div className="_select ">
                                                        <select
                                                            name="search_filter[trade]"
                                                            id="sel123"
                                                            className="_select_input ready"
                                                            style={{
                                                                opacity: 0,
                                                                cursor: "pointer",
                                                                position: "absolute",
                                                                width: "99.9%",
                                                                height: "100%",
                                                                top: 0,
                                                                right: 0,
                                                            }}
                                                        >
                                                            <option value>Select a trade</option>
                                                            <option value={40}>Architecture</option>
                                                            <option value={21}>Bathroom Fitter</option>
                                                            <option value={22}>Blacksmith / Metal Worker</option>
                                                            <option value={23}>Bricklayer</option>
                                                            <option value={24}>Builder</option>
                                                            <option value={8}>Carpenter / Joiner</option>
                                                            <option value={9}>Carpet and Flooring</option>
                                                            <option value={20}>CCTV / Satellites / Alarms</option>
                                                            <option value={41}>Chimney</option>
                                                            <option value={25}>Cleaner</option>
                                                            <option value={43}>Conversions</option>
                                                            <option value={44}>Damp Proofing</option>
                                                            <option value={45}>Decking</option>
                                                            <option value={26}>Drainage Specialist</option>
                                                            <option value={10}>Driveway Pavers</option>
                                                            <option value={3}>Electrician</option>
                                                            <option value={46}>Extensions</option>
                                                            <option value={52}>Facias/Soffits/Gutters</option>
                                                            <option value={11}>Fencing</option>
                                                            <option value={47}>Fireplace</option>
                                                            <option value={27}>Floor Fitters</option>
                                                            <option value={48}>Garage Remodelling</option>
                                                            <option value={12}>Gardening and Landscaping</option>
                                                            <option value={49}>Gas Work</option>
                                                            <option value={28}>Handyman</option>
                                                            <option value={50}>Insulation</option>
                                                            <option value={13}>Kitchen Specialist</option>
                                                            <option value={29}>Locksmith</option>
                                                            <option value={30}>Loft Conversion Specialist</option>
                                                            <option value={55}>Machinery Repairs</option>
                                                            <option value={51}>Mechanic</option>
                                                            <option value={54}>Metal Machinist</option>
                                                            <option value={56}>Multi Trade</option>
                                                            <option value={6}>Other Trades</option>
                                                            <option value={5}>Painter and Decorator</option>
                                                            <option value={31}>Pest Control</option>
                                                            <option value={1}>Plasterer / Renderer</option>
                                                            <option value={15}>Plumbing and Heating</option>
                                                            <option value={32}>Removal</option>
                                                            <option value={16}>Roofing</option>
                                                            <option value={17}>Scaffolding</option>
                                                            <option value={33}>Security Systems / Alarms</option>
                                                            <option value={35}>Stoneworker / Stonemason</option>
                                                            <option value={36}>Swimming Pool Specialist</option>
                                                            <option value={37}>Tiler</option>
                                                            <option value={38}>Traditional Craftsman</option>
                                                            <option value={39}>Tree Surgeon</option>
                                                            <option value={53}>Welder/Fabricator</option>
                                                            <option value={18}>Windows and Doors / Conservatory Installer</option>
                                                        </select>
                                                        <a className="caret" />
                                                        <span>Select a trade</span>
                                                    </div>
                                                </div>
                                                <div className="start-btn">
                                                    <button type="submit">Start</button>
                                                    <input type="hidden" name="search_filter[postcode]" defaultValue="M32BY" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
