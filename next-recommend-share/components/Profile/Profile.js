import React,{ useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { Row, Col, Button} from "react-bootstrap"
import { formFieldValidation } from "../../services/formValidation"
import Fields from '../Form-Fields/Fields'
import { userProfile } from '../../redux/Profile/action';

export const ProfileForm = (props) => {
    const reState = useSelector(state => state);
    const { error, userData } = reState.profileReducer;
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [age_group, setAge_group] = useState('');
    const [address_postcode, setAddress_postcode] = useState('');
    const [address_line_1, setAddress_line_1] = useState('');
    const [address_line_2, setAddress_line_2] = useState('');
    const [address_town, setAddress_town] = useState('');
    const [address_country, setAddress_country] = useState('');
    const [notification_received_email, setNotification_received_email] = useState(typeof userData!="undefined"?userData.notification_received_email:false)
    const [notification_received_sms, setNotification_received_sms] = useState(typeof userData!="undefined"?userData.notification_received_sms:false)
    const [notification_marketing_email, setNotification_marketing_email] = useState(typeof userData!="undefined"?userData.notification_marketing_email:false)
    const [submitted, setSubmitted] = useState(false);
   
    useEffect(() => {
        dispatch(userProfile(JSON.parse(localStorage.getItem("Recommend_Share_current_user")).email))  
    }, [])

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
        setSubmitted(true);
        // if (name != "" && email != "" && mobile != "" && address_postcode != "" && address_line_1 != "" && address_town != "" && address_county != "") {
            const userData = {
                name: name,
                email: email,
                telephone: telephone,
                mobile: mobile,
                age_group: age_group,
                address_postcode: address_postcode,
                address_line_1: address_line_1,
                address_line_2: address_line_2,
                address_town: address_town,
                address_country: address_country,
                notification_received_email: notification_received_email,
                notification_received_sms: notification_received_sms,
                notification_marketing_email: notification_marketing_email
            }
            console.log(userData)
            // props.profileUpadate(userData)
        // }
    }
    const col1 = [
        {
            field: "text",
            fieldLabel: "Full Name",
            fieldName: "name",
            fieldValue: typeof userData!="undefined"?userData.name:name,
            fieldAction: setName,
            fieldValidation: [submitted, name, formFieldValidation(error, "name", name)]
        },
        {
            field: "email",
            fieldLabel: "Email Address",
            fieldName: "email",
            fieldValue: typeof userData!="undefined"?userData.email:email,
            fieldAction: setEmail,
            fieldValidation: [submitted, email, formFieldValidation(error, "email", email)]
        },
        {
            field: "numeric",
            fieldLabel: "Telephone",
            fieldName: "telephone",
            fieldValue: typeof userData!="undefined"&&userData.telephone?userData.telephone:telephone,
            fieldAction: setTelephone,
            fieldValidation: [submitted]
        },
        {
            field: "numeric",
            fieldLabel: "Mobile Telephone",
            fieldName: "mobile",
            fieldValue: typeof userData!="undefined"?userData.mobile:mobile,
            fieldAction: setMobile,
            fieldValidation: [submitted, mobile, formFieldValidation(error, "mobile", mobile)]
        },
        {
            field: "select",
            fieldLabel: "Age Group",
            fieldName: "age_group",
            fieldOption: [{ title: "16-24", value: "16-24" }, { title: "25-34", value: "25-34" }, { title: "35-44", value: "35-44" }, { title: "44-55", value: "44-55" }, { title: "56-64", value: "56-64" }, { title: "65+", value: "65+" }],
            fieldValue: typeof userData!="undefined" && userData.age_group?userData.age_group:age_group,
            fieldAction: setAge_group,
            fieldValidation: [submitted]
        }
    ];
    const col2 = [
        {
            field: "text",
            fieldLabel: "Postcode",
            fieldName: "address_postcode",
            fieldValue: typeof userData!="undefined"?userData.address_postcode:address_postcode,
            fieldAction: setAddress_postcode,
            fieldValidation: [submitted, address_postcode, formFieldValidation(error, "address_postcode", address_postcode)]
        },
        {
            field: "text",
            fieldLabel: "Address Line 1",
            fieldName: "address_line_1",
            fieldValue: typeof userData!="undefined"?userData.address_line_1:address_line_1,
            fieldAction: setAddress_line_1,
            fieldValidation: [submitted, address_line_1, formFieldValidation(error, "address_line_1", address_line_1)]
        },
        {
            field: "text",
            fieldLabel: "Address Line 2",
            fieldName: "address_line_2",
            fieldValue: typeof userData!="undefined"?userData.address_line_2:address_line_2,
            fieldAction: setAddress_line_2,
            fieldValidation: [submitted]
        },
        {
            field: "text",
            fieldLabel: "Town",
            fieldName: "address_town",
            fieldValue: typeof userData!="undefined"?userData.address_town:address_town,
            fieldAction: setAddress_town,
            fieldValidation: [submitted, address_town, formFieldValidation(error, "address_town", address_town)]
        },
        {
            field: "text",
            fieldLabel: "Country",
            fieldName: "address_country",
            fieldValue: typeof userData!="undefined"?userData.address_country:address_country,
            fieldAction: setAddress_country,
            fieldValidation: [submitted, address_country, formFieldValidation(error, "address_country", address_country)]
        }
    ]
    return (
        <form onSubmit={onSubmit}>
            <div className="contained">
                <Row>
                    <Col md={6} className="alpha">
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
                <div className="row">
                    <div className="twelve columns alpha">
                        <h3>Notification Preferences</h3>
                        <div className="form_row  checkbox">
                            <div className="field_container">
                                <div className={notification_received_email==true?"_checkbox  on ":"_checkbox"}>
                                    <input
                                        type="checkbox"
                                        name="notification_received_email"
                                        value={1}
                                        onClick={()=>setNotification_received_email(!notification_received_email)}
                                        className="_checkbox_input ready"
                                        style={{
                                            opacity: "0",
                                            position: "absolute",
                                            top: "0px",
                                            width: "26px",
                                            height: "24px"
                                        }}
                                    />
                                </div>
                                <label className="sub" htmlFor="profile_notification_received_email">
                                    Receive an Email when you receive a recommendation.
                                </label>
                            </div>
                        </div>
                        <div className="form_row  checkbox">
                            <div className="field_container">
                                <div className={notification_received_sms==true?"_checkbox  on ":"_checkbox"}>
                                    <input
                                        type="checkbox"
                                        name="notification_received_sms"
                                        value={1}
                                        onClick={()=>setNotification_received_sms(!notification_received_sms)}
                                        className="_checkbox_input ready"
                                        style={{
                                            opacity: "0",
                                            position: "absolute",
                                            top: "0px",
                                            width: "26px",
                                            height: "24px"
                                        }}
                                    />
                                </div>
                                <label className="sub" htmlFor="profile_notification_received_sms">
                                    Receive an SMS when you receive a recommendation.
                                </label>
                            </div>
                        </div>
                        <div className="form_row  checkbox">
                            <div className="field_container">
                                <div className={notification_marketing_email==true?"_checkbox  on ":"_checkbox"}>
                                    <input
                                        type="checkbox"
                                        name="notification_marketing_email"
                                        value={1}
                                        onClick={()=>setNotification_marketing_email(!notification_marketing_email)}
                                        className="_checkbox_input ready"
                                        style={{
                                            opacity: "0",
                                            position: "absolute",
                                            top: "0px",
                                            width: "26px",
                                            height: "24px"
                                        }}
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
            <input type="hidden" id="profile__token" name="profile[_token]" defaultValue="04H6KISBzHWAWL7N2czvzTnBPLbRVnV3c6TxDEBnRY0" />
            <div className="buttons ">
                <Button type="submit" className>
                    Save Details
                </Button>
            </div>
        </form>
    )
}

