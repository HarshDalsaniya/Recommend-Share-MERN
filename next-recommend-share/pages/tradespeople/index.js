import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'
import { FilterForm } from '../../components/Tradepeople/FilterForm'
import { searchBusiness } from '../../redux/treadspeople/action';
import Link from 'next/link'
import Table from '../../components/Table';


export const index = (props) => {
    const reState = useSelector(state => state);
    const { error, searchResult } = reState.tradePeople;
    const dispatch = useDispatch()
    const data = []
    const columns = [
        {
            dataField: "image",
            text: "",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            formatter: (cell) => {
                return <>{<img src={`https://recommendandshare.com/media/cache/avatar_small/assets/images/${cell}`} alt="1ST CS" className="avatar" />}</>
            }
        },
        {
            dataField: "name",
            text: "Name",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            sort: true,
            formatter: (cell) => {
                return <>{<Link href="/tradespeople/"><a><strong>{cell}</strong></a></Link>}</>
            }
        },
        {
            dataField: "trade_name",
            text: "Trade",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            sort: true,
            formatter: (cell) => {
                return <>{<strong>{cell}</strong>}</>
            }
        },
        {
            dataField: "distance",
            text: "Distance",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            align: 'center',
            headerAlign: 'center',
            sort: true
        },
        {
            dataField: "recomendation",
            text: "Recommendations",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            align: 'center',
            headerAlign: 'center',
            sort: true,
            formatter: (cell) => {
                return <>{<strong>
                    <span className="received good empty">
                        <i className="fa fa-check-circle-o fa-lg" aria-hidden="true" /> {cell[0]}
                    </span>
                    <span className="received bad empty">
                        <i className="fa fa-times-circle-o fa-lg" aria-hidden="true" /> {cell[1]}
                    </span>
                </strong>
                }</>
            }
        },
        {
            dataField: "action",
            text: "",
            headerClasses: "bt_table_th",
            classes: "bt_table_td",
            align: 'center',
            headerAlign: 'center',
            formatter: (cell) => {
                return <>{<Link href=""><a className="button small">{cell}</a></Link>}</>
            }
        }
    ]
    useEffect(() => {
        dispatch(searchBusiness(Router.query.name, "Positive"))
    }, [])
    if (typeof searchResult != "undefined") {
        searchResult.map((value) => {
            data.push({
                image: value.image,
                name: value.name,
                trade_name: value.trade_name,
                distance: "-",
                recomendation: [0, 0],
                action:<Link href={'/secure/tradespeople/'+value.name.replace(/\s/g, "-")+'/recommend'}>Recommend</Link>
            })
        })
    }
    return (
        <section className="login-body content" style={{ marginTop: "5rem" }}>
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
                                data={data}
                                columns={columns}
                            />
                        </div>
                    </div>
                </div>
                <p className="tcenter semi-shallow">
                    Can't find a tradesperson to recommend? You can{" "}
                    <strong>
                        <Link href="/secure/tradespeople/invite?action=">
                        <a>invite one</a>
                        </Link>
                    </strong>{" "}
                    now.
                </p>
                <p className="tcenter ">
                    Are you a tradesperson? You can{" "}
                    <strong>
                        <Link href="/secure/tradespeople/create">
                        <a >add a business</a>
                        </Link>
                    </strong>{" "}
                    now for free.
                </p>
                <p className="tcenter">
                    <Link href="/secure/tradespeople/invite?action=">
                    <a className="button light">
                        Invite Tradesperson
                    </a>
                    </Link>
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
