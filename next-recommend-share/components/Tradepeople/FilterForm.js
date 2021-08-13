import React,{ useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import Fields from '../../components/Form-Fields/Fields';
import { formFieldValidation } from "../../services/formValidation"

export const FilterForm = (props) => {
    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const [name, setName] = useState('');
    const [address_postcode, setAddress_postcode] = useState('');
    const [tradespeopleTrade, setTradespeopleTrade] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [submitted, setSubmitted] = useState(false);
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

    return (
        <form>
            <Row>
                <div className="four columns alpha">
                    <div className="form_row  choice">
                        <Fields
                            field="select"
                            fieldLabel="Trade Required"
                            fieldName="tradespeopleTrade"
                            fieldOption={selectTreadOption}
                            fieldAction={setTradespeopleTrade}
                            fieldValidation={[submitted, tradespeopleTrade, formFieldValidation(error, "tradespeopleTrade", tradespeopleTrade)]}
                        />
                    </div>
                </div>
                <div className="four columns">
                    <div className="form_row  text">
                        <Fields
                            field="text"
                            fieldLabel="Your Postcode"
                            fieldName="address_postcode"
                            fieldValue={address_postcode}
                            fieldAction={setAddress_postcode}
                            fieldValidation={[submitted, address_postcode, formFieldValidation(error, "address_postcode", address_postcode)]}
                        />
                    </div>
                </div>
                <div className="four columns not-mobile">
                    <div className="form_row">
                        <label>&nbsp;</label>
                        <p>Search recommended tradespeople near your address.</p>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="four columns alpha">
                    <div className="form_row  text">
                        <Fields
                            field="text"
                            fieldLabel="radesperson / Business Name"
                            fieldName="name"
                            fieldValue={name}
                            fieldAction={setName}
                            fieldValidation={[submitted, name, formFieldValidation(error, "name", name)]}
                        />
                    </div>
                </div>
                <div className="four columns">
                    <div className="form_row  text">
                        <Fields
                            field="email"
                            fieldLabel="Email Address"
                            fieldName="email"
                            fieldValue={email}
                            fieldAction={setEmail}
                            fieldValidation={[submitted, email, formFieldValidation(error, "email", email)]}
                        />
                    </div>
                </div>
                <div className="four columns">
                    <div className="form_row  text">
                        <label htmlFor="search_filter_telephone">Phone Number</label>
                        <div className="field_container">
                            <input type="text" id="search_filter_telephone" name="search_filter[telephone]" />
                        </div>
                        <Fields
                            field="number"
                            fieldLabel="Phone Number"
                            fieldName="telephone"
                            fieldValue={telephone}
                            fieldAction={setTelephone}
                            fieldValidation={[submitted, telephone, formFieldValidation(error, "telephone", telephone)]}
                        />
                    </div>
                </div>
            </Row>
            <div className="buttons tright shallow">
                <a href="/tradespeople" className="button clear">
                    <i className="fa fa-undo" aria-hidden="true" /> Reset
                </a>{" "}
                &nbsp;
                <button type="submit" className>
                    Search
                </button>
            </div>
        </form>
    )
}

export default FilterForm
