import React from 'react'
import Link from "next/link"
import { connect } from 'react-redux'
import { Container,
         Row,
         Col
} from "react-bootstrap"

export const champions = (props) => {
    return (
        <div>
            <section className="content">
                <Container>
                    <Row>
                        {/*twelve columns alpha*/}
                        <div className="contained" style={{marginTop : "5rem"}}>
                            {/* // ContentBlock ID: champions_page_intro // */}
                            <h1 style={{ textAlign: "center" }}>OUR CHAMPIONS</h1>
                            <p style={{ textAlign: "center" }}>
                                Merchants &amp; Suppliers who are showing their support, for a better
                                and safer environment for consumers and tradespeople.
                            </p>
                            <p style={{ textAlign: "center" }}>
                                Now launching out to all merchants and supplier sectors.
                            </p>
                            <p style={{ textAlign: "center" }}>
                                Current supporters from the electrical sector.
                            </p>
                            <h2 style={{ textAlign: "center" }}>Accreditation Services</h2>
                            <div className="table-container ">
                                <table border={0} align="center" className="wrapped">
                                    <tbody>
                                        <tr>
                                            <td width="30%">
                                                <img style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://www.napit.org.uk/img/napit-logo-2017.png"
                                                    alt="NAPIT"
                                                    width={153}
                                                />
                                            </td>
                                            <td>
                                                <p>NAPIT</p>
                                                <p>
                                                    <em>
                                                        “At NAPIT we pride ourselves on our transparent and
                                                        accessible approach to business, and our support of our
                                                        members. We have a continual focus on raising standards
                                                        and improving the recognition of NAPIT members within the
                                                        industry by promoting their competency. By supporting
                                                        Recommend &amp; Share, we feel we are offering a brand-new
                                                        platform for both our members and consumers to check the
                                                        history of recommendations before making a commitment. We
                                                        hope this will help towards achieving a safer industry for
                                                        all.”
                                                    </em>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>&nbsp;</p>
                            <h2 style={{ textAlign: "center" }}>Electrical Suppliers</h2>
                            <div className="table-container ">
                                <table border={0} align="center" className="wrapped">
                                    <tbody>
                                        <tr>
                                            <td width="30%">
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://www.lewelectrical.co.uk/wp-content/uploads/2018/09/25-years-web-logo-1-e1535977076747.png"
                                                    alt="LEW Electrical Distributors"
                                                />
                                            </td>
                                            <td>
                                                <p>LEW Electricals Distributors</p>
                                                <p>
                                                    <em>
                                                        “The Recommend &amp; Share platform offers transparency of
                                                        acceptable practices and standards, allowing both
                                                        consumers and installers to make informed choices before
                                                        making commitments to each other. LEW recognises the
                                                        positive value in social media engagement to achieve an
                                                        improved customer and installer experience int he home
                                                        improvement market. Recommend &amp; Share will help
                                                        transform the home improvement industry!”
                                                    </em>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://www.tlc-direct.co.uk/Graphics/tlc-logo.png"
                                                    alt="TLC Direct"
                                                    width={153}
                                                    height={74}
                                                />
                                            </td>
                                            <td>
                                                <p>TLC Direct</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://www.rexel.co.uk/medias/sys_Rexeluk/root/h8d/h7c/8809889529886/uki-logo.svg"
                                                    alt="Rexel"
                                                    width={153}
                                                    height={74}
                                                />
                                            </td>
                                            <td>
                                                <p>Rexeluk</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://04646a9cf351cc0d3888-b8b406d15fe93f790abb5bf0e9ab7ab3.ssl.cf3.rackcdn.com/assets/shared/cef-logo-9cc7809032305f119fd3e01aedf6f97b.svg"
                                                    alt="CEF"
                                                    width={153}
                                                    height={74}
                                                />
                                            </td>
                                            <td>
                                                <p>CEF</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="http://www.edmundson-electrical.co.uk/img/logo.png?1507289675"
                                                    alt="Edmundson"
                                                    width={153}
                                                />
                                            </td>
                                            <td>
                                                <p>Edmundson</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img
                                                    style={{
                                                        marginRight: "auto",
                                                        marginLeft: "auto",
                                                        display: "block"
                                                    }}
                                                    src="https://awebb.org.uk/wp-content/themes/awebb2019/dist/images/awebb-logo.svg"
                                                    alt="AWEBB"
                                                    width={153}
                                                />
                                            </td>
                                            <td>
                                                <p>AWEBB</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="join-community-box mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={11} className="mb-4 mb-lg-0">
                            <div className="garry-lewis">
                                <div className="garry-lewis-text">
                                    I’m now reaching out to all merchants and suppliers giving them the
                                    opportunity to show their support. If you would like to know more
                                    please do not hesitate to contact me on the link to my LinkedIn
                                    profile and I will contact you.
                                </div>
                                <div className="garry-lewis-light">
                                    Founder/ Tradesperson
                                    <br />
                                    <span>Garry Lewis</span>
                                </div>
                                <h3 className="garry-lewis-heading mb-0 pb-0 mt-4">
                                    WOULD YOU LIKE TO SHOW YOUR SUPPORT!
                                </h3>
                                <p>Click the link below and leave a message on my LinkedIn profile</p>
                                <a
                                    href="http://linkedin.com/in/recommendedtradespeople"
                                    className="join-community-btn"
                                    style={{
                                        width: "auto",
                                        display: "inline-block",
                                        padding: "6px 2em"
                                    }}
                                >
                                    CLICK HERE TO SHOW YOUR SUPPORT!
                                </a>
                                <div className="garry-lewis-image">
                                    <img src="/images/garry-lewis.png" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="swipe light-grey">
                <Container>
                    <Row>
                        {/*eight columns alpha offset-by-two*/}
                        <div className="contained">
                            {/* // ContentBlock ID: champions_page_logo_text // */}
                            <h2 style={{ textAlign: "center" }}>Use our logo</h2>
                            <p style={{ textAlign: "center" }}>
                                You can use our logo on your website to show your recommendations and
                                profile.
                            </p>
                        </div>
                        <div className="contained" id="html">
                            <p className="tcenter">
                                Are you a R&amp;S Tradesperson? If so{" "}
                                <Link href="/login?url=/champions.html%23embed"><a>log in</a></Link> to get your
                                personalised code.
                            </p>
                            <p className="code-block-title">Copy this HTML code:</p>
                            <div className="code-block" id="code_copy">
                                &lt;a href="https://recommendandshare.com/"&gt;&lt;img
                                src="https://recommendandshare.com/ras-logo.png" width="150"
                                height="50" style="margin:0 0 10px;" alt="Recommend &amp;amp; Share"
                                /&gt;&lt;/a&gt;&lt;br/&gt;Find a Tradesperson
                            </div>
                            <p className="tcenter">
                                <a
                                    href="#"
                                    
                                    className="button small copy-to-clip"
                                >
                                    Copy to Clipboard
                                </a>
                            </p>
                            <p className="tcenter shallow">
                                <Link href="https://recommendandshare.com/">
                                <a>
                                    <img
                                        src="https://recommendandshare.com/ras-logo.png"
                                        width={150}
                                        height={50}
                                        style={{ margin: "0 0 10px" }}
                                        alt="Recommend & Share"
                                    />
                                </a>
                                </Link>
                                <br />
                                Find a Tradesperson
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(champions)
