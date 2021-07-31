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
import { registerUser } from '../redux/auth/action';
import Fields from '../components/Form-Fields/Fields';
import { useUrlSearchParams } from 'use-url-search-params';
import axios from 'axios'
export const register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [age_group, setAge_group] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [address_postcode, setAddress_postcode] = useState('');
    const [select_postcode, setSelectPostcode] =useState('');
    const [address_line_1, setAddress_line_1] = useState('');
    const [address_line_2, setAddress_line_2] = useState('');
    const [address_town, setAddress_town] = useState('');
    const [address_county, setAddress_county] = useState('');
    const [terms_agreed_date, setTerms_agreed_date] = useState(false);
    const [gdpr_agreed_date, setGdpr_agreed_date] = useState(false);
    const [tradespeopleName, setTradespeopleName] = useState('');
    const [tradespeopleTrade, settradespeopleTrade] = useState('');
    const [params, setParams] = useUrlSearchParams()


    const getAddress = () =>{
        console.log("asdfasdf")
        if(address_postcode!=''){
            axios.get(`https://api.getaddress.io/find/${address_postcode}?api-key=xR5ryKXzb0SevSwn3OX7VQ31904`)
                .then((res)=>{
                    setSelectPostcode(res.data.addresses)
                })
        }   
    }
    const putAddress = (value) =>{
        console.log(value);
        setAddress_line_1(value.split(',')[0])
        setAddress_line_2(value.split(',')[1])
        setAddress_town(value.split(',')[5])
        setSelectPostcode('')
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const userData = { 
            name : name,
            email : email,
            telephone : telephone,
            mobile : mobile,
            age_group : age_group,
            password : password,
            confirm_password : confirm_password,
            address_postcode : address_postcode,
            select_postcode : select_postcode,
            address_line_1 : address_line_1,
            address_line_2 : address_line_2,
            address_town : address_town,
            address_county : address_county,
            terms_agreed_date : terms_agreed_date,
            gdpr_agreed_date : gdpr_agreed_date,
            tradespeopleName : tradespeopleName,
            tradespeopleTrade : tradespeopleTrade
        }
        props.registerUser(userData)
    }
    return (
        <React.Fragment>
            <div className="login-body pt-3">
                <Container fluid>
                    <Row>
                        <Col md="2">
                        </Col>
                        <Col md="8" className="mb-4">
                            <div className="box mx-auto ">
                                <h1>Create an Account</h1>
                                <div className="form-box">
                                    { typeof params.type != "undefined" && params.type == "tradesperson" ?
                                        <p>
                                            Create your free <strong>business account</strong> by filling in the form
                                            below.
                                            <br />
                                            If you <strong>do not have a business</strong>, you just need a{ " " }
                                            <Link href="/register"><a onClick={ () => { setParams({ type: null }), setTradespeopleName(''), settradespeopleTrade('') } }> customer account </a></Link> instead.
                                        </p>
                                        :
                                        <p>Create your free <strong>customer account</strong> by filling in the form below.
                                            <br />Are you a <strong>tradesperson</strong>? You can
                                            <Link href="/register?type=tradesperson"><a onClick={ () => setParams({ type: "tradesperson" }) }> create a business listing </a></Link>
                                            for free, or continue to register and create your listing later.
                                        </p>
                                    }
                                    <form onSubmit={ onSubmit }>
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
                                                    />
                                                    <Fields
                                                        field="email"
                                                        fieldLabel="Email Address"
                                                        fieldName="email"
                                                        fieldValue={ email }
                                                        fieldAction={ setEmail }
                                                    />
                                                    <Fields
                                                        field="numeric"
                                                        fieldLabel="Telephone"
                                                        fieldName="telephone"
                                                        fieldValue={ telephone }
                                                        fieldAction={ setTelephone }
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
                                                    />
                                                    <Fields
                                                        field="password"
                                                        fieldLabel="Password"
                                                        fieldName="password"
                                                        fieldValue={ password }
                                                        fieldAction={ setPassword }
                                                    />
                                                    <Fields
                                                        field="password"
                                                        fieldLabel="Confirm Password"
                                                        fieldName="confirm_password"
                                                        fieldValue={ confirm_password }
                                                        fieldAction={ setConfirm_password }
                                                    />
                                                </Col>
                                                <Col md={ 6 }>
                                                    <h3>Your Address</h3>
                                                    <div className="form-field">
                                                        <Form.Label className="form-lable">Postcode</Form.Label>
                                                        <div className="d-flex justify-content-between">
                                                            <Form.Control type="text" name="address_postcode" style={{width:"calc( 100% - 103px )"}} value={address_postcode} onChange={(e) => { setAddress_postcode(e.target.value) }}/>
                                                            <Button className="button square postcode-btn" onClick={()=>{getAddress()}}>
                                                            LOOKUP
                                                            </Button>
                                                        </div>
                                                        {select_postcode!=''?
                                                            <>
                                                            <span className="postcode-lookup results">
                                                                <select className="postcode-lookup-sel" onChange={(e)=>putAddress(e.target.value)}>
                                                                    <option value>Select your address</option>
                                                                    {select_postcode.map((option)=>
                                                                        <option value={option}>{option}</option>
                                                                    )}
                                                                </select>
                                                            </span>
                                                            </>
                                                        :null}
                                                    </div>
                                                    <Fields
                                                        field="text"
                                                        fieldLabel="Address Line 1"
                                                        fieldName="address_line_1"
                                                        fieldValue={ address_line_1 }
                                                        fieldAction={ setAddress_line_1 }
                                                    />
                                                    <Fields
                                                        field="text"
                                                        fieldLabel="Address Line 2"
                                                        fieldName="address_line_2"
                                                        fieldValue={ address_line_2 }
                                                        fieldAction={ setAddress_line_2 }
                                                    />
                                                    <Fields
                                                        field="text"
                                                        fieldLabel="Town"
                                                        fieldName="address_town"
                                                        fieldValue={ address_town }
                                                        fieldAction={ setAddress_town }
                                                    />
                                                    <Fields
                                                        field="text"
                                                        fieldLabel="County"
                                                        fieldName="address_county"
                                                        fieldValue={ address_county }
                                                        fieldAction={ setAddress_county }
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="contained">
                                            <div className="row1">
                                                <div className="twelve columns alpha">
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={ terms_agreed_date == true ? "_checkbox on" : "_checkbox" }>
                                                                <input
                                                                    type="checkbox"
                                                                    name="terms_and_conditions"
                                                                    required="required"
                                                                    defaultValue={ 1 }
                                                                    className="_checkbox_input ready"
                                                                    onClick={ () => setTerms_agreed_date(!terms_agreed_date) }
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
                                                                className="sub required"
                                                                htmlFor="register_tradesperson_terms_and_conditions"
                                                            >
                                                                Please confirm you have read and accept our{ " " }
                                                                <a href="/terms-of-use.html" className="blank-link" target="_blank">
                                                                    Terms and Conditions
                                                                </a>
                                                                .
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form_row  checkbox">
                                                        <div className="field_container">
                                                            <div className={ gdpr_agreed_date == true ? "_checkbox on" : "_checkbox" }>
                                                                <input
                                                                    type="checkbox"
                                                                    id="register_tradesperson_gdpr_policy"
                                                                    name="register_tradesperson[gdpr_policy]"
                                                                    required="required"
                                                                    defaultValue={ 1 }
                                                                    className="_checkbox_input ready"
                                                                    onClick={ () => setGdpr_agreed_date(!gdpr_agreed_date) }
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
                                                                className="sub required"
                                                                htmlFor="register_tradesperson_gdpr_policy"
                                                            >
                                                                Please confirm you have read and agree to our{ " " }
                                                                <a href="/gdpr.html" className="blank-link" target="_blank">
                                                                    GDPR policy
                                                                </a>
                                                                .
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttons tcenter">
                                            <Button type="submit" className="light big">Create My Account</Button>
                                        </div>
                                        <input type="hidden" name="_target_path" value="/"></input>
                                    </form>
                                </div>
                                <h1>Register with Facebook</h1>
                                <div className="form-box">
                                    <p>You can use your facebook account to login.</p>
                                </div>

                                <p className="tcenter small m-5">You can use your facebook account to create your account.</p>
                            </div>
                        </Col>
                        <Col md="2">
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (authUser) => {
    const { loding, } = authUser
    return { loding, };
}

const mapDispatchToProps = {
    registerUser: registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(register)
