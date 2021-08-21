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

    const paginationFilter = ({page, totalSize, paginationSize,sizePerPage}) =>{
        const pageBar=[];
        const start=page>4?
                        page>totalSize/20-4&&totalSize/20>7?
                        isNaN("'"+totalSize+"/20-7'")?Math.round(totalSize/20-7):totalSize/20-7
                            :page-3
                        :1;

        const end=  page>4||page>totalSize/20-4?
                        page>totalSize/20-4?
                        isNaN("'"+totalSize+"/20'")?Math.round(totalSize/20)+1:totalSize/20
                            :page+3
                    :totalSize/20>7?
                        paginationSize
                        :isNaN("'"+totalSize+"/20'")?Math.round(totalSize/20)+1:totalSize/20
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
                            keyField="name"
                            data={props.data}
                            columns={props.columns}
                            {...paginationTableProps}
                        />
                        {props.data.length>20?
                            <div className="contained pagination">
                                <ul>
                                    <li>
                                        <a className={paginationProps.page==1?"disabled":""} onClick={paginationProps.page!=1?handlePrevPage(paginationProps, paginationProps.page):null}>
                                            <i className="fa fa-arrow-left" aria-hidden="true" /> <span>Previous</span>
                                        </a>
                                    </li>
                                    {paginationFilter(paginationProps).map((i) => 
                                            <li key={i}>
                                                <a className={paginationProps.page == i ? "active" : ""} onClick={handleNextPage(paginationProps, i - 1)}>{i}</a>
                                            </li>
                                    )}
                                    <li>
                                        <a className={paginationProps.page==(isNaN("'"+paginationProps.totalSize+"/20'")?Math.round(paginationProps.totalSize/20)+1:paginationProps.totalSize/20)?"disabled":""} onClick={paginationProps.page==(isNaN("'"+paginationProps.totalSize+"/20'")?Math.round(paginationProps.totalSize/20)+1:paginationProps.totalSize/20)?handleNextPage(paginationProps, paginationProps.page):null}>
                                            <i className="fa fa-arrow-right" aria-hidden="true" /> <span>Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        :null}
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
