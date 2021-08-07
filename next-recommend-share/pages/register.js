import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { connect, useSelector } from 'react-redux'
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
import { formFieldValidation } from "../services/formValidation"

export const register = (props) => {
    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const [name, setName] = useState('maulik');
    const [email, setEmail] = useState('maulik@gmail.com');
    const [telephone, setTelephone] = useState('24523455345');
    const [mobile, setMobile] = useState('9714220411');
    const [age_group, setAge_group] = useState('16-24');
    const [password, setPassword] = useState('maulik@123');
    const [confirm_password, setConfirm_password] = useState('maulik@123');
    const [address_postcode, setAddress_postcode] = useState('M32BY');
    const [select_postcode, setSelectPostcode] = useState('');
    const [address_line_1, setAddress_line_1] = useState('Ladbrokes Ltd');
    const [address_line_2, setAddress_line_2] = useState(' 123 Deansgate');
    const [address_town, setAddress_town] = useState('Manchester');
    const [address_country, setAddress_country] = useState('london');
    const [terms_agreed_date, setTerms_agreed_date] = useState(false);
    const [gdpr_agreed_date, setGdpr_agreed_date] = useState(false);
    const [tradespeopleName, setTradespeopleName] = useState('');
    const [tradespeopleTrade, setTradespeopleTrade] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [params, setParams] = useUrlSearchParams()
    const [selectTreadOption, setSelectTreadOption] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/business/trade_options`)
            .then((res) => {
                const result = [];
                res.data.data.map((value) => {
                    result.push({ value: value.id, title: value.name })
                })
                setSelectTreadOption(
                    result.sort(function (a, b) {
                        if (a.title.toUpperCase() < b.title.toUpperCase()) {
                            return -1;
                        }
                        if (a.title.toUpperCase() > b.title.toUpperCase()) {
                            return 1;
                        }
                        return 0;
                    })
                )
            })
    }, [setSelectTreadOption])

    const getAddress = () => {
        if (address_postcode != '') {
            axios.get(`https://api.getaddress.io/find/${address_postcode}?api-key=xR5ryKXzb0SevSwn3OX7VQ31904`)
                .then((res) => {
                    setSelectPostcode(res.data.addresses)
                })
        }
    }
    const putAddress = (value) => {
        setAddress_line_1(value.split(',')[0])
        setAddress_line_2(value.split(',')[1])
        setAddress_town(value.split(',')[5])
        setSelectPostcode('')
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        if (name != "" && email != "" && mobile != "" && password != "" && confirm_password != "" && address_postcode != "" && address_line_1 != "" && address_town != "" && address_county != "" && terms_agreed_date != true && gdpr_agreed_date != true) {
            const userData = {
                name: name,
                email: email,
                telephone: telephone,
                mobile: mobile,
                age_group: age_group,
                password: password,
                confirm_password: confirm_password,
                address_postcode: address_postcode,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                address_town: address_town,
                address_country: address_country,
                terms_agreed_date: terms_agreed_date,
                gdpr_agreed_date: gdpr_agreed_date
            }
            typeof params.type != "undefined" && params.type == "tradesperson" ? (
                userData.tradespeopleName = tradespeopleName,
                userData.tradespeopleTrade = tradespeopleTrade,
                props.registerUser(userData, "/register?type=tradesperson")
            ) : props.registerUser(userData, "/register")
        }
    }
    const col1 = [
        {
            field: "text",
            fieldLabel: "Full Name",
            fieldName: "name",
            fieldValue: name,
            fieldAction: setName,
            fieldValidation: [submitted, name, formFieldValidation(error, "name", name)]
        },
        {
            field: "email",
            fieldLabel: "Email Address",
            fieldName: "email",
            fieldValue: email,
            fieldAction: setEmail,
            fieldValidation: [submitted, email, formFieldValidation(error, "email", email)]
        },
        {
            field: "numeric",
            fieldLabel: "Telephone",
            fieldName: "telephone",
            fieldValue: telephone,
            fieldAction: setTelephone,
            fieldValidation: [submitted]
        },
        {
            field: "numeric",
            fieldLabel: "Mobile Telephone",
            fieldName: "mobile",
            fieldValue: mobile,
            fieldAction: setMobile,
            fieldValidation: [submitted, mobile, formFieldValidation(error, "mobile", mobile)]
        },
        {
            field: "select",
            fieldLabel: "Age Group",
            fieldName: "age_group",
            fieldOption: [{ title: "16-24", value: "16-24" }, { title: "25-34", value: "25-34" }, { title: "35-44", value: "35-44" }, { title: "44-55", value: "44-55" }, { title: "56-64", value: "56-64" }, { title: "65+", value: "65+" }],
            fieldValue: age_group,
            fieldAction: setAge_group,
            fieldValidation: [submitted]
        },
        {
            field: "password",
            fieldLabel: "Password",
            fieldName: "password",
            fieldValue: password,
            fieldAction: setPassword,
            fieldValidation: [submitted, password, formFieldValidation(error, "password", password)]
        },
        {
            field: "password",
            fieldLabel: "Confirm Password",
            fieldName: "confirm_password",
            fieldValue: confirm_password,
            fieldAction: setConfirm_password,
            fieldValidation: [submitted, confirm_password, formFieldValidation(error, "confirm_password", confirm_password)]
        }
    ];
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
            fieldName: "address_country",
            fieldValue: address_country,
            fieldAction: setAddress_country,
            fieldValidation: [submitted, address_country, formFieldValidation(error, "address_country", address_country)]
        }
    ]
    return (
        <div className="login-body pt-3">
            <Container fluid>
                <Row>
                    <Col md="2">
                    </Col>
                    <Col md="8" className="mb-4">
                        <div className="box mx-auto ">
                            <h1>Create an Account</h1>
                            <div className="form-box">
                                {typeof params.type != "undefined" && params.type == "tradesperson" ?
                                    <p>
                                        Create your free <strong>business account</strong> by filling in the form
                                        below.
                                        <br />
                                        If you <strong>do not have a business</strong>, you just need a{" "}
                                        <Link href="/register"><a onClick={() => { setParams({ type: null }), setTradespeopleName(''), settradespeopleTrade('') }}> customer account </a></Link> instead.
                                    </p>
                                    :
                                    <p>Create your free <strong>customer account</strong> by filling in the form below.
                                        <br />Are you a <strong>tradesperson</strong>? You can
                                        <Link href="/register?type=tradesperson"><a onClick={() => setParams({ type: "tradesperson" })}> create a business listing </a></Link>
                                        for free, or continue to register and create your listing later.
                                    </p>
                                }
                                <form onSubmit={onSubmit}>
                                    {typeof error.verifyError != 'undefined' && error.verifyError != '' ?
                                        <div className="help-block mb-2" style={{ color: 'red' }}>{error.verifyError.registerError}</div>
                                        : null}
                                    <div className="contained">
                                        {typeof params.type != "undefined" && params.type == "tradesperson" ?
                                            <>
                                                <h3>Business Details</h3>
                                                <Fields
                                                    key="field_tradespeopleName"
                                                    field="text"
                                                    fieldLabel="Business Name"
                                                    fieldName="tradespeopleName"
                                                    fieldValue={tradespeopleName}
                                                    fieldAction={setTradespeopleName}
                                                    fieldValidation={[submitted, tradespeopleName, formFieldValidation(error, "name", tradespeopleName)]}
                                                />
                                                <Fields
                                                    key="field_tradespeopleTrade"
                                                    field="select"
                                                    fieldLabel="Select a Trade"
                                                    fieldName="tradespeopleTrade"
                                                    fieldOption={selectTreadOption}
                                                    fieldAction={setTradespeopleTrade}
                                                    fieldValidation={[submitted, tradespeopleTrade, formFieldValidation(error, "tradespeopleTrade", tradespeopleTrade)]}
                                                />
                                            </>
                                            : null}
                                    </div>
                                    <div className="contained">
                                        <Row>
                                            <Col md={6}>
                                                <h3>Your Details</h3>
                                                {col1.map((field) =>{
                                                    return (typeof field.fieldOption != "undefined" ?
                                                        <Fields
                                                            key={"field_" + field.fieldName}
                                                            field={field.field}
                                                            fieldLabel={field.fieldLabel}
                                                            fieldName={field.fieldName}
                                                            fieldValue={field.fieldValue}
                                                            fieldOption={field.fieldOption}
                                                            fieldAction={field.fieldAction}
                                                            fieldValidation={field.fieldValidation}
                                                        />
                                                        :
                                                        <Fields
                                                            key={"field_" + field.fieldName}
                                                            field={field.field}
                                                            fieldLabel={field.fieldLabel}
                                                            fieldName={field.fieldName}
                                                            fieldValue={field.fieldValue}
                                                            fieldAction={field.fieldAction}
                                                            fieldValidation={field.fieldValidation}
                                                        />)
                                                })}
                                            </Col>
                                            <Col md={6}>
                                                <h3>Your Address</h3>
                                                <div className="form-field">
                                                    <Form.Label className="form-lable">Postcode</Form.Label>
                                                    <div className="d-flex justify-content-between">
                                                        <Form.Control type="text" name="address_postcode" key="field_address_postcode" style={{ width: "calc( 100% - 103px )" }} value={address_postcode} onChange={(e) => { setAddress_postcode(e.target.value) }} />
                                                        <Button className="button square postcode-btn" onClick={() => { getAddress() }}>
                                                            LOOKUP
                                                        </Button>
                                                    </div>
                                                    {submitted && formFieldValidation(error, "address_postcode", address_postcode) != "undefined" && formFieldValidation(error, "address_postcode", address_postcode) != "" &&
                                                        <div className="help-block" style={{ color: 'red' }}>{typeof formFieldValidation(error, "address_postcode", address_postcode) != "undefined" ? formFieldValidation(error, "address_postcode", address_postcode).message : formFieldValidation(error, "address_postcode", address_postcode)}</div>
                                                    }
                                                    {select_postcode != '' ?
                                                        <>
                                                            <span className="postcode-lookup results">
                                                                <select className="postcode-lookup-sel" onChange={(e) => putAddress(e.target.value)} defaultValue="">
                                                                    <option disabled>Select your address</option>
                                                                    {select_postcode.map((option) =>
                                                                        <option key={"key_" + option} value={option}>{option}</option>
                                                                    )}
                                                                </select>
                                                            </span>
                                                        </>
                                                        : null}
                                                </div>
                                                {col2.map((field) =>
                                                    <Fields
                                                        key={"field_" + field.fieldName}
                                                        field={field.field}
                                                        fieldLabel={field.fieldLabel}
                                                        fieldName={field.fieldName}
                                                        fieldValue={field.fieldValue}
                                                        fieldAction={field.fieldAction}
                                                        fieldValidation={field.fieldValidation}
                                                    />
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="contained">
                                        <div className="row1">
                                            <div className="twelve columns alpha">
                                                <div className="form_row  checkbox">
                                                    <div className="field_container">
                                                        <div className={terms_agreed_date == true ? "_checkbox on" : "_checkbox"}>
                                                            <input
                                                                type="checkbox"
                                                                name="terms_agreed_date"
                                                                required="required"
                                                                value={1}
                                                                className="_checkbox_input ready"
                                                                onClick={() => setTerms_agreed_date(!terms_agreed_date)}
                                                                style={{
                                                                    opacity: 0,
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    width: "26px",
                                                                    height: "24px"
                                                                }}
                                                            />
                                                        </div>
                                                        <label
                                                            className="sub required"
                                                            htmlFor="register_tradesperson_terms_and_conditions"
                                                        >
                                                            Please confirm you have read and accept our{" "}
                                                            <a href="/terms-of-use.html" className="blank-link" target="_blank">
                                                                Terms and Conditions
                                                            </a>
                                                            .
                                                        </label>
                                                    </div>
                                                    {submitted && terms_agreed_date != true &&
                                                        <div className="help-block" style={{ color: 'red' }}>This Field is Required</div>
                                                    }
                                                </div>
                                                <div className="form_row  checkbox">
                                                    <div className="field_container">
                                                        <div className={gdpr_agreed_date == true ? "_checkbox on" : "_checkbox"}>
                                                            <input
                                                                type="checkbox"
                                                                id="register_tradesperson_gdpr_policy"
                                                                name="gdpr_agreed_date"
                                                                required="required"
                                                                value={1}
                                                                className="_checkbox_input ready"
                                                                onClick={() => setGdpr_agreed_date(!gdpr_agreed_date)}
                                                                style={{
                                                                    opacity: 0,
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    width: "26px",
                                                                    height: "24px"
                                                                }}
                                                            />
                                                        </div>
                                                        <label
                                                            className="sub required"
                                                            htmlFor="register_tradesperson_gdpr_policy"
                                                        >
                                                            Please confirm you have read and agree to our{" "}
                                                            <a href="/gdpr.html" className="blank-link" target="_blank">
                                                                GDPR policy
                                                            </a>
                                                            .
                                                        </label>
                                                    </div>
                                                    {submitted && gdpr_agreed_date != true &&
                                                        <div className="help-block" style={{ color: 'red' }}>First Name is required</div>
                                                    }
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
    )
}

const mapStateToProps = (authUser) => {
    const { loding, error } = authUser
    return { loding, error };
}

const mapDispatchToProps = {
    registerUser: registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(register)
