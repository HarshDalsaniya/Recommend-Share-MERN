import React, { useState } from 'react'
import Link from "next/link"
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../Form-Fields/Fields';
import { useUrlSearchParams } from 'use-url-search-params';

export const EditProfile = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [age_group, setAge_group] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [address_postcode, setAddress_postcode] = useState('');
    const [address_line_1, setAddress_line_1] = useState('');
    const [address_line_2, setAddress_line_2] = useState('');
    const [address_town, setAddress_town] = useState('');
    const [address_county, setAddress_county] = useState('');
    const [tradespeopleName, setTradespeopleName] = useState('');
    const [tradespeopleTrade, settradespeopleTrade] = useState('');
    const [onClickChackbox1, setOnClickChackbox1] = useState(false);
    const [onClickChackbox2, setOnClickChackbox2] = useState(false);    
    const [submitted, setSubmitted] = useState(false);
    const [params, setParams] = useUrlSearchParams()
    return (
        <Container>
            <div className="contained editprofiletitle">
                <div className="twelve columns alpha">
                    <h1>Your Account</h1>
                    <p>Your account details, profile image and identity status can be updated below.</p>
                    <div className="eight columns alpha edit_form_title">
                        <h2>Account Details</h2>

                        <div className="box  white">
                            <Row>
                                <form style={ { width: "476px" } }>
                                    <div className="contained">
                                        { typeof params.type != "undefined" && params.type == "tradesperson" ?
                                            <>
                                                <h3>Business Details</h3>
                                                <Fields
                                                    field="text"
                                                    fieldLabel="Business Name"
                                                    fieldName="tradespeopleName"
                                                    fieldValue={ tradespeopleName }
                                                    fieldAction={ setName }
                                                    fieldValidation={ [submitted, tradespeopleName,] }
                                                />
                                                <Fields
                                                    field="select"
                                                    fieldLabel="Select a Trade"
                                                    fieldName="tradespeopleTrade"
                                                    fieldOption={ [
                                                        "Select a Trade",
                                                        "Architecture",
                                                        "Bathroom Fitter",
                                                        "Blacksmith / Metal Worker",
                                                        "Bricklayer",
                                                        "Builder",
                                                        "Carpenter / Joiner",
                                                        "Carpet and Flooring",
                                                        "CCTV / Satellites / Alarms",
                                                        "Chimney",
                                                        "Cleaner",
                                                        "Conversions",
                                                        "Damp Proofing",
                                                        "Decking",
                                                        "Drainage Specialist",
                                                        "Driveway Pavers",
                                                        "Electrician",
                                                        "Extensions",
                                                        "Facias/Soffits/Gutters",
                                                        "Fencing",
                                                        "Fireplace",
                                                        "Floor Fitters",
                                                        "Garage Remodelling",
                                                        "Gardening and Landscaping",
                                                        "Gas Work",
                                                        "Handyman",
                                                        "Insulation",
                                                        "Kitchen Specialist",
                                                        "Locksmith",
                                                        "Loft Conversion Specialist",
                                                        "Machinery Repairs",
                                                        "Mechanic",
                                                        "Metal Machinist",
                                                        "Multi Trade",
                                                        "Other Trades",
                                                        "Painter and Decorator",
                                                        "Pest Control",
                                                        "Plasterer / Renderer",
                                                        "Plumbing and Heating",
                                                        "Removal",
                                                        "Roofing",
                                                        "Scaffolding",
                                                        "Security Systems / Alarms",
                                                        "Stoneworker / Stonemason",
                                                        "Swimming Pool Specialist",
                                                        "Tiler",
                                                        "Traditional Craftsman",
                                                        "Tree Surgeon",
                                                        "Welder/Fabricator",
                                                        " Windows and Doors / Conservatory Installer"
                                                    ] }
                                                    fieldValue={ ["", "40", "21", "22", "23", "24", "8", "9", "20", "41", "25", "43", "44", "45", "26", "10", "3", "46", "52", "11", "47", "27", "48", "12", "49", "28", "50", "13", "29", "30", "55", "51", "54", "56", "6", "5", "31", "1", "15", "32", "16", "17", "33", "35", "36", "37", "38", "39", "53", "18"] }
                                                    fieldAction=""
                                                    fieldValidation={ [submitted, businessName,] }
                                                />
                                            </>
                                            : null }
                                    </div>
                                    <div className="contained">
                                        <Row>
                                            <Col md={ 6 }>
                                                <h3>Your Details</h3>
                                                <Fields
                                                    field="text"
                                                    fieldLabel="Full Name"
                                                    fieldName="name"
                                                    fieldValue={ name }
                                                    fieldAction={ setName }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="email"
                                                    fieldLabel="Email Address"
                                                    fieldName="email"
                                                    fieldValue={ email }
                                                    fieldAction={ setEmail }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="numeric"
                                                    fieldLabel="Telephone"
                                                    fieldName="telephone"
                                                    fieldValue={ telephone }
                                                    fieldAction={ setTelephone }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="numeric"
                                                    fieldLabel="Mobile Telephone"
                                                    fieldName="mobile"
                                                    fieldValue={ mobile }
                                                    fieldAction={ setMobile }
                                                />
                                                <Fields
                                                    field="select"
                                                    fieldLabel="Age Group"
                                                    fieldName="age_group"
                                                    fieldOption={ ["16-24", "25-34", "35-44", "44-55", "56-64", "65+"] }
                                                    fieldValue={ age_group }
                                                    fieldAction={ setAge_group }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="email"
                                                    fieldLabel="Password"
                                                    fieldName="password"
                                                    fieldValue={ password }
                                                    fieldAction={ setPassword }
                                                />
                                                <Fields
                                                    field="email"
                                                    fieldLabel="Confirm Password"
                                                    fieldName="confirm_password"
                                                    fieldValue={ confirm_password }
                                                    fieldAction={ setConfirm_password }
                                                />
                                            </Col>
                                            <Col md={ 6 }>
                                                <h3>Your Address</h3>
                                                <Fields
                                                    field="inputGroupTextButton"
                                                    fieldLabel="Postcode"
                                                    fieldName="address_postcode"
                                                    buttonValue="LOOKUP"
                                                    fieldValue={ address_postcode }
                                                    fieldAction={ setAddress_postcode }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="text"
                                                    fieldLabel="Address Line 1"
                                                    fieldName="address_line_1"
                                                    fieldValue={ address_line_1 }
                                                    fieldAction={ setAddress_line_1 }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="text"
                                                    fieldLabel="Address Line 2"
                                                    fieldName="address_line_2"
                                                    fieldValue={ address_line_2 }
                                                    fieldAction={ setAddress_line_2 }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="text"
                                                    fieldLabel="Town"
                                                    fieldName="address_town"
                                                    fieldValue={ address_town }
                                                    fieldAction={ setAddress_town }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                                <Fields
                                                    field="text"
                                                    fieldLabel="County"
                                                    fieldName="address_county"
                                                    fieldValue={ address_county }
                                                    fieldAction={ setAddress_county }
                                                     fieldValidation={ [submitted, businessName,] }
                                                />
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="contained">
                                        <div className="row">
                                            <div className="twelve columns alpha">
                                                <h3>Notification Preferences</h3>
                                                <div className="form_row  checkbox">
                                                    <div className="field_container">
                                                        <div className="_checkbox  on  ">
                                                            <input
                                                                type="checkbox"
                                                                id="profile_notification_received_email"
                                                                name="profile[notification_received_email]"
                                                                defaultValue={ 1 }
                                                                defaultChecked="checked"
                                                                className="_checkbox_input ready"
                                                                style={ {
                                                                    opacity: 0,
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    right: "-50px"
                                                                } }
                                                            />
                                                        </div>
                                                        <label className="sub" htmlFor="profile_notification_received_email">
                                                            Receive an Email when you receive a recommendation.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form_row  checkbox">
                                                    <div className="field_container">
                                                        <div className="_checkbox  on  ">
                                                            <input
                                                                type="checkbox"
                                                                id="profile_notification_received_sms"
                                                                name="profile[notification_received_sms]"
                                                                defaultValue={ 1 }
                                                                defaultChecked="checked"
                                                                className="_checkbox_input ready"
                                                                style={ {
                                                                    opacity: 0,
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    right: "-50px"
                                                                } }
                                                            />
                                                        </div>
                                                        <label className="sub" htmlFor="profile_notification_received_sms">
                                                            Receive an SMS when you receive a recommendation.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form_row  checkbox">
                                                    <div className="field_container">
                                                        <div className="_checkbox  on  ">
                                                            <input
                                                                type="checkbox"
                                                                id="profile_notification_marketing_email"
                                                                name="profile[notification_marketing_email]"
                                                                defaultValue={ 1 }
                                                                defaultChecked="checked"
                                                                className="_checkbox_input ready"
                                                                style={ {
                                                                    opacity: 0,
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    right: "-50px"
                                                                } }
                                                            />
                                                        </div>
                                                        <label className="sub" htmlFor="profile_notification_marketing_email">
                                                            Receive R&amp;S Marketing Emails.
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>                               



                                    <div className="buttons tcenter">
                                        <Button type="submit" className="light big">Save Details</Button>
                                    </div>
                                    <input type="hidden" name="_target_path" value="/"></input>
                                </form>
                                <div className="four columns">
                            <div className="contained shallow">
                                <h2>Confirm Your Identity</h2>
                                <div className="box white">
                                    <p className="smaller shallow">
                                        Your identity is <span className="highlighted on">verified</span>
                                    </p>
                                </div>
                            </div>
                            <div className="contained">
                                <h2>Profile Image</h2>
                                <div className="box white">
                                    <form method="post" action="/profile/image" encType="multipart/form-data">
                                        <p className="semi-shallow tcenter">
                                            <a
                                                href="https://recommendandshare.com/media/cache/resolve/avatar_large/uploads/customers/sam-avatar-1626495954.png"
                                                data-featherlight="image"
                                                className="avatar-link"
                                            >
                                                <img
                                                    src="https://recommendandshare.com/media/cache/avatar/uploads/customers/sam-avatar-1626495954.png"
                                                    className="avatar avatar-selector"
                                                />
                                            </a>
                                        </p>
                                        <div id="profile_image">
                                            <div className="form_row  file">
                                                <div className="field_container">
                                                    <div
                                                        className="fileinput single"
                                                        id="profile_image_temp_image_fi_parent"
                                                    >
                                                        <a href="#" className="button white ">
                                                            Browse
                                                        </a>
                                                        <input
                                                            type="file"
                                                            id="profile_image_temp_image"
                                                            name="profile_image[temp_image]"
                                                        />
                                                        <span
                                                            className="helptext psuedoinput"
                                                            id="profile_image_temp_image_helptext"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="hidden"
                                                id="profile_image__token"
                                                name="profile_image[_token]"
                                                defaultValue="GGvVVYwy1tvVB9ex8MlFd_z_7p9MR0PpZWIHo4d5jxw"
                                            />
                                        </div>
                                        <div className="buttons ">
                                            <a
                                                href="/profile/image/clear"
                                                className="confirm button small light fleft"
                                            >
                                                Clear
                                            </a>
                                            
                                            <button type="submit" className>
                                                Upload
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                            </Row>
                        </div>
                        

                    </div>
                </div>






            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
