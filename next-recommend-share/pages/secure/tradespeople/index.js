import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

export const index = (props) => {
    return (
        <section className="content">
            <div className="container">
                <div className="twelve columns alpha">
                    <div className="contained">
                        <h1> Search Recommended Tradespeople</h1>
                        <div className="box white">
                            <form method="get" action="/tradespeople">
                                <div className="row">
                                    <div className="four columns alpha">
                                        <div className="form_row  choice">
                                            <label htmlFor="search_filter_trade">Trade Required</label>
                                            <div className="field_container">
                                                <div className="_select ">
                                                    <select
                                                        id="search_filter_trade"
                                                        name="search_filter[trade]"
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
                                                        <option value>Select a Trade</option>
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
                                                    <span>Select a Trade</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="four columns">
                                        <div className="form_row  text">
                                            <label htmlFor="search_filter_postcode">Your Postcode</label>
                                            <div className="field_container">
                                                <input type="text" id="search_filter_postcode" name="search_filter[postcode]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="four columns not-mobile">
                                        <div className="form_row">
                                            <label>&nbsp;</label>
                                            <p>Search recommended tradespeople near your address.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="four columns alpha">
                                        <div className="form_row  text">
                                            <label htmlFor="search_filter_name">Tradesperson / Business Name</label>
                                            <div className="field_container">
                                                <input type="text" id="search_filter_name" name="search_filter[name]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="four columns">
                                        <div className="form_row  text">
                                            <label htmlFor="search_filter_email">Email Address</label>
                                            <div className="field_container">
                                                <input type="text" id="search_filter_email" name="search_filter[email]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="four columns">
                                        <div className="form_row  text">
                                            <label htmlFor="search_filter_telephone">Phone Number</label>
                                            <div className="field_container">
                                                <input type="text" id="search_filter_telephone" name="search_filter[telephone]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons tright shallow">
                                    <Link>
                                    <a href="/tradespeople" className="button clear">
                                        <i className="fa fa-undo" aria-hidden="true" /> Reset
                                    </a>
                                    </Link>{" "}
                                    &nbsp;
                                    <button type="submit" className>
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contained">
                        <div className="table-container ">
                            <table className="wrapped">
                                <thead>
                                    <tr>
                                        <th className="avatar">&nbsp;</th>
                                        <th>
                                            <Link href="?s=name&d=desc">
                                            <a  className="sortable  asc">
                                                Name
                                            </a>
                                            </Link>
                                        </th>
                                        <th>
                                            <Link  href="?s=trade&d=desc">
                                            <a className="sortable  asc">
                                                Trade
                                            </a>
                                            </Link>
                                        </th>
                                        <th className="tcenter">
                                            <Link  href="?s=distance&d=desc">
                                            <a className="sortable sort asc">
                                                Distance
                                            </a>
                                            </Link>
                                        </th>
                                        <th className="tcenter">
                                            <Link href="?s=recommendation&d=desc">
                                            <a className="sortable  asc">
                                                Recommendations
                                            </a>
                                            </Link>
                                        </th>
                                        <th className="actions">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="avatar">
                                            <img src="https://recommendandshare.com/media/cache/avatar_small/assets/images/generic-avatar.png" alt="1ST CS" className="avatar" />
                                        </td>
                                        <td>
                                            <Link href="/tradespeople/1st-cs">
                                            <a >
                                                <strong>1ST CS</strong>
                                            </a>
                                            </Link>
                                        </td>
                                        <td>
                                            <strong>Traditional Craftsman</strong>
                                        </td>
                                        <td className="tcenter">-</td>
                                        <td className="tcenter">
                                            <strong>
                                                <span className="received good empty">
                                                    <i className="fa fa-check-circle-o fa-lg" aria-hidden="true" /> 0
                                                </span>
                                                <span className="received bad empty">
                                                    <i className="fa fa-times-circle-o fa-lg" aria-hidden="true" /> 0
                                                </span>
                                            </strong>
                                        </td>
                                        <td className="actions tright">                                            
                                                <Link href="/secure/tradespeople/recommend" className="button small">
                                                View
                                                </Link>
                                                                                       
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="contained pagination">
                        <ul>
                            <li>
                                <Link  href="#">
                                <a className="disabled">
                                    <i className="fa fa-arrow-left" aria-hidden="true" /> <span>Previous</span>
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tradespeople?page=1">
                                <a className="active">
                                    1
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link  href="/tradespeople?page=2">
                                <a className>
                                    2
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link  href="/tradespeople?page=3">
                                <a className>
                                    3
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tradespeople?page=4">
                                <a className>
                                    4
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tradespeople?page=5">
                                <a className>
                                    5
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link  href="/tradespeople?page=6">
                                <a className>
                                    6
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <a href="/tradespeople?page=7" className>
                                    7
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                <a href="/tradespeople?page=2" className>
                                    <i className="fa fa-arrow-right" aria-hidden="true" /> <span>Next</span>
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="tcenter semi-shallow">
                    Can't find a tradesperson to recommend? You can{" "}
                    <strong>
                        <Link>
                        <a href="/secure/tradespeople/invite?action=">invite one</a>
                        </Link>
                    </strong>{" "}
                    now.
                </p>
                <p className="tcenter ">
                    Are you a tradesperson? You can{" "}
                    <strong>
                        <Link>
                        <a href="/secure/tradespeople/create">add a business</a>
                        </Link>
                    </strong>{" "}
                    now for free.
                </p>
                <p className="tcenter">
                    <Link>
                    <a href="/secure/tradespeople/invite?action=" className="button light">
                        Invite Tradesperson
                    </a>
                    </Link>
                </p>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
