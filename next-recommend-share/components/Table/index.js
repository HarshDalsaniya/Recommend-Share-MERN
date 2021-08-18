import React from 'react'
import { connect } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';

export const index = (props) => {
    const paginationOption = {
        custom: true,
        totalSize: props.data.length,
        sizePerPage:20,
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
                            data={props.data}
                            columns={props.columns}
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
                                {paginationFilter(paginationProps).map((i) => {
                                    return (
                                        <li key={i}>
                                            <a className={paginationProps.page == i ? "active" : ""} onClick={handleNextPage(paginationProps, i - 1)}>{i}</a>
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
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
