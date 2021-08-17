import React from 'react'
import { connect } from 'react-redux'
import { Table } from "react-bootstrap"

export const index = (props) => {
    return (
        <table className="wrapped">
            <thead>
                <tr>
                    {props.th_td[0].th.map((th)=>
                        <th className={th.className}>{th.value}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {props.th_td[0].td.map((td)=>
                    <tr>
                        {td.map((row)=>
                            <td className={row.className}>
                                {row.value}
                            </td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
