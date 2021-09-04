import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router';
import Link from "next/link"
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"
import { values } from 'lodash'

export const Tradepeoplecontent = (props) => {
    return (
        <section className="pt-3 pt-md-5">
            <Container>
                <div className="rogue-traders-box">
                    <Row>
                        <Col md={12}>
                            <h3 className="all-blue-heading">
                                tradespeople need more help &amp; support{" "}
                            </h3>
                            <p className="all-gray-text">
                                Being a tradesperson and running a business is more than a full time
                                job and in the majority of cases there are not enough hours in a day
                                to get everything done. This later impacts our business, adding more
                                pressure to everyday life, and as a result we don’t enjoy our work
                                anymore.
                                <br />
                                <br />
                                These statistics clearly show that things have got to CHANGE!
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export const IconsDetails = (props) => {
    return (
        <section>
            <Container className="tradespeople-uk-faces">
                <Row className="my-3 my-md-5 border-bottom border-top border-2 py-4">
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-sort-amount-down-alt" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            UK faces growing skilled tradespeople crisis as tradespeople are
                            choosing other professions.
                        </p>
                    </Col>
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-pound-sign" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            SMEs face £40 billion a year in unpaid invoices. Prompt payment is an
                            ethical issue.
                        </p>
                    </Col>
                </Row>
                <Row className="my-3 my-md-5 border-bottom border-top border-2 py-4">
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-heartbeat" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            The construction industry has the highest rate of suicides than any
                            other profession.
                        </p>
                    </Col>
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-chart-line" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            The number of failures within the UK’s construction sector increased
                            by 73% in 2018.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
export const CustomersContractors = (props) => {
    return (
        <section>
            <Container className="mb-3 mb-md-5">
                <div>
                    <h4 className="all-blue-heading">
                        rogue customers &amp; sub contractors
                    </h4>
                    <p className="all-gray-text">
                        I believe rogue customers and sub contractors who don’t pay, or pay
                        late, should be
                        <strong> EXPOSED</strong> in order to warn other tradespeople. This will
                        make it
                        <strong>DIFFICULT</strong> for them to operate and make them accountable
                        for their actions.
                    </p>
                </div>
                <div className="mt-3 mt-md-5">
                    <h4 className="all-blue-heading">rogue traders </h4>
                    <p className="all-gray-text">
                        Whilst rogue traders are the minority, their actions do have a
                        devastating impact on our industry and our livelihoods as they create a
                        <strong>NEGATIVE</strong> environment that affects us all.
                    </p>
                </div>
            </Container>
        </section>

    )
}

export const IconDetails2 = (props) => {
    return (
        <section>
            <Container className="tradespeople-uk-faces">
                <Row className="my-3 my-md-5 border-bottom border-top border-2 py-4">
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-coins" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            Rogue traders cost UK homeowners £1.9 billion a year in botched jobs.
                        </p>
                    </Col>
                    <Col md={6}>
                        <p className="all-gray-text all-icons-color">
                            <i className="fas fa-hat-cowboy" aria-hidden="true" />
                        </p>
                        <p className="all-gray-text">
                            Cowboy builders cost the UK economy around £10 billion a year in lost
                            revenue.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export const UserCard = (props) => {

    const { query } = useRouter();
    const Name = query.tradepeopleName
    var Options = props.details
    var IconsView = props.IconOption
    return (
        <>
            <Row>
                <div className="onepointfive columns alpha tcenter">
                    <p className="mob-not-shallow shallow">
                        <Link
                            href="https://recommendandshare.com/media/cache/avatar_large/assets/images/generic-avatar.png"
                            data-featherlight="image"
                            className="avatar-link"
                        >
                            <img
                                src="https://recommendandshare.com/media/cache/avatar/assets/images/generic-avatar.png"
                                className="full-width mob-max-width-50 avatar"
                            />
                        </Link>
                    </p>
                </div>
                <div className="tenpointfive columns">
                    <div className="contained semi-shallow">
                        <Row>
                            <div className="six columns alpha mob-tcenter ">
                                <p className="h3 shallow">
                                    <Link href={props.title_href} className="black">
                                        {props.title}
                                    </Link>
                                </p>
                            </div>
                        </Row>
                    </div>
                    <div className="contained shallow">
                        <Row>
                            <div className="eight columns alpha bdr-right">
                                <ul className="simple-data small shallow">
                                    {/* {console.log(Options)}  */}
                                    {Options.map((values) =>
                                        <li>
                                            <span className="title" key={"_key" + values.option} >{values.option}</span>{values.value}
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="four columns">
                                <ul className="simple-data wider small shallow ">
                                    {IconsView.map((values) =>
                                        values.title == 'Date Joined:' ?
                                            <li>
                                                <span className="title">{values.title}</span>{values.value}
                                              </li>
                                            : values.title == 'Federation members:' ?
                                            <li className="tipr">
                                                <span className="title">{values.title}</span>{" "}
                                                <span className={values.value > 0 ? "highlighted on" : "highlighted off"}>{values.value > 0 ?  'yes' : 'no'}</span>
                                            </li>
                                            :                                        
                                            <li className="tipr">
                                                <span className="title">{values.title}</span>{" "}
                                                <span className={values.value == '1' ? "highlighted on" : "highlighted off"}>{values.value == 1 ?  'yes' : 'no'}</span>
                                            </li>                                           
                                            
                                    )}

                                </ul>
                            </div>
                        </Row>
                    </div>
                </div>
            </Row>
        </>
    )
}

export const ColorBox = (props) => {
    // console.log("color box==>",props)
    var values = props.value
    console.log(values[0])
    
    return (
        <a
            href="/tradespeople/1st-cs/activity?type=recommendations"
            className={`box ${props.color} rounded less semi-shallow`}
        >
            {values.map((value)=>
            <span className="huge shallow">{value.data}</span>
            )}
            <br />
            <span className="tiny shallow">{props.caption}</span>
        </a>
    )
}

export default connect(null, null)(Tradepeoplecontent, IconsDetails, CustomersContractors, IconDetails2, UserCard, ColorBox)
