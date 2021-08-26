import React from 'react'
import Link from "next/link"
import { connect } from 'react-redux'

export const BusinessInfo = (props) => {
    return (
        <section className="content">
            <div className="container">
                <p className="h2">
                    <Link href="/tradespeople/handyplus">
                    <a  className="back black">
                        <i className="fa fa-chevron-circle-left" aria-hidden="true" /> Back to Profile
                    </a>
                    </Link>
                </p>
                <div className="contained shallow">
                    <div className="box white">
                        <div className="row">
                            <div className="onepointfive columns alpha tcenter">
                                <p className="mob-not-shallow shallow">
                                    <Link href="https://recommendandshare.com/media/cache/avatar_large/assets/images/generic-avatar.png">
                                    <a data-featherlight="image" className="avatar-link">
                                        <img src="https://recommendandshare.com/media/cache/avatar/assets/images/generic-avatar.png" className="full-width mob-max-width-50 avatar" />
                                    </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="tenpointfive columns">
                                <div className="contained semi-shallow">
                                    <div className="row">
                                        <div className="six columns alpha mob-tcenter">
                                            <p className="h3 shallow">
                                                <Link href="/tradespeople/handyplus">
                                                <a  className="black">
                                                    Handyplus
                                                </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="contained shallow">
                                    <div className="row">
                                        <div className="eight columns alpha bdr-right">
                                            <ul className="simple-data small shallow">
                                                <li>
                                                    <span className="title">Trade:</span> Electrician
                                                </li>
                                                <li>
                                                    <span className="title">Post Code:</span> SN2 5AA
                                                </li>{" "}
                                                <li>
                                                    <span className="title">Telephone:</span> 01793347727
                                                </li>{" "}
                                                <li>
                                                    <span className="title">Email Address:</span> steve@handyplus.co.uk
                                                </li>{" "}
                                            </ul>
                                        </div>
                                        <div className="four columns">
                                            <ul className="simple-data wider small shallow ">
                                                <li>
                                                    <span className="title">Date Joined:</span> 2020
                                                </li>
                                                <li
                                                    data-tip="
        Managed accounts are those maintained by a registered user. Unmanaged accounts are unclaimed by any user."
                                                    className="tipr"
                                                >
                                                    <span className="title">Managed account:</span> <span className="highlighted  on">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="title">Identify confirmed:</span> <span className="highlighted on">Yes</span>
                                                </li>
                                                <li>
                                                    <span className="title">Federation members:</span> <span className="highlighted off">No</span>
                                                </li>
                                                <li>
                                                    <span className="title">VAT registered:</span> <span className="highlighted off">No</span>
                                                </li>
                                                <li>
                                                    <span className="title">Public liability insurance:</span> <span className="highlighted on">Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contained shallow">
                    <div className="twelve columns alpha">
                        <h2 className=" tcenter">Leave a Recommendation for Handyplus</h2>
                        <div className="box white">
                            <div className="contained shallow">
                                <form method="post" action="/secure/tradespeople/handyplus/recommend">
                                    <div >
                                        <div className="form_row  text">
                                            <label htmlFor="feedback_text_recommendation" />
                                            <div className="field_container">
                                                <div className="displayText">
                                                    <p className="semi-shallow text-green">Leave a Positive Recommendation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="hidden" name="feedback[recommendation]" defaultValue={1} />
                                        <div className="form_row  text">
                                            <div className="field_container">
                                                <input type="text" name="feedback[title]" placeholder="Title" />
                                            </div>
                                        </div>
                                        <div className="form_row very-short text">
                                            <div className="field_container">
                                                <textarea name="feedback[review]" required="required" className="very-short" placeholder="Say something about your experience with this tradesperson" defaultValue={""} />
                                            </div>
                                        </div>
                                        <input type="hidden" name="feedback[_token]" defaultValue="My302e3CXN7lP_64QL1zTIc4dis9ov05IQAjlGwfkZU" />
                                    </div>
                                    <div className="buttons tcenter">
                                        <button type="submit">
                                            Share
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo)
