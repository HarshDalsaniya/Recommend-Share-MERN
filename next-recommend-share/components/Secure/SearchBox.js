import React,{ useState, useEffect  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Fields from '../../components/Form-Fields/Fields';
import { searchBusiness, tradOption } from '../../redux/treadspeople/action';
import { formFieldValidation } from "../../services/formValidation"

export const PositiveRecommendation = (props) => {
    const reState = useSelector(state => state);
    const { error } = reState.tradePeople;
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true)
        if(name!=""){
            dispatch(searchBusiness(name,"Positive"))
        }
    }
    return (
        <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="start-box positive-box">
                <div className="power-heading">
                    <i className="fas fa-thumbs-up" aria-hidden="true" />
                    <h3>Leave a Positive Recommendation</h3>
                </div>
                <p className="start-text">If you've had a great experience with a tradesperson, you can leave them a positive recommendation here.</p>
                <form onSubmit={onSubmit}>
                    <div className="start-customer-name">
                        <i className="fas fa-search" aria-hidden="true" />    
                        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Business Name" />
                    </div>
                    <div className="start-btn">
                        <button type="submit">Start</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export const NegativeRecommendation = (props) => {
    const reState = useSelector(state => state);
    const { error } = reState.authUser;
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    return (
        <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="start-box negative-box">
                <div className="power-heading">
                    <i className="fas fa-thumbs-down" aria-hidden="true" />
                    <h3>Leave a Negative Recommendation</h3>
                </div>
                <p className="start-text">If your experience with a tradesperson left something to be desired, you can leave them a negative recommendation here.</p>
                <form action="/tradespeople" className="dashboard-form shallow" method="get">
                    <div className="start-customer-name">
                        <i className="fas fa-search" aria-hidden="true" />
                        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Business Name" />
                    </div>
                    <div className="start-btn">
                        <button type="submit">Start</button>
                        <input type="hidden" name="action" defaultValue="warn" />
                    </div>
                </form>
            </div>
        </div>

    )
}

export const RecommendedTradesperson = (props) => {
    const reState = useSelector(state => state);
    const { error, tradeOptions } = reState.tradePeople;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(tradOption());
    }, [tradeOptions==null])
    tradeOptions.sort(function (a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
        }
        return 0;
    })
    return (
        <div className="col-lg-4 mb-3 mb-lg-0">
            <div className="start-box">
                <div className="search-box power-heading">
                    <img src="/assets/images/search-icon.png" />
                    <h3>Search a Recommended Tradesperson</h3>
                </div>
                <p className="start-text">If you're looking for a specific tradesperson in the Recommend &amp; Share community, you can search for them here.</p>
                <form action="/tradespeople" className="dashboard-form shallow" method="get">
                    <div className="start-customer-name">
                        <i className="fas fa-search" aria-hidden="true" />
                        <input type="text" name="search_filter[name]" placeholder="Business Name" />
                    </div>
                    <div className="start-customer-name">
                        <div className="_select ">
                            <select
                                name="trade"
                                className="_select_input ready"
                                defaultValue=""
                                style={{
                                    cursor: "pointer",
                                    position: "absolute",
                                    width: "99.9%",
                                    height: "100%",
                                    top: 0,
                                    right: 0,
                                }}
                            >
                                <option value="" disabled>Select a trade</option>
                                {tradeOptions.map((opt)=>{
                                    return <option key={"opt_"+opt.value} value={opt.value}>{opt.title}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="start-btn">
                        <button type="submit">Start</button>
                        <input type="hidden" name="search_filter[postcode]" defaultValue="M32BY" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default (PositiveRecommendation, NegativeRecommendation, RecommendedTradesperson)
