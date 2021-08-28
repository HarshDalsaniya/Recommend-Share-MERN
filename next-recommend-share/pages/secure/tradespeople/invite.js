import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import Fields from '../../../components/Form-Fields/Fields';
import { formFieldValidation } from "../../../services/formValidation"

export default function invite (props){

    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const [tradespeopleName, setTradespeopleName] = useState('');
    const [tradespeopleEmail, setTradespeopleEmail] = useState('');
    const [tradespeoplePhone, setTradespeoplePhone] = useState('');
    const [recommendCheckBox, setRecommendCheckBox] = useState(true)
    const [submitted, setSubmitted] = useState(false);
    return (
        <React.StrictMode>
        <section className="content login-body" style={ { marginTop: "5rem" } }>
            <Container>
                <form>
                    <div className="twelve columns alpha">
                        <div className="contained  tradeperson-heading">
                            <h1>Recommend a new Tradesperson</h1>
                            <p>
                                Use the form below to recommend a tradesperson who is not on Recommend &amp;
                                Share.
                                <br />
                                The tradesperson will receive an invitation to join and review their
                                recommendation.
                            </p>

                            <div className="contained mhc">
                                <div className="six columns alpha">
                                    <div className="box white mh" style={ { height: '418px' } }>
                                        <h3>Tradesperson Details</h3>
                                        <div className="form_row  text">
                                            <Fields
                                                key="field_tradespeopleName"
                                                field="text"
                                                fieldLabel="Business Name"
                                                fieldName="tradespeopleName"
                                                fieldValue={ tradespeopleName }
                                                fieldAction={ setTradespeopleName }
                                                fieldValidation={ [submitted, tradespeopleName, formFieldValidation(error, "name", tradespeopleName)] }
                                            />
                                            <Fields
                                                key="field_tradespeopleEmail"
                                                field="email"
                                                fieldLabel="Email Address"
                                                fieldName="tradespeopleEmail"
                                                fieldValue={ tradespeopleEmail }
                                                fieldAction={ setTradespeopleEmail }
                                                fieldValidation={ [submitted, tradespeopleEmail, formFieldValidation(error, "name", tradespeopleName)] }
                                            />
                                            <Fields
                                                key="field_tradespeoplePhone"
                                                field="numeric"
                                                fieldLabel="Phone Number"
                                                fieldName="tradespeoplePhone"
                                                fieldValue={ tradespeoplePhone }
                                                fieldAction={ setTradespeoplePhone }
                                                fieldValidation={ [submitted, setTradespeoplePhone, formFieldValidation(error, "name", tradespeopleName)] }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="six columns">
                                    <div className="box white mh" style={ { height: '418px' } }>
                                        <h3>Would you recommend this tradesperson?</h3>
                                        <div className="form_row yes-no choice">
                                            <div className="field_container">
                                                <div className="expanded-list-wrapper yes-no">
                                                    <ul className="expanded-list">
                                                        <li className="expanded-list-row">
                                                            <div className={recommendCheckBox == true? "_checkbox _radio on ":"_checkbox _radio"}>
                                                                <input
                                                                    type="radio"
                                                                    name="invite_tradesperson_yes"
                                                                    required="required"
                                                                    value={ 1 }
                                                                    onClick={()=>setRecommendCheckBox(true)}                                                                    className="_checkbox_input ready"
                                                                    style={ {
                                                                        opacity: 1,
                                                                        position: "absolute",
                                                                        top: -1,
                                                                        right : -11                                                                 
                                                                    } }
                                                                />
                                                            </div>
                                                            <label htmlFor="contact_services_0">
                                                                <i className="fa fa-check text-green" aria-hidden="true" />
                                                                Yes
                                                            </label>
                                                        </li>
                                                        <li className="expanded-list-row">
                                                            <div className={recommendCheckBox == false ? "_checkbox _radio on":"_checkbox _radio"}>
                                                                <input
                                                                    type="radio"
                                                                    name="invite_tradesperson[recommendation]"
                                                                    required="required"
                                                                    value={ 0 }
                                                                    className="_checkbox_input ready"
                                                                    onClick={()=>setRecommendCheckBox(false)}   
                                                                    style={ {
                                                                        opacity: 0,
                                                                        position: "absolute",
                                                                        top: 0,
                                                                     
                                                                    } }
                                                                />
                                                            </div>
                                                            <label htmlFor="contact_services_0">
                                                                <i className="fa fa-times text-red" aria-hidden="true" />
                                                                No
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form_row text">
                                            <div className="field_container">
                                                <input
                                                type="text"
                                                name="invite_tradesperson[title]"
                                                placeholder="Recommendation title"
                                                />
                                            </div>
                                        </div>
                                        <div className="form_row very-short text">
                                            <div className="field_container">
                                                <textarea
                                                name="invite_tradesperson[review]"
                                                required="required"
                                                className="very-short"
                                                placeholder="Say something about your experience with this customer"
                                                defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="buttons tcenter">
                        <button type="submit" className="light big">
                            Save Details
                        </button>
                    </div>

                </form>
            </Container>
        </section>
        </React.StrictMode>
    )
}
