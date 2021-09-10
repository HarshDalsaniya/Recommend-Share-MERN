import React from 'react'

import Gdpr from '../components/Information/Gdpr'

export default function gdpr(props) {
    return (
        <React.StrictMode>
            <React.Fragment>
                <div className="login-body">
                    <Gdpr />
                </div>
            </React.Fragment>
        </React.StrictMode>
    )
}
