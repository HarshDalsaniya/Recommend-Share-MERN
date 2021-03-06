import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Link from "next/link"
import {
    Container,
    Row,
    Col,
    Button,
    Form
} from "react-bootstrap"
import Fields from '../../../components/Form-Fields/Fields';
import axios from 'axios'
import { formFieldValidation } from "../../../services/formValidation"
import { tradesPeopleRegister } from "../../../redux/bussiness/action"
import { userTradeBussines } from '../../../redux/bussiness/action'
import { tradOption } from '../../../redux/treadspeople/action';
export default function tradespeople(props){



    const reState = useSelector(state => state);
    const { error, tradespeople } = reState.businessReducer;
    const { tradeOptions } = reState.tradePeople;
    const dispatch = useDispatch();
    const [businessName, setBusinessName] = useState('Makadiya LTD');
    const [established, setEstablished] = useState([]);
    const [companyNo, setcompanyName] = useState('004654563');
    const [trade, setTrade] = useState('');
    const [ownerName, setOwnerName] = useState('Maulik');
    const [email, setEmailAddress] = useState(typeof tradesPeople!='undefined' ?tradepeople.email:(localStorage.getItem("Recommend_Share_current_user")?JSON.parse(localStorage.getItem("Recommend_Share_current_user")).email:null));
    const [webSite, setWebSite] = useState('droptechnolab.com');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('9714220411');
    const [address_postcode, setAddress_postcode] = useState('SR8 3HT');
    const [postCodeError, setPostCodeError] = useState('')
    const [select_postcode, setSelectPostcode] = useState('');
    const [address_line_1, setAddress_line_1] = useState('24 Hazel Crescent');
    const [address_line_2, setAddress_line_2] = useState('');
    const [address_town, setAddress_town] = useState('Peterlee');
    const [address_county, setAddress_country] = useState('uk');
    const [federationValue, setFederationValue] = useState([]);
    const [federation, setFederationOption] = useState([]);
    const [vat_registered, setVat_Register] = useState(typeof tradespeople != "undefined" ? tradespeople.vat_registered : false);
    const [liability_insurance, setLiability_Insurance] = useState(typeof tradespeople != "undefined" ? tradespeople.liability_insurance : false);
    const [notification_received_email, setNotification_received_email] = useState(typeof tradespeople!="undefined"?tradespeople.notification_received_email:true);
    const [notification_received_sms, setNotification_received_sms] = useState(typeof tradespeople!="undefined"?tradespeople.notification_received_sms:true);
    const [notification_marketing_email, setNotification_marketing_email] = useState(typeof tradespeople!="undefined"?tradespeople.notification_marketing_email:true);
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        dispatch(tradOption());
        axios.get(`http://localhost:4000/api/business/federation`)
            .then((res) => {
                const Federation = [];
                res.data.data.map((value) => {
                    Federation.push({ value: value.id, title: value.name })
                })
                setFederationOption(Federation)
            })
    }, [setFederationOption, tradeOptions == null])
    tradeOptions.sort(function (a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        }
        return 0;
    })
    const getAddress = async () => {
        try {
            if (address_postcode != '' && address_postcode.match(/^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/)) {
                await axios.get(`https://api.getaddress.io/find/${address_postcode}?api-key=xR5ryKXzb0SevSwn3OX7VQ31904`)
                    .then((res) => {
                        // console.log(res)
                        setSelectPostcode(res.data.addresses)
                    })
            }else{
                setPostCodeError("Please Valid Post Code Enter")
            }
            
        } catch (err) {
            setPostCodeError("Please Valid Post Code Enter")
        }
    }
    // console.log(federation)
    const putAddress = (value) => {
        setAddress_line_1(value.split(',')[0])
        setAddress_line_2(value.split(',')[1])
        setAddress_town(value.split(',')[5])
        setSelectPostcode('')
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        setSubmitted(true)
        // console.log(federation)
        const date=established.year!=(true||"undefined") && established.month!=(true||"undefined") && established.day!=(true||"undefined")? (established.year + "-" + established.month + "-" + established.day).match(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/)!=null?(established.year + "-" + established.month + "-" + established.day):null:null;
        if (businessName != "" && ownerName != "" && email != "" && mobileNumber != "" && trade != "" && notification_received_sms!=false && notification_received_email != false && notification_marketing_email != false && postCodeError=="") {
            const tradepersonData = {
                trade_id: trade,
                created: null,
                updated: null,
                name: businessName,
                email: email,
                telephone: phoneNumber,
                mobile: mobileNumber,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                address_town: address_town,
                address_county: address_county,
                address_postcode: address_postcode,
                established: date,
                company_number: companyNo,
                website: webSite,
                vat_registered: vat_registered,
                insured: liability_insurance,
                verify_date: null,
                verify_code: null,
                verified: 1,
                image: null,
                latitude: null,
                longitude: null,
                slug: businessName.toLowerCase().replace(' ', '-'),
                notification_received_sms: notification_received_sms,
                notification_received_email: notification_received_email,
                confirm_date: null,
                confirm_code: null,
                owner_name: ownerName,
                notification_marketing_email: notification_marketing_email,
                federation_id: federationValue
            }
            await dispatch(tradesPeopleRegister(tradepersonData))
            await dispatch(userTradeBussines(localStorage.getItem("Recommend_Share_current_user") == null ? '' : JSON.parse(localStorage.getItem("Recommend_Share_current_user")).id))
        }
    }

    const col2 = [
        {
            field: "text",
            fieldLabel: "Address Line 1",
            fieldName: "address_line_1",
            fieldValue: address_line_1,
            fieldAction: setAddress_line_1,
            fieldValidation: [submitted, address_line_1, formFieldValidation(error, "address_line_1", address_line_1)]
        },
        {
            field: "text",
            fieldLabel: "Address Line 2",
            fieldName: "address_line_2",
            fieldValue: address_line_2,
            fieldAction: setAddress_line_2,
            fieldValidation: [submitted]
        },
        {
            field: "text",
            fieldLabel: "Town",
            fieldName: "address_town",
            fieldValue: address_town,
            fieldAction: setAddress_town,
            fieldValidation: [submitted, address_town, formFieldValidation(error, "address_town", address_town)]
        },
        {
            field: "text",
            fieldLabel: "Country",
            fieldName: "address_county",
            fieldValue: address_county,
            fieldAction: setAddress_country,
            fieldValidation: [submitted, address_county, formFieldValidation(error, "address_county", address_county)]
        }
    ]
    //   dayLoop 
    var daysOfMonth = [];
    for (var d = 1; d <= 31; d++) {
        if (d < 10) {
            daysOfMonth.push('0' + d);
        } else {
            daysOfMonth.push(d);
        }
    }
    // Month Array
    var monthOfYear = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    // Year Loop   
    const Years = [];
    var D = new Date();
    var n = D.getFullYear();
    for (var y = 1901; y <= n; y++) {
        Years.push(y);
    }



    return (
        <React.StrictMode>
        <div className="login-body pt-3">
            <section className="" style={ { marginTop: "5rem" } }>
                <Container>
                    <div className="twelve columns alpha">
                        <div className="contained tradeperson-heading">
                            <h1>Create a Business Listing</h1>
                            <p>Your new business details, profile image and address can be set below.</p>
                            <form onSubmit={ onSubmit }>
                                <div className="eight columns alpha tradeperson-heading">
                                    <h2>Business Details</h2>
                                    <div className="box white">
                                    {/* {typeof error.verifyError != 'undefined' && error.verifyError != '' ?
                                        <div className="help-block mb-2" style={{ color: 'red' }}>{error.verifyError.userError}</div>
                                    : null} */}
                                        <div className="contained shallow">
                                            <Row>
                                                <div className="six columns alpha">
                                                    <Fields
                                                        key="field_businessName"
                                                        field="text"
                                                        fieldLabel="Business Name"
                                                        fieldName="businessName"
                                                        fieldValue={ businessName }
                                                        fieldAction={ setBusinessName }
                                                        fieldValidation={ [submitted, businessName, formFieldValidation(error, "name", businessName)] }
                                                    />
                                                    <div className="form_row  date">
                                                        <label>Established date</label>
                                                        <div className="field_container">
                                                            <div>
                                                                <div className="_select ">
                                                                    <select                                                                        
                                                                        name="established"
                                                                        className="_select_input ready"
                                                                        value={ established[0] }
                                                                        onChange={ (e) => setEstablished({ ...established, day: e.target.value }) }
                                                                        defaultValue=""
                                                                        style={ {
                                                                            opacity: 1,
                                                                            cursor: "pointer",
                                                                            position: "absolute",
                                                                            width: "99.9%",
                                                                            height: "100%",
                                                                            top: 0,
                                                                            right: 0
                                                                        } }
                                                                    >
                                                                        <option value="">Day</option>
                                                                        { daysOfMonth.map((day) =>
                                                                            <option key={ "day_" + day } value={ day }>{ day }</option>
                                                                        ) }

                                                                    </select>
                                                                    <span>Day</span>
                                                                </div>
                                                                <div className="_select">
                                                                    <select
                                                                      
                                                                        name="acdo_systembundle_tradesperson[established][month]"
                                                                        className="_select_input ready"
                                                                        value={ established[1] }
                                                                        onChange={ (e) => { setEstablished({ ...established, month: e.target.value }) } }
                                                                        defaultValue=""
                                                                        style={ {
                                                                            opacity: 1,
                                                                            cursor: "pointer",
                                                                            position: "absolute",
                                                                            width: "99.9%",
                                                                            height: "100%",
                                                                            top: 0,
                                                                            right: 0
                                                                        } }
                                                                    >
                                                                        <option value="">Month</option>
                                                                        { monthOfYear.map((month) =>
                                                                            <option key={ "month_" + month } value={ month }>{ month }</option>
                                                                        ) }
                                                                    </select>
                                                                    <span>Month</span>
                                                                </div>
                                                                <div className="_select">
                                                                    <select
                                                                     
                                                                        name="acdo_systembundle_tradesperson[established][year]"
                                                                        className="_select_input ready"
                                                                        value={ established[2] }
                                                                        onChange={ (e) => { setEstablished({ ...established, year: e.target.value }) } }
                                                                        defaultValue=""
                                                                        style={ {
                                                                            opacity: 1,
                                                                            cursor: "pointer",
                                                                            position: "absolute",
                                                                            width: "99.9%",
                                                                            height: "100%",
                                                                            top: 0,
                                                                            right: 0
                                                                        } }
                                                                    >
                                                                        <option value="">Year</option>
                                                                        { Years.map((year) =>
                                                                            <option key={ "month_" + year } value={ year } >{ year }</option>
                                                                        ) }
                                                                    </select>
                                                                    <span>Year</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {submitted && typeof (established.year || established.month || established.day) !="undefined" && !(established.year + "-" + established.month + "-" + established.day).match(/^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/) &&
                                                            <div className="help-block" style={{ color: 'red' }}>Please Select Validate Date</div>
                                                        }
                                                    </div>
                                                    <Fields
                                                        key="field_companyNo"
                                                        field="numeric"
                                                        fieldLabel="Company No"
                                                        fieldName="companyNo"
                                                        fieldValue={ companyNo }
                                                        fieldAction={ setcompanyName }
                                                        fieldValidation={ [submitted] }
                                                    />
                                                    <Fields
                                                        key="field_Trade"
                                                        field="select"
                                                        fieldLabel="Trade"
                                                        fieldName="trade"
                                                        fieldOption={ tradeOptions }
                                                        fieldValue={ trade }
                                                        fieldAction={ setTrade }
                                                        fieldValidation={ [submitted, trade, formFieldValidation(error, "trade", trade)] }
                                                    />

                                                </div>
                                                <div className="six columns">
                                                    <Fields
                                                        key="field_OwnerName"
                                                        field="text"
                                                        fieldLabel="Owner's Name"
                                                        fieldName="ownerName"
                                                        fieldValue={ ownerName }
                                                        fieldAction={ setOwnerName }
                                                        fieldValidation={ [submitted, ownerName, formFieldValidation(error, "ownerName", ownerName)] }
                                                    />
                                                    <Fields
                                                        key="field_Email"
                                                        field="email"
                                                        fieldLabel="Email Address"
                                                        fieldName="email"
                                                        fieldValue={ email }
                                                        fieldAction={ setEmailAddress }
                                                        fieldValidation={ [submitted, email, formFieldValidation(error, "email", email)] }
                                                    />
                                                    <Fields
                                                        key="field_website"
                                                        field="text"
                                                        fieldLabel="Website"
                                                        fieldName="webSite"
                                                        fieldValue={ webSite }
                                                        fieldAction={ setWebSite }
                                                        fieldValidation={ [submitted, webSite, formFieldValidation(error, "webSite", webSite)] }
                                                    />
                                                    <Fields
                                                        key="field_PhoneNumber"
                                                        field="numeric"
                                                        fieldLabel="Phone Number"
                                                        fieldName="phoneNumber"
                                                        fieldValue={ phoneNumber }
                                                        fieldAction={ setPhoneNumber }
                                                        fieldValidation={ [submitted] }
                                                    />
                                                    <Fields
                                                        key="field_MobileNumber"
                                                        field="numeric"
                                                        fieldLabel="Mobile Number"
                                                        fieldName="mobileNumber"
                                                        fieldValue={ mobileNumber }
                                                        fieldAction={ setMobileNumber }
                                                        fieldValidation={ [submitted, mobileNumber, formFieldValidation(error, "mobileNumber", mobileNumber)] }
                                                    />

                                                </div>
                                            </Row>

                                        </div>
                                        <div className="contained">
                                            <Row>
                                                <div className="twelve columns alpha">
                                                    <div className="form_row multiple choice">
                                                        <label htmlFor="acdo_systembundle_tradesperson_federations">
                                                            Federation Memberships
                                                        </label>
                                                        <div className="field_container">
                                                            {/* { console.log(federationValue) } */}
                                                            <select
                                                                name="federationValue"
                                                                size={ 10 }
                                                                className="multiple"
                                                                multiple
                                                                onChange={ (e) => setFederationValue([...e.target.options].filter(option => option.selected).map(x => x.value)) }
                                                            >

                                                                { federation.map((fed) =>
                                                                    <option key={ 'opt_' + fed.value } value={ fed.value }>{ fed.title }</option>
                                                                ) }

                                                            </select>
                                                        </div>
                                                        {submitted && formFieldValidation(error, "federation_id", federationValue) &&
                                                            <div className="help-block" style={{ color: 'red' }}>Please Select Federation Memberships</div>
                                                        }
                                                    </div>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={ vat_registered == true ? "_checkbox on " : "_checkbox" }>
                                                                <input
                                                                    type="checkbox"
                                                                    name="vat_registered"
                                                                    value={ 1 }
                                                                    onClick={ () => setVat_Register(!vat_registered) }
                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: 0,
                                                                        position: "absolute",
                                                                        top: 0,
                                                                        width: "26px",
                                                                        height: "24px"
                                                                    } }
                                                                />
                                                            </div>
                                                            <label
                                                                className="sub"
                                                                htmlFor="acdo_systembundle_tradesperson_vat_registered"
                                                            >
                                                                Are you VAT Registered?
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={ liability_insurance == true ? "_checkbox on" : "_checkbox" }>
                                                                <input
                                                                    type="checkbox"
                                                                    name="insured"
                                                                    value={ 1 }
                                                                    onClick={ () => setLiability_Insurance(!liability_insurance) }
                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: 0,
                                                                        position: "absolute",
                                                                        top: 0,
                                                                        width: "26px",
                                                                        height: "24px"
                                                                    } }
                                                                />
                                                            </div>
                                                            <label
                                                                className="sub"
                                                                htmlFor="acdo_systembundle_tradesperson_insured"
                                                            >
                                                                Do you have public liability insurance?
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                        <div className="contained">
                                            <Row>
                                                <div className="twelve columns alpha">
                                                    <h3>Notification Preferences</h3>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={ notification_received_email == false ? "_checkbox" : "_checkbox  on" }>
                                                                <input
                                                                    type="checkbox"
                                                                    name="notification_received_email"
                                                                    value={ 1 }
                                                                    onClick={ () => setNotification_received_email(!notification_received_email) }

                                                                    // defaultChecked="checked"
                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: "0",
                                                                        position: "absolute",
                                                                        top: "0px",
                                                                        width: "26px",
                                                                        height: "24px"
                                                                    } }
                                                                />
                                                            </div>
                                                            <label
                                                                className="sub"
                                                                htmlFor="acdo_systembundle_tradesperson_notification_received_email"
                                                            >
                                                                Receive an Email when you receive a recommendation.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={notification_received_sms==false?"_checkbox ":"_checkbox on"}>
                                                                <input
                                                                    type="checkbox"
                                                                  
                                                                    name="notification_received_sms"
                                                                    value={ 1 }
                                                                    onClick={()=>setNotification_received_sms(!notification_received_sms)}
                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: "0",
                                                                        position: "absolute",
                                                                        top: "0px",
                                                                        width: "26px",
                                                                        height: "24px"
                                                                    } }
                                                                />
                                                            </div>
                                                            <label
                                                                className="sub"
                                                                htmlFor="acdo_systembundle_tradesperson_notification_received_sms"
                                                            >
                                                                Receive an SMS when you receive a recommendation.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={notification_marketing_email==false?"_checkbox":"_checkbox on"}>
                                                                <input
                                                                    type="checkbox"                                                                   
                                                                    name="notification_marketing_email"
                                                                    value={ 1 }
                                                                    onClick={()=>setNotification_marketing_email(!notification_marketing_email)}
                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: 0,
                                                                        position: "absolute",
                                                                        top: 0,
                                                                        right: "-50px"
                                                                    } }
                                                                />
                                                            </div>
                                                            <label
                                                                className="sub"
                                                                htmlFor="acdo_systembundle_tradesperson_notification_marketing_email"
                                                            >
                                                                Receive R&amp;S Marketing Emails.
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                                <div className="four columns">
                                    <div className="contained shallow tradeperson-heading">
                                        <h2>Business Address</h2>
                                        <div className="box white">
                                            <div className="form_row postcode text">
                                                <label
                                                    htmlFor="acdo_systembundle_tradesperson_address_postcode"
                                                    className="required"
                                                >
                                                    Postcode
                                                </label>
                                                <Form.Control type="text" name="address_postcode" key="field_address_postcode" style={ { width: "calc( 100% - 103px )" } } value={ address_postcode } onChange={ (e) => { setAddress_postcode(e.target.value),setPostCodeError("") } } />
                                                <Button className="button square postcode-btn" style={ { marginTop: "-50px" } } onClick={ () => { getAddress() } }>
                                                    LOOKUP
                                                </Button>

                                                { submitted && formFieldValidation(error, "address_postcode", address_postcode) != "undefined" && formFieldValidation(error, "address_postcode", address_postcode) != "" &&
                                                    <div className="help-block" style={ { color: 'red' } }>{ typeof formFieldValidation(error, "address_postcode", address_postcode) != "undefined" ? formFieldValidation(error, "address_postcode", address_postcode).message : formFieldValidation(error, "address_postcode", address_postcode) }</div>
                                                }
                                                { select_postcode != '' ?
                                                    <>
                                                        <span className="postcode-lookup results">
                                                            <select className="postcode-lookup-sel" onChange={ (e) => putAddress(e.target.value) } defaultValue="">
                                                                <option disabled>Select your address</option>
                                                                { select_postcode.map((option) =>
                                                                    <option key={ "key_" + option } value={ option }>{ option }</option>
                                                                ) }
                                                            </select>
                                                        </span>
                                                    </>
                                                    : null }
                                                {postCodeError!=""?<div className="help-block" style={ { color: 'red' } }>{postCodeError}</div>:null}
                                            </div>
                                            { col2.map((field) =>
                                                <Fields
                                                    key={ "field_" + field.fieldName }
                                                    field={ field.field }
                                                    fieldLabel={ field.fieldLabel }
                                                    fieldName={ field.fieldName }
                                                    fieldValue={ field.fieldValue }
                                                    fieldAction={ field.fieldAction }
                                                    fieldValidation={ field.fieldValidation }
                                                />
                                            ) }
                                        </div>
                                    </div>

                                    <div className="contained shallow tradeperson-heading">
                                        <h2>Company Logo / Photo</h2>
                                        <div className="box white">
                                            <p className="semi-shallow tcenter">
                                                <a
                                                    href="https://recommendandshare.com/media/cache/avatar_large/assets/images/generic-avatar.png"
                                                    data-featherlight="image"
                                                    className="avatar-link"
                                                >
                                                    <img
                                                        src="https://recommendandshare.com/media/cache/avatar/assets/images/generic-avatar.png"
                                                        className="avatar avatar-selector"
                                                    />
                                                    
                                                </a>
                                            </p>
                                            <div className="form_row  file">
                                                <label htmlFor="acdo_systembundle_tradesperson_temp_image">
                                                    Profile Image
                                                </label>
                                                <div className="field_container">
                                                    <div
                                                        className="fileinput single"
                                                    >
                                                        <Link href="#" className="button white ">
                                                            <a>Browse</a>
                                                        </Link>
                                                        <input
                                                            type="file"
                                                            name="acdo_systembundle_tradesperson[temp_image]"
                                                        />
                                                        <span
                                                            className="helptext psuedoinput"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="twelve columns alpha">
                                    <div className="box white">
                                        <div className="buttons tcenter">
                                            <p className="smaller semi-shallow">
                                                When you are happy with the details above, use the button below to create
                                                your free business listing.
                                            </p>
                                            <button type="submit">
                                                Create Business Listing
                                            </button>
                                            <p className="smaller tall-top shallow">
                                                By creating a tradesperson's profile you agree to be bound by our{ " " }
                                                <Link href="/terms-of-use">
                                                    <a className="blank-link" target="_blank">
                                                        terms and conditions
                                                    </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                    <p className="tcenter">
                        Need help with your account? <Link href="/contact-us"><a>Contact us</a></Link> for
                        help.
                    </p>

                </Container>

            </section>

        </div>
        </React.StrictMode>
    )
}
