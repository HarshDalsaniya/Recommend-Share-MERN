import React,{ useState, useEffect } from 'react'
import Router from "next/router"
import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import Fields from '../../components/Form-Fields/Fields';
import { formFieldValidation } from "../../services/formValidation"
import { useRouter } from 'next/router';
import { searchBusiness } from '../../redux/treadspeople/action';

export const FilterForm=(props)=>{
    const { query } = useRouter();
    const reState = useSelector(state => state);
    const dispatch =new useDispatch()
    const { error } = reState.authUser;
    const [name, setName] = useState(query.name);
    const [address_postcode, setAddress_postcode] = useState(query.postcode);
    const [tradespeopleTrade, setTradespeopleTrade] = useState(query.trade);
    const [email, setEmail] = useState(query.email);
    const [telephone, setTelephone] = useState(query.telephone);
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
    const allClear = () =>{
        setName("")
        setAddress_postcode("")
        setTradespeopleTrade("")
        setEmail("")
        setTelephone("")
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const search={
            name: name != ""?name:null, 
            email: email != ""?email:null, 
            telephone: telephone != ""?telephone:null, 
            trade: tradespeopleTrade != ""?tradespeopleTrade:null, 
            postcode: address_postcode != ""?address_postcode:null, 
            action: query.action && query.action != "undefined" && query.action !="" && (query.action =="recommend" || query.action =="warn") ? query.action : null
        }
        dispatch(searchBusiness(search))
        var path=`/tradespeople?`

        search.name != null ? path = path + "name=" + search.name : ""

        search.email != null ? search.name != null ? path = path + "&email=" + email : path = path + "email=" + email : ""

        search.telephone != null ? (search.name || search.email) != null ? path = path + "&telephone=" + search.telephone : path = path + "telephone=" + search.telephone : ""

        search.trade != null ? (search.name || search.email || search.telephone) != null ? path = path + "&trade=" + search.trade : path = path + "trade=" + search.trade : ""

        search.postcode != null ? (search.name || search.email || search.telephone || search.trade) != null ? path = path + "&postcode=" + search.postcode : path = path + "postcode=" + search.postcode : ""

        query.action != "undefined" && query.action != "" && (query.action == "recommend" || query.action == "warn") ? (search.name || search.email || search.telephone || search.tradespeopleTrade || search.address_postcode) != null? path = path + "&action=" + query.action : path = path + "action=" + query.action  : ""

        Router.push(path)
    }
    return (
        <form onSubmit={onSubmit}>
            {query.action!="recommend"&&query.action!="warn"?
            <Row className="px-2">
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
            :null}
            <Row className="px-2">
                <div className="four columns alpha">
                    <div className="form_row  text">
                        <Fields
                            field="text"
                            fieldLabel="Tradesperson / Business Name"
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
                    <div className="form_row text">
                        <Fields
                            field="numeric"
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
                <a className="button clear" onClick={()=>allClear()}>
                    <i className="fa fa-undo" aria-hidden="true" /> Reset
                </a>
                &nbsp;
                <button type="submit">
                    Search
                </button>
            </div>
        </form>
    )
}

export const CustomersSearch = (props) =>{

    const [surname, setSurname] = useState('');
    const [housenum, setHousenum] = useState('');
    const [postcode, setPostcode] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return(        
        <form>
            <Row style={{margin:"auto"}}>
                <div className="four columns alpha">
                    <div className="form_row  text">
                        <Fields
                                field="text"
                                fieldLabel="Customer's Surname"
                                fieldName="surname"
                                fieldValue={surname}
                                fieldAction={setSurname}
                                fieldValidation={submitted, surname}
                            />
                    </div>
                </div>
                <div className="four columns">
                    <div className="form_row  text">
                        <Fields
                            field="text"
                            fieldLabel="House Number / Name"
                            fieldName="housenum"
                            fieldValue={housenum}
                            fieldAction={setHousenum}
                            fieldValidation={submitted, housenum}
                        />
                    </div>
                </div>
                <div className="four columns">
                     <div className="form_row  text">
                        <Fields
                            field="text"
                            fieldLabel="Customer's Postcode"
                            fieldName="postcode"
                            fieldValue={postcode}
                            fieldAction={setPostcode}
                            fieldValidation={submitted, postcode}
                        />
                    </div>
                </div>
                
            </Row>
            <div className="buttons tright shallow">
                <a className="button clear" onClick={()=>allClear()}>
                    <i className="fa fa-undo" aria-hidden="true" /> Reset
                </a>
                &nbsp;
                <button type="submit">
                    Search
                </button>
            </div>
            <p className="tiny tcenter shallow">All fields are required.</p>
        </form>
        
    )
}

export default(FilterForm,CustomersSearch)