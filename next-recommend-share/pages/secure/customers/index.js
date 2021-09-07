import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import CustomersSearch from '../../../components/TradePeople/FilterForm'
import Table from '../../../components/Table';

export const index = (props) => { 
    const data = []
    const columns =[
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
            dataField: "address",
            text: "ADDRESS",
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

        }
    ]
    return (
       <>
       <section className="content login-body" style={{marginTop:"5rem"}}>
           <Container>
               <div className="twelve columns alpha">
                   <div className="contained">
                        <h1>Search Recommended Customers </h1>
                        <div className="box white">
                            <CustomersSearch/>
                        </div>
                   </div>

                   <div className="contained">
                       <div className="table-container">
                           <Table 
                             data={data}
                             columns={columns}
                           />
                       </div>
                   </div>
               </div>
           </Container>

       </section>
       </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
