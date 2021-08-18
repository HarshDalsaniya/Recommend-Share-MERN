import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Router from 'next/router'
import Table from '../../components/Table'
import { FilterForm } from '../../components/Tradepeople/FilterForm'
import { searchBusiness } from '../../redux/treadspeople/action';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';

export const index = (props) => {
    const reState = useSelector(state => state);
    const { error, searchResult } = reState.tradePeople;
    const dispatch = useDispatch()
    const table = [{
        th: [
            {
                className: "",
                value: ""
            },
            {
                className: "",
                value: "Name"
            },
            {
                className: "",
                value: "Trade"
            },
            {
                className: "",
                value: "Distance"
            },
            {
                className: "",
                value: "Recommendations"
            },
            {
                className: "",
                value: ""
            }
        ],
        td: []
    }]
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
                return <>{<a href="/tradespeople/1st-cs"><strong>{cell}</strong></a>}</>
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
                return <>{<a href="/tradespeople/1st-cs" className="button small">{cell}</a>}</>
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
                action: "View",
            })
        })
    }
    const pageButtonRenderer = ({
        page,
        active,
        disable,
        title,
        onPageChange
      }) => {
        const handleClick = (e) => {
          e.preventDefault();
          onPageChange(page);
        };
        return (
                    <ul>
                        <li>
                            <a onClick={handleClick} className={active == true ? "active" : ""}>
                                {page == ">" || page == "<" ?
                                    <><i className={page == "<" ? "fa fa-arrow-left" : "fa fa-arrow-right"} aria-hidden="true" /><span>{page == "<" ? "Previous" : "Next"}</span></>
                                    : page}
                            </a>
                        </li>
                    </ul>
        );
    };
    // console.log(searchResult)
    const options = {
        pageButtonRenderer,
        hideSizePerPage: true,
        prePageText:"",
        sizePerPageList: [{
            text: '1', value: 1
        }, {
            text: '5', value: 5
        }, {
            text: 'All', value: data.length
        }]
    };
    const paginationOption = {
        custom: true,
        totalSize: data.length,
        sizePerPage:2,
        paginationSize:7
      };
    const handleNextPage = ({
        onPageChange
    },page) => () => {
        onPageChange(page + 1);
    }

    const handlePrevPage =  ({ 
        onPageChange 
    },page) => () => {
        onPageChange(page - 1);
    }

    const paginationFilter = ({page, totalSize, paginationSize}) =>{
        const pageBar=[];
        const start=page>4||page>totalSize/2-4?page>totalSize/2-4?totalSize/2-7:page-3:1;
        const end=page>4||page>totalSize/2-4?page>totalSize/2-4?totalSize/2:page+3:paginationSize
        console.log(totalSize/2-4)
        for(var i=start;i<=end;i++){
            pageBar.push(i)
        }
        
        return pageBar;
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
                            <PaginationProvider
                                pagination={paginationFactory(paginationOption)}
                            >
                                {
                                    ({
                                        paginationProps,
                                        paginationTableProps
                                    }) => (
                                        <div>
                                            <BootstrapTable
                                                keyField="id"
                                                data={data}
                                                columns={columns}
                                                {...paginationTableProps}
                                            />
                                                {/* {console.log(paginationProps.paginationSize)} */}
                                                <div className="contained pagination">
                                                    <ul>
                                                        <li>
                                                            <a onClick={handlePrevPage(paginationProps, paginationProps.page)}>
                                                                <i className="fa fa-arrow-left" aria-hidden="true" /> <span>Previous</span>
                                                            </a>
                                                        </li>
                                                        {console.log(paginationFilter(paginationProps))}
                                                        {paginationFilter(paginationProps).map((i) => {
                                                            return(
                                                            <li key={i}>
                                                                <a className={paginationProps.page==i?"active":""} onClick={handleNextPage(paginationProps,i-1)}>{i}</a>
                                                            </li>)
                                                        })}
                                                        <li>
                                                            <a onClick={handleNextPage(paginationProps, paginationProps.page)}>
                                                                <i className="fa fa-arrow-right" aria-hidden="true" /> <span>Next</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                ) 
                                    }
                            </PaginationProvider>
                            {/* <div className="contained pagination">
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
                            </div> */}
                            {/* <BootstrapTable
                                keyField="id"
                                data={data}
                                columns={columns}
                                pagination={paginationFactory(options)}
                                condensed
                            /> */}
                            {/* <Table 
                                th_td={table}
                            /> */}
                        </div>
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