export const ProfileImage = (props) => {
    return (
        <div className="contained">
            <h2>Profile Image</h2>
            <div className="box white">
                <form method="post" action="/profile/image" encType="multipart/form-data">
                    <p className="semi-shallow tcenter">
                        <a href="https://recommendandshare.com/media/cache/resolve/avatar_large/uploads/customers/sam-avatar-1626495954.png" data-featherlight="image" className="avatar-link">
                            <img src="https://recommendandshare.com/media/cache/avatar/uploads/customers/sam-avatar-1626495954.png" className="avatar avatar-selector" />
                        </a>
                    </p>
                    <div id="profile_image">
                        <div className="form_row  file">
                            <div className="field_container">
                                <div className="fileinput single" id="profile_image_temp_image_fi_parent">
                                    <a href="#" className="button white ">
                                        Browse
                                    </a>
                                    <input type="file" id="profile_image_temp_image" name="profile_image[temp_image]" />
                                    <span className="helptext psuedoinput" id="profile_image_temp_image_helptext" />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="profile_image__token" name="profile_image[_token]" defaultValue="QPqj_Bp32ryxO6cNwMUlgW0g3AU_Ub636y9iUuHGHKg" />
                    </div>
                    <div className="buttons ">
                        <a href="/profile/image/clear" className="confirm button small light fleft">
                            Clear
                        </a>
                        <button type="submit">
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const ProfileStatus = (props) =>{
    return (
        <div className="contained shallow">
            <h2>Confirm Your Identity</h2>
            <div className="box white">
                <p className="smaller shallow">
                    Your identity is <span className="highlighted on">verified</span>
                </p>
            </div>
        </div>
    )
}

export const ConnectFacebook = (props) =>{
    return (
        <div className="contained">
            <p className="h2">Connect with Facebook</p>
            <div className="box white">
                <div className="contained shallow">
                    <p>You can use your facebook account to login once it's connected.</p>
                    <p className="shallow tcenter">
                        <span id="fb_status" />
                    </p>
                </div>
            </div>
        </div>
    )
}

export const RemoveAC = (props) => {
    return (
        <div className="contained">
            <p className="h2">Remove Account</p>
            <div className="box white">
                <div className="contained shallow">
                    <p>If you wish, you can remove your account. This will completely remove your details from our database.</p>
                    <p className="tcenter">
                        <a href="/delete-account" className="button danger">
                            Delete my account
                        </a>
                    </p>
                    <p className="shallow tcenter">Please note: This cannot be undone.</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (profileReducer) => {

}

const mapDispatchToProps = {
    userProfile:userProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm, ProfileImage, ProfileStatus, ConnectFacebook, RemoveAC)