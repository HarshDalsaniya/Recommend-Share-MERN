import React,{useState, useEffect} from 'react'
import { connect, useSelector } from 'react-redux'
import Table from '../../components/Table'
import { FilterForm } from '../../components/Tradepeople/FilterForm'
import Link from 'next/link'

export const index = (props) => {
    const table = [{
        th:[
            {
                className:"",
                value:""
            },
            {
                className:"",
                value:"Name"
            },
            {
                className:"",
                value:"Trade"
            },
            {
                className:"",
                value:"Distance"
            },
            {
                className:"",
                value:"Recommendations"
            },
            {
                className:"",
                value:""
            }
        ],
        td:[
            {
                value:<img src="https://recommendandshare.com/media/cache/avatar_small/assets/images/generic-avatar.png" alt="1ST CS" className="avatar" />,
                className:"avatar"
            },
            {
                value:<a href="/tradespeople/1st-cs"><strong>1ST CS</strong></a>,
                className:""
            },
            {
                value:<strong>Traditional Craftsman</strong>,
                className:""
            },
            {
                value:"-",
                className:"tcenter"
            },
            {
                value:<strong>
                            <span className="received good empty">
                                <i className="fa fa-check-circle-o fa-lg" aria-hidden="true" /> 0
                            </span>
                            <span className="received bad empty">
                                <i className="fa fa-times-circle-o fa-lg" aria-hidden="true" /> 0
                            </span>
                        </strong>,
                className:"tcenter"
            },
            {
                value:<Link href="" className="button small">
                            View
                            </Link>,
                        
                className:"actions tright"
            },
        ]
    }]
    
    return (
        <section className="login-body content" style={{marginTop: "5rem"}}>
            <div className="container">
                <div className="twelve columns alpha">
                    <div className="contained">
                        <h1> Search Recommended Tradespeople</h1>
                        <div className="box white">
                            <FilterForm />
                        </div>
                    </div>
                    <div className="contained">
                        <div className="table-container ">
                            <Table 
                                th_td={table}
                            />
                        </div>
                    </div>
                    <div className="contained pagination">
                        <ul>
                            <li>
                                <a href="#" className="disabled">
                                    <i className="fa fa-arrow-left" aria-hidden="true" /> <span>Previous</span>
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=1" className="active">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=2" className>
                                    2
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=3" className>
                                    3
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=4" className>
                                    4
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=5" className>
                                    5
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=6" className>
                                    6
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=7" className>
                                    7
                                </a>
                            </li>
                            <li>
                                <a href="/tradespeople?page=2" className>
                                    <i className="fa fa-arrow-right" aria-hidden="true" /> <span>Next</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="tcenter semi-shallow">
                    Can't find a tradesperson to recommend? You can{" "}
                    <strong>
                        <a href="/secure/tradespeople/invite?action=">invite one</a>
                    </strong>{" "}
                    now.
                </p>
                <p className="tcenter ">
                    Are you a tradesperson? You can{" "}
                    <strong>
                        <a href="/secure/tradespeople/create">add a business</a>
                    </strong>{" "}
                    now for free.
                </p>
                <p className="tcenter">
                    <a href="/secure/tradespeople/invite?action=" className="button light">
                        Invite Tradesperson
                    </a>
                </p>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
