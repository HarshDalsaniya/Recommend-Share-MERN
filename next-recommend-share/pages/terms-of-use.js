import React from 'react'

import TermOfUse from '../components/Information/TermOfUse'

export default function terms_of_use(props) {
    return (
        <React.StrictMode>
            <React.Fragment>
                <div className="login-body">
                    <TermOfUse />
                </div>
            </React.Fragment>
        </React.StrictMode>
    )
}