import React from 'react'
import { connect } from 'react-redux'
import { Table } from "react-bootstrap"

export const index = (props) => {
    console.log(props.th_td[0].td)
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
                <tr>
                    {props.th_td[0].td.map((td)=>
                        <td className={td.className}>
                            {td.value}
                        </td>
                    )}
                </tr>

            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
