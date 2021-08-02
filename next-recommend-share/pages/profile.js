import React from 'react'
import { connect } from 'react-redux'
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap"
import { EditProfile } from '../components/Profile/EditProfile'

export const profile = (props) => {
    return (
        <div>
            <EditProfile />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(profile)
